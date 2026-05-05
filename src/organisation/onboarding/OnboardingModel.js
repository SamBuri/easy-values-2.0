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

    // Admin User Details
    adminUsername: "",
    adminEmail: "",
    adminPassword: "",
    adminFirstName: "",
    adminLastName: "",

    // Tenancy Configuration
    useExistingTenantGroup: false,
    tenantGroupId: null,
    useExistingTenant: false,
    tenantId: null,
    targetRealm: "",
    hostname: window.location.hostname,

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
      this.adminUsername = "";
      this.adminEmail = "";
      this.adminPassword = "";
      this.adminFirstName = "";
      this.adminLastName = "";
      this.useExistingTenantGroup = false;
      this.tenantGroupId = null;
      this.useExistingTenant = false;
      this.tenantId = null;
      this.targetRealm = "";
      this.hostname = window.location.hostname;
    },
    copy(obj) {
      // Not used for onboarding
    },
    printOptions() {
      return {};
    },

  },
  path: "onboarding",
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
