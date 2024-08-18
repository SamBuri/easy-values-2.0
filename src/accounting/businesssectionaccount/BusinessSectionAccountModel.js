const businessSectionAccountModel = {
 model: {
name:"",
businessSectionId:"",
itemCategoryId:"",
salesAccountId:"",
salesAccount:null,
expenseAccountId:"",
expenseAccount:null,

clear(){
this.name="";
this.businessSectionId="";
this.itemCategoryId="";
this.salesAccountId="";
this.salesAccount=null;
this.expenseAccountId="";
this.expenseAccount=null;
},
copy(obj){
this.id=obj.id;
this.name = obj.name;
this.businessSectionId = obj.businessSectionId;
this.itemCategoryId = obj.itemCategoryId;
this.salesAccount = obj.salesAccount.Id;
this.expenseAccount = obj.expenseAccount.Id;

},
printOptions(){let data = [];
data.push({ text: "Name", value: this.businessSectionAccount.name });
data.push({ text: "Business Section", value: this.businessSectionAccount.businessSectionId });
data.push({ text: "Item Category", value: this.businessSectionAccount.itemCategoryId });
data.push({ text: "Sales Account", value: this.businessSectionAccount.salesAccount.displayKey });
data.push({ text: "Expense Account", value: this.businessSectionAccount.expenseAccount.displayKey });

 return {
        data: data,
        startXPos: 10,
        startYPos: 25,
        lineBreak: 4,
        hSpace: 50,
        vSpace: 10,
        title: "Business Section Account"

      };
},

},
path:"businesssectionaccounts",
rules: {
name:[(v) => !!v || "Name is required",
(v) => v.length < 100 || "Name length must be less or equal to 100", ],businessSectionId:[(v) => !!v || "Business Section is required",
 ],itemCategoryId:[(v) => !!v || "Item Category is required",
 ],salesAccount:[(v) => !!v || "Sales Account is required",
 ],expenseAccount:[(v) => !!v || "Expense Account is required",
 ],

}
}

export default businessSectionAccountModel;
