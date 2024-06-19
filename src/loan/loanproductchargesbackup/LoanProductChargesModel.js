const loanProductChargesModel = {
    loanProductCharges: {
        loanProduct: { id: "" },
        itemObj: {},
        itemId: "",
        itemName: "",
        determiningMethod: "",
        charge: "",
        recurrent: false,

        clear() {
            this.loanProduct = { id: "" };
            this.itemObj ={};
            this.itemId = "";
            this.itemName = "";
            this.determiningMethod = "";
            this.charge = "";
            this.recurrent = false;
        }
    },
    path: "loanproductchargess"
}

export default loanProductChargesModel;
