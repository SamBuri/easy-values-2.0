const onboardingModel = {
  model: {
    // Company Details
    companyName: "",
    businessType: null,
    address: "",
    phoneNo: "",
    email: "",
    website: "",
    tagLine: "",
    devConfigId: null,

    // Branch Details
    branches: [],

    organisationType: "",
    realm: "",
    requestedRoleName: "",

    clear() {
      this.companyName = "";
      this.businessType = null;
      this.address = "";
      this.phoneNo = "";
      this.email = "";
      this.website = "";
      this.tagLine = "";
      this.devConfigId = null;
      this.branches = [];
      this.organisationType = "";
      this.realm = "";
      this.requestedRoleName = "";
    },
    copy(obj) {
      // Not used for onboarding
    },
    printOptions() {
      return {};
    },

  },
  path: "companies",
  rules: {
    required: [(v) => !!v || "Required."],
    email: [
      (v) => {
        if (!v) return true;
        const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return pattern.test(v) || "Invalid e-mail.";
      },
    ],
  },
};

export default onboardingModel;
