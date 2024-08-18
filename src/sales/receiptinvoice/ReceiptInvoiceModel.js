const receiptInvoiceModel = {
  model: {
    receiptId: "",
    receipt: null,
    invoiceId: "",
    invoice: null,
    amount: "",
    amountRefunded: "",

    clear() {
      this.receiptId = "";
      this.receipt = null;
      this.invoiceId = "";
      this.invoice = null;
      this.amount = "";
      this.amountRefunded = "";
    },
    copy(obj) {
      this.receipt = obj.receipt;
      this.invoice = obj.invoice;
      this.amount = obj.amount;
      this.amountRefunded = obj.amountRefunded;
    },
  },
  path: "receiptinvoices",
  rules: {
    receipt: [(v) => !!v || "Receipt is required"],
    invoice: [(v) => !!v || "Invoice is required"],
    amount: [(v) => !!v || "Amount is required"],
    amountRefunded: [(v) => !!v || "Amount Refunded is required"],
  },
};

export default receiptInvoiceModel;
