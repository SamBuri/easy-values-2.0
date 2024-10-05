const shareholderModel = {
 model: {
idId:"",
name:"",
phoneNo:"",
accountId:"",
hidden:false,

clear(){
this.idId="";
this.name="";
this.phoneNo="";
this.accountId="";
this.hidden=false;
},
copy(obj){
this.id=obj.id;
this.idId = obj.id;
this.name = obj.name;
this.phoneNo = obj.phoneNo;
this.accountId = obj.accountId;
this.hidden = obj.hidden;

},
printOptions(){let data = [];
data.push({ text: "Profile Id", value: this.shareholder.id });
data.push({ text: "Name", value: this.shareholder.name });
data.push({ text: "Phone No", value: this.shareholder.phoneNo });
data.push({ text: "Account", value: this.shareholder.accountId });

 return {
        data: data,
        startXPos: 10,
        startYPos: 25,
        lineBreak: 4,
        hSpace: 50,
        vSpace: 10,
        title: "Shareholder"

      };
},


},
path:"shareholders",
rules: {
idId:[(v) => !!v || "Profile Id is required",
 ],name:[(v) => !!v || "Name is required",
(v) => v.length < 100 || "Name length must be less or equal to 100", ],phoneNo:[(v) => !!v || "Phone No is required",
(v) => v.length < 100 || "Phone No length must be less or equal to 100", ],accountId:[(v) => !!v || "Account is required",
 ],

}
}

export default shareholderModel;
