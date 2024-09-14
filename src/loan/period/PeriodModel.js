const periodModel = {
 model: {
periodName:"",
days:"",

clear(){
this.periodName="";
this.days="";
},
copy(obj){
this.id=obj.id;
this.periodName = obj.periodName;
this.days = obj.days;

},
printOptions(){let data = [];
data.push({ text: "Period Name", value: this.period.periodName });
data.push({ text: "Days", value: this.period.days });

 return {
        data: data,
        startXPos: 10,
        startYPos: 25,
        lineBreak: 4,
        hSpace: 50,
        vSpace: 10,
        title: "Period"

      };
},


},
path:"periods",
rules: {
periodName:[(v) => !!v || "Period Name is required",
(v) => v.length < 40 || "Period Name length must be less or equal to 40", ],days:[(v) => !!v || "Days is required",
 ],

}
}

export default periodModel;
