const loanBillDetailsModel = {
    loanBillDetails: {
        loanBill: { id: "" },
        itemId: "",
        charge: "",
        determiningMethod: "",

        clear() {
            this.loanBill = { id: "" };
            this.itemId = "";
            this.charge = "";
            this.determiningMethod = "";
        }
    },
    path: "loanbilldetailss"
}

export default loanBillDetailsModel;
