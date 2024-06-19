const journalModel = {
 journal: {
financialPeriodId:"",
tranDate:"",
description:"",
referenceNo:"",
currencyObj: null,
currencyId: "",
baseAmount:"",
exchangeRate:"",
amount:"",
amountWords:"",
journalDetails:[],

clear(){
this.tranDate="";
this.description="";
this.referenceNo="";
this.currencyId="";
this.currencyObj = null,
this.baseAmount="";
this.exchangeRate="";
this.amount="";
this.amountWords="";

this.journalDetails=[];
}
},
path:"journals"}

export default journalModel;
