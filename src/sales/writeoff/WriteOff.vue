<template>
  <crud-form
    @save="save"
    @update="update"
    @search="search"
    @updateDialog="updateDialog"
    @reset="reset"
    @done="done"
    @updateCrudTableDialog="updateCrudTableDialog"
    @resetCrudTableDialog="resetCrudTableDialog"
    :path="path"
    :maxWidth="maxWidth"
  >
    <template slot="heading">Write Off</template>

    <template slot="form-data">
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-date-picker
          label="Write Off Date"
          v-model="writeOff.writeOffDate"
          :rules="writeOffDateRules"
      /></v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-select
          label="Customer"
          v-model="writeOff.customerId"
          :rules="customerIdRules"
          :counter="100"
          :items="$store.state.customer.customer.mini"
          :loading="$store.state.customer.customer.miniLoading"
          item-text="customerName"
          item-value="id"
        ></v-select>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-select
          label="Write Off Type"
          v-model="writeOff.writeOffType"
          :rules="writeOffTypeRules"
          :counter="20"
          :items="$store.state.sales.writeOffTypes"
          :loading="$store.state.sales.writeOffTypesLoading"
          return-object
        ></v-select>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-number-input
          label="Amount Tendered"
          v-model="writeOff.amountTendered"
          :rules="amountTenderedRules"
          :counter="100"
        ></s-number-input>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-select
          label="Currency"
          v-model="writeOff.currencyObj"
          :rules="currencyIdRules"
          :counter="100"
          :items="$store.state.organisation.currency.mini"
          :loading="$store.state.organisation.currency.miniLoading"
          item-text="currency"
          item-value="id"
          return-object
        ></v-select>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-number-input
          label="Exchange Rate"
          v-model="writeOff.exchangeRate"
          :rules="exchangeRateRules"
          :counter="100"
          :disabled="true"
        ></s-number-input>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-number-input
          label="Change Given"
          v-model="writeOff.changeGiven"
          :rules="changeGivenRules"
          :counter="100"
        ></s-number-input>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-number-input
          label="Amount"
          v-model="writeOff.amount"
          :rules="amountRules"
          :counter="100"
        ></s-number-input>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-textarea
          label="AmountWords"
          v-model="writeOff.amountWords"
          disabled
          :rules="amountWordsRules"
          :counter="200"
          rows="1"
          auto-grow
        ></v-textarea>
      </v-col>
      <v-col cols="12">
        <crud-table
          title="WriteOff Invoices"
          :headers="writeOffInvoiceNav.menu.editHeaders"
          :items="writeOff.writeOffInvoices"
          :component="writeOffInvoiceNav.menu.component"
          maxWidth="700px"
        />
      </v-col>
    </template>
  </crud-form>
</template>
<script>
import writeOffModel from "./WriteOffModel";
import CrudTable from "../../components/CrudTable.vue";
import writeOffInvoiceNav from "../writeoffinvoice/WriteOffInvoiceNav.js";
export default {
  components: { CrudTable },
  name: "WriteOff",
  data: () => ({
    cols: 12,
    sm: 6,
    md: 3,
    maxWidth: 1000,
    path: writeOffModel.path,
    writeOff: writeOffModel.writeOff,
    writeOffInvoiceNav: writeOffInvoiceNav,
    writeOffDateRules: [(v) => !!v || "Write Off Date is required"],
    customerIdRules: [(v) => !!v || "Customer Id is required"],
    writeOffTypeRules: [(v) => !!v || "Write Off Type is required"],
    amountTenderedRules: [(v) => !!v || "Amount Tendered is required"],
    currencyIdRules: [(v) => !!v || "Currency is required"],
    exchangeRateRules: [(v) => !!v || "Exchange Rate is required"],
    changeGivenRules: [(v) => !!v || "Change Given is required"],
    amountRules: [(v) => !!v || "Amount is required"],
    amountWordsRules: [
      (v) => !!v || "AmountWords is required",
      (v) =>
        v.length < 200 || "AmountWords length must be less or equal to 200",
    ],
    writeOffInvoicesRules: [(v) => !!v || "WriteOff Invoices is required"],
  }),
  created() {
    this.$store.dispatch("customer/customer/getMini");
    this.$store.dispatch("sales/getWriteOffTypes");
    this.$store.dispatch("organisation/currency/getMini");
  },
  computed: {
    currencyObj() {
      return this.writeOff.currencyObj;
    },

    currencies() {
      return this.$store.state.organisation.currency.mini;
    },
  },

  watch: {
    currencies() {
      this.setDefaultCurrency();
    },

    currencyObj() {
      this.writeOff.currencyId = this.currencyObj.id;
      this.writeOff.currency = this.currencyObj.currency;
      this.writeOff.exchangeRate = this.currencyObj.buying;
    },
  },

  methods: {
    save() {
      this.$store.dispatch("post", { path: this.path, body: this.writeOff });
    },
    update() {
      this.$store.dispatch("put", {
        path: `${this.path}/${this.writeOff.id}`,
        body: this.writeOff,
      });
    },
    updateDialog() {
      var obj = this.$store.state.search.selectedData[0].value;
      this.setDialog(obj);
    },
    async search() {
      var obj = this.$store.state.obj;
      this.writeOff = Object.assign({}, obj);
      this.setObjects(obj);
    },
    reset() {
      this.writeOff.clear();
      this.setDefaultCurrency();
    },
    setObjects(obj) {
      console.log(obj);
    },
    setDialog(obj) {
      this.writeOff = Object.assign({}, obj);
      this.setObjects(obj);
    },
    done() {
      this.$store.commit("crudtable/data", Object.assign({}, this.writeOff));
    },
    updateCrudTableDialog() {
      this.setDialog(this.$store.state.crudtable.data);
    },
    resetCrudTableDialog() {
      this.reset();
    },

    setDefaultCurrency() {
      this.writeOff.currencyObj =
        this.$store.state.organisation.currency.defaultCurrency;
    },
  },
};
</script>
