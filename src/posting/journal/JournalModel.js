
const journalModel = {
    journal: {
        financialPeriod: { id: "" },
        tranDate: "",
        description: "",
        documentType: "",
        documentNo: "",
        referenceNo: "",
        currencyObj: { id: "" },
        currencyId:"",
        baseAmount: "",
        exchangeRate: "",
        amount: "",
        amountWords: "",
        entryMode: "",
        journalDetails: [],

        clear() {
            this.financialPeriod = { id: "" };
            this.tranDate = "";
            this.description = "";
            this.documentType = "";
            this.documentNo = "";
            this.referenceNo = "";
            this.currencyObj = { id: "" };
            this.currencyId ="";
            this.baseAmount = "";
            this.exchangeRate = "";
            this.amount = "";
            this.amountWords = "";
            this.entryMode = "";
            this.journalDetails = [];
        }
    },
    path: "journals"
}

export default journalModel;
