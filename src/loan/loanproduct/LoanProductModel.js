const loanProductModel = {
 loanProduct: {
productName:"",
interestRate:"",
interestMethod:"",
leastSecurityScale:"",
interestPeriod:{id: ""},
paymentPeriod:{id: ""},
maxPeriods:"",
minAmount:"",
maxAmount:"",
preRemainder:"",
fineDays:"",
redFlagAfter:"",
hidden:false,
loanProductCharges:[],

clear(){
this.productName="";
this.interestRate="";
this.interestMethod="";
this.leastSecurityScale="";
this.interestPeriod={id: ""};
this.paymentPeriod={id: ""};
this.maxPeriods="";
this.minAmount="";
this.maxAmount="";
this.preRemainder="";
this.fineDays="";
this.redFlagAfter="";
this.hidden=false;
this.loanProductCharges=[];
}
},
path:"loanproducts"}

export default loanProductModel;
