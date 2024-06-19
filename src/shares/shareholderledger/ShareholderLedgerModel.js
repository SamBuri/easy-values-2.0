const shareholderLedgerModel = {
 shareholderLedger: {
shareholderId:"",
shareholderName:"",
tranDate:"",
documentType:"",
documentNo:"",
description:"",
shareTypeId:"",
shareType:"",
quantity:"",
amount:"",
debit:"",
credit:"",
qtyBalance:"",
balance:"",

clear(){
this.shareholderId="";
this.shareholderName="";
this.tranDate="";
this.documentType="";
this.documentNo="";
this.description="";
this.shareTypeId="";
this.shareType="";
this.quantity="";
this.amount="";
this.debit="";
this.credit="";
this.qtyBalance="";
this.balance="";
}
},
path:"shareholderledgers"}

export default shareholderLedgerModel;
