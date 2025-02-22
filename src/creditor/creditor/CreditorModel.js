const creditorModel = {
 model: {
profileId:"",
name:"",
phoneNo:"",
creditorGroupId:"",
hidden:false,

clear(){
this.profileId="";
this.name="";
this.phoneNo="";
this.creditorGroupId="";
this.hidden=false;
},
copy(obj){
this.id=obj.id;
this.profileId = obj.id;
this.name = obj.name;
this.phoneNo = obj.phoneNo;
this.creditorGroupId = obj.creditorGroup.id;
this.hidden = obj.hidden;

},
printOptions(){let data = [];
data.push({ text: "Profile", value: this.creditor.id });
data.push({ text: "Name", value: this.creditor.name });
data.push({ text: "Phone No", value: this.creditor.phoneNo });
data.push({ text: "Creditor Group", value: this.creditor.creditorGroup.displayKey });

 return {
        data: data,
        startXPos: 10,
        startYPos: 25,
        lineBreak: 4,
        hSpace: 50,
        vSpace: 10,
        title: "Creditor"

      };
},


},
path:"creditors",
rules: {
profileId:[(v) => !!v || "Profile is required",
 ],name:[(v) => !!v || "Name is required",
(v) => v.length < 61 || "Name length must be less or equal to 61", ],phoneNo:[(v) => !!v || "Phone No is required",
(v) => v.length < 30 || "Phone No length must be less or equal to 30", ],creditorGroupId:[(v) => !!v || "Creditor Group is required",
 ],

}
}

export default creditorModel;
