import funcs from "@/utils/funcs";
const refundModel = {
  model: {
    receiptId: '',
    customerName: "",
    refundDate: new Date(),
    bankAccountType: "",
    bankAccount:null,
    bankAccountId: "",
    refundType: "",
    creditNoteId: "",
    amount: "",
     notes: "",
    amountWords: "",
    change: 0,
    modify(){
        this.refundDate = funcs.formatDate(this.refundDate);
    },
    clear() {
      this.receiptId = "";
      this.receipt = null;
      this.refundDate = new Date();
      this.bankAccountType = "";
      this.bankAccountId = "";
      this.refundType = "";
      this.creditNoteId = "";
      this.amount = "";
      this.notes = "";
      this.amountWords = "";
      this.refundReceiptInvoices = [];
      this.change = '';
    },
    copy(obj) {
      this.receipt = obj.receipt;
      this.refundDate = obj.refundDate;
      this.bankAccountType = obj.bankAccountType;
      this.bankAccountId = obj.bankAccountId;
      this.refundType = obj.refundType;
      this.creditNoteId = obj.creditNoteId;
      this.amount = obj.amount;
      this.notes = obj.notes;
      this.amountWords = obj.amountWords;
      this.refundReceiptInvoices = obj.refundReceiptInvoices;
    },
    printOptions() {
      let data = [];
      data.push({ text: "Receipt", value: this.refund.receipt });
      data.push({ text: "Refund Date", value: this.refund.refundDate });
      data.push({
        text: "Bank Account Type",
        value: this.refund.bankAccountType,
      });
      data.push({ text: "Bank Account Id", value: this.refund.bankAccountId });
      data.push({ text: "Bank Account", value: this.refund.bankAccount });
      data.push({ text: "Refund Type", value: this.refund.refundType });
      data.push({ text: "Credit Note Id", value: this.refund.creditNoteId });
      data.push({ text: "Amount", value: this.refund.amount });
      data.push({ text: "Notes", value: this.refund.notes });
      data.push({ text: "Amount Words", value: this.refund.amountWords });
      data.push({
        text: "Refund Receipt Invoices",
        value: this.refund.refundReceiptInvoices,
      });

      return {
        data: data,
        startXPos: 10,
        startYPos: 25,
        lineBreak: 4,
        hSpace: 50,
        vSpace: 10,
        title: "Refund",
      };
    },
  },
  path: "refunds",
  rules: {
    receiptId: [(v) => !!v || "Receipt Id is required"],
    refundDate: [(v) => !!v || "Refund Date is required"],
    bankAccountType: [(v) => !!v || "Bank Account Type is required"],
    bankAccountId: [(v) => !!v || "Bank Account Id is required"],
    refundType: [(v) => !!v || "Refund Type is required"],
    creditNoteId: [
      (v) => !!v || "Credit Note Id is required",
      (v) =>
        v.length < 20 || "Credit Note Id length must be less or equal to 100",
    ],
    amount: [(v) => !!v || "Amount is required"],
    notes: [
      (v) => !!v || "Notes is required",
      (v) => v.length < 200 || "Notes length must be less or equal to 200",
    ],
    amountWords: [
      (v) => !!v || "Amount Words is required",
      (v) =>
        v.length < 200 || "Amount Words length must be less or equal to 200",
    ],
    refundReceiptInvoices: [
      (v) => !!v || "Refund Receipt Invoices is required",
    ],
  },
};

export default refundModel;
