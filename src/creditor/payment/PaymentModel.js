const paymentModel = {
 model: {
creditorId:"",
name:"",
payDate:null,
bankAccountId:"",
bankAccountType:"",
baseAmount:"",
currencyId:"",
exchangeRate:"",
amount:"",
amountWords:"",
description:"",
referenceNo:"",
paymentBills:[],

clear(){
this.creditorId="";
this.name="";
this.payDate=null;
this.bankAccountId="";
this.bankAccountType="";
this.baseAmount="";
this.currencyId="";
this.exchangeRate="";
this.amount="";
this.amountWords="";
this.description="";
this.referenceNo="";
this.paymentBills=[];
},
copy(obj){
this.id=obj.id;
this.creditorId = obj.creditor.id;
this.name = obj.name;
this.payDate = obj.payDate;
this.bankAccountId = obj.bankAccountId;
this.bankAccountType = obj.bankAccountType;
this.baseAmount = obj.baseAmount;
this.currencyId = obj.currencyId;
this.exchangeRate = obj.exchangeRate;
this.amount = obj.amount;
this.amountWords = obj.amountWords;
this.description = obj.description;
this.referenceNo = obj.referenceNo;
this.paymentBills = obj.paymentBills;

},
printOptions(){let data = [];
data.push({ text: "Creditor", value: this.payment.creditor.displayKey });
data.push({ text: "Name", value: this.payment.name });
data.push({ text: "PayDate", value: this.payment.payDate });
data.push({ text: "Bank Account", value: this.payment.bankAccountId });
data.push({ text: "Bank Account Type", value: this.payment.bankAccountType });
data.push({ text: "Base Amount", value: this.payment.baseAmount });
data.push({ text: "Currency", value: this.payment.currencyId });
data.push({ text: "Exchange Rate", value: this.payment.exchangeRate });
data.push({ text: "Amount", value: this.payment.amount });
data.push({ text: "Amount Words", value: this.payment.amountWords });
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
(v) => v.length < 100 || "Name length must be less or equal to 100", ],payDate:[(v) => !!v || "PayDate is required",
 ],bankAccountId:[(v) => !!v || "Bank Account is required",
 ],bankAccountType:[(v) => !!v || "Bank Account Type is required",
(v) => v.length < 100 || "Bank Account Type length must be less or equal to 100", ],baseAmount:[(v) => !!v || "Base Amount is required",
 ],currencyId:[(v) => !!v || "Currency is required",
 ],exchangeRate:[(v) => !!v || "Exchange Rate is required",
 ],amount:[(v) => !!v || "Amount is required",
 ],amountWords:[(v) => !!v || "Amount Words is required",
(v) => v.length < 100 || "Amount Words length must be less or equal to 100", ],description:[(v) => !!v || "Description is required",
(v) => v.length < 100 || "Description length must be less or equal to 100", ],referenceNo:[(v) => !!v || "Reference No is required",
(v) => v.length < 100 || "Reference No length must be less or equal to 100", ],paymentBills:[(v) => !!v || "Payment Bills is required",
 ],

}
}

export default paymentModel;
