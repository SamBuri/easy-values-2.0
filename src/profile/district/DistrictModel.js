const districtModel = {
 model: {
countryId:"",
districtName:"",
isDefault:false,
hidden:false,

clear(){
this.countryId="";
this.districtName="";
this.isDefault=false;
this.hidden=false;
},
copy(obj){
this.id=obj.id;
this.countryId = obj.country.Id;
this.districtName = obj.districtName;
this.isDefault = obj.isDefault;
this.hidden = obj.hidden;

},
printOptions(){let data = [];
data.push({ text: "Country", value: this.district.country.displayKey });
data.push({ text: "District Name", value: this.district.districtName });

 return {
        data: data,
        startXPos: 10,
        startYPos: 25,
        lineBreak: 4,
        hSpace: 50,
        vSpace: 10,
        title: "District"

      };
},

},
path:"districts",
rules: {
country:[(v) => !!v || "Country is required",
 ],districtName:[(v) => !!v || "District Name is required",
(v) => v.length < 100 || "District Name length must be less or equal to 100", ],

}
}

export default districtModel;
