const accountCategoryModel = {
 accountCategory: {
accountType:"",
parentCategoryId:"",
categoryName:"",
readOnly:false,
hidden:false,

clear(){
this.accountType="";
this.parentCategoryId="";
this.categoryName="";
this.readOnly=false;
this.hidden=false;
}
},
path:"accountcategories"}

export default accountCategoryModel;
