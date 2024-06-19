const billModel = {
 bill: {
tranDate:"",
creditorId:"",
creditor:null,
startDate:"",
endDate:"",
amount:"",
amountWords:"",
billItems:[],

clear(){
this.tranDate="";
this.creditorId="";
this.creditor=null;
this.startDate="";
this.endDate="";
this.amount="";
this.amountWords="";
this.billItems=[];
}
},
path:"bills"}

export default billModel;
