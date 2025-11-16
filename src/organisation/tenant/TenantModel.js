const tenantModel = {
  model: {
    disabled: false,
    host: "",
    authUrl: "",
    realm: "",
    issuerUrl: "",
    jwkUrl: "",
    implicitClientId: "",
    implicitClientSecret: "",

    clear() {
      
      this.disabled = false;
      this.host = "";
      this.authUrl = "";
      this.realm = "";
      this.issuerUrl = "";
      this.jwkUrl = "";
      this.implicitClientId = "";
      this.implicitClientSecret = "";
    },
    copy(obj) {
      this.id = obj.id;
      this.disabled = obj.disabled;
      this.host = obj.host;
      this.authUrl = obj.authUrl;
      this.realm = obj.realm;
      this.issuerUrl = obj.issuerUrl;
      this.jwkUrl = obj.jwkUrl;
      this.implicitClientId = obj.implicitClientId;
      this.implicitClientSecret = obj.implicitClientSecret;

    },
    printOptions() {
      let data = [];
      
      data.push({ text: "Disabled", value: this.tenant.disabled });
      data.push({ text: "Host", value: this.tenant.host });
      data.push({ text: "Auth Url", value: this.tenant.authUrl });
      data.push({ text: "Realm", value: this.tenant.realm });
      data.push({ text: "Issuer Url", value: this.tenant.issuerUrl });
      data.push({ text: "Jwk Url", value: this.tenant.jwkUrl });
      data.push({ text: "Implicit Client Id", value: this.tenant.implicitClientId });
      data.push({ text: "Implicit Client Secret", value: this.tenant.implicitClientSecret });

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
    url: [(v) => !!v || "Url is required",
    (v) => v.length < 50 || "Url length must be less or equal to 50",], authUrl: [(v) => !!v || "Auth Url is required",
    (v) => v.length < 50 || "Auth Url length must be less or equal to 50",], realm: [(v) => !!v || "Realm is required",
    (v) => v.length < 50 || "Realm length must be less or equal to 50",], issuerUrl: [(v) => !!v || "Issuer Url is required",
    (v) => v.length < 100 || "Issuer Url length must be less or equal to 100",], 
    jwkUrl: [
      // (v) => !!v || "Jwk Url is required", (v) => v.length < 100 || "Jwk Url length must be less or equal to 100",
    ],
     implicitClientId: [(v) => !!v || "Implicit Client Id is required",
    (v) => v.length < 100 || "Implicit Client Id length must be less or equal to 100",], implicitClientSecret: [(v) => !!v || "Implicit Client Secret is required",
    (v) => v.length < 100 || "Implicit Client Secret length must be less or equal to 100",],

  }
}

export default tenantModel;
