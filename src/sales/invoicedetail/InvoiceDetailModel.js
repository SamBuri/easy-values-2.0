const invoiceDetailModel = {
    invoiceDetails: {
        invoice: { id: "" },
        itemObj: { id: "", itemName: "" },
        itemId: { id: "" },
        itemName: "",
        sourceId: "",
        measureObj: {},
        measure: "",
        measureQuantity: "",
        measureSize: "",
        unitMeasure: "",
        quantity: "",
        unitCost: "",
        unitPrice: "",
        discount: 0,
        amount: "",
        location: "",

        clear() {
            this.invoice = { id: "" };
            this.itemId = { id: "" };
            this.itemObj = { id: "", itemName: "" };
            this.itemName = "";
            this.sourceId = "";
            this.measureObj={};
            this.measure = "";
            this.measureQuantity = "";
            this.measureSize = "";
            this.unitMeasure = "";
            this.quantity = "";
            this.unitCost = "";
            this.unitPrice = "";
            this.discount = 0
            this.amount = "";
            this.location = "";
        }
    },
    path: "invoicedetailss"
}

export default invoiceDetailModel;
