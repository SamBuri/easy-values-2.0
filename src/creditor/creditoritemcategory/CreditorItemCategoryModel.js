const creditorItemCategoryModel = {
 model: {
creditorGroupId:"",
itemCategoryId:"",
expenseAccountId:"",
enforceBudget:false,
monthlyAmount:"",
alertPercentage:"",

clear(){
this.creditorGroupId="";
this.itemCategoryId="";
this.expenseAccountId="";
this.enforceBudget=false;
this.monthlyAmount="";
this.alertPercentage="";
},
copy(obj){
this.id=obj.id;
this.creditorGroupId = obj.creditorGroup.id;
this.itemCategoryId = obj.itemCategoryId;
this.expenseAccountId = obj.expenseAccountId;
this.enforceBudget = obj.enforceBudget;
this.monthlyAmount = obj.monthlyAmount;
this.alertPercentage = obj.alertPercentage;

},
printOptions(){let data = [];
data.push({ text: "Creditor Group", value: this.creditorItemCategory.creditorGroup.displayKey });
data.push({ text: "Item Category Id", value: this.creditorItemCategory.itemCategoryId });
data.push({ text: "Expense Account", value: this.creditorItemCategory.expenseAccountId });
data.push({ text: "Monthly Amount", value: this.creditorItemCategory.monthlyAmount });
data.push({ text: "Alert Percentage", value: this.creditorItemCategory.alertPercentage });

 return {
        data: data,
        startXPos: 10,
        startYPos: 25,
        lineBreak: 4,
        hSpace: 50,
        vSpace: 10,
        title: "Creditor Item Category"

      };
},


},
path:"creditoritemcategories",
rules: {
creditorGroupId:[(v) => !!v || "Creditor Group is required",
 ],itemCategoryId:[(v) => !!v || "Item Category Id is required",
 ],expenseAccountId:[(v) => !!v || "Expense Account is required",
 ],monthlyAmount:[(v) => !!v || "Monthly Amount is required",
 ],alertPercentage:[(v) => !!v || "Alert Percentage is required",
 ],

}
}

export default creditorItemCategoryModel;
