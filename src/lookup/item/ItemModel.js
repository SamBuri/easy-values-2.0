const itemModel = {
 item: {
itemCategory:null,
itemName:"",
unitCost:"",
unitPrice:"",
vatItemGroupId:"",
inventoryGroupId:"",
measureGroup:null,
editUnitCost:false,
editUnitPrice:false,
editQuantity:false,
hidden:false,
itemPriceGroups:[],

clear(){
this.itemCategory=null;
this.itemName="";
this.unitCost="";
this.unitPrice="";
this.vatItemGroupId="";
this.inventoryGroupId="";
this.measureGroup=null;
this.editUnitCost=false;
this.editUnitPrice=false;
this.hidden=false;
this.editQuantity=false;
this.itemPriceGroups=[];
}
},
path:"items"}

export default itemModel;
