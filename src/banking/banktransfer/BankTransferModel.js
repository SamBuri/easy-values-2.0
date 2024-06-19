import funcs from "../../utils/funcs";
const bankTransferModel = {
    bankTransfer: {
        fromAccountType: "",
        fromAccount: null,
        fromCurrency: "",
        fromBalance: 0,
        toAccountType: "",
        toAccount: null,
        toCurrency: "",
        toBalance: 0,
        referenceNo: "",
        exchangeRate: "",
        amountTendered: "",
        transferCharge: 0,
        amount: "",
        transferDate: funcs.today(),
        notes: "",

        clear() {
            this.fromAccountType = "";
            this.fromAccount = null;
            this.fromCurrency = "";
            this.notesfromBalance = 0;
            this.toAccountType = "";
            this.toAccount = null;
            this.toCurrency = "";
            this.toBalance = 0;
            this.referenceNo = "";
            this.exchangeRate = "";
            this.amountTendered = "";
            this.transferCharge = 0;
            this.amount = "";
            this.transferDate = funcs.today();
            this.notes = "";
        }
    },
    path: "banktransfers"
}

export default bankTransferModel;
