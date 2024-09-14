const loanApprovalModel = {
 model: {
loanApplicationId:"",
approvalDate:new Date(),
approvedBy:"",
approvalNotes:"",
approvalStatus:"",
loanProduct:"",
amount:"",
collateralCategory:"",
collateralDesc:"",
estimatedCollateralValue:"",
loanProductName:"",

clear(){
this.loanApplicationId="";
this.approvalDate=new Date();
this.approvalNotes="";
this.approvalStatus="";
this.loanProduct="";
this.amount="";
this.collateralCategory="";
this.collateralDesc="";
this.estimatedCollateralValue="";
this.loanProductName="";
this.appliedForAmount="";
},
copy(obj){
this.id=obj.id;
this.loanApplicationId = obj.loanApplication.id;
this.approvalDate = obj.approvalDate;
this.approvedBy = obj.approvedBy;
this.approvalNotes = obj.approvalNotes;
this.approvalStatus = obj.approvalStatus;
this.loanProduct = obj.loanProduct;
this.amount = obj.amount;
this.collateralCategory = obj.collateralCategory;
this.collateralDesc = obj.collateralDesc;
this.estimatedCollateralValue = obj.estimatedCollateralValue;
this.loanProductName = obj.loanProductName;


},
printOptions(){let data = [];
data.push({ text: "Loan Application", value: this.loanApproval.loanApplication.displayKey });
data.push({ text: "Approval Date", value: this.loanApproval.approvalDate });
data.push({ text: "Approved By", value: this.loanApproval.approvedBy });
data.push({ text: "Approval Notes", value: this.loanApproval.approvalNotes });
data.push({ text: "Approval Status", value: this.loanApproval.approvalStatus });
data.push({ text: "Loan Product", value: this.loanApproval.loanProduct });
data.push({ text: "Amount", value: this.loanApproval.amount });
data.push({ text: "Collateral Category", value: this.loanApproval.collateralCategory });
data.push({ text: "Collateral Desc", value: this.loanApproval.collateralDesc });
data.push({ text: "Estimated Collateral Value", value: this.loanApproval.estimatedCollateralValue });
data.push({ text: "Loan Product Name", value: this.loanApproval.loanProductName });

 return {
        data: data,
        startXPos: 10,
        startYPos: 25,
        lineBreak: 4,
        hSpace: 50,
        vSpace: 10,
        title: "Loan Approval"

      };
},


},
path:"loanapprovals",
rules: {
loanApplicationId:[(v) => !!v || "Loan Application is required",
 ],approvalDate:[(v) => !!v || "Approval Date is required",
 ],approvedBy:[(v) => !!v || "Approved By is required",
(v) => v.length < 100 || "Approved By length must be less or equal to 100", ],approvalNotes:[(v) => !!v || "Approval Notes is required",
(v) => v.length < 200 || "Approval Notes length must be less or equal to 200", ],approvalStatus:[(v) => !!v || "Approval Status is required",
 ],loanProduct:[(v) => !!v || "Loan Product is required",
(v) => v.length < 100 || "Loan Product length must be less or equal to 100", ],amount:[(v) => !!v || "Amount is required",
 ],collateralCategory:[(v) => !!v || "Collateral Category is required",
(v) => v.length < 100 || "Collateral Category length must be less or equal to 100", ],collateralDesc:[(v) => !!v || "Collateral Desc is required",
(v) => v.length < 100 || "Collateral Desc length must be less or equal to 100", ],estimatedCollateralValue:[(v) => !!v || "Estimated Collateral Value is required",
 ],loanProductName:[(v) => !!v || "Loan Product Name is required",
(v) => v.length < 100 || "Loan Product Name length must be less or equal to 100", ],

}
}

export default loanApprovalModel;
