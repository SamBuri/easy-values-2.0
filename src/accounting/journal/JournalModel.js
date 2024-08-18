const journalModel = {
 model: {
financialPeriodId:"",
tranDate:null,
description:"",
referenceNo:"",
currencyId:"",
baseAmount:"",
exchangeRate:"",
amount:"",
amountWords:"",
journalDetails:[],

clear(){
this.financialPeriodId="";
this.tranDate=null;
this.description="";
this.referenceNo="";
this.currencyId="";
this.baseAmount="";
this.exchangeRate="";
this.amount="";
this.amountWords="";
this.journalDetails=[];
},
copy(obj){
this.id=obj.id;
this.financialPeriodId = obj.financialPeriodId;
this.tranDate = obj.tranDate;
this.description = obj.description;
this.referenceNo = obj.referenceNo;
this.currencyId = obj.currencyId;
this.baseAmount = obj.baseAmount;
this.exchangeRate = obj.exchangeRate;
this.amount = obj.amount;
this.amountWords = obj.amountWords;
this.journalDetails = obj.journalDetails.Id;

},
printOptions(){let data = [];
data.push({ text: "Financial Period Id", value: this.journal.financialPeriodId });
data.push({ text: "Tran Date", value: this.journal.tranDate });
data.push({ text: "Description", value: this.journal.description });
data.push({ text: "Reference No", value: this.journal.referenceNo });
data.push({ text: "Currency", value: this.journal.currencyId });
data.push({ text: "Base Amount", value: this.journal.baseAmount });
data.push({ text: "Exchange Rate", value: this.journal.exchangeRate });
data.push({ text: "Amount", value: this.journal.amount });
data.push({ text: "Amount Words", value: this.journal.amountWords });
data.push({ text: "Journal Details", value: this.journal.journalDetails.displayKey });

 return {
        data: data,
        startXPos: 10,
        startYPos: 25,
        lineBreak: 4,
        hSpace: 50,
        vSpace: 10,
        title: "Journal"

      };
},

},
path:"journals",
rules: {
financialPeriodId:[(v) => !!v || "Financial Period Id is required",
(v) => v.length < 20 || "Financial Period Id length must be less or equal to 20", ],tranDate:[(v) => !!v || "Tran Date is required",
 ],description:[(v) => !!v || "Description is required",
(v) => v.length < 200 || "Description length must be less or equal to 200", ],referenceNo:[(v) => !!v || "Reference No is required",
(v) => v.length < 100 || "Reference No length must be less or equal to 100", ],currencyId:[(v) => !!v || "Currency is required",
 ],baseAmount:[(v) => !!v || "Base Amount is required",
 ],exchangeRate:[(v) => !!v || "Exchange Rate is required",
 ],amount:[(v) => !!v || "Amount is required",
 ],amountWords:[(v) => !!v || "Amount Words is required",
(v) => v.length < 200 || "Amount Words length must be less or equal to 200", ],journalDetails:[(v) => !!v || "Journal Details is required",
 ],

}
}

export default journalModel;
