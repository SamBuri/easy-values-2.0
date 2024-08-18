<script setup>
import accountLedgerNav from "./AccountLedgerNav";
import accountNav from "../account/AccountNav";
import { onMounted } from "vue";
import { defineAccountStore } from "../account/AccountStore";

const accountStore = defineAccountStore();
onMounted(() => {
  accountStore.getMini();
});

</script>

<template>
  <s-ledger

    :passedData="accountLedgerNav"
    :accountItems="accountStore.mini"
    :accountHeaders = accountNav.menu.miniHeaders>
  </s-ledger>
</template>
<!-- <script>
import accountLedgerNav from "./AccountLedgerNav";
import accountNav from "../account/AccountNav";
export default {
  name: "AccountLedger",

  data: () => ({
    cols: 12,
    sm: 6,
    md: 3,
    maxWidth: 1000,
    accountLedgerNav: accountLedgerNav,
    title: "Account Ledger",
    passedColumn: "amount",
    accountNav: accountNav,
    model: accountLedgerNav.model,
  }),
  created() {
    this.$store.dispatch("accounting/account/getMini");
  },
  computed: {
    accounts() {
      return this.$store.state.accounting.account.mini;
    },
  },

  watch: {},

  methods: {
    setAccountIdData(data) {
      this.model.accountId = data.id;
      this.model.accountName = data.accountName;
    },

    accountIdChanged(id) {
      if (this.accounts.length > 0) {
        let filteredAccounts = this.accounts.filter((a) => a.id == id);
        if (filteredAccounts.length > 0) {
          let account = filteredAccounts[0];
          this.model.accountName = account.accountName;
        }
      }
    },
  },
};
</script> -->
