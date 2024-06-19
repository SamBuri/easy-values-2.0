
const expenseDetailModel = {
    expenseDetails: {
        expenseGroup: { id:"", itemCategory:"" },
        item: { id:"", itemName:"" },
        itemId: "",
        itemName: "",
        quantity: 1,
        baseUnitCost: "",
        unitCost: "",
        amount: "",
        baseAmount: "",

        clear() {
            this.expenseGroup = { id:"", itemCategory:"" };
            this.item = { id:"", itemName:""};
            this.itemId = "";
            this.itemName = "";
            this.quantity = 1;
            this.baseUnitCost="";
            this.unitCost = "";
            this.amount = "";
            this.baseAmount
        }
    },
    path: "expensedetails"
}

export default expenseDetailModel;
