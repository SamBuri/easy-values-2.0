const loanProductChargeModel = {
 model: {
loanProductId:"",
itemId:"",
itemName:"",
determiningMethod:"",
quantity:"",
charge:"",
billDuration:"",
recurrent:false,

clear(){
this.loanProductId="";
this.itemId="";
this.itemName="";
this.determiningMethod="";
this.quantity="";
this.charge="";
this.billDuration="";
this.recurrent=false;
},
copy(obj){
this.id=obj.id;
this.loanProductId = obj.loanProduct.id;
this.itemId = obj.itemId;
this.itemName = obj.itemName;
this.determiningMethod = obj.determiningMethod;
this.quantity = obj.quantity;
this.charge = obj.charge;
this.billDuration = obj.billDuration;
this.recurrent = obj.recurrent;

},
printOptions(){let data = [];
data.push({ text: "Loan Product", value: this.loanProductCharge.loanProduct.displayKey });
data.push({ text: "Item", value: this.loanProductCharge.itemId });
data.push({ text: "ItemName", value: this.loanProductCharge.itemName });
data.push({ text: "Determining Method", value: this.loanProductCharge.determiningMethod.displayKey });
data.push({ text: "Quantity", value: this.loanProductCharge.quantity });
data.push({ text: "Charge", value: this.loanProductCharge.charge });
data.push({ text: "Bill Duration", value: this.loanProductCharge.billDuration });

 return {
        data: data,
        startXPos: 10,
        startYPos: 25,
        lineBreak: 4,
        hSpace: 50,
        vSpace: 10,
        title: "Loan Product Charge"

      };
},


},
path:"loanproductcharges",
rules: {
loanProductId:[(v) => !!v || "Loan Product is required",
 ],itemId:[(v) => !!v || "Item is required",
 ],itemName:[(v) => !!v || "ItemName is required",
(v) => v.length < 40 || "ItemName length must be less or equal to 40", ],determiningMethod:[(v) => !!v || "Determining Method is required",
 ],quantity:[(v) => !!v || "Quantity is required",
 ],charge:[(v) => !!v || "Charge is required",
 ],billDuration:[],

}
}

export default loanProductChargeModel;
