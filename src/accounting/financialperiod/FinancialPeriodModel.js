const financialPeriodModel = {
 model: {
name:"",
startDate:null,
endDate:null,
active:false,

clear(){
this.name="";
this.startDate=null;
this.endDate=null;
this.active=false;
},
copy(obj){
this.id=obj.id;
this.name = obj.name;
this.startDate = obj.startDate;
this.endDate = obj.endDate;
this.active = obj.active;

},
printOptions(){let data = [];
data.push({ text: "Name", value: this.financialPeriod.name });
data.push({ text: "Start Date", value: this.financialPeriod.startDate });
data.push({ text: "End Date", value: this.financialPeriod.endDate });

 return {
        data: data,
        startXPos: 10,
        startYPos: 25,
        lineBreak: 4,
        hSpace: 50,
        vSpace: 10,
        title: "Financial Period"

      };
},

},
path:"financialperiods",
rules: {
name:[(v) => !!v || "Name is required",
(v) => v.length < 100 || "Name length must be less or equal to 100", ],startDate:[(v) => !!v || "Start Date is required",
 ],endDate:[(v) => !!v || "End Date is required",
 ],

}
}

export default financialPeriodModel;
