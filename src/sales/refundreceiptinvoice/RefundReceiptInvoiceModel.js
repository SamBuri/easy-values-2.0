const refundReceiptInvoiceModel = {
 refundReceiptInvoice: {
refund:{id: ""},
receiptInvoice:{id: ""},
amount:"",

clear(){
this.refund={id: ""};
this.receiptInvoice={id: ""};
this.amount="";
}
},
path:"refundreceiptinvoices"}

export default refundReceiptInvoiceModel;
