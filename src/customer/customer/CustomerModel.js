const customerModel = {
 model: {
customerName:"",
customerTypeId:"",
phoneNo:"",
email:"",
address:"",
priceGroupId:"",
defaultSponsorId:"",
defaultSponsor:null,
canSponsor:false,
sponsorOnly:false,
allowCredit:false,
creditLimit:"",
customerAccountsGroupId:"",
balance:"",
hidden:false,
referenceType:"",
referenceNo:"",
customerSponsors:[],

clear(){
this.customerName="";
this.customerTypeId="";
this.phoneNo="";
this.email="";
this.address="";
this.priceGroupId="";
this.defaultSponsorId="";
this.defaultSponsor=null;
this.canSponsor=false;
this.sponsorOnly=false;
this.allowCredit=false;
this.creditLimit="";
this.customerAccountsGroupId="";
this.balance="";
this.hidden=false;
this.referenceType="";
this.referenceNo="";
this.customerSponsors=[];
},
copy(obj){
this.customerName = obj.customerName;
this.customerTypeId = obj.customerTypeId;
this.phoneNo = obj.phoneNo;
this.email = obj.email;
this.address = obj.address;
this.priceGroupId = obj.priceGroupId;
this.defaultSponsor = obj.defaultSponsor;
this.canSponsor = obj.canSponsor;
this.sponsorOnly = obj.sponsorOnly;
this.allowCredit = obj.allowCredit;
this.creditLimit = obj.creditLimit;
this.customerAccountsGroupId = obj.customerAccountsGroupId;
this.balance = obj.balance;
this.hidden = obj.hidden;
this.referenceType = obj.referenceType;
this.referenceNo = obj.referenceNo;
this.customerSponsors = obj.customerSponsors;

},
printOptions(){let data = [];
data.push({ text: "Customer Name", value: this.customer.customerName });
data.push({ text: "Customer Type", value: this.customer.customerTypeId });
data.push({ text: "Customer Type", value: this.customer.customerType });
data.push({ text: "Phone No", value: this.customer.phoneNo });
data.push({ text: "Email", value: this.customer.email });
data.push({ text: "Address", value: this.customer.address });
data.push({ text: "Price Group", value: this.customer.priceGroupId });
data.push({ text: "Price Group", value: this.customer.priceGroup });
data.push({ text: "Default Sponsor", value: this.customer.defaultSponsor });
data.push({ text: "Credit Limit", value: this.customer.creditLimit });
data.push({ text: "Customer Accounts Group", value: this.customer.customerAccountsGroupId });
data.push({ text: "Customer Accounts Group", value: this.customer.customerAccountsGroup });
data.push({ text: "Balance", value: this.customer.balance });
data.push({ text: "Reference Type", value: this.customer.referenceType });
data.push({ text: "Reference No", value: this.customer.referenceNo });
data.push({ text: "Customer Sponsors", value: this.customer.customerSponsors });

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
customerName:[(v) => !!v || "Customer Name is required",
(v) => v.length < 50 || "Customer Name length must be less or equal to 50", ],customerTypeId:[(v) => !!v || "Customer Type is required",
 ],phoneNo:[(v) => !!v || "Phone No is required",
(v) => v.length < 30 || "Phone No length must be less or equal to 30", ],email:[(v) => !!v || "Email is required",
(v) => v.length < 100 || "Email length must be less or equal to 100", ],address:[(v) => !!v || "Address is required",
(v) => v.length < 200 || "Address length must be less or equal to 200", ],priceGroupId:[(v) => !!v || "Price Group is required",
 ],defaultSponsor:[(v) => !!v || "Default Sponsor is required",
 ],creditLimit:[(v) => !!v || "Credit Limit is required",
 ],customerAccountsGroupId:[(v) => !!v || "Customer Accounts Group is required",
 ],balance:[(v) => !!v || "Balance is required",
 ],referenceType:[(v) => !!v || "Reference Type is required",
 ],referenceNo:[(v) => !!v || "Reference No is required",
(v) => v.length < 100 || "Reference No length must be less or equal to 100", ],customerSponsors:[(v) => !!v || "Customer Sponsors is required",
 ],

}
}

export default customerModel;
