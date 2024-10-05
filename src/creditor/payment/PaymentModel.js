const paymentModel = {
 model: {
creditorId:"",
name:"",
amoundDue:"",
payDate:null,
bankAccountId:"",
bankAccountType:"",
balance:"",
baseAmount:"",
discount:"",
withholdingTax:"",
currency:"",
exchangeRate:"",
amount:"",
amountWords:"",
amountPaid:"",
description:"",
referenceNo:"",
paymentBills:[],

clear(){
this.creditorId="";
this.name="";
this.amoundDue="";
this.payDate=null;
this.bankAccountId="";
this.bankAccountType="";
this.balance="";
this.baseAmount="";
this.discount="";
this.withholdingTax="";
this.currency="";
this.exchangeRate="";
this.amount="";
this.amountWords="";
this.amountPaid="";
this.description="";
this.referenceNo="";
this.paymentBills=[];
},
copy(obj){
this.id=obj.id;
this.creditorId = obj.creditor.id;
this.name = obj.name;
this.amoundDue = obj.amoundDue;
this.payDate = obj.payDate;
this.bankAccountId = obj.bankAccountId;
this.bankAccountType = obj.bankAccountType;
this.balance = obj.balance;
this.baseAmount = obj.baseAmount;
this.discount = obj.discount;
this.withholdingTax = obj.withholdingTax;
this.currency = obj.currency;
this.exchangeRate = obj.exchangeRate;
this.amount = obj.amount;
this.amountWords = obj.amountWords;
this.amountPaid = obj.amountPaid;
this.description = obj.description;
this.referenceNo = obj.referenceNo;
this.paymentBills = obj.paymentBills;

},
printOptions(){let data = [];
data.push({ text: "Creditor", value: this.payment.creditor.displayKey });
data.push({ text: "Name", value: this.payment.name });
data.push({ text: "Amount Due", value: this.payment.amoundDue });
data.push({ text: "Pay Date", value: this.payment.payDate });
data.push({ text: "Bank Account", value: this.payment.bankAccountId });
data.push({ text: "Bank Account Type", value: this.payment.bankAccountType });
data.push({ text: "Balance", value: this.payment.balance });
data.push({ text: "Base Amount", value: this.payment.baseAmount });
data.push({ text: "Discount", value: this.payment.discount });
data.push({ text: "Withholding Tax", value: this.payment.withholdingTax });
data.push({ text: "Currency", value: this.payment.currency });
data.push({ text: "Exchange Rate", value: this.payment.exchangeRate });
data.push({ text: "Amount", value: this.payment.amount });
data.push({ text: "Amount Words", value: this.payment.amountWords });
data.push({ text: "Amount Paid", value: this.payment.amountPaid });
data.push({ text: "Description", value: this.payment.description });
data.push({ text: "Reference No", value: this.payment.referenceNo });
data.push({ text: "Payment Bills", value: this.payment.paymentBills.displayKey });

 return {
        data: data,
        startXPos: 10,
        startYPos: 25,
        lineBreak: 4,
        hSpace: 50,
        vSpace: 10,
        title: "Payment"

      };
},


},
path:"payments",
rules: {
creditorId:[(v) => !!v || "Creditor is required",
 ],name:[(v) => !!v || "Name is required",
(v) => v.length < 100 || "Name length must be less or equal to 100", ],amoundDue:[(v) => !!v || "Amount Due is required",
 ],payDate:[(v) => !!v || "Pay Date is required",
 ],bankAccountId:[(v) => !!v || "Bank Account is required",
 ],bankAccountType:[(v) => !!v || "Bank Account Type is required",
(v) => v.length < 100 || "Bank Account Type length must be less or equal to 100", ],balance:[(v) => !!v || "Balance is required",
 ],baseAmount:[(v) => !!v || "Base Amount is required",
 ],discount:[(v) => !!v || "Discount is required",
 ],withholdingTax:[(v) => !!v || "Withholding Tax is required",
 ],currency:[(v) => !!v || "Currency is required",
(v) => v.length < 100 || "Currency length must be less or equal to 100", ],exchangeRate:[(v) => !!v || "Exchange Rate is required",
 ],amount:[(v) => !!v || "Amount is required",
 ],amountWords:[(v) => !!v || "Amount Words is required",
(v) => v.length < 200 || "Amount Words length must be less or equal to 200", ],amountPaid:[(v) => !!v || "Amount Paid is required",
 ],description:[(v) => !!v || "Description is required",
(v) => v.length < 200 || "Description length must be less or equal to 200", ],referenceNo:[(v) => !!v || "Reference No is required",
(v) => v.length < 100 || "Reference No length must be less or equal to 100", ],paymentBills:[(v) => !!v || "Payment Bills is required",
 ],

}
}

export default paymentModel;
