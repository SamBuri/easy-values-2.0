const subCountyModel = {
 model: {
countyId:"",
subCountyName:"",
hidden:false,

clear(){
this.countyId="";
this.subCountyName="";
this.hidden=false;
},
copy(obj){
this.id=obj.id;
this.countyId = obj.county.Id;
this.subCountyName = obj.subCountyName;
this.hidden = obj.hidden;

},
printOptions(){let data = [];
data.push({ text: "County", value: this.subCounty.county.displayKey });
data.push({ text: "Sub County Name", value: this.subCounty.subCountyName });

 return {
        data: data,
        startXPos: 10,
        startYPos: 25,
        lineBreak: 4,
        hSpace: 50,
        vSpace: 10,
        title: "Sub County"

      };
},

},
path:"subcounties",
rules: {
countyId:[(v) => !!v || "County is required",
 ],subCountyName:[(v) => !!v || "Sub County Name is required",
(v) => v.length < 100 || "Sub County Name length must be less or equal to 100", ],

}
}

export default subCountyModel;
