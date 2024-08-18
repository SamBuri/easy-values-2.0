const itemCategoryModel = {
  model: {

    itemCategoryId: "",
    itemGroup: "",
    billable: false,
    expensable: false,
    hidden: false,

    clear() {
      this.id='';
      this.itemCategoryId = "";
      this.itemGroup = "";
      this.billable = false;
      this.expensable = false;
      this.hidden = false;
    },
    copy(obj) {
      this.id = obj.id;
      this.itemCategoryId = obj.itemCategoryId;
      this.itemGroup = obj.itemGroup;
      this.billable = obj.billable;
      this.expensable = obj.expensable;
      this.hidden = obj.hidden;
    },
  },
  copy(obj){
    this.model = Object.assign({}, obj);
  },
  path: "itemcategories",
  rules:{
    itemCategory: [(v) => !!v || "Item Category is required",
    (v) => v.length < 40 || "Item Category length must be less or equal to 40",],
    itemGroup: [(v) => !!v || "Item Group is required", ]
  },
};

export default itemCategoryModel;
