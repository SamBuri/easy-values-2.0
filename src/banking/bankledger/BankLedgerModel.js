const bankLedgerModel = {
 bankLedger: {
bankAccountId:"",
bankAccountName:"",
documentType:"",
documentNo:"",
tranDate:"",
description:"",
amount:"",
debit:"",
credit:"",
balance:"",

clear(){
this.bankAccountId="";
this.bankAccountName="";
this.documentType="";
this.documentNo="";
this.tranDate="";
this.description="";
this.amount="";
this.debit="";
this.credit="";
this.balance="";
}
},
path:"bankledgers"}

export default bankLedgerModel;
