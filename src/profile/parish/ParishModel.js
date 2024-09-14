const parishModel = {
 model: {
countryId:"",
districtId:"",
countyId:"",
subCountyId:"",
parishName:"",
hidden:false,

clear(){
this.countryId="";
this.districtId="";
this.countyId="";
this.subCountyId="";
this.parishName="";
this.hidden=false;
},
copy(obj){
this.id=obj.id;
this.countryId = obj.country.Id;
this.districtId = obj.district.Id;
this.countyId = obj.county.Id;
this.subCountyId = obj.subCounty.Id;
this.parishName = obj.parishName;
this.hidden = obj.hidden;

},
printOptions(){let data = [];
data.push({ text: "Country", value: this.parish.country.displayKey });
data.push({ text: "District", value: this.parish.district.displayKey });
data.push({ text: "County", value: this.parish.county.displayKey });
data.push({ text: "Sub County", value: this.parish.subCounty.displayKey });
data.push({ text: "Parish Name", value: this.parish.parishName });

 return {
        data: data,
        startXPos: 10,
        startYPos: 25,
        lineBreak: 4,
        hSpace: 50,
        vSpace: 10,
        title: "Parish"

      };
},

},
path:"parishes",
rules: {
countryId:[(v) => !!v || "Country is required",
 ],districtId:[(v) => !!v || "District is required",
 ],countyId:[(v) => !!v || "County is required",
 ],subCountyId:[(v) => !!v || "Sub County is required",
 ],parishName:[(v) => !!v || "Parish Name is required",
(v) => v.length < 100 || "Parish Name length must be less or equal to 100", ],

}
}

export default parishModel;
