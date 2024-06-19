const itemModel = {
 item: {
itemCategory:{id: ""},
itemName:"",
unitCost:"",
unitPrice:"",
itemGroupId:"",
vatItemGroupId:"",
inventoryGroupId:"",
measureGroup:{id: ""},
itemPriceGroups:[],

clear(){
this.itemCategory={id: ""};
this.itemName="";
this.unitCost="";
this.unitPrice="";
this.itemGroupId="";
this.vatItemGroupId="";
this.inventoryGroupId="";
this.measureGroup={id: ""};
this.itemPriceGroups=[];
}
},
path:"items"}

export default itemModel;
