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
    :maxWidth="maxWidth">

    <template #heading>Invoice</template>

    <template #form-data>
      <v-col :cols="cols" :sm="sm" :md="md">

         <s-date-picker
            label="Invoice Date"
            v-model="invoice.invoiceDate"
            :rules="invoiceDateRules">
 </s-date-picker>

     </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-select
          label="Invoice Type"
          v-model="invoice.invoiceType"
          :rules="invoiceTypeRules"
          :counter="100"
          required
          :items="$store.state.lookup.invoiceTypes"
        ></v-select>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-select
          label="Sell To"
          v-model="invoice.sellToId"
          :rules="sellToIdRules"
          :counter="100"
          required
          :items="$store.state.customer.customer.mini"
          item-text="customerName"
          item-value="id"
          :loading="$store.state.customer.customer.miniLoading"
        ></v-select>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-select
          label="Bill To"
          v-model="invoice.billToId"
          :items="$store.state.customer.customersponsor.sponsors"
          :loading="$store.state.customer.customersponsor.sponsorsLoading"
          item-text="sponsor.customerName"
          item-value="sponsor.id"
          clearable
        ></v-select>
      </v-col>

      <v-col :cols="cols" :sm="sm" :md="md">
        <v-text-field
          label="Amount"
          v-model="invoice.amount"
          :counter="100"
          required
          disabled
        ></v-text-field>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-textarea
          label="Amount Words"
          v-model="invoice.amountWords"
          :rules="amountWordsRules"
          :counter="200"
          required
          rows="1"
          auto-grow
          disabled
        ></v-textarea>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md"> </v-col>
      <v-col cols="12">
        <crud-table
          title="Invoice Details"
          :headers="invoiceDetailNav.menu.editHeaders"
          :items="invoice.invoiceDetails"
          :component="invoiceDetailNav.menu.component"
          maxWidth="1000px"
        />
      </v-col>
    </template>
  </crud-form>
</template>
<script>
import invoiceModel from "./InvoiceModel";
import invoiceDetailNav from "../invoicedetail/InvoiceDetailNav.js";
import funcs from "../../utils/funcs";
export default {
  name: "Invoice",
  data: () => ({
    cols: 12,
    sm: 6,
    md: 4,
    maxWidth: 1000,
    path: invoiceModel.path,
    invoice: invoiceModel.invoice,
    invoiceDetailNav: invoiceDetailNav,
    invoiceTypeRules: [(v) => !!v || "Invoice Type is required"],
    sellToIdRules: [(v) => !!v || "Sell To is required"],
    billToIdRules: [(v) => !!v || "Bill To is required"],

    amountWordsRules: [
      (v) => !!v || "Amount Words is required",
      (v) =>
        v.length < 200 || "Amount Words length must be less or equal to 200",],
        invoiceDateRules: [(v) => !!v || "Invoice Date is required"],
    menu: false,
  }),
  created() {
    this.$store.dispatch("lookup/getInvoiceTypes");
    this.$store.dispatch("customer/customer/getMini");
  },
  computed: {
    invoiceDetails() {
      return this.invoice.invoiceDetails;
    },
    sellToId() {
      return this.invoice.sellToId;
    },
  },

  watch: {
    invoiceDetails() {
      this.invoice.amount = this.invoice.invoiceDetails
        .map((a) => a.amount)
        .map(Number)
        .reduce((a, b) => a + b, 0);

      this.invoice.amountWords = funcs.toWords(this.invoice.amount);
    },

    async sellToId() {
      await this.$store.dispatch("customer/customersponsor/getSponsors", this.sellToId);
      let sponsors = this.$store.state.customer.customersponsor.sponsors;
      let defaultSponsors = sponsors.filter((s) => s.isDefault);
      if (defaultSponsors.length > 0) {
        let defaultSponsor = defaultSponsors[0];
        this.invoice.billToId = defaultSponsor.sponsor.id;
      }
    },
  },

  methods: {
    save() {
      this.modify();
      this.$store.dispatch("post", { path: this.path, body: this.invoice });
    },
    update() {
      this.modify();
      this.$store.dispatch("put", {
        path: `${this.path}/${this.invoice.id}`,
        body: this.invoice,
      });
    },

    modify() {
      this.invoice.entryMode = "Manual";
    },
    updateDialog() {
      var obj = this.$store.state.search.selectedData[0].value;
      this.setDialog(obj);
    },
    async search() {
      var obj = this.$store.state.obj;
      this.invoice = Object.assign({}, obj);
      this.setObjects(obj);
    },
    reset() {
      this.invoice.clear();
    },
    setObjects(obj) {
      console.log(obj);
    },
    setDialog(obj) {
      this.invoice = Object.assign({}, obj);
      this.setObjects(obj);
    },
    done() {
      // this.$store.commit("crudtable/data", Object.assign({}, this.invoice));
    },
    updateCrudTableDialog() {
      // this.setDialog(this.$store.state.crudtable.data);
    },
    resetCrudTableDialog() {
      // this.reset();
    },
  },
};
</script>
