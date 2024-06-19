const billItemModel = {
 billItem: {
billId:"",
bill:null,
itemId:"",
itemName:"",
itemCategory:"",
quantity:"",
unitCost:"",
amount:"",

clear(){
this.billId="";
this.bill=null;
this.itemId="";
this.itemName="";
this.itemCategory="";
this.quantity="";
this.unitCost="";
this.amount="";
}
},
path:"billitems"}

export default billItemModel;
