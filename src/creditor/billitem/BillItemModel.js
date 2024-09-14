const billItemModel = {
 model: {
itemId:"",
itemName:"",
itemCategory:"",
quantity:"",
unitCost:"",
amount:"",

clear(){
this.itemId="";
this.itemName="";
this.itemCategory="";
this.quantity="";
this.unitCost="";
this.amount="";
},
copy(obj){
this.id=obj.id;
this.itemId = obj.itemId;
this.itemName = obj.itemName;
this.itemCategory = obj.itemCategory;
this.quantity = obj.quantity;
this.unitCost = obj.unitCost;
this.amount = obj.amount;

},
printOptions(){let data = [];
data.push({ text: "Item Id", value: this.billItem.itemId });
data.push({ text: "Item Name", value: this.billItem.itemName });
data.push({ text: "Item Category", value: this.billItem.itemCategory });
data.push({ text: "Quantity", value: this.billItem.quantity });
data.push({ text: "Unit Cost", value: this.billItem.unitCost });
data.push({ text: "Amount", value: this.billItem.amount });

 return {
        data: data,
        startXPos: 10,
        startYPos: 25,
        lineBreak: 4,
        hSpace: 50,
        vSpace: 10,
        title: "Bill Item"

      };
},


},
path:"billitems",
rules: {
itemId:[(v) => !!v || "Item Id is required",
 ],itemName:[(v) => !!v || "Item Name is required",
(v) => v.length < 100 || "Item Name length must be less or equal to 100", ],itemCategory:[(v) => !!v || "Item Category is required",
(v) => v.length < 100 || "Item Category length must be less or equal to 100", ],quantity:[(v) => !!v || "Quantity is required",
 ],unitCost:[(v) => !!v || "Unit Cost is required",
 ],amount:[(v) => !!v || "Amount is required",
 ],

}
}

export default billItemModel;
