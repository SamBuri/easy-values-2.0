const bankTransferModel = {
 model: {
fromAccountType:"",
fromAccount:"",
fromCurrencyId:"",
toAccountType:"",
toAccount:"",
toCurrencyId:"",
referenceNo:"",
exchangeRate:1,
amountTendered:"",
transferCharge:0,
amount:"",
transferDate:null,
notes:"",

clear(){
this.fromAccountType="";
this.fromAccount="";
this.fromCurrencyId="";
this.toAccountType="";
this.toAccount="";
this.toCurrencyId="";
this.referenceNo="";
this.exchangeRate=1;
this.amountTendered="";
this.transferCharge=0;
this.amount="";
this.transferDate=null;
this.notes="";
},
copy(obj){
this.id=obj.id;
this.fromAccountType = obj.fromAccountType;
this.fromAccount = obj.fromAccount.Id;
this.fromCurrencyId = obj.fromCurrencyId;
this.toAccountType = obj.toAccountType;
this.toAccount = obj.toAccount.Id;
this.toCurrencyId = obj.toCurrencyId.Id;
this.referenceNo = obj.referenceNo;
this.exchangeRate = obj.exchangeRate;
this.amountTendered = obj.amountTendered;
this.transferCharge = obj.transferCharge;
this.amount = obj.amount;
this.transferDate = obj.transferDate;
this.notes = obj.notes;

},

calculateAmount(){
   if(!(this.amountTendered && this.exchangeRate)) this.amount=0;
   else this.amount = this.amountTendered*this.exchangeRate;
},
printOptions(){let data = [];
data.push({ text: "From Account Type", value: this.bankTransfer.fromAccountType });
data.push({ text: "From Account", value: this.bankTransfer.fromAccount.displayKey });
data.push({ text: "From Currency", value: this.bankTransfer.fromCurrencyId });
data.push({ text: "To Account Type", value: this.bankTransfer.toAccountType });
data.push({ text: "To Account", value: this.bankTransfer.toAccount.displayKey });
data.push({ text: "To Currency", value: this.bankTransfer.toCurrencyId.displayKey });
data.push({ text: "Reference No", value: this.bankTransfer.referenceNo });
data.push({ text: "Exchange Rate", value: this.bankTransfer.exchangeRate });
data.push({ text: "Amount Tendered", value: this.bankTransfer.amountTendered });
data.push({ text: "Transfer Charge", value: this.bankTransfer.transferCharge });
data.push({ text: "Amount", value: this.bankTransfer.amount });
data.push({ text: "Transfer Date", value: this.bankTransfer.transferDate });
data.push({ text: "Notes", value: this.bankTransfer.notes });

 return {
        data: data,
        startXPos: 10,
        startYPos: 25,
        lineBreak: 4,
        hSpace: 50,
        vSpace: 10,
        title: "Bank Transfer"

      };
},

},
path:"banktransfers",
rules: {
fromAccountType:[(v) => !!v || "From Account Type is required",
 ],fromAccountId:[(v) => !!v || "From Account is required",
 ],fromCurrencyId:[(v) => !!v || "From Currency is required",
 ],toAccountType:[(v) => !!v || "To Account Type is required",
 ],toAccountId:[(v) => !!v || "To Account is required",
 ],toCurrencyId:[(v) => !!v || "To Currency is required",
 ],referenceNo:[],
 exchangeRate:[(v) => !!v || "Exchange Rate is required",
 ],amountTendered:[(v) => !!v || "Amount Tendered is required",
 ],transferCharge:[],
 amount:[(v) => !!v || "Amount is required",
 ],transferDate:[(v) => !!v || "Transfer Date is required",
 ],notes:[(v) => !!v || "Notes is required",
(v) => v.length < 200 || "Notes length must be less or equal to 200", ],

}
}

export default bankTransferModel;
