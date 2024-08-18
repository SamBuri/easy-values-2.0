const customerSponsorModel = {
 model: {
customerId:"",
customer:null,
sponsorId:"",
sponsor:null,
isDefault:false,

clear(){
this.customerId="";
this.customer=null;
this.sponsorId="";
this.sponsor=null;
this.isDefault=false;
},
copy(obj){
this.customer = obj.customer;
this.sponsor = obj.sponsor;
this.isDefault = obj.isDefault;

},
printOptions(){let data = [];
data.push({ text: "Customer", value: this.customerSponsor.customer });
data.push({ text: "Sponsor", value: this.customerSponsor.sponsor });

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
customer:[(v) => !!v || "Customer is required",
 ],sponsor:[(v) => !!v || "Sponsor is required",
 ],

}
}

export default customerSponsorModel;
