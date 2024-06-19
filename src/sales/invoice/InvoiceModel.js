import funcs from "../../utils/funcs";
const invoiceModel = {
 invoice: {
invoiceDate:funcs.today(),
invoiceType:"",
sellToId:"",
billToId:"",
invoiceSource:"",
amount:"",
amountWords:"",
entryMode:"",
invoiceDetails:[],

clear(){
this.invoiceDate=funcs.today();
this.invoiceType="";
this.sellToId="";
this.billToId="";
this.invoiceSource="";
this.amount="";
this.amountWords="";
this.entryMode="";
this.invoiceDetails=[];
}
},
path:"invoices"}

export default invoiceModel;
