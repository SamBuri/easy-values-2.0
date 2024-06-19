import funcs from "../../utils/funcs";
const bankTransactionModel = {
    bankTransaction: {
        bankAccount: { id: "" },
        currency: "",
        balance: 0,
        tranDate: funcs.today(),
        accountAction: "Debit",
        notes: "",
        amount: "",

        clear() {
            this.bankAccount = { id: "" };
            this.currency = "";
            this.balance = 0;
            this.tranDate = funcs.today();
            this.accountAction = "Debit";
            this.notes = "";
            this.amount = "";
        }
    },
    path: "banktransactions"
}

export default bankTransactionModel;

231469