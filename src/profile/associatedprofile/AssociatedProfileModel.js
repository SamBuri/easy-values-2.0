const associatedProfileModel = {
 model: {
profileId:"",
associatedProfileId:"",
position:"",
main:false,

clear(){
this.profileId="";
this.associatedProfileId="";
this.position="";
this.main=false;
},
copy(obj){
this.id=obj.id;
this.profileId = obj.profile.Id;
this.associatedProfileId = obj.associatedProfile.Id;
this.position = obj.position;
this.main = obj.main;

},
printOptions(){let data = [];
data.push({ text: "Profile", value: this.associatedProfile.profile.displayKey });
data.push({ text: "Associated Profile", value: this.associatedProfile.associatedProfile.displayKey });
data.push({ text: "Position", value: this.associatedProfile.position });

 return {
        data: data,
        startXPos: 10,
        startYPos: 25,
        lineBreak: 4,
        hSpace: 50,
        vSpace: 10,
        title: "Associated Profile"

      };
},


},
path:"associatedprofiles",
rules: {
profileId:[(v) => !!v || "Profile is required",
 ],associatedProfileId:[(v) => !!v || "Associated Profile is required",
 ],position:[(v) => !!v || "Position is required",
(v) => v.length < 100 || "Position length must be less or equal to 100", ],

}
}

export default associatedProfileModel;
