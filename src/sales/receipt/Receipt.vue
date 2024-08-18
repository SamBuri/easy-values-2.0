<script setup>
import receiptController from "./ReceiptController";
import receiptInvoicesNav from "../receiptinvoices/ReceiptInvoicesNav.js";
import rootOptions from "@/root/RootOptions";
const cols = 12;
const sm = 6;
const md = 3;
rootOptions.maxWidth = 1300;
rootOptions.showPrintPrompt = true;
const controller = receiptController();
const model = controller.model;
const rules = controller.rules;
const customerIdDialog = controller.customerIdDialog;
const isPreview = controller.isPreview;
const receiptInvoiceRequests = controller.receiptInvoiceRequests;
const deueLoading = controller.invoiceStore.deueLoading;
// const customers= controller.customerStore.mini;
const items = [];
</script>

<template>
  <crud-form :controller="controller">
    <template #heading>Receipt</template>

    <template #form-data>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-date-picker
          id="receiptDate"
          label="Receipt Date"
          v-model="model.receiptDate"
          :rules="rules.receiptDate"
          :disabled="isPreview"
        >
        </s-date-picker>
      </v-col>


      <v-col :cols="cols" :sm="sm" :md="md">
        <s-select-field
        id="customerId"
          label="Customer Id"
          v-model="model.customerId"
          :rules="rules.customerId"
          :counter="20"
          :disabled="isPreview"
          @ok="controller.customerIdOk"
          :items="controller.customerStore.mini"
          :headers="controller.customerNav.menu.miniHeaders"
        ></s-select-field>

      </v-col>

      <v-col :cols="cols" :sm="sm" :md="md">
        <s-text-field
          id="customer"
          label="Customer Name"
          v-model="model.customer"
          :disabled="true"
        ></s-text-field>
      </v-col>

      <v-col :cols="cols" :sm="sm" :md="md">
        <v-autocomplete
          label="Bank Account Type"
          v-model="model.bankAccountType"
          :rules="rules.bankAccountType"
          :counter="100"
          required
          :items="controller.bankingStore.bankAccountTypes"
          :loading="controller.bankingStore.bankAccountTypesLoading"
          :disabled="isPreview"
        ></v-autocomplete>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-autocomplete
          id="bankAccountId"
          label="Bank Account"
          v-model="model.bankAccountId"
          :rules="rules.bankAccountId"
          :counter="100"
          required
          :items="controller.bankAccountStore.bankAccountsByType"
          :loading="controller.bankAccountStore.bankAccountsByTypeLoading"
          item-title="bankAccountName"
          item-value="id"
          :disabled="isPreview"
        ></v-autocomplete>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-number-input
          id="totalBill"
          label="Total Bill"
          v-model="model.totalBill"
          :disabled="true"
        ></s-number-input>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-number-input
          id="amountTendered"
          label="Amount Tendered"
          v-model="model.amountTendered"
          :counter="15"
          :rules="rules.amountTendered"
          :disabled="isPreview"
        ></s-number-input>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-autocomplete
          id="currencyId"
          label="Currency"
          v-model="model.currencyId"
          :rules="rules.currencyId"
          required
          :items="controller.currencyStore.mini"
          :loading="controller.currencyStore.miniLoading"
          item-title="currency"
          item-value="id"
          :disabled="isPreview"
        >
        </v-autocomplete>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-number-input
          id="exchangeRate"
          label="Exchange Rate"
          v-model="model.exchangeRate"
          :disabled="true"
        ></s-number-input>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-number-input
          id="discount"
          label="Discount"
          v-model="model.discount"
          :counter="100"
          :disabled="isPreview"
        >
        </s-number-input>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-number-input
          id="withholdingTax"
          label="Withholding Tax"
          v-model="model.withholdingTax"
          :counter="100"
          :disabled="isPreview"
        ></s-number-input>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-number-input
          id="amountReceived"
          label="Amount Received"
          v-model="model.amountReceived"
          :disabled="true"
        ></s-number-input>
      </v-col>

      <v-col :cols="cols" :sm="sm" :md="md">
        <s-number-input
          label="Change Given"
          v-model="model.changeGiven"
          :counter="100"
          :disabled="isPreview"
        >
        </s-number-input>
      </v-col>

      <v-col :cols="cols" :sm="sm" :md="md">
        <s-number-input
          id="changeGiven"
          label="Amount Paid"
          v-model="model.amountPaid"
          :counter="100"
          :disabled="true"
        >
        </s-number-input>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-textarea
          id="AmountWords"
          label="AmountWords"
          v-model="model.amountWords"
          :rules="rules.amountWords"
          :counter="200"
          rows="1"
          auto-grow
          disabled
        ></v-textarea>
      </v-col>
      <v-col cols="12">
        <crud-table
          id="receiptInvoices"
          title="Receipt Invoices"
          :headers="receiptInvoicesNav.menu.editHeaders"
          :items="model.receiptInvoiceRequests"
          :loading="controller.invoiceStore.dueLoading"
        />
      </v-col>

      <!-- <v-dialog v-model="customerIdDialog" :persistent="true" :max-with="600">
        <search-mini
          :mtdsProvided="true"
          @ok="controller.customerIdOk"
          @close="controller.customerIdClose"
          :items="controller.customerStore.mini"
          :headers="controller.customerNav.menu.miniHeaders"
        />
      </v-dialog> -->
    </template>
  </crud-form>
</template>
<!-- <script>
import receiptModel from "./ReceiptModel";
import receiptInvoicesNav from "../receiptinvoices/ReceiptInvoicesNav.js";
import funcs from "../../utils/funcs";
import SNumberInput from "../../components/SNumberInput.vue";
import customerNav from '../../customer/customer/CustomerNav';


export default {
  components: { SNumberInput },
  props: ['passedCustomerId'],
  name: "Receipt",

  data: () => ({
    cols: 12,
    sm: 6,
    md: 3,
    maxWidth: 1500,
    path: receiptModel.path,
    receipt: receiptModel.receipt,
    receiptInvoicesNav: receiptInvoicesNav,
    customerIdRules: [(v) => !!v || "Customer Id is required"],
    bankAccountTypeRules: [(v) => !!v || "Bank Account Type is required"],
    bankAccountIdRules: [(v) => !!v || "Bank Account is required"],
    currencyIdRules: [(v) => !!v || "Currency is required"],
    amountTenderedRules: [(v) => !!v || "Amount Tendered"],
    amountWordsRules: [
      (v) => !!v || "AmountWords is required",
      (v) =>
        v.length < 100 || "AmountWords length must be less or equal to 100",
    ],
    receiptDateRules: [(v) => !!v || "Receipt Date is required"],
    menu: false,
    showPrintPrompt: true,
    // dueInvoices: [],
  }),
  created() {

    this.$store.dispatch("banking/getBankAccountTypes");
    this.$store.dispatch("lookup/currency/getMini");
  },
  computed: {
    customerId() {
      return this.model.customerId;
    },


    company() {
      return this.$store.state.organisation.company.company;

    },

    autocompleteedData() {
      return this.$store.state.search.autocompleteedMiniItem;
    },

    searchedCustomer() {
      return this.$store.state.customer.customer.obj;
    },
    bankAccountType() {
      return this.model.bankAccountType;
    },

    dueInvoices() {
      return this.$store.state.sales.invoice.due;
    },


    currencyId() {
      return this.model.currencyId;
    },

    currency() {
      return this.$store.state.lookup.currency.currency;
    },



    amountTendered() {
      return this.model.amountTendered;
    },

    totalAmountPaid() {
      return (this.model.amountTendered * this.model.exchangeRate) + this.discount + this.withholdingTax;
    },

    amountPaid() {
      return this.model.amountPaid;
    },

    discount() {
      return Number(this.model.discount);
    },

    withholdingTax() {
      return Number(this.model.withholdingTax);
    },

    totalBill() {
      return this.model.totalBill;
    },

    changeGiven() {
      return this.model.changeGiven;
    },

    currencies() {
      return this.$store.state.lookup.currency.mini;
    },

    receiptInvoiceRequests() {
      return this.model.receiptInvoiceRequests;

    },

    mode() {
      return parseInt(this.$route.params.mode, 10);
    },

    headers() {

      if (this.mode ===2) { return receiptInvoicesNav.menu.previewHeaders }
      else { return receiptInvoicesNav.menu.editHeaders }
    },

    items() {
      return this.model.receiptInvoiceRequests;
    },



  },

  watch: {
    customerId() {
      this.customerIdEntered();
    },




    autocompleteedData() {
      let autocompleteedData = this.autocompleteedData;
      if (autocompleteedData) {
        this.setCustomerId(autocompleteedData.id);
      }
    },

    searchedCustomer() {

      if (this.searchedCustomer) {
        this.model.customerId = this.searchedCustomer.id;
        this.model.customer = this.searchedCustomer.customerName

      } else {
        this.model.customer = ""
      }
    },


    bankAccountType() {
      if (this.bankAccountType) {
        this.$store.dispatch("banking/bankaccount/getBankAccountsByType", this.bankAccountType
        );
      }
    },



    currencies() {
      if (this.mode !== 2)
        this.setDefaultCurrency();
    },

    currencyId() {
      if (this.currencyId !== "") {
        this.setCurrency(this.currencyId);
      }
    },
    currency() {
      this.model.currencyId = this.currency.id;
      this.model.exchangeRate = this.currency.buying;
      this.setAmountPaid();
    },

    amountTendered() {
      this.setAmountPaid();
    },

    totalAmountPaid() {
      if (this.mode !== 2)
        this.calculateChange();

    },

    totalBill() {
      if (this.mode !== 2)
        return this.calculateChange();
    },

    dueInvoices() {
      if (this.mode !== 2) {
        console.log("Due invoices Count: ", this.dueInvoices.length);
        let receiptInvoices = this.getReceiptInvoiceRequests();
        console.log("Receipt Invoices Count: ", receiptInvoices.length);
        this.model.receiptInvoiceRequests = receiptInvoices;
      }

    },


    receiptInvoiceRequests() {
      if (this.mode !== 2) {
        let receiptInvoices = this.getReceiptInvoiceRequests();
        this.model.totalBill = receiptInvoices
          .map((a) => a.invoiceAmount)
          .map(Number)
          .reduce((a, b) => a + b, 0);

        if (this.model.amountPaid > 0) {
          this.calculateReceiptInvoiceAmount();
        }
      }
    },



    amountPaid() {
      if (this.mode !== 2)
        this.model.amountWords = funcs.toWords(this.amountPaid);
      this.calculateReceiptInvoiceAmount();
    },

    changeGiven() {
      if (this.mode !== 2)
        this.model.changeGiven = this.changeGiven;
      this.setAmountPaid();
    },


    discount() {
      this.setAmountPaid();
    },

    withholdingTax() {
      if (this.mode !== 2)
        this.setAmountPaid();
    },


  },

  methods: {
    save() {
      this.$store.dispatch("post", { path: this.path, body: this.receipt });
      this.setDefaultCurrency();
    },
    update() {
      this.$store.dispatch("put", {
        path: `${this.path}/${this.model.id}`,
        body: this.receipt,
      });
    },
    updateDialog() {
      var obj = this.$store.state.search.autocompleteedData[0].value;
      this.setDialog(obj);
    },
    async search() {
      var obj = this.$store.state.obj;
      this.receipt = Object.assign({}, obj);
      this.setObjects(obj);
    },
    reset() {
      this.$store.commit("sales/invoice/due", []);
      this.setDefaultCurrency();
      this.model.clear();
    },

    setObjects(obj) {
      this.model.receiptInvoiceRequests = obj.receiptInvoices;
      console.log("Receipt Obj: ", obj)
    },
    setDialog(obj) {
      this.receipt = Object.assign({}, obj);
      this.setObjects(obj);
    },
    done() {
      this.$store.commit("crudtable/data", Object.assign({}, this.receipt));
    },
    updateCrudTableDialog() {
      this.setDialog(this.$store.state.crudtable.data);
    },
    resetCrudTableDialog() {
      this.reset();
    },

    setAmountPaid() {
      let discount = Number(this.discount);
      let withholdingTax = Number(this.withholdingTax)
      //  let change = Number(this.totalAmountPaid) -Number(this.model.totalBill);
      //     change = change<0?0:change;
      let amountPaid = Math.round(this.totalAmountPaid - this.model.changeGiven);
      this.model.amountPaid = amountPaid;

      this.model.amountReceived = Math.round(this.model.amountPaid - (discount + withholdingTax));

    },

    getReceiptInvoiceRequests() {

      if (!this.dueInvoices) {
        return [];
      }
      var mappedList = this.dueInvoices.map((item) => {
        var container = {};
        container.id = item.id;
        container.invoiceAmount = item.invoiceAmount;
        container.toPayAmount = 0;

        return container;
      });
      return mappedList;
    },

    calculateReceiptInvoiceAmount() {
      if (this.mode !== 2) {
        let amoutPaid = this.model.amountPaid;
        for (let receiptInvoice of this.model.receiptInvoiceRequests) {
          let invoiceAmount = receiptInvoice.invoiceAmount;
          let toPayAmount = 0;

          if (invoiceAmount >= amoutPaid) {
            toPayAmount = amoutPaid;
            amoutPaid = 0;
          } else {
            toPayAmount = invoiceAmount;
            amoutPaid -= invoiceAmount;
          }

          receiptInvoice.toPayAmount = toPayAmount;
          // receiptInvoice.amount = toPayAmount;
        }
      }
    },

    calculateChange() {
      let change = Math.round(Number(this.totalAmountPaid) - Number(this.model.totalBill));
      //  change = change<0?0:change;
      this.model.changeGiven = change < 0 ? 0 : change;
    },

    setCurrency(id) {
      if (id)
        this.$store.dispatch("lookup/currency/getCurrency", id)
    },

    setDefaultCurrency() {

      let defaultCurrency = this.$store.state.lookup.currency.defaultCurrency;
      if (this.model.currencyId === "") {
        this.model.currencyId = defaultCurrency.id;
      }
    },

    appendIconCallback() {
      let miniautocompleteed = { path: customerNav.menu.path, name: customerNav.menu.name, headers: customerNav.menu.miniHeaders };
      this.$store.commit("search/miniautocompleteed", miniautocompleteed);
      this.$store.dispatch("search/getMiniData");
      this.$store.commit("search/miniDialog", true);

    },

    setCustomerId(passedCustomerId) {
      console.log("Passed Customer Id", passedCustomerId)
      this.model.customerId = passedCustomerId;
    },

    customerIdEntered() {
      if (this.mode !== 2) {
        // this.receiptInvoiceRequests = [];
        this.model.receiptInvoiceRequests = [];
        this.$store.commit("sales/invoice/due", []);
        this.$store.commit("customer/customer/obj", null);
        if (this.customerId) {
          console.log("Dispatched Customer Id", this.customerId)
          this.$store.dispatch("customer/customer/get", this.customerId);
          this.$store.dispatch("sales/invoice/getDue", this.customerId);
          // this.dueInvoices = this.$store.state.sales.invoice.due;
        }
      }
    },

    componentDataChanged(data) {
      // console.log("This is it ", data);
      this.$nextTick(() => {
        this.setCustomerId(data.obj.loanApplication.applicantId);
      });
    },

    print() {

      let data = [];
      data.push({ text: "Customer Id", value: this.model.customerId });
      data.push({ text: "Customer Name", value: this.model.customer });
      data.push({ text: "Receipt Date", value: funcs.formatDateToString(this.model.receiptDate) });
      data.push({ text: "Amount Tendered", value: funcs.formatNumber(this.model.amountTendered) });
      data.push({ text: "Currency", value: this.currency.currency });
      data.push({ text: "Exchange Rate", value: funcs.formatNumber(this.model.exchangeRate) });
      data.push({ text: "Withholding Tax", value: this.model.withholdingTax > 0 ? funcs.formatNumber(this.model.withholdingTax) : "0" });
      data.push({ text: "Discount", value: this.model.discount > 0 ? funcs.formatNumber(this.model.discount) : "0" });
      data.push({ text: "Amount Received", value: funcs.formatNumber((this.model.amountReceived)) });
      data.push({ text: "Change", value: this.model.changeGiven > 0 ? funcs.formatNumber(this.model.changeGiven) : "0" });

      let options = {
        data: data,
        startXPos: 10,
        startYPos: 25,
        lineBreak: 4,
        hSpace: 50,
        vSpace: 10,
        title: "Receipt"

      }

      this.makePDFDocument(options);





      // doc.setFontSize(10)
      // doc.setTextColor(0, 0, 0);
      // doc.text("Customer Id", 10, 20);
      // doc.text(this.model.customerId, 40, 20);
      // doc.text("Customer Name", 70, 20);
      // doc.text(this.model.customerName, 100, 20);
      // doc.save("model.pdf");
      // save(filename, options)

    }

  },
}
</script> -->
