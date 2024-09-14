const billModel = {
 model: {
tranDate:null,
creditorId:"",
startDate:null,
endDate:null,
amount:"",
amountWords:"",
billItems:[],

clear(){
this.tranDate=null;
this.creditorId="";
this.startDate=null;
this.endDate=null;
this.amount="";
this.amountWords="";
this.billItems=[];
},
copy(obj){
this.id=obj.id;
this.tranDate = obj.tranDate;
this.creditorId = obj.creditor.id;
this.startDate = obj.startDate;
this.endDate = obj.endDate;
this.amount = obj.amount;
this.amountWords = obj.amountWords;
this.billItems = obj.billItems;

},
printOptions(){let data = [];
data.push({ text: "Tran Date", value: this.bill.tranDate });
data.push({ text: "Creditor", value: this.bill.creditor.displayKey });
data.push({ text: "Start Date", value: this.bill.startDate });
data.push({ text: "End Date", value: this.bill.endDate });
data.push({ text: "Amount", value: this.bill.amount });
data.push({ text: "Amount Words", value: this.bill.amountWords });
data.push({ text: "Bill Items", value: this.bill.billItems.displayKey });

 return {
        data: data,
        startXPos: 10,
        startYPos: 25,
        lineBreak: 4,
        hSpace: 50,
        vSpace: 10,
        title: "Bill"

      };
},


},
path:"bills",
rules: {
tranDate:[(v) => !!v || "Tran Date is required",
 ],creditorId:[(v) => !!v || "Creditor is required",
 ],startDate:[(v) => !!v || "Start Date is required",
 ],endDate:[(v) => !!v || "End Date is required",
 ],amount:[(v) => !!v || "Amount is required",
 ],amountWords:[(v) => !!v || "Amount Words is required",
(v) => v.length < 200 || "Amount Words length must be less or equal to 200", ],billItems:[(v) => !!v || "Bill Items is required",
 ],

}
}

export default billModel;
