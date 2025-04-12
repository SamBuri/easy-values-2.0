const customerModel = {
 model: {
profileId:"",
customerName:"",
businessSectionId:"",
phoneNo:"",
email:"",
address:"",
priceGroupId:"",
defaultSponsorId:"",
canSponsor:false,
sponsorOnly:false,
allowCredit:false,
creditLimit:"",
customerGroupId:"",
balance:"",
hidden:false,
referenceNo:"",
customerSponsors:[],

clear(){
this.profileId="";
this.customerName="";
this.businessSectionId="";
this.phoneNo="";
this.email="";
this.address="";
this.priceGroupId="";
this.defaultSponsorId="";
this.canSponsor=false;
this.sponsorOnly=false;
this.allowCredit=false;
this.creditLimit="";
this.customerGroupId="";
this.balance="";
this.hidden=false;
this.referenceNo="";
this.customerSponsors=[];
},
copy(obj){
this.id=obj.id;
this.profileId = obj.id;
this.customerName = obj.customerName;
this.businessSectionId = obj.businessSectionId;
this.phoneNo = obj.phoneNo;
this.email = obj.email;
this.address = obj.address;
this.priceGroupId = obj.priceGroupId;
let defaultSponsor = obj.defaultSponsor;
this.defaultSponsorId = defaultSponsor?defaultSponsor.id:null;
this.canSponsor = obj.canSponsor;
this.sponsorOnly = obj.sponsorOnly;
this.allowCredit = obj.allowCredit;
this.creditLimit = obj.creditLimit;
let customerGroup = obj.customerGroup;
this.customerGroupId = customerGroup?customerGroup.customerGroup:null;
this.balance = obj.balance;
this.hidden = obj.hidden;
this.referenceNo = obj.referenceNo;
this.customerSponsors = obj.customerSponsors;

},
printOptions(){let data = [];
data.push({ text: "Profile", value: this.customer.profile });
data.push({ text: "Customer Name", value: this.customer.customerName });
data.push({ text: "Business Section", value: this.customer.businessSectionId });
data.push({ text: "Phone No", value: this.customer.phoneNo });
data.push({ text: "Email", value: this.customer.email });
data.push({ text: "Address", value: this.customer.address });
data.push({ text: "Price Group", value: this.customer.priceGroupId });
data.push({ text: "Default Sponsor", value: this.customer.defaultSponsor.displayKey });
data.push({ text: "Credit Limit", value: this.customer.creditLimit });
data.push({ text: "Customer  Group", value: this.customer.customerGroupId });
data.push({ text: "Balance", value: this.customer.balance });
data.push({ text: "Reference No", value: this.customer.referenceNo });
data.push({ text: "Customer Sponsors", value: this.customer.customerSponsors.displayKey });

 return {
        data: data,
        startXPos: 10,
        startYPos: 25,
        lineBreak: 4,
        hSpace: 50,
        vSpace: 10,
        title: "Customer"

      };
},


},
path:"customers",
rules: {
profileId:[(v) => !!v || "Profile is required",
 ],customerName:[(v) => !!v || "Customer Name is required",
(v) => v.length < 50 || "Customer Name length must be less or equal to 50", ],
businessSectionId:[(v) => !!v || "Business Section is required",
 ],phoneNo:[(v) => !!v || "Phone No is required",
(v) => v.length < 30 || "Phone No length must be less or equal to 30", ],
email:[],
address:[(v) => !!v || "Address is required",
(v) => v.length < 200 || "Address length must be less or equal to 200", ],
priceGroupId:[
 ],defaultSponsorId:[
 ],creditLimit:[],
 customerGroupId:[(v)=>!!v||'Customer Group is Required'
 ],balance:
 [],referenceNo:[],
 customerSponsors:[ ],

}
}

export default customerModel;
