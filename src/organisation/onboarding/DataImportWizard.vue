<script setup>
import SDataImportWizard from '@/components/SDataImportWizard.vue';

// Mapping of recognized Tab Names to backend endpoints and metadata
const onboardingModuleMapping = {
  'Account Categories': { endpoint: '/accountcategories/import', order: 1 },
  'Accounts': { endpoint: '/accounts/import', order: 2 },
  'Profiles': { endpoint: '/profiles/import', order: 3 },
  'Share Types': { endpoint: '/sharetypes/import', order: 4 },
  'Shareholders': { endpoint: '/shareholders/import', order: 5 },
  'Item Categories': { endpoint: '/creditoritemcategories/import', order: 6 },
  'Shares': { endpoint: '/shareholdershares/import', order: 7 },
  'Investments': { endpoint: '/investments/import', order: 8 },
  'Loan Products': { endpoint: '/loanproducts/import', order: 9 },
  'Loan Product Charges': { endpoint: '/loanproductcharges/import', order: 10 },
  'Loans': { endpoint: '/loans/import', order: 11 },
  'Bills': { endpoint: '/bills/import', order: 12 },
  'Payments': { endpoint: '/payments/import', order: 13 },
  'Loan Payments': { endpoint: '/loanbillreceipts/import', order: 14 },
};
</script>

<template>
  <s-data-import-wizard 
    title="Master Data Import Wizard" 
    template-url="/templates/master_template.xlsx" 
    :module-mapping="onboardingModuleMapping" 
  />
</template>
