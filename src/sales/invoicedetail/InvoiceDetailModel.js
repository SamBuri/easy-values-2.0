const invoiceDetailModel = {
  model: {
    invoiceId: "",
    itemId: "",
    itemName: "",
    measure: "",
    measureQuantity: "",
    measureSize: "",
    unitMeasure: "",
    quantity: "",
    unitCost: 0,
    unitPrice: "0",
    discount: 0,
    amount: "",

    clear() {
      this.invoiceId = "";
      this.itemId = "";
      this.itemName = "";
      this.measure = "";
      this.measureQuantity = "";
      this.measureSize = "";
      this.unitMeasure = "";
      this.quantity = "";
      this.unitCost = 0,
      this.unitPrice = "0";
      this.discount = 0;
      this.amount = "";
    },
    copy(obj) {
      this.id = obj.id;
      this.invoiceId = obj.invoice.id;
      this.itemId = obj.itemId;
      this.itemName = obj.itemName;
      this.measure = obj.measure;
      this.measureQuantity = obj.measureQuantity;
      this.measureSize = obj.measureSize;
      this.unitMeasure = obj.unitMeasure;
      this.quantity = obj.quantity;
      this.unitCost = obj.unitCost;
      this.unitPrice = obj.unitPrice;
      this.discount = obj.discount;
      this.amount = obj.amount;

    },
    printOptions() {
      let data = [];
      data.push({ text: "Invoice", value: this.invoiceDetail.invoice.displayKey });
      data.push({ text: "Item", value: this.invoiceDetail.itemId });
      data.push({ text: "Item Name", value: this.invoiceDetail.itemName });
      data.push({ text: "Measure", value: this.invoiceDetail.measure });
      data.push({ text: "Measure Quantity", value: this.invoiceDetail.measureQuantity });
      data.push({ text: "Measure Size", value: this.invoiceDetail.measureSize });
      data.push({ text: "Unit Measure", value: this.invoiceDetail.unitMeasure });
      data.push({ text: "Quantity", value: this.invoiceDetail.quantity });
      data.push({ text: "UnitCost", value: this.invoiceDetail.unitCost });
      data.push({ text: "UnitPrice", value: this.invoiceDetail.unitPrice });
      data.push({ text: "Discount", value: this.invoiceDetail.discount });
      data.push({ text: "Amount", value: this.invoiceDetail.amount });

      return {
        data: data,
        startXPos: 10,
        startYPos: 25,
        lineBreak: 4,
        hSpace: 50,
        vSpace: 10,
        title: "Invoice Detail"

      };
    },


  },
  path: "invoicedetails",
  rules: {
     itemId: [(v) => !!v || "Item is required",
    ], itemName: [(v) => !!v || "Item Name is required"], 
    measure: [(v) => !!v || "Measure is required",
    (v) => v.length < 100 || "Measure length must be less or equal to 100",], 
    measureQuantity: [(v) => !!v || "Measure Quantity is required",
    ], measureSize: [(v) => !!v || "Measure Size is required",
    ], unitMeasure: [(v) => !!v || "Unit Measure is required",
    (v) => v.length < 100 || "Unit Measure length must be less or equal to 100",], 
    quantity: [(v) => !!v || "Quantity is required",
    ], unitCost: [], 
    unitPrice: [], 
    discount: [],
    amount: [],

  }
}

export default invoiceDetailModel;
