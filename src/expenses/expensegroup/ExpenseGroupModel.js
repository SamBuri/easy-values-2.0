const expenseGroupModel = {
 expenseGroup: {
itemCategoryId:"",
glAccountId:"",
enforceBudget:false,
monthlyBudget:"",
alertPercent:"",

clear(){
this.itemCategoryId="";
this.glAccountId="";
this.enforceBudget=false;
this.monthlyBudget="";
this.alertPercent="";
}
},
path:"expensegroups"}

export default expenseGroupModel;
