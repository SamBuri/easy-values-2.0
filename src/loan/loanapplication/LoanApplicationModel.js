import funcs from "../../utils/funcs";
const loanApplicationModel = {
 loanApplication: {
applicantId:"",
name: "",
primaryPhoneNo: "",
otherPhoneNos:"",
addressDetails: "",
collateralCategoryId:"",
collateralDesc:"",
estimatedCollateralValue:"",
applicationDate:funcs.today(),
loanProduct:null,
amount:"",
guarantors:[],

clear(){
this.applicantId="";
this.name="";
this.primaryPhoneNo="";
this.otherPhoneNos="";
this.addressDetails= "";
this.collateralCategoryId="";
this.collateralDesc="";
this.estimatedCollateralValue="";
this.applicationDate=funcs.today();
this.loanProduct=null;
this.amount="";
this.guarantors=[];
}
},
path:"loanapplications"}

export default loanApplicationModel;
