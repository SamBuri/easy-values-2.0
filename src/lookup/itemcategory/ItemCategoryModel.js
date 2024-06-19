const itemCategoryModel = {
  model: {
    itemCategory: "",
    itemGroup: "",
    billable: false,
    expensable: false,
    hidden: false,

    clear() {
      this.itemCategory = "";
      this.itemGroup = "";
      this.billable = false;
      this.expensable = false;
      this.hidden = false;
    },
    copy(obj) {
      this.itemCategory = obj.itemCategory;
      this.itemGroup = obj.itemGroup;
      this.billable = obj.billable;
      this.expensable = obj.expensable;
      this.hidden = obj.hidden;
    },
  },
  path: "itemcategories",
  rules:{
    itemCategory: [(v) => !!v || "Item Category is required",
    (v) => v.length < 40 || "Item Category length must be less or equal to 40",],
    itemGroup: [(v) => !!v || "Item Group is required", ]
  },
};

export default itemCategoryModel;
