<script setup>
import { onMounted } from "vue";
import ledgerNav from './LedgerNav'
import bankAccountNav from '../bankaccount/BankAccountNav'
import { defineBankAccountStore } from '../bankaccount/BankAccountStore'
const bankAccountStore =  defineBankAccountStore();

onMounted(() => {
  bankAccountStore.getMini();
});
</script>

<template>
  <s-ledger :passedData="ledgerNav"
    :accountItems="bankAccountStore.mini"
    :accountHeaders = bankAccountNav.menu.miniHeaders>
  </s-ledger>
</template>
<!-- <script>

import ledgerNav from './LedgerNav'
import bankAccountNav from '../bankaccount/BankAccountNav'
export default {
  name: "Ledger",

  data: () => ({
    cols: 12,
    sm: 6,
    md: 3,
    maxWidth: 1000,
    accountLedgerNav: ledgerNav,
    title: "Bank Account Ledger",
    passedColumn: "amount",
    bankAccountNav: bankAccountNav,
    model: ledgerNav.model



  }),
  created() {
    this.$store.dispatch("banking/bankaccount/getMini");

  },
  computed: {
    accounts() {
      return this.$store.state.banking.bankaccount.mini;
    }
  },

  watch: {

  },

  methods: {
    setAccountIdData(data) {
      this.model.accountId = data.id;
      this.model.accountName = data.bankAccountName;
    },

    accountIdChanged(id){
      if(this.accounts.length>0){
          let filteredAccounts = this.accounts.filter(a=>a.id==id);
          if(filteredAccounts.length>0){
            let account = filteredAccounts[0];
            this.model.accountName = account.bankAccountName;
          }
      }

    }

  },
};
</script> -->
