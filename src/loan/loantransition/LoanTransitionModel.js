const loanTransitionModel = {
 model: {
loanId:"",
profileId:"",
fullName:"",
tranDate:null,
fromStatus:"",
toStatus:"",
notes:"",

clear(){
this.loanId="";
this.profileId="";
this.fullName="";
this.tranDate=null;
this.fromStatus="";
this.toStatus="";
this.notes="";
},
copy(obj){
this.id=obj.id;
this.loanId = obj.loanId;
this.profileId = obj.profileId;
this.fullName = obj.fullName;
this.tranDate = obj.tranDate;
this.fromStatus = obj.fromStatus;
this.toStatus = obj.toStatus;
this.notes = obj.notes;

},
printOptions(){let data = [];
data.push({ text: "Loan Id", value: this.loanTransition.loanId.displayKey });
data.push({ text: "Profile Id", value: this.loanTransition.profileId });
data.push({ text: "Full Name", value: this.loanTransition.fullName });
data.push({ text: "Tran Date", value: this.loanTransition.tranDate });
data.push({ text: "From Status", value: this.loanTransition.fromStatus.displayKey });
data.push({ text: "To Status", value: this.loanTransition.toStatus.displayKey });
data.push({ text: "Notes", value: this.loanTransition.notes });

 return {
        data: data,
        startXPos: 10,
        startYPos: 25,
        lineBreak: 4,
        hSpace: 50,
        vSpace: 10,
        title: "Loan Transition"

      };
},


},
path:"loantransitions",
rules: {
loanId:[(v) => !!v || "Loan Id is required",
 ],profileId:[(v) => !!v || "Profile Id is required",
(v) => v.length < 20 || "Profile Id length must be less or equal to 20", ],fullName:[(v) => !!v || "Full Name is required",
(v) => v.length < 100 || "Full Name length must be less or equal to 100", ],tranDate:[(v) => !!v || "Tran Date is required",
 ],fromStatus:[(v) => !!v || "From Status is required",
 ],toStatus:[(v) => !!v || "To Status is required",
 ],notes:[(v) => !!v || "Notes is required",
(v) => v.length < 200 || "Notes length must be less or equal to 200", ],

}
}

export default loanTransitionModel;
