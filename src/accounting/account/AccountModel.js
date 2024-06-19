const accountModel = {
 account: {
accountType:"",
accountCategory:{id: ""},
accountName:"",
accountAction:"",
accountReport:"",
contra:false,
controlAccount:false,
balance:0,
readOnly:false,
hidden:false,

clear(){
this.accountType="";
this.accountCategory={id: ""};
this.accountName="";
this.accountAction="";
this.accountReport="";
this.contra=false;
this.controlAccount=false;
this.balance=0;
this.readOnly=false;
this.hidden=false;
}
},
path:"accounts"}

export default accountModel;
