const invoiceModel = {
 model: {
invoiceDate:null,
invoiceType:"",
sellToId:"",
billToId:"",
invoiceSource:"",
amount:"",
amountWords:"",
entryMode:"",
clPostStatus:"",
glPostStatus:"",
invoiceDetails:[],

clear(){
this.invoiceDate=null;
this.invoiceType="";
this.sellToId="";
this.billToId="";
this.invoiceSource="";
this.amount="";
this.amountWords="";
this.entryMode="";
this.clPostStatus="";
this.glPostStatus="";
this.invoiceDetails=[];
},
copy(obj){
this.invoiceDate = obj.invoiceDate;
this.invoiceType = obj.invoiceType;
this.sellToId = obj.sellToId;
this.billToId = obj.billToId;
this.invoiceSource = obj.invoiceSource;
this.amount = obj.amount;
this.amountWords = obj.amountWords;
this.entryMode = obj.entryMode;
this.clPostStatus = obj.clPostStatus;
this.glPostStatus = obj.glPostStatus;
this.invoiceDetails = obj.invoiceDetails;

},
printOptions(){let data = [];
data.push({ text: "Invoice Date", value: this.invoice.invoiceDate });
data.push({ text: "Invoice Type", value: this.invoice.invoiceType });
data.push({ text: "Sell To", value: this.invoice.sellToId });
data.push({ text: "Sell To Name", value: this.invoice.sellToName });
data.push({ text: "Bill To", value: this.invoice.billToId });
data.push({ text: "Bill To Name", value: this.invoice.billToName });
data.push({ text: "Invoice Source", value: this.invoice.invoiceSource });
data.push({ text: "Amount", value: this.invoice.amount });
data.push({ text: "Amount Words", value: this.invoice.amountWords });
data.push({ text: "Original Amount", value: this.invoice.originalAmount });
data.push({ text: "Original Amount Words", value: this.invoice.originalAmountWords });
data.push({ text: "Amount Paid", value: this.invoice.amountPaid });
data.push({ text: "Amount Refunded", value: this.invoice.amountRefunded });
data.push({ text: "Entry Mode", value: this.invoice.entryMode });
data.push({ text: "CL Post Status", value: this.invoice.clPostStatus });
data.push({ text: "GL Post Status", value: this.invoice.glPostStatus });
data.push({ text: "Invoice Details", value: this.invoice.invoiceDetails });

 return {
        data: data,
        startXPos: 10,
        startYPos: 25,
        lineBreak: 4,
        hSpace: 50,
        vSpace: 10,
        title: "Invoice"

      };
},

},
path:"invoices",
rules: {
invoiceDate:[(v) => !!v || "Invoice Date is required",
 ],invoiceType:[(v) => !!v || "Invoice Type is required",
 ],sellToId:[(v) => !!v || "Sell To is required",
 ],billToId:[(v) => !!v || "Bill To is required",
 ],invoiceSource:[(v) => !!v || "Invoice Source is required",
(v) => v.length < 100 || "Invoice Source length must be less or equal to 100", ],amount:[(v) => !!v || "Amount is required",
 ],amountWords:[(v) => !!v || "Amount Words is required",
(v) => v.length < 200 || "Amount Words length must be less or equal to 200", ],entryMode:[(v) => !!v || "Entry Mode is required",
 ],clPostStatus:[(v) => !!v || "CL Post Status is required",
 ],glPostStatus:[(v) => !!v || "GL Post Status is required",
 ],invoiceDetails:[(v) => !!v || "Invoice Details is required",
 ],

}
}

export default invoiceModel;
