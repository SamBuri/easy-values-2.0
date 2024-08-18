import IncomeStatement from "./IncomeStatement.vue";
import funcs from "../../utils/funcs";

const incomestatementNav = {
  route: {
    path: "/incomestatement",
    name: "incomestatement",
    component: IncomeStatement,
    meta: { auth: true },
  },

  menu: {
    id: "accounting.incomestatement",
    title: "Income Statement",
    to: { name: "incomestatement" },
  },

  headers: [
    { title: "Account Type", key: "accountType" },
    { title: "Account Category", key: "categoryName" },
    { title: "accountName", key: "accountName" },
    { title: "Amount", key: "balance", isNumeric: true },
  ],

  filter(accountType) {
    return accountType === "Income" || accountType === "Expense";
  },

  calBalance(accounts) {
    let totalCredits = 0;
    let totalDebits = 0;

      accounts.forEach((account) => {
        if(account.accountType==='Expense'){
          totalDebits+=account.balance;
        }else if(account.accountType==='Income'){
          totalCredits +=account.balance
        }

      });

    const profit = totalCredits - totalDebits;
    return profit;
  },

  color(balance){
    return balance>0?"primary": balance==0?"yellow": "red";
  },

  model: {
    startDate: funcs.addDays(new Date(), -30),
    endDate: new Date(),
    path: `generalledgers/accountbalances`,
    branches: [],
    accountTypes: ["Income", "Expense"],
    balanceName: "Profit",
  },
};
export default incomestatementNav;
