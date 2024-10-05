const shareTransferModel = {
 model: {
transferFromId:"",
transferFromName:"",
transferToId:"",
transferToName:"",
transferDate:null,
shareTypeId:"",
quantity:"",
unitPrice:"",
amount:"",

clear(){
this.transferFromId="";
this.transferFromName="";
this.transferToId="";
this.transferToName="";
this.transferDate=null;
this.shareTypeId="";
this.quantity="";
this.unitPrice="";
this.amount="";
},
copy(obj){
this.id=obj.id;
this.transferFromId = obj.transferFrom.id;
this.transferFromName = obj.transferFromName;
this.transferToId = obj.transferTo.id;
this.transferToName = obj.transferToName;
this.transferDate = obj.transferDate;
this.shareTypeId = obj.shareType.id;
this.quantity = obj.quantity;
this.unitPrice = obj.unitPrice;
this.amount = obj.amount;

},
printOptions(){let data = [];
data.push({ text: "Transfer From", value: this.shareTransfer.transferFrom.displayKey });
data.push({ text: "Transfer From Name", value: this.shareTransfer.transferFromName });
data.push({ text: "Transfer To", value: this.shareTransfer.transferTo.displayKey });
data.push({ text: "Transfer To Name", value: this.shareTransfer.transferToName });
data.push({ text: "Transfer Date", value: this.shareTransfer.transferDate });
data.push({ text: "Share Type", value: this.shareTransfer.shareType.displayKey });
data.push({ text: "Quantity", value: this.shareTransfer.quantity });
data.push({ text: "Unit Price", value: this.shareTransfer.unitPrice });
data.push({ text: "Amount", value: this.shareTransfer.amount });

 return {
        data: data,
        startXPos: 10,
        startYPos: 25,
        lineBreak: 4,
        hSpace: 50,
        vSpace: 10,
        title: "Share Transfer"

      };
},


},
path:"sharetransfers",
rules: {
transferFromId:[(v) => !!v || "Transfer From is required",
 ],transferFromName:[(v) => !!v || "Transfer From Name is required",
(v) => v.length < 100 || "Transfer From Name length must be less or equal to 100", ],transferToId:[(v) => !!v || "Transfer To is required",
 ],transferToName:[(v) => !!v || "Transfer To Name is required",
(v) => v.length < 100 || "Transfer To Name length must be less or equal to 100", ],transferDate:[(v) => !!v || "Transfer Date is required",
 ],shareTypeId:[(v) => !!v || "Share Type is required",
 ],quantity:[(v) => !!v || "Quantity is required",
 ],unitPrice:[(v) => !!v || "Unit Price is required",
 ],amount:[(v) => !!v || "Amount is required",
 ],

}
}

export default shareTransferModel;
