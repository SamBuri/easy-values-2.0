const villageModel = {
 model: {
countryId:"",
districtId:"",
countyId:"",
subCountyId:"",
parishId:"",
villageName:"",
hidden:false,

clear(){
this.countryId="";
this.districtId="";
this.countyId="";
this.subCountyId="";
this.parishId="";
this.villageName="";
this.hidden=false;
},
copy(obj){
this.id=obj.id;
this.countryId = obj.country.Id;
this.districtId = obj.district.Id;
this.countyId = obj.county.Id;
this.subCountyId = obj.subCounty.Id;
this.parishId = obj.parish.Id;
this.villageName = obj.villageName;
this.hidden = obj.hidden;

},
printOptions(){let data = [];
data.push({ text: "Country", value: this.village.country.displayKey });
data.push({ text: "District", value: this.village.district.displayKey });
data.push({ text: "County", value: this.village.county.displayKey });
data.push({ text: "Sub County", value: this.village.subCounty.displayKey });
data.push({ text: "Parish", value: this.village.parish.displayKey });
data.push({ text: "Village Name", value: this.village.villageName });

 return {
        data: data,
        startXPos: 10,
        startYPos: 25,
        lineBreak: 4,
        hSpace: 50,
        vSpace: 10,
        title: "Village"

      };
},

},
path:"villages",
rules: {
countryId:[(v) => !!v || "Country is required",
 ],districtId:[(v) => !!v || "District is required",
 ],countyId:[(v) => !!v || "County is required",
 ],subCountyId:[(v) => !!v || "Sub County is required",
 ],parishId:[(v) => !!v || "Parish is required",
 ],villageName:[(v) => !!v || "Village Name is required",
(v) => v.length < 100 || "Village Name length must be less or equal to 100", ],

}
}

export default villageModel;
