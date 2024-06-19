const investmentModel = {
 investment: {
shareholder:null,
tranDate:"",
shareType:null,
shareAction:"",
bankAccountType: "",
bankAccountId:"",
quantity: 1,
unitPrice:"",
amount:"",

clear(){
this.shareholder=null;
this.tranDate="";
this.shareType=null;
this.shareAction="";
this.bankAccountType = "";
this.bankAccountId="";
this.quantity=1;
this.unitPrice="";
this.amount="";
}
},
path:"investments"}

export default investmentModel;
