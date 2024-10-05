const shareTypeModel = {
 model: {
name:"",
unitPrice:"",
dividendPercent:"",
hidden:false,

clear(){
this.name="";
this.unitPrice="";
this.dividendPercent="";
this.hidden=false;
},
copy(obj){
this.id=obj.id;
this.name = obj.name;
this.unitPrice = obj.unitPrice;
this.dividendPercent = obj.dividendPercent;
this.hidden = obj.hidden;

},
printOptions(){let data = [];
data.push({ text: "Name", value: this.shareType.name });
data.push({ text: "Unit Price", value: this.shareType.unitPrice });
data.push({ text: "Dividend Percent", value: this.shareType.dividendPercent });

 return {
        data: data,
        startXPos: 10,
        startYPos: 25,
        lineBreak: 4,
        hSpace: 50,
        vSpace: 10,
        title: "Share Type"

      };
},


},
path:"sharetypes",
rules: {
name:[(v) => !!v || "Name is required",
(v) => v.length < 40 || "Name length must be less or equal to 40", ],unitPrice:[(v) => !!v || "Unit Price is required",
 ],dividendPercent:[(v) => !!v || "Dividend Percent is required",
 ],

}
}

export default shareTypeModel;
