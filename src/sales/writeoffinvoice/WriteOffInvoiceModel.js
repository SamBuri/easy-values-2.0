const writeOffInvoiceModel = {
 writeOffInvoice: {
writeOff:{id: ""},
invoice:{id: ""},
amount:"",

clear(){
this.writeOff={id: ""};
this.invoice={id: ""};
this.amount="";
}
},
path:"writeoffinvoices"}

export default writeOffInvoiceModel;
