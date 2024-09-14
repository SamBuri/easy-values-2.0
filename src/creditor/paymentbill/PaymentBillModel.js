const paymentBillModel = {
 model: {
paymentId:"",
billId:"",
discount:"",
amount:"",
amountRefunded:"",

clear(){
this.paymentId="";
this.billId="";
this.discount="";
this.amount="";
this.amountRefunded="";
},
copy(obj){
this.id=obj.id;
this.paymentId = obj.payment.id;
this.billId = obj.bill.id;
this.discount = obj.discount;
this.amount = obj.amount;
this.amountRefunded = obj.amountRefunded;

},
printOptions(){let data = [];
data.push({ text: "Payment", value: this.paymentBill.payment.displayKey });
data.push({ text: "Bill", value: this.paymentBill.bill.displayKey });
data.push({ text: "Discount", value: this.paymentBill.discount });
data.push({ text: "Amount", value: this.paymentBill.amount });
data.push({ text: "AmountRefunded", value: this.paymentBill.amountRefunded });

 return {
        data: data,
        startXPos: 10,
        startYPos: 25,
        lineBreak: 4,
        hSpace: 50,
        vSpace: 10,
        title: "Payment Bill"

      };
},


},
path:"paymentbills",
rules: {
paymentId:[(v) => !!v || "Payment is required",
 ],billId:[(v) => !!v || "Bill is required",
 ],discount:[(v) => !!v || "Discount is required",
 ],amount:[(v) => !!v || "Amount is required",
 ],amountRefunded:[(v) => !!v || "AmountRefunded is required",
 ],

}
}

export default paymentBillModel;
