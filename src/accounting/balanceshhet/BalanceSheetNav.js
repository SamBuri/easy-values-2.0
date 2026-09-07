import BalanceSheet from "./BalanceSheet.vue";
import funcs from "../../utils/funcs";
import { navUtils } from 'saburi-vue-utils';

const balanceSheetNav = {
  // route: {
  //   path: "/balancesheet",
  //   name: "balancesheet",
  //   component: BalanceSheet,
  //   meta: { auth: true },
  // },
  route: navUtils.viewRoute('balancesheet', BalanceSheet, true),

  menu: {
    id: "accounting.balancesheet",
    title: "Balance Sheet",
    to: { name: "balancesheet" },
    icon: "mdi-chart-bar",
    requires: ['financial_reports_view'],
  },

  headers: [
    { title: "Account Type", key: "accountType" },
    { title: "Account Category", key: "categoryName" },
    { title: "accountName", key: "accountName" },
    { title: "Amount", key: "balance", isNumeric: true },
  ],

  filter(accountType) {
    return (
      accountType === "Asset" ||
      accountType === "Liability" ||
      accountType === "Equity"
    );
  },

  calBalance(accounts) {
    let totalCredits = 0;
    let totalDebits = 0;

    accounts.forEach((account) => {
      if (account.accountType === "Asset") {
        totalDebits += account.balance;
      } else if (
        account.accountType === "Liability" ||
        account.accountType === "Equity"
      ) {
        totalCredits += account.balance;
      }
    });
    const profit = totalDebits - totalCredits;
    return profit;
  },

  color(balance) {
    return balance == 0 ? "primary" : "red";
  },

  model: {
    startDate: funcs.addDays(new Date(), -365),
    endDate: new Date(),
    path: `general-ledgers/accountbalances`,
    branches: [],
    accountTypes: ["Asset", "Liability", "Equity"],
    balanceName: "Balance",
  },
};
export default balanceSheetNav;
