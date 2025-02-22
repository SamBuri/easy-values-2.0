const creditorGroupModel = {
 model: {
name:"",
creditAccountId:"",
discountAccountId:"",
debtReliefAccountId:"",
withholdingTaxAccountId:"",

clear(){
this.name="";
this.creditAccountId="";
this.discountAccountId="";
this.debtReliefAccountId="";
this.withholdingTaxAccountId="";
},
copy(obj){
this.id=obj.id;
this.name = obj.name;
this.creditAccountId = obj.creditAccountId;
this.discountAccountId = obj.discountAccountId;
this.debtReliefAccountId = obj.debtReliefAccountId;
this.withholdingTaxAccountId = obj.withholdingTaxAccountId;

},
printOptions(){let data = [];
data.push({ text: "Name", value: this.creditorGroup.name });
data.push({ text: "Credit Account", value: this.creditorGroup.creditAccountId });
data.push({ text: "Discount Account", value: this.creditorGroup.discountAccountId });
data.push({ text: "Debt Relief Account", value: this.creditorGroup.debtReliefAccountId });
data.push({ text: "Withholding Tax Account", value: this.creditorGroup.withholdingTaxAccountId });

 return {
        data: data,
        startXPos: 10,
        startYPos: 25,
        lineBreak: 4,
        hSpace: 50,
        vSpace: 10,
        title: "Creditor Group"

      };
},


},
path:"creditorgroups",
rules: {
name:[(v) => !!v || "Name is required",
(v) => v.length < 100 || "Name length must be less or equal to 100", ],creditAccountId:[(v) => !!v || "Credit Account is required",
 ],discountAccountId:[(v) => !!v || "Discount Account is required",
 ],debtReliefAccountId:[(v) => !!v || "Debt Relief Account is required",
 ],withholdingTaxAccountId:[(v) => !!v || "Withholding Tax Account is required",
 ],

}
}

export default creditorGroupModel;
