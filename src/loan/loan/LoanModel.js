import funcs from "../../utils/funcs";
const loanModel = {
 loan: {
loanApplication:{id: ""},
principle:"",
loanDate:funcs.today(),
bankAccountType:"",
accountId:{id: ""},
balance:0,
nextPaymentDate:"",
productName: "",
paymentInterval: "",
loanBillDetails:[],

clear(){
this.loanApplication={id: ""};
this.principle="";
this.loanDate=funcs.today();
this.bankAccountType="";
this.accountId={id: ""};
this.balance=0;
this.nextPaymentDate="";
this.productName = "";
this.paymentInterval = "";
this.loanBillDetails=[];
}
},
path:"loans"}

export default loanModel;
