const loanBillDetailModel = {
    loanBillDetail: {
        itemObj: null,
        itemId: "",
        itemName: "",
        determiningMethod: "",
        quantity: 1,
        unitCost: 0,
        unitPrice: "",
        amount: "",
        rawUnitCost: 0,
        rawUnitPrice: "",
        rawAmount: "",
      

        clear() {
           
            this.itemObj=null;
            this.itemId = "";
            this.itemName = "";
            this.determiningMethod = "";
            this.quantity = 1;
            this.unitCost = 0;
            this.unitPrice = "";
            this.amount = "";
            this.rawUnitCost= 0;         
            this.rawUnitPrice= "";
            this.rawAmount= "";
        }
    },
    path: "loanbilldetails"
}

export default loanBillDetailModel;
