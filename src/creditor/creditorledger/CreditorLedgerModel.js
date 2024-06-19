const creditorLedgerModel = {
 creditorLedger: {
creditorId:"",
creditorName:"",
tranDate:"",
documentType:"",
documentNo:"",
description:"",
amount:"",
debit:"",
credit:"",
balance:"",

clear(){
this.creditorId="";
this.creditorName="";
this.tranDate="";
this.documentType="";
this.documentNo="";
this.description="";
this.amount="";
this.debit="";
this.credit="";
this.balance="";
}
},
path:"creditorledgers"}

export default creditorLedgerModel;
