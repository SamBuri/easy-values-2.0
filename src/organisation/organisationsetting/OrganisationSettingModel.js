const organisationSettingModel = {
  model: {
    companyId: "",
    settingId: "",
    propertyValue: "",

    clear() {
      this.companyId = "";
      this.settingId = "";
      this.propertyValue = "";
    },
    copy(obj) {
      this.id = obj.id;
      this.companyId = obj.company ? obj.company.id : obj.companyId;
      this.settingId = obj.setting ? obj.setting.id : obj.settingId;
      this.propertyValue = obj.propertyValue;
    }
  },
  path: "organisation-settings",
  rules: {
    companyId: [(v) => !!v || "Company is required"],
    settingId: [(v) => !!v || "Setting is required"],
    propertyValue: [
      (v) => !!v || "Property Value is required",
      (v) => (v && v.length <= 255) || "Property Value length must be <= 255",
    ],
  }
};

export default organisationSettingModel;
