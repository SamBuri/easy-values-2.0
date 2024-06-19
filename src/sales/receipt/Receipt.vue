<template>
  <crud-form @save="save" @update="update" @search="search" @updateDialog="updateDialog" @reset="reset" @done="done"
    @updateCrudTableDialog="updateCrudTableDialog" @resetCrudTableDialog="resetCrudTableDialog"
    @componentDataChanged="componentDataChanged" :path="path" :maxWidth="maxWidth" :showPrintPrompt="showPrintPrompt" @print="print">
    <template #heading>Receipt</template>

    <template #form-data slot-scope="{ isPreview }">

      <v-col :cols="cols" :sm="sm" :md="md">
        <s-date-picker id="receiptDate" label="Receipt Date" v-model="receipt.receiptDate" :rules="receiptDateRules" :disabled="isPreview">
        </s-date-picker>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-text-field id="customerId" label="Customer Id" v-model="receipt.customerId" :rules="customerIdRules" :counter="20"
          append-icon="mdi-view-list" @click:append="appendIconCallback" :disabled="isPreview" density="compact"></v-text-field>
      </v-col>

      <v-col :cols="cols" :sm="sm" :md="md">
        <s-text-field id="customer" label="Customer Name" v-model="receipt.customer" :disabled="true"></s-text-field>
      </v-col>

      <v-col :cols="cols" :sm="sm" :md="md">
        <v-select label="Bank Account Type" v-model="receipt.bankAccountType" :rules="bankAccountTypeRules" :counter="100"
          required :items="$store.state.banking.bankAccountTypes" :disabled="isPreview"></v-select>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-select id="bankAccountId" label="Bank Account" v-model="receipt.bankAccountId" :rules="bankAccountIdRules" :counter="100" required
          :items="$store.state.banking.bankaccount.bankAccountsByType"
          :loading="$store.state.banking.bankaccount.bankAccountsByTypeLoading" item-text="bankAccountName"
          item-value="id" :disabled="isPreview"></v-select>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-number-input id="totalBill" label="Total Bill" v-model="receipt.totalBill" :disabled="true"></s-number-input>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-number-input id="amountTendered" label="Amount Tendered" v-model="receipt.amountTendered" :counter="100"
          :rules="amountTenderedRules" :disabled="isPreview"></s-number-input>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-select id="currencyId" label="Currency" v-model="receipt.currencyId" :rules="currencyIdRules" required
          :items="$store.state.lookup.currency.mini" item-title="currency" item-value="id" :disabled="isPreview">
        </v-select>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-number-input id="exchangeRate" label="Exchange Rate" v-model="receipt.exchangeRate" :disabled="true"></s-number-input>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-number-input id="discount" label="Discount" v-model="receipt.discount" :counter="100" :disabled="isPreview">
        </s-number-input>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-number-input id="withholdingTax" label="Withholding Tax" v-model="receipt.withholdingTax" :counter="100"
          :disabled="isPreview"></s-number-input>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-number-input id="amountReceived" label="Amount Received" v-model="receipt.amountReceived" :disabled="true"></s-number-input>
      </v-col>

      <v-col :cols="cols" :sm="sm" :md="md">
        <s-number-input label="Change Given" v-model="receipt.changeGiven" :counter="100" :disabled="isPreview">
        </s-number-input>
      </v-col>

      <v-col :cols="cols" :sm="sm" :md="md">
        <s-number-input id="changeGiven" label="Amount Paid" v-model="receipt.amountPaid" :counter="100" :disabled="true">
        </s-number-input>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-textarea id="AmountWords" label="AmountWords" v-model="receipt.amountWords" :rules="amountWordsRules" :counter="200" rows="1"
          auto-grow disabled></v-textarea>
      </v-col>
      <v-col cols="12">
        <s-data-table id="receiptInvoices" title="Receipt Invoices" :headers="headers" :items="items"
          :loading="$store.state.sales.invoice.deueLoading" />
      </v-col>
    </template>
  </crud-form>
</template>
<script>
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
      return this.receipt.customerId;
    },


    company() {
      return this.$store.state.organisation.company.company;

    },

    selectedData() {
      return this.$store.state.search.selectedMiniItem;
    },

    searchedCustomer() {
      return this.$store.state.customer.customer.obj;
    },
    bankAccountType() {
      return this.receipt.bankAccountType;
    },

    dueInvoices() {
      return this.$store.state.sales.invoice.due;
    },


    currencyId() {
      return this.receipt.currencyId;
    },

    currency() {
      return this.$store.state.lookup.currency.currency;
    },



    amountTendered() {
      return this.receipt.amountTendered;
    },

    totalAmountPaid() {
      return (this.receipt.amountTendered * this.receipt.exchangeRate) + this.discount + this.withholdingTax;
    },

    amountPaid() {
      return this.receipt.amountPaid;
    },

    discount() {
      return Number(this.receipt.discount);
    },

    withholdingTax() {
      return Number(this.receipt.withholdingTax);
    },

    totalBill() {
      return this.receipt.totalBill;
    },

    changeGiven() {
      return this.receipt.changeGiven;
    },

    currencies() {
      return this.$store.state.lookup.currency.mini;
    },

    receiptInvoiceRequests() {
      return this.receipt.receiptInvoiceRequests;

    },

    mode() {
      return parseInt(this.$route.params.mode, 10);
    },

    headers() {

      if (this.mode ===2) { return receiptInvoicesNav.menu.previewHeaders }
      else { return receiptInvoicesNav.menu.editHeaders }
    },

    items() {
      return this.receipt.receiptInvoiceRequests;
    },



  },

  watch: {
    customerId() {
      this.customerIdEntered();
    },




    selectedData() {
      let selectedData = this.selectedData;
      if (selectedData) {
        this.setCustomerId(selectedData.id);
      }
    },

    searchedCustomer() {

      if (this.searchedCustomer) {
        this.receipt.customerId = this.searchedCustomer.id;
        this.receipt.customer = this.searchedCustomer.customerName

      } else {
        this.receipt.customer = ""
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
      this.receipt.currencyId = this.currency.id;
      this.receipt.exchangeRate = this.currency.buying;
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
        this.receipt.receiptInvoiceRequests = receiptInvoices;
      }

    },


    receiptInvoiceRequests() {
      if (this.mode !== 2) {
        let receiptInvoices = this.getReceiptInvoiceRequests();
        this.receipt.totalBill = receiptInvoices
          .map((a) => a.invoiceAmount)
          .map(Number)
          .reduce((a, b) => a + b, 0);

        if (this.receipt.amountPaid > 0) {
          this.calculateReceiptInvoiceAmount();
        }
      }
    },



    amountPaid() {
      if (this.mode !== 2)
        this.receipt.amountWords = funcs.toWords(this.amountPaid);
      this.calculateReceiptInvoiceAmount();
    },

    changeGiven() {
      if (this.mode !== 2)
        this.receipt.changeGiven = this.changeGiven;
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
        path: `${this.path}/${this.receipt.id}`,
        body: this.receipt,
      });
    },
    updateDialog() {
      var obj = this.$store.state.search.selectedData[0].value;
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
      this.receipt.clear();
    },

    setObjects(obj) {
      this.receipt.receiptInvoiceRequests = obj.receiptInvoices;
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
      //  let change = Number(this.totalAmountPaid) -Number(this.receipt.totalBill);
      //     change = change<0?0:change;
      let amountPaid = Math.round(this.totalAmountPaid - this.receipt.changeGiven);
      this.receipt.amountPaid = amountPaid;

      this.receipt.amountReceived = Math.round(this.receipt.amountPaid - (discount + withholdingTax));

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
        let amoutPaid = this.receipt.amountPaid;
        for (let receiptInvoice of this.receipt.receiptInvoiceRequests) {
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
      let change = Math.round(Number(this.totalAmountPaid) - Number(this.receipt.totalBill));
      //  change = change<0?0:change;
      this.receipt.changeGiven = change < 0 ? 0 : change;
    },

    setCurrency(id) {
      if (id)
        this.$store.dispatch("lookup/currency/getCurrency", id)
    },

    setDefaultCurrency() {

      let defaultCurrency = this.$store.state.lookup.currency.defaultCurrency;
      if (this.receipt.currencyId === "") {
        this.receipt.currencyId = defaultCurrency.id;
      }
    },

    appendIconCallback() {
      let miniSelected = { path: customerNav.menu.path, name: customerNav.menu.name, headers: customerNav.menu.miniHeaders };
      this.$store.commit("search/miniSelected", miniSelected);
      this.$store.dispatch("search/getMiniData");
      this.$store.commit("search/miniDialog", true);

    },

    setCustomerId(passedCustomerId) {
      console.log("Passed Customer Id", passedCustomerId)
      this.receipt.customerId = passedCustomerId;
    },

    customerIdEntered() {
      if (this.mode !== 2) {
        // this.receiptInvoiceRequests = [];
        this.receipt.receiptInvoiceRequests = [];
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
      data.push({ text: "Customer Id", value: this.receipt.customerId });
      data.push({ text: "Customer Name", value: this.receipt.customer });
      data.push({ text: "Receipt Date", value: funcs.formatDateToString(this.receipt.receiptDate) });
      data.push({ text: "Amount Tendered", value: funcs.formatNumber(this.receipt.amountTendered) });
      data.push({ text: "Currency", value: this.currency.currency });
      data.push({ text: "Exchange Rate", value: funcs.formatNumber(this.receipt.exchangeRate) });
      data.push({ text: "Withholding Tax", value: this.receipt.withholdingTax > 0 ? funcs.formatNumber(this.receipt.withholdingTax) : "0" });
      data.push({ text: "Discount", value: this.receipt.discount > 0 ? funcs.formatNumber(this.receipt.discount) : "0" });
      data.push({ text: "Amount Received", value: funcs.formatNumber((this.receipt.amountReceived)) });
      data.push({ text: "Change", value: this.receipt.changeGiven > 0 ? funcs.formatNumber(this.receipt.changeGiven) : "0" });

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
      // doc.text(this.receipt.customerId, 40, 20);
      // doc.text("Customer Name", 70, 20);
      // doc.text(this.receipt.customerName, 100, 20);
      // doc.save("Receipt.pdf");
      // save(filename, options)

    }

  },
}
</script>
