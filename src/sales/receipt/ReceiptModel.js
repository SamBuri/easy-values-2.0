import funcs from "@/utils/funcs";
const receiptModel = {
  model: {
    receiptDate: new Date(),
    customerId: "",
    customer: "",
    bankAccountType: "",
    bankAccountId: "",
    totalBill: "",
    amountTendered: "",
    currencyId: null,
    currency: '',
    exchangeRate: "",
    changeGiven: 0,
    amountPaid: "",
    discount: 0,
    withholdingTax: 0,
    amountReceived: "",
    amountWords: "",
    receiptInvoiceRequests: [],

    clear() {
      this.receiptDate = new Date();
      this.customerId = "";
      this.customer = "";
      this.bankAccountType = "";
      this.bankAccountId = "";
      this.totalBill = "";
      this.amountTendered = "";
      this.currencyId = null;
      this.currency = '';
      this.exchangeRate = "";
      this.changeGiven = "";
      this.amountPaid = "";
      this.discount = 0;
      this.withholdingTax = 0;
      this.amountReceived = 0;
      this.amountWords = "";
      this.receiptInvoiceRequests = [];
    },

    copy(obj) {
      this.receiptDate = obj.receiptDate;
      this.customerId = obj.customerId;
      this.bankAccountType = obj.bankAccountType;
      this.bankAccountId = obj.bankAccountId;
      this.totalBill = obj.totalBill;
      this.amountTendered = obj.amountTendered;
      this.currencyId = obj.currencyId;
      this.exchangeRate = obj.exchangeRate;
      this.changeGiven = obj.changeGiven;
      this.amountPaid = obj.amountPaid;
      this.amountWords = obj.amountWords;
      this.receiptInvoices = obj.receiptInvoices;
    },

    printOptions() {

      let data = [];
      data.push({ text: "Customer Id", value: this.customerId });
      data.push({ text: "Customer Name", value: this.customer });
      data.push({ text: "Receipt Date", value: funcs.formatDateToString(this.receiptDate) });
      data.push({ text: "Amount Tendered", value: funcs.formatNumber(this.amountTendered) });
      data.push({ text: "Currency", value: this.currency });
      data.push({ text: "Exchange Rate", value: funcs.formatNumber(this.exchangeRate) });
      data.push({ text: "Withholding Tax", value: this.withholdingTax > 0 ? funcs.formatNumber(this.withholdingTax) : "0" });
      data.push({ text: "Discount", value: this.discount > 0 ? funcs.formatNumber(this.discount) : "0" });
      data.push({ text: "Change", value: this.changeGiven > 0 ? funcs.formatNumber(this.changeGiven) : "0" });

      return  {
        data: data,
        startXPos: 10,
        startYPos: 25,
        lineBreak: 2,
        hSpace: 50,
        vSpace: 10,
        format: 'a6',
        title: "Receipt"

      }
    },
  },
  path: "receipts",
  rules: {
    receiptDate: [(v) => !!v || "Receipt Date is required"],
    customerId: [(v) => !!v || "Customer Id is required"],
    bankAccountType: [(v) => !!v || "Bank Account Type is required"],
    bankAccountId: [(v) => !!v || "Bank Account is required"],
    totalBill: [(v) => !!v || "Total Bill is required"],
    amountTendered: [(v) => !!v || "Amount Tendered is required"],
    currencyId: [(v) => !!v || "Currency is required"],
    exchangeRate: [(v) => !!v || "Exchange Rate is required"],
    changeGiven: [(v) => !!v || "Change Given is required"],
    amountPaid: [(v) => !!v || "Amount Paid is required"],
    amountWords: [
      (v) => !!v || "AmountWords is required",
      (v) =>
        v.length < 100 || "AmountWords length must be less or equal to 100",
    ],
    receiptInvoices: [(v) => !!v || "Receipt Invoices is required"],
  },
};

export default receiptModel;
