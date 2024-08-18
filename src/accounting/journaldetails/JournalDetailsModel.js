const journalDetailsModel = {
 model: {
journalId:"",
journal:null,
accountId:"",
accountId:null,
accountName:"",
accountType:"",
accountAction:"",
baseAmount:"",
amount:"",
notes:"",

clear(){
this.journalId="";
this.journal=null;
this.accountId="";
this.accountId=null;
this.accountName="";
this.accountType="";
this.accountAction="";
this.baseAmount="";
this.amount="";
this.notes="";
},
copy(obj){
this.id=obj.id;
this.journal = obj.journal.Id;
this.accountId = obj.accountId.Id;
this.accountName = obj.accountName;
this.accountType = obj.accountType;
this.accountAction = obj.accountAction;
this.baseAmount = obj.baseAmount;
this.amount = obj.amount;
this.notes = obj.notes;

},
printOptions(){let data = [];
data.push({ text: "Journal", value: this.journalDetails.journal.displayKey });
data.push({ text: "Account Id", value: this.journalDetails.accountId.displayKey });
data.push({ text: "Account Name", value: this.journalDetails.accountName });
data.push({ text: "Account Type", value: this.journalDetails.accountType });
data.push({ text: "Account Action", value: this.journalDetails.accountAction });
data.push({ text: "Base Amount", value: this.journalDetails.baseAmount });
data.push({ text: "Amount", value: this.journalDetails.amount });
data.push({ text: "Notes", value: this.journalDetails.notes });

 return {
        data: data,
        startXPos: 10,
        startYPos: 25,
        lineBreak: 4,
        hSpace: 50,
        vSpace: 10,
        title: "Journal Details"

      };
},

},
path:"journaldetailses",
rules: {
journal:[(v) => !!v || "Journal is required",
 ],accountId:[(v) => !!v || "Account Id is required",
 ],accountName:[(v) => !!v || "Account Name is required",
(v) => v.length < 100 || "Account Name length must be less or equal to 100", ],accountType:[(v) => !!v || "Account Type is required",
 ],accountAction:[(v) => !!v || "Account Action is required",
 ],baseAmount:[(v) => !!v || "Base Amount is required",
 ],amount:[(v) => !!v || "Amount is required",
 ],notes:[(v) => !!v || "Notes is required",
(v) => v.length < 200 || "Notes length must be less or equal to 200", ],

}
}

export default journalDetailsModel;
