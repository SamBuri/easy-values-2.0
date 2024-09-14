const engagementModel = {
 model: {
customerId:"",
engagementDate:null,
engagementReason:"",
engagementMode:"",
title:"",
description:"",
attendingPersonnel:"",
status:"Open",
nextEngagementDate:null,
expectedNextEngagementMode: null,
parentEngagementId:"",

clear(){
this.customerId="";
this.engagementDate=null;
this.engagementReason="";
this.engagementMode="";
this.title="";
this.description="";
this.customerName="";
this.status="Open";
this.nextEngagementDate=null;
this.expectedNextEngagementMode=null;
this.parentEngagementId="";
},
copy(obj){
this.id=obj.id;
this.customerId = obj.customer.id;
this.engagementDate = obj.engagementDate;
this.engagementReason = obj.engagementReason;
this.engagementMode = obj.engagementMode;
this.title = obj.title;
this.description = obj.description;
this.attendingPersonnel = obj.attendingPersonnel;
this.status = obj.status;
this.nextEngagementDate = obj.nextEngagementDate;
this.expectedNextEngagementMode = obj.expectedNextEngagementMode;
this.parentEngagementId = obj.parentEngagement.id;

},
printOptions(){let data = [];
data.push({ text: "Customer", value: this.engagement.customer.displayKey });
data.push({ text: "Engagement Date", value: this.engagement.engagementDate });
data.push({ text: "Engagement Reason", value: this.engagement.engagementReason.displayKey });
data.push({ text: "Engagement Mode", value: this.engagement.engagementMode.displayKey });
data.push({ text: "Title", value: this.engagement.title });
data.push({ text: "Description", value: this.engagement.description });
data.push({ text: "Attending Personnel", value: this.engagement.attendingPersonnel });
data.push({ text: "Status", value: this.engagement.status });
data.push({ text: "Next Engagement Date", value: this.engagement.nextEngagementDate });
data.push({ text: "Expected Next Engagement Mode", value: this.engagement.expectedNextEngagementMode.displayKey });
data.push({ text: "Parent Engagement", value: this.engagement.parentEngagement.displayKey });

 return {
        data: data,
        startXPos: 10,
        startYPos: 25,
        lineBreak: 4,
        hSpace: 50,
        vSpace: 10,
        title: "Engagement"

      };
},


},
path:"engagements",
rules: {
customerId:[(v) => !!v || "Customer is required",
 ],engagementDate:[(v) => !!v || "Engagement Date is required",
 ],engagementReason:[(v) => !!v || "Engagement Reason is required",
 ],engagementMode:[(v) => !!v || "Engagement Mode is required",
 ],title:[(v) => !!v || "Title is required",
(v) => v.length < 100 || "Title length must be less or equal to 100", ],description:[(v) => !!v || "Description is required",
(v) => v.length < 200 || "Description length must be less or equal to 200", ],attendingPersonnel:[(v) => !!v || "Attending Personnel is required",
(v) => v.length < 100 || "Attending Personnel length must be less or equal to 100", ],status:[(v) => !!v || "Status is required",
 ],nextEngagementDate:[],
 expectedNextEngagementMode:[],
 parentEngagementId:[(v) => !!v || "Parent Engagement is required",
 ],

}
}

export default engagementModel;
