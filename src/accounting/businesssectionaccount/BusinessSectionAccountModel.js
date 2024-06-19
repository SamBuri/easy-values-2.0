const businessSectionAccountModel = {
 businessSectionAccount: {
name:"",
businessSectionId:"",
itemCategoryId:"",
salesAccount:{id: ""},
expenseAccount:{id: ""},

clear(){
this.name="";
this.businessSectionId="";
this.itemCategoryId="";
this.salesAccount={id: ""};
this.expenseAccount={id: ""};
}
},
path:"businesssectionaccounts"}

export default businessSectionAccountModel;
