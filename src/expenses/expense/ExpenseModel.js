import funcs from "@/utils/funcs";
const expenseModel = {
 model: {
tranDate:funcs.today(),
bankAccountType:"",
bankAccountId:"",
baseAmount:"",
currencyId:"",
exchangeRate:"",
amount:"",
amountWords:"",
description:"",
expenseDetails:[],

clear(){
this.tranDate=funcs.today();
this.bankAccountType="";
this.bankAccountId="";
this.baseAmount="";
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
this.baseAmount = obj.baseAmount;
this.currencyId = obj.currencyId;
this.exchangeRate = obj.exchangeRate;
this.amount = obj.amount;
this.amountWords = obj.amountWords;
this.description = obj.description;
this.expenseDetails = obj.expenseDetails;

},
printOptions(){let data = [];
data.push({ text: "Tran Date", value: this.expense.tranDate });
data.push({ text: "Bank AccountType", value: this.expense.bankAccountType });
data.push({ text: "Bank Account", value: this.expense.bankAccountId });
data.push({ text: "Base Amount", value: this.expense.baseAmount });
data.push({ text: "Currency", value: this.expense.currencyId });
data.push({ text: "Exchange Rate", value: this.expense.exchangeRate });
data.push({ text: "Amount", value: this.expense.amount });
data.push({ text: "Amount Words", value: this.expense.amountWords });
data.push({ text: "Description", value: this.expense.description });
data.push({ text: "Expense Details", value: this.expense.expenseDetails.displayKey });

 return {
        data: data,
        startXPos: 10,
        startYPos: 25,
        lineBreak: 4,
        hSpace: 50,
        vSpace: 10,
        title: "Expense"

      };
},


},
path:"expenses",
rules: {
tranDate:[(v) => !!v || "Tran Date is required",
 ],bankAccountType:[(v) => !!v || "Bank AccountType is required",
 ],bankAccountId:[(v) => !!v || "Bank Account is required",
 ],baseAmount:[(v) => !!v || "Base Amount is required",
 ],currencyId:[(v) => !!v || "Currency is required",
 ],exchangeRate:[(v) => !!v || "Exchange Rate is required",
 ],amount:[(v) => !!v || "Amount is required",
 ],amountWords:[(v) => !!v || "Amount Words is required",
(v) => v.length < 200 || "Amount Words length must be less or equal to 200", ],description:[(v) => !!v || "Description is required",
(v) => v.length < 200 || "Description length must be less or equal to 200", ],expenseDetails:[(v) => !!v || "Expense Details is required",
 ],

}
}

export default expenseModel;
