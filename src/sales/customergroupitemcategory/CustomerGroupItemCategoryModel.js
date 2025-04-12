const customerGroupItemCategoryModel = {
 model: {
name:"",
customerGroupId:"",
itemCategoryId:"",
salesAccountId:"",
expenseAccountId:"",

clear(){
this.name="";
this.customerGroupId="";
this.itemCategoryId="";
this.salesAccountId="";
this.expenseAccountId="";
},
copy(obj){
this.id=obj.id;
this.name = obj.name;
this.customerGroupId = obj.customerGroup.id;
this.itemCategoryId = obj.itemCategoryId;
this.salesAccountId = obj.salesAccountId;
this.expenseAccountId = obj.expenseAccountId;

},
printOptions(){let data = [];
data.push({ text: "Name", value: this.customerGroupItemCategory.name });
data.push({ text: "Customer Group", value: this.customerGroupItemCategory.customerGroup.displayKey });
data.push({ text: "Item Category", value: this.customerGroupItemCategory.itemCategoryId });
data.push({ text: "Sales Account", value: this.customerGroupItemCategory.salesAccountId });
data.push({ text: "Expense Account", value: this.customerGroupItemCategory.expenseAccountId });

 return {
        data: data,
        startXPos: 10,
        startYPos: 25,
        lineBreak: 4,
        hSpace: 50,
        vSpace: 10,
        title: "Customer Group Item Category"

      };
},


},
path:"customergroupitemcategories",
rules: {
name:[(v) => !!v || "Name is required",
(v) => v.length < 100 || "Name length must be less or equal to 100", ],customerGroupId:[(v) => !!v || "Customer Group is required",
 ],itemCategoryId:[(v) => !!v || "Item Category is required",
 ],salesAccountId:[(v) => !!v || "Sales Account is required",
 ],expenseAccountId:[(v) => !!v || "Expense Account is required",
 ],

}
}

export default customerGroupItemCategoryModel;
