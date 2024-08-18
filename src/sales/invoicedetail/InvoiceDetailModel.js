const invoiceDetailModel = {
  model: {
    invoiceId: "",
    invoice: null,
    itemId: "",
    itemName: "",
    measure: "",
    measureQuantity: "",
    measureSize: "",
    unitMeasure: "",
    quantity: "",
    unitCost: "",
    unitPrice: "",
    discount: "",
    amount: "",
    location: "",

    clear() {
      this.invoiceId = "";
      this.invoice = null;
      this.itemId = "";
      this.itemName = "";
      this.measure = "";
      this.measureQuantity = "";
      this.measureSize = "";
      this.unitMeasure = "";
      this.quantity = "";
      this.unitCost = "";
      this.unitPrice = "";
      this.discount = "";
      this.amount = "";
      this.location = "";
    },
    copy(obj) {
      this.invoice = obj.invoice;
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
      this.location = obj.location;
    },
    printOptions() {
      let data = [];
      data.push({ text: "Invoice", value: this.invoiceDetail.invoice });
      data.push({ text: "Item", value: this.invoiceDetail.itemId });
      data.push({ text: "Item Name", value: this.invoiceDetail.itemName });
      data.push({ text: "Source Id", value: this.invoiceDetail.sourceId });
      data.push({ text: "Measure", value: this.invoiceDetail.measure });
      data.push({
        text: "Measure Quantity",
        value: this.invoiceDetail.measureQuantity,
      });
      data.push({
        text: "Measure Size",
        value: this.invoiceDetail.measureSize,
      });
      data.push({
        text: "Unit Measure",
        value: this.invoiceDetail.unitMeasure,
      });
      data.push({ text: "Quantity", value: this.invoiceDetail.quantity });
      data.push({ text: "UnitCost", value: this.invoiceDetail.unitCost });
      data.push({ text: "UnitPrice", value: this.invoiceDetail.unitPrice });
      data.push({ text: "Discount", value: this.invoiceDetail.discount });
      data.push({ text: "Amount", value: this.invoiceDetail.amount });
      data.push({ text: "Location", value: this.invoiceDetail.location });

      return {
        data: data,
        startXPos: 10,
        startYPos: 25,
        lineBreak: 4,
        hSpace: 50,
        vSpace: 10,
        title: "InvoiceDetail",
      };
    },
  },
  path: "invoicedetails",
  rules: {
    invoice: [(v) => !!v || "Invoice is required"],
    itemId: [(v) => !!v || "Item is required"],
    itemName: [
      (v) => !!v || "Item Name is required",
      (v) => v.length < 100 || "Item Name length must be less or equal to 100",
    ],
    measure: [
      (v) => !!v || "Measure is required",
      (v) => v.length < 100 || "Measure length must be less or equal to 100",
    ],
    measureQuantity: [(v) => !!v || "Measure Quantity is required"],
    measureSize: [(v) => !!v || "Measure Size is required"],
    unitMeasure: [
      (v) => !!v || "Unit Measure is required",
      (v) =>
        v.length < 100 || "Unit Measure length must be less or equal to 100",
    ],
    quantity: [(v) => !!v || "Quantity is required"],
    unitCost: [(v) => !!v || "UnitCost is required"],
    unitPrice: [(v) => !!v || "UnitPrice is required"],
    discount: [(v) => !!v || "Discount is required"],
    amount: [
      (v) => !!v || "Amount is required",
      (v) => v.length < 100 || "Amount length must be less or equal to 100",
    ],
    location: [
      (v) => !!v || "Location is required",
      (v) => v.length < 100 || "Location length must be less or equal to 100",
    ],
  },
};

export default invoiceDetailModel;
