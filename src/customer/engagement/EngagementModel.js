const engagementModel = {
    engagement: {
        customerId: "",
        customerName: "",
        customer: { id: "" },
        engagementDate: "",
        engagementReason: "",
        engagementMode: "",
        title: "",
        description: "",
        attendingPersonnel: "",
        status: "",
        nextEngagementDate: "",
        expectedNextEngagementMode: "",
     
        clear() {
            this.customerId = "";
            this.customerName = "";
            this.customer = { id: "" };
            this.engagementDate = "";
            this.engagementReason = "";
            this.engagementMode = "";
            this.title = "";
            this.description = "";
            this.attendingPersonnel = "";
            this.status = "";
            this.nextEngagementDate = "";
            this.expectedNextEngagementMode = "";
          
        }
    },
    path: "engagements"
}

export default engagementModel;
