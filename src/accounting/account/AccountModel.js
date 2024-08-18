const accountModel = {
 model: {
accountType:"",
accountCategoryId:"",
accountCategory:null,
accountName:"",
accountAction:"",
accountReport:"",
contra:false,
controlAccount:false,
balance:"",
readOnly:false,
hidden:false,

clear(){
this.accountType="";
this.accountCategoryId="";
this.accountCategory=null;
this.accountName="";
this.accountAction="";
this.accountReport="";
this.contra=false;
this.controlAccount=false;
this.balance="";
this.readOnly=false;
this.hidden=false;
},
copy(obj){
this.id=obj.id;
this.accountType = obj.accountType;
this.accountCategory = obj.accountCategory.Id;
this.accountName = obj.accountName;
this.accountAction = obj.accountAction;
this.accountReport = obj.accountReport.Id;
this.contra = obj.contra;
this.controlAccount = obj.controlAccount;
this.balance = obj.balance;
this.readOnly = obj.readOnly;
this.hidden = obj.hidden;

},
printOptions(){let data = [];
data.push({ text: "Account Type", value: this.account.accountType });
data.push({ text: "Account Category", value: this.account.accountCategory.displayKey });
data.push({ text: "Account Name", value: this.account.accountName });
data.push({ text: "Account Action", value: this.account.accountAction });
data.push({ text: "Account Report", value: this.account.accountReport.displayKey });
data.push({ text: "Balance", value: this.account.balance });

 return {
        data: data,
        startXPos: 10,
        startYPos: 25,
        lineBreak: 4,
        hSpace: 50,
        vSpace: 10,
        title: "Account"

      };
},

},
path:"accounts",
rules: {
accountType:[(v) => !!v || "Account Type is required",
 ],accountCategory:[(v) => !!v || "Account Category is required",
 ],accountName:[(v) => !!v || "Account Name is required",
(v) => v.length < 40 || "Account Name length must be less or equal to 40", ],accountAction:[(v) => !!v || "Account Action is required",
 ],accountReport:[(v) => !!v || "Account Report is required",
 ],balance:[],

}
}

export default accountModel;
