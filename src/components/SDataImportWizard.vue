<script setup>
import { ref } from 'vue';
import { defineRootStore } from "@/root/RootStore";
import * as XLSX from 'xlsx';

const props = defineProps({
  title: {
    type: String,
    default: "Master Data Import Wizard"
  },
  templateUrl: {
    type: String,
    default: "/templates/master_template.xlsx"
  },
  moduleMapping: {
    type: Object,
    required: true
  }
});

const rootStore = defineRootStore();

const file = ref(null);
const workbook = ref(null);
const recognizedTabs = ref([]); // List of { name, data, status, results }
const activeTab = ref(0);
const loading = ref(false);
const processing = ref(false);

const onFileChange = async (e) => {
  const selectedFile = e.target.files[0];
  if (!selectedFile) return;

  file.value = selectedFile;
  loading.value = true;
  recognizedTabs.value = [];

  try {
    const data = await selectedFile.arrayBuffer();
    const wb = XLSX.read(data);
    workbook.value = wb;

    const tabs = [];
    wb.SheetNames.forEach(sheetName => {
      if (props.moduleMapping[sheetName]) {
        const sheet = wb.Sheets[sheetName];
        const jsonData = XLSX.utils.sheet_to_json(sheet);
        tabs.push({
          name: sheetName,
          data: jsonData,
          status: 'pending',
          results: null,
          order: props.moduleMapping[sheetName].order
        });
      }
    });

    // Sort by logical dependency order
    recognizedTabs.value = tabs.sort((a, b) => a.order - b.order);
    if (recognizedTabs.value.length > 0) {
      activeTab.value = 0;
    } else {
      rootStore.showError("No recognized tabs found in the workbook.");
    }
  } catch (error) {
    rootStore.showError("Failed to read Excel file: " + error.message);
  } finally {
    loading.value = false;
  }
};

const importTab = async (tab, index) => {
  if (!tab.data || tab.data.length === 0) return;

  processing.value = true;
  tab.status = 'processing';

  const dataToExport = tab.data.map(({ _errorMessage, ...rest }) => rest);
  const ws = XLSX.utils.json_to_sheet(dataToExport);
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, tab.name);
  const wbout = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
  const importFile = new File([wbout], `Import_${tab.name.replace(/\s+/g, '_')}.xlsx`, { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });

  const formData = new FormData();
  formData.append('file', importFile);
  formData.append('sheetName', tab.name);

  try {
    const request = { path: props.moduleMapping[tab.name].endpoint, body: formData };
    const response = await rootStore.importData(request, false);
    tab.results = response;
    tab.status = tab.results.failed === 0 ? 'success' : 'warning';

    if (tab.results.errors && tab.results.errors.length > 0) {
      const failedRows = [];
      tab.results.errors.forEach(err => {
        const errIndex = err.rowNumber - 2;
        if (tab.data[errIndex]) {
          failedRows.push({ ...tab.data[errIndex], _errorMessage: err.errorMessage });
        }
      });
      tab.data = failedRows;
      rootStore.showError(`Import finished for ${tab.name} with ${tab.results.failed} errors. Please correct them.`);
    } else if (tab.results.failed === 0) {
      tab.data = []; // Clear successful rows
      rootStore.showSuccess(`${tab.name} imported successfully!`);

      // Auto-advance to next tab
      if (index + 1 < recognizedTabs.value.length) {
        activeTab.value = index + 1;
      }
    }
  } catch (e) {
    tab.status = 'error';
    tab.results = { successful: 0, failed: tab.data.length, errors: [{ rowNumber: '-', externalReference: '-', errorMessage: e.message }] };
    rootStore.showError(`Import failed for ${tab.name}: ` + e.message);
  } finally {
    processing.value = false;
  }
};

const exportFailed = (tab) => {
  if (!tab.data || tab.data.length === 0) return;
  const dataToExport = tab.data.map(({ _errorMessage, ...rest }) => rest);
  const ws = XLSX.utils.json_to_sheet(dataToExport);
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, tab.name);
  XLSX.writeFile(wb, `Failed_${tab.name.replace(/\s+/g, '_')}.xlsx`);
};

const getTabHeaders = (data) => {
  if (!data || data.length === 0) return [];
  const headers = Object.keys(data[0])
    .filter(key => key !== '_errorMessage')
    .map(key => ({ title: key, key: key }));

  // Add error message as the first column if present
  if (data[0]._errorMessage !== undefined) {
    headers.unshift({ title: 'Error Reason', key: '_errorMessage', width: '250px' });
  }
  return headers;
};

</script>

<template>
  <v-container>
    <v-card>
      <v-card-title class="bg-primary text-white d-flex align-center">
        <span>{{ title }}</span>
        <v-spacer />
        <v-btn color="white" variant="outlined" :href="templateUrl" target="_blank" prepend-icon="mdi-download" size="small">
          Download Master Template
        </v-btn>
      </v-card-title>

      <v-card-text class="mt-4">
        <p class="mb-4 text-body-1">
          Upload a single Excel workbook containing multiple tabs. The wizard will automatically detect recognized tabs and process them sequentially.
        </p>

        <v-file-input
          label="Upload Master workbook (.xlsx)"
          accept=".xlsx"
          variant="outlined"
          prepend-icon="mdi-file-excel"
          @change="onFileChange"
          :loading="loading"
          :disabled="processing"
          clearable
        />

        <div v-if="recognizedTabs.length > 0" class="mt-6">
          <div class="d-flex align-center mb-4">
            <h3 class="text-h6">Recognized Tabs ({{ recognizedTabs.length }})</h3>
          </div>

          <v-tabs v-model="activeTab" bg-color="grey-lighten-4">
            <v-tab v-for="(tab, index) in recognizedTabs" :key="index" :value="index">
              <v-icon start :color="tab.status === 'success' ? 'success' : tab.status === 'warning' ? 'warning' : tab.status === 'error' ? 'error' : ''">
                {{ tab.status === 'success' ? 'mdi-check-circle' : tab.status === 'processing' ? 'mdi-sync' : 'mdi-table' }}
              </v-icon>
              {{ tab.name }}
            </v-tab>
          </v-tabs>

          <v-window v-model="activeTab" class="mt-4">
            <v-window-item v-for="(tab, index) in recognizedTabs" :key="index" :value="index">

              <!-- Action Button if not processed yet -->
              <div v-if="!tab.results && tab.data.length > 0" class="mb-4">
                <v-btn color="primary" @click="importTab(tab, index)" :loading="processing" size="large" prepend-icon="mdi-play">
                  Import {{ tab.name }}
                </v-btn>
              </div>

              <!-- Results Summary if processed -->
              <div v-if="tab.results" class="d-flex align-center mb-4">
                <v-alert
                  :type="tab.results.failed === 0 ? 'success' : 'warning'"
                  variant="tonal"
                  class="flex-grow-1 mr-4"
                  density="compact"
                >
                  <strong>{{ tab.name }} Results:</strong>
                  Successfully imported: {{ tab.results.successful }} | Failed: {{ tab.results.failed }}
                </v-alert>
                <v-btn v-if="tab.data.length > 0" color="info" variant="outlined" class="mr-2" @click="exportFailed(tab)" prepend-icon="mdi-export" :disabled="processing">
                  Export to Excel
                </v-btn>
                <v-btn v-if="tab.data.length > 0" color="success" @click="importTab(tab, index)" prepend-icon="mdi-refresh" :loading="processing">
                  Retry Failed Rows
                </v-btn>
              </div>

              <v-tabs v-model="tab.subTab" class="mb-2">
                <v-tab value="preview">Data Correction & Preview</v-tab>
                <v-tab value="errors" v-if="tab.results && tab.results.errors.length > 0" color="error">Last Error List ({{ tab.results.errors.length }})</v-tab>
              </v-tabs>

              <v-window v-model="tab.subTab">
                <v-window-item value="preview">
                  <v-data-table
                    :headers="getTabHeaders(tab.data)"
                    :items="tab.data"
                    class="elevation-1 border"
                    density="compact"
                    :items-per-page="10"
                  >
                    <!-- Dynamic slots for inline editing -->
                    <template v-for="header in getTabHeaders(tab.data).filter(h => h.key !== '_errorMessage')" v-slot:[`item.${header.key}`]="{ item }">
                      <v-text-field
                        v-model="item[header.key]"
                        variant="plain"
                        density="compact"
                        hide-details
                        class="edit-field"
                      />
                    </template>

                    <!-- Special formatting for Error Reason -->
                    <template v-slot:[`item._errorMessage`]="{ item }">
                      <span class="text-error text-caption">{{ item._errorMessage }}</span>
                    </template>
                  </v-data-table>
                </v-window-item>

                <v-window-item value="errors" v-if="tab.results">
                   <v-table class="elevation-1 border">
                    <thead>
                      <tr class="bg-error-lighten-5">
                        <th class="text-left">Row</th>
                        <th class="text-left">Ext. Ref</th>
                        <th class="text-left">Error Message</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="err in tab.results.errors" :key="err.rowNumber">
                        <td>{{ err.rowNumber }}</td>
                        <td>{{ err.externalReference }}</td>
                        <td class="text-error">{{ err.errorMessage }}</td>
                      </tr>
                    </tbody>
                  </v-table>
                </v-window-item>
              </v-window>

            </v-window-item>
          </v-window>
        </div>
      </v-card-text>
      <snack-bar/>
    </v-card>
  </v-container>
</template>

<style scoped>
.v-tab--selected {
  font-weight: bold;
}
.edit-field :deep(input) {
  padding: 4px 0;
  font-size: 0.875rem;
}
.edit-field :deep(.v-field__input) {
  min-height: 32px;
}
</style>
