const customerSponsorModel = {
 customerSponsor: {
customer:{id: ""},
sponsor:{id: ""},
isDefault:false,

clear(){
this.customer={id: ""};
this.sponsor={id: ""};
this.isDefault=false;
}
},
path:"customersponsors"}

export default customerSponsorModel;
