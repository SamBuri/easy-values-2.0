const expensesModel = {
 model: {
tranDate:null,
bankAccountType:"",
bankAccountId:"",
bankAccount:"",
amountTendered:"",
currencyId:"",
exchangeRate:"",
amount:"",
amountWords:"",
description:"",
expenseDetails:[],

clear(){
this.tranDate=null;
this.bankAccountType="";
this.bankAccountId="";
this.bankAccount="";
this.amountTendered="";
this.currencyId="";
this.exchangeRate="";
this.amount="";
this.amountWords="";
this.description="";
this.expenseDetails=[];
},
copy(obj){
this.id=obj.id;
this.tranDate = obj.tranDate;
this.bankAccountType = obj.bankAccountType;
this.bankAccountId = obj.bankAccountId;
this.bankAccount = obj.bankAccount;
this.amountTendered = obj.amountTendered;
this.currencyId = obj.currencyId;
this.exchangeRate = obj.exchangeRate;
this.amount = obj.amount;
this.amountWords = obj.amountWords;
this.description = obj.description;
this.expenseDetails = obj.expenseDetails;

},
printOptions(){let data = [];
data.push({ text: "Tran Date", value: this.expenses.tranDate });
data.push({ text: "Bank AccountType", value: this.expenses.bankAccountType.displayKey });
data.push({ text: "Bank Account Id", value: this.expenses.bankAccountId });
data.push({ text: "BankAccount", value: this.expenses.bankAccount });
data.push({ text: "Amount Tendered", value: this.expenses.amountTendered });
data.push({ text: "Currency Id", value: this.expenses.currencyId });
data.push({ text: "Exchange Rate", value: this.expenses.exchangeRate });
data.push({ text: "Amount", value: this.expenses.amount });
data.push({ text: "Amount Words", value: this.expenses.amountWords });
data.push({ text: "Description", value: this.expenses.description });
data.push({ text: "Expense Details", value: this.expenses.expenseDetails.displayKey });

 return {
        data: data,
        startXPos: 10,
        startYPos: 25,
        lineBreak: 4,
        hSpace: 50,
        vSpace: 10,
        title: "Expenses"

      };
},


},
path:"expenseses",
rules: {
tranDate:[(v) => !!v || "Tran Date is required",
 ],bankAccountType:[(v) => !!v || "Bank AccountType is required",
 ],bankAccountId:[(v) => !!v || "Bank Account Id is required",
 ],bankAccount:[(v) => !!v || "BankAccount is required",
(v) => v.length < 100 || "BankAccount length must be less or equal to 100", ],amountTendered:[(v) => !!v || "Amount Tendered is required",
 ],currencyId:[(v) => !!v || "Currency Id is required",
 ],exchangeRate:[(v) => !!v || "Exchange Rate is required",
 ],amount:[(v) => !!v || "Amount is required",
 ],amountWords:[(v) => !!v || "Amount Words is required",
(v) => v.length < 100 || "Amount Words length must be less or equal to 100", ],description:[(v) => !!v || "Description is required",
(v) => v.length < 200 || "Description length must be less or equal to 200", ],expenseDetails:[(v) => !!v || "Expense Details is required",
 ],

}
}

export default expensesModel;
