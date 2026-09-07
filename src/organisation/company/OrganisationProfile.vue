<script setup>
import { computed } from 'vue';
import CompanyEditor from './Company.vue';
import { defineBranchStore } from '../branch/BranchStore';

const branchStore = defineBranchStore();
const currentCompany = computed(() => branchStore.currentUserCompany || {});
</script>

<template>
  <v-container class="py-6">
    <v-row justify="center">
      <v-col cols="12" md="11" lg="10">
        <v-card class="elevation-2 rounded-xl overflow-hidden mb-6">
          <!-- Card Header Banner -->
          <v-sheet color="primary" class="pa-6 text-white">
            <div class="d-flex align-center">
              <v-avatar color="white" size="64" class="mr-4 elevation-2">
                <v-icon size="36" color="primary">mdi-office-building-cog</v-icon>
              </v-avatar>
              <div>
                <h2 class="text-h5 font-weight-bold mb-1">
                  {{ currentCompany.companyName || 'Organisation Profile' }}
                </h2>
                <div class="d-flex align-center flex-wrap ga-2">
                  <v-chip v-if="currentCompany.organisationType" size="small" color="white" variant="tonal" class="font-weight-medium">
                    <v-icon start size="14">mdi-domain</v-icon>
                    {{ currentCompany.organisationType }}
                  </v-chip>
                  <v-chip v-if="currentCompany.id" size="small" color="white" variant="tonal" class="font-weight-medium">
                    <v-icon start size="14">mdi-identifier</v-icon>
                    Code: {{ currentCompany.id }}
                  </v-chip>
                </div>
              </div>
            </div>
          </v-sheet>

          <!-- Card Content Body -->
          <v-card-text class="pa-6">
            <CompanyEditor :company-id="currentCompany.id" />
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
