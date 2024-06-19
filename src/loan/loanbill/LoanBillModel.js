import funcs from "../../utils/funcs";
const loanBillModel = {
 loanBill: {
loan:{id: ""},
billDate:funcs.today(),
balance:"",
amount:"",
entryMode:"",
loanBillDetails:[],
loanId: "",
name:"",

clear(){
this.loan={id: ""};
this.billDate=funcs.today();
this.balance="";
this.amount="";
this.entryMode="";
this.loanBillDetails=[];
this.loanId= "";
this.name="";
}
},
path:"loanbills"}

export default loanBillModel;
