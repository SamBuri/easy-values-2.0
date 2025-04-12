const customerSponsorModel = {
 model: {
customerId:"",
sponsorId:"",
isDefault:false,

clear(){
this.customerId="";
this.sponsorId="";
this.isDefault=false;
},
copy(obj){
this.id=obj.id;
this.customerId = obj.customer.id;
this.sponsorId = obj.sponsor.id;
this.isDefault = obj.isDefault;

},
printOptions(){let data = [];
data.push({ text: "Customer", value: this.customerSponsor.customer.displayKey });
data.push({ text: "Sponsor", value: this.customerSponsor.sponsor.displayKey });

 return {
        data: data,
        startXPos: 10,
        startYPos: 25,
        lineBreak: 4,
        hSpace: 50,
        vSpace: 10,
        title: "Customer Sponsor"

      };
},


},
path:"customersponsors",
rules: {
customerId:[(v) => !!v || "Customer is required",
 ],sponsorId:[(v) => !!v || "Sponsor is required",
 ],

}
}

export default customerSponsorModel;
