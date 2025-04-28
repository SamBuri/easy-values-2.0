import keycloakService from "@/keycloak/keycloakService";

const userModel = {
 model: {
firstName:"",
lastName:"",
username:"",
password:"",
email:"",
defaultBranch:"",
otherBranches:[],
groups:[],
requiredActions:[],
enabled:true,

clear(){
this.firstName="";
this.lastName="";
this.username="";
this.password="";
this.email="";
this.defaultBranch="";
this.otherBranches=[];
this.groups=[];
this.requiredActions=[];
this.enabled=false;
},
copy(obj){
this.id=obj.id;
this.firstName = obj.firstName;
this.lastName = obj.lastName;
this.username = obj.username;
this.password = obj.password;
this.email = obj.email;
this.defaultBranch = obj.defaultBranch;
this.otherBranches = obj.otherBranches;
this.groups = obj.groups;
this.requiredActions = obj.requiredActions;
this.enabled = obj.enabled;

},

getFormData() {
  const user = {
    username: this.username,
    firstName: this.firstName,
    lastName: this.lastName,
    email: this.email,
    enabled: this.enabled,
    requiredActions: this.requiredActions,
    credentials: [
      {
        type: "password",
        value: this.password,
        temporary: false
      }
    ],
    attributes: {
      defaultBranch: this.defaultBranch,
      otherBranches: this.otherBranches,
    },
    groups: this.groups
  };

  return user;
},


printOptions(){let data = [];
data.push({ text: "First Name", value: this.user.firstName });
data.push({ text: "Last Name", value: this.user.lastName });
data.push({ text: "Username", value: this.user.username });
data.push({ text: "Password", value: this.user.password });
data.push({ text: "Email", value: this.user.email });
data.push({ text: "Default Branch", value: this.user.defaultBranch });
data.push({ text: "Other Branches", value: this.user.otherBranches });
data.push({ text: "Groups", value: this.user.groups });
data.push({ text: "RequiredActions", value: this.user.requiredActions });

 return {
        data: data,
        startXPos: 10,
        startYPos: 25,
        lineBreak: 4,
        hSpace: 50,
        vSpace: 10,
        title: "User"

      };
},


},
path:"users",
httpStrategy: async () => keycloakService.getHttpStrategy(),
rules: {
firstName:[(v) => !!v || "First Name is required",
(v) => v.length < 20 || "First Name length must be less or equal to 20", ],lastName:[(v) => !!v || "Last Name is required",
(v) => v.length < 20 || "Last Name length must be less or equal to 20", ],username:[(v) => !!v || "Username is required",
(v) => v.length < 50 || "Username length must be less or equal to 50", ],password:[(v) => !!v || "Password is required",
(v) => v.length < 100 || "Password length must be less or equal to 100", ],email:[(v) => !!v || "Email is required",
(v) => v.length < 100 || "Email length must be less or equal to 100", ],defaultBranch:[(v) => !!v || "Default Branch is required",
 ],otherBranches:[(v) => !!v || "Other Branches is required",
 ],groups:[(v) => !!v || "Groups is required",
 ],requiredActions:[(v) => !!v || "RequiredActions is required",
 ],

}
}

export default userModel;
