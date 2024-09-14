const engagementPreviewModel = {
 model: {
customerId:"",
customerName:"",
phoneNo:"",
startDate:null,
endDate:null,
engegements:[],

clear(){
this.customerId="";
this.customerName="";
this.phoneNo="";
this.startDate=null;
this.endDate=null;
this.engegements=[];
},
copy(obj){
this.id=obj.id;
this.customerId = obj.customerId;
this.customerName = obj.customerName;
this.phoneNo = obj.phoneNo;
this.startDate = obj.startDate;
this.endDate = obj.endDate;
this.engegements = obj.engegements;

},
printOptions(){let data = [];
data.push({ text: "Customer Id", value: this.engagementPreview.customerId });
data.push({ text: "Customer Name", value: this.engagementPreview.customerName });
data.push({ text: "Phone No", value: this.engagementPreview.phoneNo });
data.push({ text: "Start Date", value: this.engagementPreview.startDate });
data.push({ text: "End Date", value: this.engagementPreview.endDate });
data.push({ text: "Engagements", value: this.engagementPreview.engegements.displayKey });

 return {
        data: data,
        startXPos: 10,
        startYPos: 25,
        lineBreak: 4,
        hSpace: 50,
        vSpace: 10,
        title: "Engagement Preview"

      };
},


},
path:"engagementpreviews",
rules: {
customerId:[(v) => !!v || "Customer Id is required",
(v) => v.length < 20 || "Customer Id length must be less or equal to 20", ],customerName:[(v) => !!v || "Customer Name is required",
(v) => v.length < 40 || "Customer Name length must be less or equal to 40", ],phoneNo:[(v) => !!v || "Phone No is required",
(v) => v.length < 100 || "Phone No length must be less or equal to 100", ],startDate:[(v) => !!v || "Start Date is required",
 ],endDate:[(v) => !!v || "End Date is required",
 ],engegements:[(v) => !!v || "Engagements is required",
 ],

}
}

export default engagementPreviewModel;
