const customerGroupModel = {
    customerGroup: {
        customerGroup: "",
        receivableAccountId: "",
        receivableAccountName: "",
        serviceChargeAccountId: "",
        serviceChargeAccountName: "",
        discountAccountId: "",
        discountAccountName: "",
        refundAccountId: "",
        refundAccountName: "",

        clear() {
            this.customerGroup = "";
            this.receivableAccountId = "";
            this.receivableAccountName = "";
            this.serviceChargeAccountId = "";
            this.serviceChargeAccountName = "";
            this.discountAccountId = "";
            this.discountAccountName = "";
            this.refundAccountId = "";
            this.refundAccountName = "";
        }
    },
  
    
}

export default customerGroupModel;
