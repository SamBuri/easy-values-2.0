const companyModel = {
  model: {
    logo: null,
    companyName: "",
    businessType: "",
    address: "",
    phoneNo: "",
    email: "",
    website: "",
    tagLine: "",
    devName: "",
    dbType: "",
    dbUsername: "",
    dbPassword: "",
    dbPort: "",
    dbHost: "",
    dbDriverClassName: "",
    dbInitialize: false,

    clear() {
      this.logo = null;
      this.companyName = "";
      this.businessType = "";
      this.address = "";
      this.phoneNo = "";
      this.email = "";
      this.website = "";
      this.tagLine = "";
      this.devName = "";
      this.dbType = "";
      this.dbUsername = "";
      this.dbPassword = "";
      this.dbPort = "";
      this.dbHost = "";
      this.dbDriverClassName = "";
      this.dbInitialize = false;
    },
    copy(obj) {
      this.id = obj.id;
      this.logo = obj.logo;
      this.companyName = obj.companyName;
      this.businessType = obj.businessType;
      this.address = obj.address;
      this.phoneNo = obj.phoneNo;
      this.email = obj.email;
      this.website = obj.website;
      this.tagLine = obj.tagLine;
      this.devName = obj.devName;
      this.dbType = obj.dbType;
      this.dbUsername = obj.dbUsername;
      this.dbPassword = obj.dbPassword;
      this.dbPort = obj.dbPort;
      this.dbHost = obj.dbHost;
      this.dbDriverClassName = obj.dbDriverClassName;
      this.dbInitialize = obj.dbInitialize;
    },
    printOptions() {
      let data = [];
      data.push({ text: "Logo", value: this.company.logo });
      data.push({ text: "Company Name", value: this.company.companyName });
      data.push({
        text: "Business Type",
        value: this.company.businessType.displayKey,
      });
      data.push({ text: "Address", value: this.company.address });
      data.push({ text: "Phone No", value: this.company.phoneNo });
      data.push({ text: "Email", value: this.company.email });
      data.push({ text: "Website", value: this.company.website });
      data.push({ text: "Tag Line", value: this.company.tagLine });
      data.push({ text: "Dev Name", value: this.company.devName });
      data.push({ text: "Db Type", value: this.company.dbType });
      data.push({ text: "Db Username", value: this.company.dbUsername });
      data.push({ text: "Db Password", value: this.company.dbPassword });
      data.push({ text: "Db Port", value: this.company.dbPort });
      data.push({ text: "Db Host", value: this.company.dbHost });
      data.push({
        text: "Db Driver Class Name",
        value: this.company.dbDriverClassName,
      });

      return {
        data: data,
        startXPos: 10,
        startYPos: 25,
        lineBreak: 4,
        hSpace: 50,
        vSpace: 10,
        title: "Company",
      };
    },

    getFormData() {
      var data = new FormData();
      data.append("logo", this.logo);
      data.append("companyName", this.companyName);
      data.append("businessType", this.businessType);
      data.append("address", this.address);
      data.append("phoneNo", this.phoneNo);
      data.append("email", this.email);
      data.append("website", this.website);
      data.append("tagLine", this.tagLine);
      data.append("devName", this.devName);
      data.append("dbType", this.dbType);
      data.append("dbUsername", this.dbUsername);
      data.append("dbPassword", this.dbPassword);
      data.append("dbPort", this.dbPort);
      data.append("dbHost", this.dbHost);
      data.append("dbDriverClassName", this.dbDriverClassName);
      data.append("dbInitialize", this.dbInitialize);

      return data;
    },
  },
  path: "companies",
  rules: {
    logo: [],
    companyName: [
      (v) => !!v || "Company Name is required",
      (v) =>
        v.length < 100 || "Company Name length must be less or equal to 100",
    ],
    businessType: [(v) => !!v || "Business Type is required"],
    address: [
      (v) => !!v || "Address is required",
      (v) => v.length < 100 || "Address length must be less or equal to 100",
    ],
    phoneNo: [
      (v) => !!v || "Phone No is required",
      (v) => v.length < 100 || "Phone No length must be less or equal to 100",
    ],
    email: [],
    website: [],
    tagLine: [],
    devName: [
      (v) => !!v || "Dev Name is required",
      (v) => v.length < 100 || "Dev Name length must be less or equal to 100",
    ],
    dbType: [(v) => !!v || "Db Type is required"],
    dbUsername: [
      (v) => !!v || "Db Username is required",
      (v) =>
        v.length < 100 || "Db Username length must be less or equal to 100",
    ],
    dbPassword: [
      (v) => !!v || "Db Password is required",
      (v) =>
        v.length < 100 || "Db Password length must be less or equal to 100",
    ],
    dbPort: [(v) => !!v || "Db Port is required"],
    dbHost: [
      (v) => !!v || "Db Host is required",
      (v) => v.length < 100 || "Db Host length must be less or equal to 100",
    ],
    dbDriverClassName: [
      (v) => !!v || "Db Driver Class Name is required",
      (v) =>
        v.length < 100 ||
        "Db Driver Class Name length must be less or equal to 100",
    ],
  },
};

export default companyModel;
