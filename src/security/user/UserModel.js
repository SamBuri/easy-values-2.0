const userModel = {
 user: {
firstName:"",
lastName:"",
staffNo:"",
username:"",
password:"",
role:{id: ""},
locked:false,

clear(){
this.firstName="";
this.lastName="";
this.staffNo="";
this.username="";
this.password="";
this.role={id: ""};
this.locked=false;
}
},
path:"users"}

export default userModel;
