const bSAccountGroupModel = {
 bSAccountGroup: {
businessSectionId:"",
assetAccount:{id: ""},
equityAccount:{id: ""},
liabilityAccount:{id: ""},

clear(){
this.businessSectionId="";
this.assetAccount={id: ""};
this.equityAccount={id: ""};
this.liabilityAccount={id: ""};
}
},
path:"bsaccountgroups"}

export default bSAccountGroupModel;
