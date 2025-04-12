const expenseDetailModel = {
 model: {
itemId:"",
itemName:"",
quantity:"",
baseUnitCost:"",
unitCost:"",
baseAmount:"",
amount:"",

clear(){
this.itemId="";
this.itemName="";
this.quantity="";
this.baseUnitCost="";
this.unitCost="";
this.baseAmount="";
this.amount="";
},
copy(obj){
this.id=obj.id;
this.itemId = obj.itemId.id;
this.itemName = obj.itemName;
this.quantity = obj.quantity;
this.baseUnitCost = obj.baseUnitCost;
this.unitCost = obj.unitCost;
this.baseAmount = obj.baseAmount;
this.amount = obj.amount;

},
printOptions(){let data = [];
data.push({ text: "Item", value: this.expenseDetail.itemId.displayKey });
data.push({ text: "Item Name", value: this.expenseDetail.itemName });
data.push({ text: "Quantity", value: this.expenseDetail.quantity });
data.push({ text: "Base Unit Cost", value: this.expenseDetail.baseUnitCost });
data.push({ text: "Unit Cost", value: this.expenseDetail.unitCost });
data.push({ text: "Base Amount", value: this.expenseDetail.baseAmount });
data.push({ text: "Amount", value: this.expenseDetail.amount });

 return {
        data: data,
        startXPos: 10,
        startYPos: 25,
        lineBreak: 4,
        hSpace: 50,
        vSpace: 10,
        title: "Expense Detail"

      };
},


},
path:"expensedetails",
rules: {
itemId:[(v) => !!v || "Item is required",
 ],itemName:[(v) => !!v || "Item Name is required",
(v) => v.length < 100 || "Item Name length must be less or equal to 100", ],quantity:[(v) => !!v || "Quantity is required",
 ],baseUnitCost:[(v) => !!v || "Base Unit Cost is required",
 ],unitCost:[(v) => !!v || "Unit Cost is required",
 ],baseAmount:[(v) => !!v || "Base Amount is required",
 ],amount:[(v) => !!v || "Amount is required",
 ],

}
}

export default expenseDetailModel;
