const shareTransferModel = {
 shareTransfer: {
transferFromId:"",
transferFrom:null,
transferToId:"",
transferTo:null,
transferDate:"",
shareTypeId:"",
shareType:null,
quantity:"",
unitPrice:"0",
fromQtyBalance: 0,
fromBalance: 0,
toQtyBalance: 0,
toBalance: 0,
amount:"",

clear(){
this.transferFromId="";
this.transferFrom=null;
this.transferToId="";
this.transferTo=null;
this.transferDate="";
this.shareTypeId="";
this.shareType=null;
this.quantity="";
this.unitPrice="0";
this.fromQtyBalance=0;
this.fromBalance=0;
this.toQtyBalance=0;
this.toBalance=0;
this.amount="";
}
},
path:"sharetransfers"}

export default shareTransferModel;
