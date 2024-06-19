const accountsGroupModel = {
 accountsGroup: {
businessSectionId:"",
receivableAccountId:"",
discountAccountId:"",
writeOffAccountId:"",
withholdingTaxAccountId:"",

clear(){
this.businessSectionId="";
this.receivableAccountId="";
this.discountAccountId="";
this.writeOffAccountId="";
this.withholdingTaxAccountId="";
}
},
path:"accountsgroups"}

export default accountsGroupModel;
