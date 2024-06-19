
const receiptModel = {

     receipt: {
        receiptDate: new Date(),
        customerId: "",
        customer: "",
        bankAccountType: "",
        bankAccountId: "",
        totalBill: "",
        amountTendered: "",
        currencyId: null,
        exchangeRate: "",
        changeGiven:0,
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
            this.exchangeRate = "";
            this.changeGiven = "";
            this.amountPaid = "";
            this.discount = 0;
            this.withholdingTax = 0;
            this.amountReceived = 0;
            this.amountWords = "";
            this.receiptInvoiceRequests = [];
        }


    },
    path: "receipts"
}

export default receiptModel;
