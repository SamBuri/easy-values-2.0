const countyModel = {
 model: {
districtId:"",
countyName:"",
hidden:false,

clear(){
this.districtId="";
this.countyName="";
this.hidden=false;
},
copy(obj){
this.id=obj.id;
this.districtId = obj.district.Id;
this.countyName = obj.countyName;
this.hidden = obj.hidden;

},
printOptions(){let data = [];
data.push({ text: "District", value: this.county.district.displayKey });
data.push({ text: "County Name", value: this.county.countyName });

 return {
        data: data,
        startXPos: 10,
        startYPos: 25,
        lineBreak: 4,
        hSpace: 50,
        vSpace: 10,
        title: "County"

      };
},

},
path:"counties",
rules: {
districtId:[(v) => !!v || "District is required",
 ],countyName:[(v) => !!v || "County Name is required",
(v) => v.length < 100 || "County Name length must be less or equal to 100", ],

}
}

export default countyModel;
