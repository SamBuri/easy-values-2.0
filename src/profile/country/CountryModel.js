const countryModel = {
 model: {
countryName:"",
countryCode:"",
default:false,
hidden:false,

clear(){
this.countryName="";
this.countryCode="";
this.default=false;
this.hidden=false;
},
copy(obj){
this.id=obj.id;
this.countryName = obj.countryName;
this.countryCode = obj.countryCode;
this.default = obj.default;
this.hidden = obj.hidden;

},
printOptions(){let data = [];
data.push({ text: "Country Name", value: this.country.countryName });
data.push({ text: "Country Code", value: this.country.countryCode });

 return {
        data: data,
        startXPos: 10,
        startYPos: 25,
        lineBreak: 4,
        hSpace: 50,
        vSpace: 10,
        title: "Country"

      };
},

},
path:"countries",
rules: {
countryName:[(v) => !!v || "Country Name is required",
(v) => v.length < 100 || "Country Name length must be less or equal to 100", ],countryCode:[(v) => !!v || "Country Code is required",
(v) => v.length < 100 || "Country Code length must be less or equal to 100", ],

}
}

export default countryModel;
