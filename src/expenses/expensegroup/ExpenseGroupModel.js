const expenseGroupModel = {
 model: {
itemCategoryId:"",
glAccountId:"",
equityAccountId:"",
enforceBudget:false,
monthlyBudget:"",
alertPercent:"",

clear(){
this.itemCategoryId="";
this.glAccountId="";
this.equityAccountId="";
this.enforceBudget=false;
this.monthlyBudget="";
this.alertPercent="";
},
copy(obj){
this.id=obj.id;
this.itemCategoryId = obj.itemCategoryId;
this.glAccountId = obj.glAccountId;
this.equityAccountId = obj.equityAccountId;
this.enforceBudget = obj.enforceBudget;
this.monthlyBudget = obj.monthlyBudget;
this.alertPercent = obj.alertPercent;

},
printOptions(){let data = [];
data.push({ text: "Item Category", value: this.expenseGroup.itemCategoryId });
data.push({ text: "Gl Account", value: this.expenseGroup.glAccountId });
data.push({ text: "Equity Account", value: this.expenseGroup.equityAccountId });
data.push({ text: "Monthly Budget", value: this.expenseGroup.monthlyBudget });
data.push({ text: "Alert Percent", value: this.expenseGroup.alertPercent });

 return {
        data: data,
        startXPos: 10,
        startYPos: 25,
        lineBreak: 4,
        hSpace: 50,
        vSpace: 10,
        title: "Expense Group"

      };
},


},
path:"expensegroups",
rules: {
itemCategoryId:[(v) => !!v || "Item Category is required",
 ],glAccountId:[(v) => !!v || "Gl Account is required",
 ],equityAccountId:[(v) => !!v || "Equity Account is required",
 ],monthlyBudget:[(v) => !!v || "Monthly Budget is required",
 ],alertPercent:[(v) => !!v || "Alert Percent is required",
 ],

}
}

export default expenseGroupModel;
