const loanBillModel = {
 model: {
loanId:"",
billDate:new Date(),
balance:"",
amount:"",
loanBillDetails:[],

clear(){
this.loanId="";
this.billDate=new Date();
this.balance="";
this.amount="";
this.loanBillDetails=[];
},
copy(obj){
this.id=obj.id;
this.loanId = obj.loan.id;
this.billDate = obj.billDate;
this.balance = obj.balance;
this.amount = obj.amount;
this.loanBillDetails = obj.loanBillDetails;

},
printOptions(){let data = [];
data.push({ text: "Loan", value: this.loanBill.loan.displayKey });
data.push({ text: "Bill Date", value: this.loanBill.billDate });
data.push({ text: "Balance", value: this.loanBill.balance });
data.push({ text: "Amount", value: this.loanBill.amount });
data.push({ text: "Loan Bill Details", value: this.loanBill.loanBillDetails.displayKey });

 return {
        data: data,
        startXPos: 10,
        startYPos: 25,
        lineBreak: 4,
        hSpace: 50,
        vSpace: 10,
        title: "Loan Bill"

      };
},


},
path:"loanbills",
rules: {
loanId:[(v) => !!v || "Loan is required",
 ],billDate:[(v) => !!v || "Bill Date is required",
 ],balance:[
 ],amount:[(v) => !!v || "Amount is required",
 ],loanBillDetails:[(v) => !!v || "Loan Bill Details is required",
 ],

}
}

export default loanBillModel;
