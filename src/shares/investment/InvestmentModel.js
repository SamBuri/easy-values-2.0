const investmentModel = {
 model: {
shareholderId:"",
tranDate:null,
shareTypeId:"",
shareAction:"",
bankAccountId:"",
quantity:"",
unitPrice:"",
amount:"",

clear(){
this.shareholderId="";
this.tranDate=null;
this.shareTypeId="";
this.shareAction="";
this.bankAccountId="";
this.quantity="";
this.unitPrice="";
this.amount="";
},
copy(obj){
this.id=obj.id;
this.shareholderId = obj.shareholder.id;
this.tranDate = obj.tranDate;
this.shareTypeId = obj.shareType.id;
this.shareAction = obj.shareAction;
this.bankAccountId = obj.bankAccountId;
this.quantity = obj.quantity;
this.unitPrice = obj.unitPrice;
this.amount = obj.amount;

},
printOptions(){let data = [];
data.push({ text: "Shareholder", value: this.investment.shareholder.displayKey });
data.push({ text: "Tran Date", value: this.investment.tranDate });
data.push({ text: "Share Type", value: this.investment.shareType.displayKey });
data.push({ text: "Share Action", value: this.investment.shareAction.displayKey });
data.push({ text: "Bank Account", value: this.investment.bankAccountId });
data.push({ text: "Quantity", value: this.investment.quantity });
data.push({ text: "Unit Price", value: this.investment.unitPrice });
data.push({ text: "Amount", value: this.investment.amount });

 return {
        data: data,
        startXPos: 10,
        startYPos: 25,
        lineBreak: 4,
        hSpace: 50,
        vSpace: 10,
        title: "Investment"

      };
},


},
path:"investments",
rules: {
shareholderId:[(v) => !!v || "Shareholder is required",
 ],tranDate:[(v) => !!v || "Tran Date is required",
 ],shareTypeId:[(v) => !!v || "Share Type is required",
 ],shareAction:[(v) => !!v || "Share Action is required",
 ],bankAccountId:[(v) => !!v || "Bank Account is required",
 ],quantity:[(v) => !!v || "Quantity is required",
 ],unitPrice:[(v) => !!v || "Unit Price is required",
 ],amount:[(v) => !!v || "Amount is required",
 ],

}
}

export default investmentModel;
