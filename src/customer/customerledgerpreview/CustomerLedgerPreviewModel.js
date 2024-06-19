const customerLedgerPreviewModel = {
 customerLedgerPreview: {
customerId:"",
customerName:"",
phoneNo:"",
startDate:"",
endDate:"",
customerLedgers:[],

clear(){
this.customerId="";
this.customerName="";
this.phoneNo="";
this.startDate="";
this.endDate="";
this.customerLedgers=[];
}
},
path:"customerledgerpreviews"}

export default customerLedgerPreviewModel;
