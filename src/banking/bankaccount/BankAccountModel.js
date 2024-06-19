const bankAccountModel = {
 bankAccount: {
bankAccountName:"",
bankAccountType:"",
accountNo:"",
bankName:"",
branchName:"",
currencyId:"",
glAccountId:"",
chargesGlAccountId:"",
phoneNo:"",
email:"",
address:"",
isDefault:false,
hidden:false,
balance:"",

clear(){
this.bankAccountName="";
this.bankAccountType="";
this.accountNo="";
this.bankName="";
this.branchName="";
this.currencyId="";
this.glAccountId="";
this.chargesGlAccountId="";
this.phoneNo="";
this.email="";
this.address="";
this.isDefault=false;
this.hidden=false;
this.balance="";
}
},
path:"bankaccounts"}

export default bankAccountModel;
