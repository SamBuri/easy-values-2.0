const loanProductChargesModel = {
 loanProductCharges: {
loanProduct:{id: ""},
itemObj: {},
itemId:"",
determiningMethod:"",
quantity:1,
unitCost:0,
unitPrice:"",
amount: "",
recurrent:false,

clear(){
this.loanProduct={id: ""};
this.itemObj= {},
this.itemId="";
this.determiningMethod="";
this.quantity=1;
this.unitCost=0;
this.unitPrice="";
this.amount="";
this.recurrent=false;
},

},
path:"loanproductchargess"}

export default loanProductChargesModel;
