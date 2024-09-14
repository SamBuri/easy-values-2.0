const loanBillDetailModel = {
 model: {
itemId:"",
itemName:"",
determiningMethod:"",
quantity:"",
charge:"",
amount:"",

clear(){
this.itemId="";
this.itemName="";
this.determiningMethod="";
this.quantity="";
this.charge="";
this.amount="";
},
copy(obj){
this.id=obj.id;
this.itemId = obj.itemId;
this.itemName = obj.itemName;
this.determiningMethod = obj.determiningMethod;
this.quantity = obj.quantity;
this.charge = obj.charge;
this.amount = obj.amount;

},
printOptions(){let data = [];
data.push({ text: "Item", value: this.loanBillDetail.itemId });
data.push({ text: "Item Name", value: this.loanBillDetail.itemName });
data.push({ text: "Determining Method", value: this.loanBillDetail.determiningMethod.displayKey });
data.push({ text: "Quantity", value: this.loanBillDetail.quantity });
data.push({ text: "Charge", value: this.loanBillDetail.charge });
data.push({ text: "Amount", value: this.loanBillDetail.amount });

 return {
        data: data,
        startXPos: 10,
        startYPos: 25,
        lineBreak: 4,
        hSpace: 50,
        vSpace: 10,
        title: "Loan Bill Detail"

      };
},


},
path:"loanbilldetails",
rules: {
itemId:[(v) => !!v || "Item is required",
 ],itemName:[(v) => !!v || "Item Name is required",
(v) => v.length < 100 || "Item Name length must be less or equal to 100", ],determiningMethod:[(v) => !!v || "Determining Method is required",
 ],quantity:[(v) => !!v || "Quantity is required",
 ],charge:[(v) => !!v || "Charge is required",
 ],amount:[(v) => !!v || "Amount is required",
 ],

}
}

export default loanBillDetailModel;
