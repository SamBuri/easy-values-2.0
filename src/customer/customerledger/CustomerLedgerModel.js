const customerLedgerModel = {
 customerLedger: {
customerId:"",
customerName:"",
tranDate:"",
documentType:"",
documentNo:"",
description:"",
amount:"",
debit:"",
credit:"",
balance:"",

clear(){
this.customerId="";
this.customerName="";
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
path:"customerledgers"}

export default customerLedgerModel;
