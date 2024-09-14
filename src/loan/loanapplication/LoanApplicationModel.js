const loanApplicationModel = {
 model: {
applicantId:"",
name:"",
address:"",
primaryPhoneNo:"",
otherPhoneNos:"",
collateralCategoryId:"",
collateralDesc:"",
estimatedCollateralValue:"",
applicationDate:new Date(),
loanProductId:"",
amount:"",
guarantors:[],

clear(){
this.applicantId="";
this.name="";
this.address="";
this.primaryPhoneNo="";
this.otherPhoneNos="";
this.collateralCategoryId="";
this.collateralDesc="";
this.estimatedCollateralValue="";
this.applicationDate=new Date();
this.loanProductId="";
this.amount="";
this.guarantors=[];
},
copy(obj){
this.id=obj.id;
this.applicantId = obj.applicantId;
this.name = obj.name;
this.address = obj.address;
this.primaryPhoneNo = obj.primaryPhoneNo;
this.otherPhoneNos = obj.otherPhoneNos;
this.collateralCategoryId = obj.collateralCategoryId;
this.collateralDesc = obj.collateralDesc;
this.estimatedCollateralValue = obj.estimatedCollateralValue;
this.applicationDate = obj.applicationDate;
this.loanProductId = obj.loanProduct.id;
this.amount = obj.amount;
this.guarantors = obj.guarantors?obj.guarantors.map(g=>g.guarantorId):[];

},
printOptions(){let data = [];
data.push({ text: "Applicant", value: this.loanApplication.applicant.displayKey });
data.push({ text: "Name", value: this.loanApplication.name });
data.push({ text: "Address", value: this.loanApplication.address });
data.push({ text: "Primary Phone No", value: this.loanApplication.primaryPhoneNo });
data.push({ text: "Other Phone Numbers", value: this.loanApplication.otherPhoneNos });
data.push({ text: "Collateral Category", value: this.loanApplication.collateralCategoryId });
data.push({ text: "Collateral Description", value: this.loanApplication.collateralDesc });
data.push({ text: "Estimated Collateral Value", value: this.loanApplication.estimatedCollateralValue });
data.push({ text: "Application Date", value: this.loanApplication.applicationDate });
data.push({ text: "Loan Product", value: this.loanApplication.loanProduct.displayKey });
data.push({ text: "Amount", value: this.loanApplication.amount });
data.push({ text: "Guarantors", value: this.loanApplication.guarantors.displayKey });

 return {
        data: data,
        startXPos: 10,
        startYPos: 25,
        lineBreak: 4,
        hSpace: 50,
        vSpace: 10,
        title: "Loan Application"

      };
},


},
path:"loanapplications",
rules: {
applicantId:[(v) => !!v || "Applicant is required",
 ],name:[],
address:[]
,otherPhoneNos:[ ],collateralCategoryId:[(v) => !!v || "Collateral Category is required",
 ],collateralDesc:[(v) => !!v || "Collateral Description is required",
(v) => v.length < 100 || "Collateral Description length must be less or equal to 100", ],estimatedCollateralValue:[(v) => !!v || "Estimated Collateral Value is required",
 ],applicationDate:[(v) => !!v || "Application Date is required",
 ],loanProductId:[(v) => !!v || "Loan Product is required",
 ],amount:[(v) => !!v || "Amount is required",
 ],guarantors:[(v) => !!v || "Guarantors is required",
 ],

}
}

export default loanApplicationModel;
