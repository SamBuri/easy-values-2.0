const tenantModel = {
  model: {
    disabled: false,
    host: "",
    tenantGroupId: null,
    clientSecret: "",

    clear() {
      
      this.disabled = false;
      this.host = "";
      this.tenantGroupId = null;
      this.clientSecret = "";
    },
    copy(obj) {
      this.id = obj.id;
      this.disabled = obj.disabled;
      this.host = obj.host;
      this.tenantGroupId = obj.tenantGroupId;
      this.clientSecret = obj.clientSecret;

    },
    printOptions() {
      let data = [];
      
      data.push({ text: "Disabled", value: this.disabled });
      data.push({ text: "Host", value: this.host });
      data.push({ text: "Tenant Group", value: this.tenantGroupUrl });

      return {
        data: data,
        startXPos: 10,
        startYPos: 25,
        lineBreak: 4,
        hSpace: 50,
        vSpace: 10,
        title: "Tenant"

      };
    },


  },
  path: "tenants",
  rules: {
    host: [(v) => !!v || "Host is required",
    (v) => v.length <= 100 || "Host length must be less or equal to 100",],
    tenantGroupId: [(v) => !!v || "Tenant Group is required",],
  }
}

export default tenantModel;
