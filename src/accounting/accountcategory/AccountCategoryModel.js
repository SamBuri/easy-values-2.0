const accountCategoryModel = {
 model: {
accountType:"",
parentCategoryIdId:"",
parentCategoryId:null,
categoryName:"",
readOnly:false,
hidden:false,

clear(){
this.accountType="";
this.parentCategoryIdId="";
this.parentCategoryId=null;
this.categoryName="";
this.readOnly=false;
this.hidden=false;
},
copy(obj){
this.id=obj.id;
this.accountType = obj.accountType;
this.parentCategoryId = obj.parentCategoryId.Id;
this.categoryName = obj.categoryName;
this.readOnly = obj.readOnly;
this.hidden = obj.hidden;

},
printOptions(){let data = [];
data.push({ text: "Account Type", value: this.accountCategory.accountType });
data.push({ text: "Parent Category Id", value: this.accountCategory.parentCategoryId.displayKey });
data.push({ text: "Category Name", value: this.accountCategory.categoryName });

 return {
        data: data,
        startXPos: 10,
        startYPos: 25,
        lineBreak: 4,
        hSpace: 50,
        vSpace: 10,
        title: "Account Category"

      };
},

},
path:"accountcategories",
rules: {
accountType:[(v) => !!v || "Account Type is required",
 ],parentCategoryId:[(v) => !!v || "Parent Category Id is required",
 ],categoryName:[(v) => !!v || "Category Name is required",
(v) => v.length < 40 || "Category Name length must be less or equal to 40", ],

}
}

export default accountCategoryModel;
