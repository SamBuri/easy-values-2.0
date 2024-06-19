const roleModel = {
 role: {
roleName:"",
description:"",
permissions:[],

clear(){
this.roleName="";
this.description="";
this.permissions=[];
}
},
path:"roles"}

export default roleModel;
