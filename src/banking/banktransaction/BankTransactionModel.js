const bankTransactionModel = {
 model: {
bankAccountId:"",
bankAccount:null,

balance:"",
tranDate:null,
accountAction:"",
notes:"",
amount:"",

clear(){
this.bankAccountId="";
this.bankAccount=null;
this.balance="";
this.tranDate=null;
this.accountAction="";
this.notes="";
this.amount="";
},
copy(obj){
this.id=obj.id;
this.bankAccount = obj.bankAccount.Id;

this.balance = obj.balance;
this.tranDate = obj.tranDate;
this.accountAction = obj.accountAction;
this.notes = obj.notes;
this.amount = obj.amount;

},
printOptions(){let data = [];
data.push({ text: "Bank Account", value: this.bankTransaction.bankAccount.displayKey });
data.push({ text: "Balance", value: this.bankTransaction.balance });
data.push({ text: "Tran Date", value: this.bankTransaction.tranDate });
data.push({ text: "Account Action", value: this.bankTransaction.accountAction });
data.push({ text: "Notes", value: this.bankTransaction.notes });
data.push({ text: "Amount", value: this.bankTransaction.amount });

 return {
        data: data,
        startXPos: 10,
        startYPos: 25,
        lineBreak: 4,
        hSpace: 50,
        vSpace: 10,
        title: "Bank Transaction"

      };
},

},
path:"banktransactions",
rules: {
bankAccount:[(v) => !!v || "Bank Account is required",
 ],currencyId:[(v) => !!v || "Currency is required",
 ],balance:[(v) => !!v || "Balance is required",
 ],tranDate:[(v) => !!v || "Tran Date is required",
 ],accountAction:[(v) => !!v || "Account Action is required",
 ],notes:[(v) => !!v || "Notes is required",
(v) => v.length < 100 || "Notes length must be less or equal to 100", ],amount:[(v) => !!v || "Amount is required",
 ],

}
}

export default bankTransactionModel;
