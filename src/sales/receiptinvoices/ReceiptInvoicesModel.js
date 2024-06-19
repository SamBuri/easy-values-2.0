const receiptInvoicesModel = {
    receiptInvoices: {
        receipt: { id: "" },
        invoice: { id: "" },
        amount: "",
        invoiceAmount: 0,
        amountPaid: 0,
        amountRefunded: "",

        clear() {
            this.receipt = { id: "" };
            this.invoice = { id: "" };
            this.amount = "";
            this.invoiceAmount= 0;
            this.amountPaid= 0;
            this.amountRefunded = "";
        }
    },
    path: "receiptinvoicess"
}

export default receiptInvoicesModel;
