const creditorAccountGroupModel = {
 model: {
businessSectionId:"",
creditAccountId:"",
discountAccountId:"",
debtWaiverAccountId:"",
withholdingTaxAccountId:"",

clear(){
this.businessSectionId="";
this.creditAccountId="";
this.discountAccountId="";
this.debtWaiverAccountId="";
this.withholdingTaxAccountId="";
},
copy(obj){
this.id=obj.id;
this.businessSectionId = obj.businessSectionId;
this.creditAccountId = obj.creditAccountId;
this.discountAccountId = obj.discountAccountId;
this.debtWaiverAccountId = obj.debtWaiverAccountId;
this.withholdingTaxAccountId = obj.withholdingTaxAccountId;

},
printOptions(){let data = [];
data.push({ text: "Business Section", value: this.creditorAccountGroup.businessSectionId });
data.push({ text: "Credit Account", value: this.creditorAccountGroup.creditAccountId });
data.push({ text: "Discount Account", value: this.creditorAccountGroup.discountAccountId });
data.push({ text: "Debt Waiver Account", value: this.creditorAccountGroup.debtWaiverAccountId });
data.push({ text: "Withholding Tax Account", value: this.creditorAccountGroup.withholdingTaxAccountId });

 return {
        data: data,
        startXPos: 10,
        startYPos: 25,
        lineBreak: 4,
        hSpace: 50,
        vSpace: 10,
        title: "Creditor Account Group"

      };
},


},
path:"creditoraccountgroups",
rules: {
businessSectionId:[(v) => !!v || "Business Section is required",
 ],creditAccountId:[(v) => !!v || "Credit Account is required",
 ],discountAccountId:[(v) => !!v || "Discount Account is required",
 ],debtWaiverAccountId:[(v) => !!v || "Debt Waiver Account is required",
 ],withholdingTaxAccountId:[(v) => !!v || "Withholding Tax Account is required",
 ],

}
}

export default creditorAccountGroupModel;
