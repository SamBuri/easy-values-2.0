const itemModel = {
  model: {
    itemCategoryId: "",
    itemCategory: null,
    itemName: "",
    unitCost: "",
    unitPrice: "",
    measureGroupId: "",
    measureGroup: null,
    editUnitCost: false,
    editUnitPrice: false,
    editQuantity: false,
    hidden: false,
    itemPriceGroups: [],

    clear() {
      this.itemCategoryId = "";
      this.itemCategory = null;
      this.itemName = "";
      this.unitCost = "";
      this.unitPrice = "";
      this.measureGroupId = "";
      this.measureGroup = null;
      this.editUnitCost = false;
      this.editUnitPrice = false;
      this.editQuantity = false;
      this.hidden = false;
      this.itemPriceGroups = [];
    },
    copy(obj) {
      this.id = obj.id;
      this.itemCategoryId = obj.itemCategory.id;
      this.itemName = obj.itemName;
      this.unitCost = obj.unitCost;
      this.unitPrice = obj.unitPrice;
      this.measureGroup = obj.measureGroup.id;
      this.editUnitCost = obj.editUnitCost;
      this.editUnitPrice = obj.editUnitPrice;
      this.editQuantity = obj.editQuantity;
      this.hidden = obj.hidden;
      this.itemPriceGroups = obj.itemPriceGroups;
    },
    printOptions() {
      let data = [];
      data.push({ text: "Item Category", value: this.item.itemCategory });
      data.push({ text: "Item Name", value: this.item.itemName });
      data.push({ text: "Unit Cost", value: this.item.unitCost });
      data.push({ text: "Unit Price", value: this.item.unitPrice });
      data.push({ text: "Measure Group", value: this.item.measureGroup });
      data.push({
        text: "Item Price Groups",
        value: this.item.itemPriceGroups,
      });

      return {
        data: data,
        startXPos: 10,
        startYPos: 25,
        lineBreak: 4,
        hSpace: 50,
        vSpace: 10,
        title: "Item",
      };
    },
  },
  path: "items",
  rules: {
    itemCategory: [(v) => !!v || "Item Category is required"],
    itemName: [
      (v) => !!v || "Item Name is required",
      (v) => v.length < 100 || "Item Name length must be less or equal to 100",
    ],
    // unitCost: [(v) => !!v || "Unit Cost is required"],
    // unitPrice: [(v) => !!v || "Unit Price is required"],
    measureGroup: [(v) => !!v || "Measure Group is required"],
    itemPriceGroups: [(v) => !!v || "Item Price Groups is required"],
  },
};

export default itemModel;
