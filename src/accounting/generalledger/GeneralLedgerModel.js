const generalLedgerModel = {
 generalLedger: {
financialPeriodId:"",
documentType:"",
documentNo:"",
accountId:"",
accountName:"",
accountType:"",
tranDate:"",
description:"",
amount:"",
debit:"",
credit:"",
balance:"",

clear(){
this.financialPeriodId="";
this.documentType="";
this.documentNo="";
this.accountId="";
this.accountName="";
this.accountType="";
this.tranDate="";
this.description="";
this.amount="";
this.debit="";
this.credit="";
this.balance="";
}
},
path:"generalledgers"}

export default generalLedgerModel;
