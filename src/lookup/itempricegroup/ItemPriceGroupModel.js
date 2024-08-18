const itemPriceGroupModel = {
  model: {
    itemId: "",
    item: null,
    priceGroup: "",
    unitPrice: "",
    discount: "",

    clear() {
      this.itemId = "";
      this.item = null;
      this.priceGroup = "";
      this.unitPrice = "";
      this.discount = "";
    },
    copy(obj) {
      this.id = obj.id;
      this.item = obj.item.Id;
      this.priceGroup = obj.priceGroup;
      this.unitPrice = obj.unitPrice;
      this.discount = obj.discount;
    },
    printOptions() {
      let data = [];
      data.push({ text: "Item", value: this.itemPriceGroup.item.displayKey });
      data.push({ text: "Price Group", value: this.itemPriceGroup.priceGroup });
      data.push({ text: "Unit Price", value: this.itemPriceGroup.unitPrice });
      data.push({ text: "Discount", value: this.itemPriceGroup.discount });

      return {
        data: data,
        startXPos: 10,
        startYPos: 25,
        lineBreak: 4,
        hSpace: 50,
        vSpace: 10,
        title: "Item Price Group",
      };
    },
  },
  path: "itempricegroups",
  rules: {
    item: [(v) => !!v || "Item is required"],
    priceGroup: [(v) => !!v || "Price Group is required"],
    unitPrice: [],
    discount: [],
  },
};

export default itemPriceGroupModel;
