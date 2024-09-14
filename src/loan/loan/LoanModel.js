const loanModel = {
 model: {
loanApplicationId:"",
principle:"",
loanDate: new Date(),
accountId:"",
bankAccountType:"",
businessSectionId:"",
balance:"",
nextPaymentDate:null,
loanProduct:"",
appliedForAmount:"",
collateralCategory:"",
collateralDesc:"",
estimatedCollateralValue:"",

clear(){
this.loanApplicationId="";
this.principle="";
this.loanDate=new Date();
this.accountId="";
this.bankAccountType="";
this.businessSectionId="";
this.balance="";
this.nextPaymentDate=null;
this.loanProduct="";
this.appliedForAmount="";
this.collateralCategory="";
this.collateralDesc="";
this.estimatedCollateralValue="";
},
copy(obj){
this.id=obj.id;
this.loanApplicationId = obj.loanApplication.id;
this.principle = obj.principle;
this.loanDate = obj.loanDate;
this.accountId = obj.accountId;
this.bankAccountType = obj.bankAccountType;
this.businessSectionId = obj.customerTypeId;
this.balance = obj.balance;
this.nextPaymentDate = obj.nextPaymentDate;
this.loanProduct = obj.loanProduct;
this.appliedForAmount = obj.appliedForAmount;
this.collateralCategory = obj.collateralCategory;
this.collateralDesc = obj.collateralDesc;
this.estimatedCollateralValue = obj.estimatedCollateralValue;

},
printOptions(){let data = [];
data.push({ text: "Loan Application", value: this.loan.loanApplication.displayKey });
data.push({ text: "Principle", value: this.loan.principle });
data.push({ text: "Loan Date", value: this.loan.loanDate });
data.push({ text: "Account", value: this.loan.accountId });
data.push({ text: "Bank Account Type", value: this.loan.bankAccountType });
data.push({ text: "Business Section", value: this.loan.businessSectionId });
data.push({ text: "Balance", value: this.loan.balance });
data.push({ text: "Next Payment Date", value: this.loan.nextPaymentDate });
data.push({ text: "Loan Product", value: this.loan.loanProduct });
data.push({ text: "Applied For Amount", value: this.loan.appliedForAmount });
data.push({ text: "Collateral Category", value: this.loan.collateralCategory });
data.push({ text: "Collateral Desc", value: this.loan.collateralDesc });
data.push({ text: "Estimated Collateral Value", value: this.loan.estimatedCollateralValue });

 return {
        data: data,
        startXPos: 10,
        startYPos: 25,
        lineBreak: 4,
        hSpace: 50,
        vSpace: 10,
        title: "Loan"

      };
},


},
path:"loans",
rules: {
loanApplicationId:[(v) => !!v || "Loan Application is required",
 ],principle:[(v) => !!v || "Principle is required",
 ],loanDate:[(v) => !!v || "Loan Date is required",
 ],accountId:[(v) => !!v || "Account is required",
 ],bankAccountType:[(v) => !!v || "Bank Account Type is required",
(v) => v.length < 100 || "Bank Account Type length must be less or equal to 100", ],businessSectionId:[(v) => !!v || "Business Section is required",
 ],balance:[(v) => !!v || "Balance is required",
 ],nextPaymentDate:[(v) => !!v || "Next Payment Date is required",
 ],loanProduct:[(v) => !!v || "Loan Product is required",
(v) => v.length < 100 || "Loan Product length must be less or equal to 100", ],appliedForAmount:[(v) => !!v || "Applied For Amount is required",
 ],collateralCategory:[(v) => !!v || "Collateral Category is required",
(v) => v.length < 100 || "Collateral Category length must be less or equal to 100", ],collateralDesc:[(v) => !!v || "Collateral Desc is required",
(v) => v.length < 100 || "Collateral Desc length must be less or equal to 100", ],estimatedCollateralValue:[(v) => !!v || "Estimated Collateral Value is required",
 ],

}
}

export default loanModel;
