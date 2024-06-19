const expenseModel = {
 expense: {
tranDate:"",
bankAccountType:"",
bankAccountId:"",
baseAmount:"",
currencyId:"",
currencyObj:null,
exchangeRate:"",
amount:"",
amountWords:"",
description:"",
expenseDetails:[],

clear(){
this.tranDate="";
this.bankAccountType="";
this.bankAccountId="";
this.baseAmount="";
this.currencyId="";
this.currencyObj=null;
this.exchangeRate="";
this.amount="";
this.amountWords="";
this.description="";
this.expenseDetails=[];
}
},
path:"expenses"}

export default expenseModel;
