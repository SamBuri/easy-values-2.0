const creditorModel = {
 model: {
profileId:"",
phoneNo:"",
accountId:"",
accountName:"",
balance:"",
hidden:false,

clear(){
this.profileId="";
this.phoneNo="";
this.accountId="";
this.accountName="";
this.balance="";
this.hidden=false;
},
copy(obj){
this.id=obj.id;
this.profileId = obj.profileId.id;
this.phoneNo = obj.phoneNo;
this.accountId = obj.accountId;
this.accountName = obj.accountName;
this.balance = obj.balance;
this.hidden = obj.hidden;

},
printOptions(){let data = [];
data.push({ text: "Profile Id", value: this.creditor.profileId.displayKey });
data.push({ text: "Phone No", value: this.creditor.phoneNo });
data.push({ text: "Account", value: this.creditor.accountId });
data.push({ text: "Account Name", value: this.creditor.accountName });
data.push({ text: "Balance", value: this.creditor.balance });

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
profileId:[(v) => !!v || "Profile Id is required",
 ],phoneNo:[(v) => !!v || "Phone No is required",
(v) => v.length < 30 || "Phone No length must be less or equal to 30", ],accountId:[(v) => !!v || "Account is required",
 ]


}
}

export default creditorModel;
