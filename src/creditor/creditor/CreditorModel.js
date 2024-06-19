const creditorModel = {
 creditor: {
profileIdId:"",
profileId:null,
name:"",
phoneNo:"",
accountId:"",
accountName:"",
balance:"",
hidden:false,

clear(){
this.profileIdId="";
this.profileId=null;
this.name="";
this.phoneNo="";
this.accountId="";
this.accountName="";
this.balance="";
this.hidden=false;
}
},
path:"creditors"}

export default creditorModel;
