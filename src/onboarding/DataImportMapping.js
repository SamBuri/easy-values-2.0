import { navUtils } from 'saburi-vue-utils';

export const onboardingModuleMapping = {
  'Financial Periods': { endpoint: 'financial-periods/import', order: 0.5, actions: navUtils.importRoles('financial-periods') },
  'Account Categories': { endpoint: 'account-categories/import', order: 1, actions: navUtils.importRoles('account-categories') },
  'Accounts': { endpoint: 'accounts/import', order: 2, actions: navUtils.importRoles('accounts') },
  'Bank Accounts': { endpoint: 'bank-accounts/import', order: 2.1, actions: navUtils.importRoles('bank-accounts') },
  'Share Types': { endpoint: 'share-types/import', order: 4, actions: navUtils.importRoles('share-types') },
  'Lookup Item Categories': { endpoint: 'item-categories/import', order: 5.1, actions: navUtils.importRoles('item-categories') },
  'Items': { endpoint: 'items/import', order: 5.2, actions: navUtils.importRoles('items') },
  'Customer Groups': { endpoint: 'customer-groups/import', order: 5.3, actions: navUtils.importRoles('customer-groups') },
  'Customer Group Item Categories': { endpoint: 'customer-group-item-categories/import', order: 5.4, actions: navUtils.importRoles('customer-group-item-categories') },
  'Creditor Groups': { endpoint: 'creditor-groups/import', order: 5.5, actions: navUtils.importRoles('creditor-groups') },
  'Profiles': { endpoint: 'profiles/import', order: 5.6, actions: navUtils.importRoles('profiles') },
  'Shareholders': { endpoint: 'shareholders/import', order: 5.7, actions: navUtils.importRoles('shareholders') },
  'Creditor Item Categories': { endpoint: 'creditor-item-categories/import', order: 6, actions: navUtils.importRoles('creditor-item-categories') },
  'Creditors': { endpoint: 'creditors/import', order: 6.1, actions: navUtils.importRoles('creditors') },
  'Shares': { endpoint: 'shareholder-shares/import', order: 7, actions: navUtils.importRoles('shareholder-shares') },
  'Investments': { endpoint: 'investments/import', order: 8, actions: navUtils.importRoles('investments') },
  'Loan Products': { endpoint: 'loan-products/import', order: 9, actions: navUtils.importRoles('loan-products') },
  'Loan Product Charges': { endpoint: 'loan-product-charges/import', order: 10, actions: navUtils.importRoles('loan-product-charges') },
  'Loans': { endpoint: 'loans/import', order: 11, actions: navUtils.importRoles('loans') },
  'Loan Bills': { endpoint: 'loan-bills/import', order: 11.1, actions: navUtils.importRoles('loan-bills') },
  'Bills': { endpoint: 'bills/import', order: 12, actions: navUtils.importRoles('bills') },
  'Payments': { endpoint: 'payments/import', order: 13, actions: navUtils.importRoles('payments') },
  'Receipts': { endpoint: 'receipts/import', order: 13.1, actions: navUtils.importRoles('receipts') },
  'Loan Payments': { endpoint: 'loan-bill-receipts/import', order: 14, actions: navUtils.importRoles('loan-bill-receipts') },
};

export const importActions = Array.from(
  new Set(Object.values(onboardingModuleMapping).flatMap((item) => item.actions))
);
