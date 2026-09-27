<script setup>
import { computed } from 'vue';
import { SDataImportWizard } from 'saburi-vue-utils';
import { useAuthStore } from '@/store/authstore';
import { onboardingModuleMapping, importActions } from './DataImportMapping';

const authStore = useAuthStore();

const hasAnyImportPermission = computed(() => {
  if (!authStore) return true;
  if (authStore.hasRole?.('dataimport') || authStore.hasAuthority?.('dataimport')) return true;
  return importActions.some(
    (action) => authStore.hasRole?.(action) || authStore.hasAuthority?.(action)
  );
});
</script>

<template>
  <div v-if="!hasAnyImportPermission" class="pa-4">
    <v-alert
      type="warning"
      variant="tonal"
      title="Access Restricted"
      text="You do not have authority to import any master data. Please contact your administrator."
    />
  </div>
  <s-data-import-wizard 
    v-else
    title="Master Data Import Wizard" 
    template-url="/templates/master_template.xlsx" 
    :module-mapping="onboardingModuleMapping" 
  />
</template>
