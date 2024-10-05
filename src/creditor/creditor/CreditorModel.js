const creditorModel = {
 model: {
idId:"",
name:"",
phoneNo:"",
creditorAccountGroupId:"",
hidden:false,

clear(){
this.idId="";
this.name="";
this.phoneNo="";
this.creditorAccountGroupId="";
this.hidden=false;
},
copy(obj){
this.id=obj.id;
this.idId = obj.id;
this.name = obj.name;
this.phoneNo = obj.phoneNo;
this.creditorAccountGroupId = obj.creditorAccountGroup.id;
this.hidden = obj.hidden;

},
printOptions(){let data = [];
data.push({ text: "Profile Id", value: this.creditor.id });
data.push({ text: "Name", value: this.creditor.name });
data.push({ text: "Phone No", value: this.creditor.phoneNo });
data.push({ text: "Creditor Account Group", value: this.creditor.creditorAccountGroup.displayKey });

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
idId:[(v) => !!v || "Profile Id is required",
 ],name:[(v) => !!v || "Name is required",
(v) => v.length < 61 || "Name length must be less or equal to 61", ],phoneNo:[(v) => !!v || "Phone No is required",
(v) => v.length < 30 || "Phone No length must be less or equal to 30", ],creditorAccountGroupId:[(v) => !!v || "Creditor Account Group is required",
 ],

}
}

export default creditorModel;
