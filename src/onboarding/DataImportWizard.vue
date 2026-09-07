<script setup>
import { SDataImportWizard } from 'saburi-vue-utils';

// Mapping of recognized Tab Names to backend endpoints and metadata
const onboardingModuleMapping = {
  'Financial Periods': { endpoint: 'financial-periods/import', order: 0.5 },
  'Account Categories': { endpoint: 'account-categories/import', order: 1 },
  'Accounts': { endpoint: 'accounts/import', order: 2 },
  'Bank Accounts': { endpoint: 'bank-accounts/import', order: 2.1 },
  'Share Types': { endpoint: 'share-types/import', order: 4 },
  'Lookup Item Categories': { endpoint: 'item-categories/import', order: 5.1 },
  'Items': { endpoint: 'items/import', order: 5.2 },
  'Customer Groups': { endpoint: 'customer-groups/import', order: 5.3 },
  'Customer Group Item Categories': { endpoint: 'customer-group-item-categories/import', order: 5.4 },
  'Creditor Groups': { endpoint: 'creditor-groups/import', order: 5.5 },
  'Profiles': { endpoint: 'profiles/import', order: 5.6 },
  'Shareholders': { endpoint: 'shareholders/import', order: 5.7 },
  'Creditor Item Categories': { endpoint: 'creditor-item-categories/import', order: 6 },
  'Creditors': { endpoint: 'creditors/import', order: 6.1 },
  'Shares': { endpoint: 'shareholder-shares/import', order: 7 },
  'Investments': { endpoint: 'investments/import', order: 8 },
  'Loan Products': { endpoint: 'loan-products/import', order: 9 },
  'Loan Product Charges': { endpoint: 'loan-product-charges/import', order: 10 },
  'Loans': { endpoint: 'loans/import', order: 11 },
  'Loan Bills': { endpoint: 'loan-bills/import', order: 11.1 },
  'Bills': { endpoint: 'bills/import', order: 12 },
  'Payments': { endpoint: 'payments/import', order: 13 },
  'Receipts': { endpoint: 'receipts/import', order: 13.1 },
  'Loan Payments': { endpoint: 'loan-bill-receipts/import', order: 14 },
};
</script>

<template>
  <s-data-import-wizard 
    title="Master Data Import Wizard" 
    template-url="/templates/master_template.xlsx" 
    :module-mapping="onboardingModuleMapping" 
  />
</template>
