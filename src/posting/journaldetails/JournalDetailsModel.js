const journalDetailsModel = {
    journalDetails: {
        accountGroup: "",
        journal: { id: "" },
        account:  { id: "", accountName:"" },
        accountId: "",
        accountName:"",
        accountType: "",
        accountAction: "",
        amount: "",
        notes: "",

        clear() {
            this.accountGroup = "";
            this.journal = { id: "" };
            this.account= { id: "", accountName:"" };
            this.accountId = "";
            this.accountName ="";
            this.accountType = "";
            this.accountAction = "";
            this.amount = "";
            this.notes = "";
        }
    }
}

export default journalDetailsModel;
