const accountsGroupModel = {
 model: {
customerGroup:"",
businessSectionId:"",
receivableAccountId:"",
discountAccountId:"",
writeOffAccountId:"",
withholdingTaxAccountId:"",

clear(){
this.customerGroup="";
this.businessSectionId="";
this.receivableAccountId="";
this.discountAccountId="";
this.writeOffAccountId="";
this.withholdingTaxAccountId="";
},
copy(obj){
this.id=obj.id;
this.customerGroup = obj.customerGroup;
this.businessSectionId = obj.businessSectionId;
this.receivableAccountId = obj.receivableAccountId;
this.discountAccountId = obj.discountAccountId;
this.writeOffAccountId = obj.writeOffAccountId;
this.withholdingTaxAccountId = obj.withholdingTaxAccountId;

},
printOptions(){let data = [];
data.push({ text: "Customer Group", value: this.accountsGroup.customerGroup });
data.push({ text: "Business Section", value: this.accountsGroup.businessSectionId });
data.push({ text: "Receivable Account", value: this.accountsGroup.receivableAccountId });
data.push({ text: "Discount Account", value: this.accountsGroup.discountAccountId });
data.push({ text: "Write Off Account", value: this.accountsGroup.writeOffAccountId });
data.push({ text: "Withholding Tax Account", value: this.accountsGroup.withholdingTaxAccountId });

 return {
        data: data,
        startXPos: 10,
        startYPos: 25,
        lineBreak: 4,
        hSpace: 50,
        vSpace: 10,
        title: "Accounts Group"

      };
},


},
path:"accountsgroups",
rules: {
customerGroup:[(v) => !!v || "Customer Group is required",
(v) => v.length < 40 || "Customer Group length must be less or equal to 40", ],businessSectionId:[(v) => !!v || "Business Section is required",
 ],receivableAccountId:[(v) => !!v || "Receivable Account is required",
 ],discountAccountId:[(v) => !!v || "Discount Account is required",
 ],writeOffAccountId:[(v) => !!v || "Write Off Account is required",
 ],withholdingTaxAccountId:[(v) => !!v || "Withholding Tax Account is required",
 ],

}
}

export default accountsGroupModel;
