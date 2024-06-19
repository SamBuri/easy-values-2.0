const customerModel = {
    customer: {
        customerName: "",
        customerTypeId: "",
        phoneNo: "",
        email: "",
        address: "",
        priceGroupId: "",
        defaultSponsor: { id: "" },
        canSponsor: false,
        sponsorOnly: false,
        allowCredit: false,
        creditLimit: "",
        customerAccountsGroupId: "",
        balance: "",
        hidden: false,
        sponsors: [],

        clear() {
            this.customerName = "";
            this.customerTypeId = "";
            this.phoneNo = "";
            this.email = "";
            this.address = "";
            this.priceGroupId = "";
            this.defaultSponsor = { id: "" };
            this.canSponsor = false;
            this.sponsorOnly = false;
            this.allowCredit = false;
            this.creditLimit = "";
            this.customerAccountsGroupId = "";
            this.balance = "";
            this.hidden = false;
            this.sponsors = [];
        }
    },
    path: "customers"
}

export default customerModel;
