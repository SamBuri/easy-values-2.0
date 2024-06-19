const journalDetailsModel = {
 journalDetails: {
journal:{id: ""},
accountId:"",
accountName:"",
accountType:"",
accountAction:"",
baseAmount:"",
amount:"",
notes:"",

clear(){
this.journal={id: ""};
this.accountId="";
this.accountName="";
this.accountType="";
this.accountAction="";
this.baseAmount="";
this.amount="";
this.notes="";
}
},
path:"journaldetailss"}

export default journalDetailsModel;
