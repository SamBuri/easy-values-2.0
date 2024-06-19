<template>
  <v-card class="mx-auto mt-4 pa-1">
    <v-card-title>
      <span class="headline">{{ title }}</span>
    </v-card-title>

    <v-card-text>
      <v-container fluid>
        <v-row>
          <v-col cols="12" sm="6" md="6">
            <v-file-input
              :label="fileLable"
              prepend-icon="mdi-microsoft-excel"
              :value="value"
              show-size
              @input="handleInput($event)"
              @change="onFileChange"
              dense
            >
              <template v-slot:selection="{ text }">
                <v-chip small label color="primary">
                  {{ text }}
                </v-chip>
              </template>
              ></v-file-input
            >
          </v-col>
          <v-col cols="12" sm="3" md="3">
            <v-text-field label="Sheet Name" v-model="sheetName"></v-text-field>
          </v-col>

          <v-col cols="12" sm="1" md="1">
            <v-text-field label="Header" v-model="header"></v-text-field>
          </v-col>

          <v-col cols="12" sm="1" md="1">
            <v-btn text color="blue darken-1"
            @click="loadData"
            :loading="loading"
            > Import</v-btn>
          </v-col>

          <v-col cols="12" sm="1" md="1" v-if="valid">
            <!-- <v-btn text color="blue darken-1" @click="exportFile"> Export</v-btn> -->
            <export-excel
              :data="data"
              :columns="columns"
              :file-name="title"
              :file-type="'xlsx'"
              :sheet-name="sheetName"
            >
              <!-- Download -->
              <v-btn text color="blue darken-1"> Export</v-btn>
            </export-excel>
          </v-col>

          <v-col>
            <v-data-table
              :headers="headers"
              :loading="loading"
              :items="data"
              cols="12"
              sm="12"
              md="12"
              class="elevation-1"
              hide-default-footer
              disable-pagination
              dense
            >
            </v-data-table>
          </v-col>
        </v-row>
      </v-container>

      <!-- <vue-excel-xlsx
        :data="data"
        :columns="columns"
        :file-name="'filename'"
        :file-type="'xlsx'"
        :sheet-name="'sheetname'"
        >
        Download
    </vue-excel-xlsx> -->
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn
        color="blue darken-1"
        text
        @click="saveData"
        :loading="$store.state.loading"
        :disabled="!valid"
      >
        Save
      </v-btn>
    </v-card-actions>
    <snack-bar @reset="reset" />
  </v-card>
</template>

<script>
import * as XLSX from 'xlsx/xlsx.mjs';
import { saveAs } from "file-saver";
import Excel from "@grapecity/spread-excelio";
import SnackBar from "./SnackBar.vue";
export default {
  name: "SDataFileInput",
  props: ["value", "label", "title", "headers", "columns", "data", "valid", 'loading'],
  components: { SnackBar },

  data: () => ({
    sheetName: "Sheet1",
    header: 1,
    itemsPerPage: 20,
    file: null,
  }),
  computed: {
    fileLable() {
      return this.label ? this.label : "Select File ";
    },
  },
  watch: {
    value() {
      //   if (this.value) {
      //     this.photoUrl = URL.createObjectURL(this.value);
      //   } else {
      //     this.photoUrl = null;
      //   }
    },
  },
  methods: {
    onFileChange(e) {
      this.$emit("input", e);
      this.file = e;
    },
    handleInput(value) {
      this.$emit("input", value);
    },

    loadData() {
      this.$emit("loadData", {
        file: this.file,
        sheetName: this.sheetName,
        header: this.header,
      });
    },

    getRowsCols(data, sheetName) {
      const rows = XLSX.utils.sheet_to_json(data[sheetName], { header: 1 });
      let cols = [];
      for (let row of rows) {
        const keys = Object.keys(row);

        if (keys.length > cols.length) {
          cols = keys.map((key) => {
            return {
              field: key,
              label: XLSX.utils.encode_col(+key),
              // display: display(key),
            };
          });
        }
      }
      return { rows: rows, cols: cols };
    },

    // getRowsColsFromRows(rows) {
    //   let cols = [];

    //   for (let row of rows) {
    //     const keys = Object.keys(row);

    //     if (keys.length > cols.length) {
    //       cols = keys.map((key) => {
    //         return {
    //           text: key,
    //           value: key,

    //           // label:  XLSX.utils.encode_col(+key),
    //           // display: display(key),
    //         };
    //       });
    //     }
    //   }

    //   return { rows: rows, cols: cols };
    // },

    saveData() {
      this.$emit("saveData");
    },
    reset() {
      if (this.$store.state.results.success === true) {
        this.$emit("reset");
      }
    },

    exportFile() {
      // var fileName = $("#exportFileName").val();
      // if (fileName.substr(-5, 5) !== '.xlsx') {
      //     fileName += '.xlsx';
      // }
      var json = JSON.stringify(this.data);
      const excelIO = new Excel.IO();

      let fileName = this.title + ".xlsx";

      excelIO.save(
        json,
        function (blob) {
          saveAs(blob, fileName);
        },
        function (e) {
          if (e.errorCode === 1) {
            alert(e.errorMessage);
          }
        }
      );
    },

    // exportFile(type) {
    //   const wb = utils.book_new();

    //   sheets.value.forEach((sheet) => {
    //     utils.book_append_sheet(wb, workBook.value[sheet], sheet);
    //   });

    //   writeFile(wb, `sheet.${type}`);
    // },

    // selectSheet(sheet) {
    //   const { rows: newRows, cols: newCols } = getRowsCols(
    //     workBook.value,
    //     sheet
    //   );

    //   resetCell();

    //   rows.value = newRows;
    //   columns.value = newCols;
    //   currSheet.value = sheet;
    // },

    // resetCell() {
    //   this.cell = 0;
    // },
  },
};
</script>
