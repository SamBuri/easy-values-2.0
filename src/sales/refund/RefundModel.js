const refundModel = {
    refund: {
        receiptId: "",
        customerName: "",
        receipt: {
            receiptDate: "",
            customerId: "",
            customerName: "",
            bankAccountType: "",
            bankAccountId: "",
            totalBill: "",
            amountTendered: "",
            currencyObj: {},
            currencyId: "",
            exchangeRate: "",
            changeGiven: "",
            amountPaid: "",
            discount: "",
            withholdingTax: "",
            amountReceived: "",
            amountWords: "",
        },
        refundDate: "",
        bankAccountType: "",
        bankAccount: {},
        bankAccountId: "",
        refundType: "",
        creditNoteId: "",
        amount: "",
        notes: "",
        amountWords: "",

        clear() {
            this.receipt = {
                receiptDate: "",
                customerId: "",
                customerName: "",
                bankAccountType: "",
                bankAccountId: "",
                totalBill: "",
                amountTendered: "",
                currencyObj: {},
                currencyId: "",
                exchangeRate: "",
                changeGiven: "",
                amountPaid: "",
                discount: "",
                withholdingTax: "",
                amountReceived: "",
                amountWords: "",
            };
            this.receiptId = "";
            this.customerName = "";
            this.receipt = { id: "" };
            this.refundDate = "";
            this.bankAccountType = "";
            this.bankAccount = {};
            this.bankAccountId = "";
            this.refundType = "";
            this.creditNoteId = "";
            this.amount = "";
            this.notes = "";
            this.amountWords = "";
        }
    },
    path: "refunds"
}

export default refundModel;
