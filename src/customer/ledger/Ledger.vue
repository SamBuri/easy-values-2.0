<script setup>
import ledgerNav from './LedgerNav'
import customerNav from '../customer/CustomerNav';
import { defineCustomerStore }  from '@/customer/customer/CustomerStore';
import { onMounted, ref } from 'vue';

const customerStore = defineCustomerStore();
const model = ref(ledgerNav.model);
onMounted(()=>{
  customerStore.getMini();
})
</script>

<template>
  <s-ledger :passedData="ledgerNav"
  :accountHeaders="customerNav.menu.miniHeaders"
  :accountItems="customerStore.mini">

    <template #extra>
      <v-col :cols="cols" :sm="sm" :md="lmd" compact>
        Phone Number
      </v-col>

      <v-col :cols="cols" :sm="sm" :md="lmd" compact class="bold-text">
        {{model.phoneNo}}
      </v-col>

      <v-col :cols="cols" :sm="sm" :md="lmd" compact>
      Address
      </v-col>

      <v-col :cols="cols" :sm="sm" :md="4" compact class="bold-text">
        {{model.address}}
      </v-col>
    </template>


  </s-ledger>
</template>
<!-- <script>

import ledgerNav from './LedgerNav'
import customerNav from '../customer/CustomerNav';
export default {
  name: "Ledger",

  data: () => ({
    cols: 12,
    sm: 6,
    md: 3,
    lmd: 2,
    maxWidth: 1000,
    accountLedgerNav: ledgerNav,
    title: "Customer  Ledger",
    passedColumn: "amount",
    customerNav: customerNav,
    model: ledgerNav.model,
    address:  '',
    phoneNo: '',



  }),
  created() {
    this.$store.dispatch("customer/customer/getMini");

  },
  computed: {
    accounts() {
      return this.$store.state.customer.customer.mini;
    }
  },

  watch: {

  },

  methods: {
    setAccountIdData(data) {
      this.model.accountId = data.id;
     this.fill(data)
    },

    accountIdChanged(id) {
      if (this.accounts.length > 0) {
        let filteredAccounts = this.accounts.filter(a => a.id == id);
        if (filteredAccounts.length > 0) {
          let account = filteredAccounts[0];
        this.fill(account);
        }
      }

    },

    fill(data){
      this.model.accountName = data.customerName;
      this.address = data.address
      this.phoneNo = data.phoneNo;
    }

  },
};
</script> -->
<style>
.bold-text {
  font-weight: bold;
}
</style>
