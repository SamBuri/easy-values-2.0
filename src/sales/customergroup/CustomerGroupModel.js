const customerGroupModel = {
 model: {
customerGroup:"",
receivableAccountId:"",
discountAccountId:"",
writeOffAccountId:"",
withholdingTaxAccountId:"",

clear(){
this.customerGroup="";
this.receivableAccountId="";
this.discountAccountId="";
this.writeOffAccountId="";
this.withholdingTaxAccountId="";
},
copy(obj){
this.id=obj.id;
this.customerGroup = obj.customerGroup;
this.receivableAccountId = obj.receivableAccountId;
this.discountAccountId = obj.discountAccountId;
this.writeOffAccountId = obj.writeOffAccountId;
this.withholdingTaxAccountId = obj.withholdingTaxAccountId;

},
printOptions(){let data = [];
data.push({ text: "Customer Group", value: this.customerGroup.customerGroup });
data.push({ text: "Receivable Account", value: this.customerGroup.receivableAccountId });
data.push({ text: "Discount Account", value: this.customerGroup.discountAccountId });
data.push({ text: "Write Off Account", value: this.customerGroup.writeOffAccountId });
data.push({ text: "Withholding Tax Account", value: this.customerGroup.withholdingTaxAccountId });

 return {
        data: data,
        startXPos: 10,
        startYPos: 25,
        lineBreak: 4,
        hSpace: 50,
        vSpace: 10,
        title: "Customer Group"

      };
},


},
path:"customer-groups",
rules: {
customerGroup:[(v) => !!v || "Customer Group is required",
(v) => v.length < 40 || "Customer Group length must be less or equal to 40", ],receivableAccountId:[(v) => !!v || "Receivable Account is required",
 ],discountAccountId:[(v) => !!v || "Discount Account is required",
 ],writeOffAccountId:[(v) => !!v || "Write Off Account is required",
 ],withholdingTaxAccountId:[(v) => !!v || "Withholding Tax Account is required",
 ],

}
}

export default customerGroupModel;
