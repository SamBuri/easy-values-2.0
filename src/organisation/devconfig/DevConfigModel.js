const devConfigModel = {
  model: {
    devName: "",
    dbType: "",
    dbUsername: "",
    dbPassword: "",
    dbPort: "",
    dbHost: "",
    dbDriverClassName: "",
    clientGroupId: null,
    disabled: false,

    clear() {
      this.devName = "";
      this.dbType = "";
      this.dbUsername = "";
      this.dbPassword = "";
      this.dbPort = "";
      this.dbHost = "";
      this.dbDriverClassName = "";
      this.clientGroupId = null;
      this.disabled = false;
    },
    copy(obj) {
      this.id = obj.id;
      this.devName = obj.devName;
      this.dbType = obj.dbType;
      this.dbUsername = obj.dbUsername;
      this.dbPassword = obj.dbPassword;
      this.dbPort = obj.dbPort;
      this.dbHost = obj.dbHost;
      this.dbDriverClassName = obj.dbDriverClassName;
      this.clientGroupId = obj?.clientGroupId || null;
      this.disabled = obj.disabled;

    },
    printOptions() {
      let data = [];
      data.push({ text: "Dev Name", value: this.devConfig.devName });
      data.push({ text: "Db Type", value: this.devConfig.dbType });
      data.push({ text: "Db Username", value: this.devConfig.dbUsername });
      data.push({ text: "Db Password", value: this.devConfig.dbPassword });
      data.push({ text: "Db Port", value: this.devConfig.dbPort });
      data.push({ text: "Db Host", value: this.devConfig.dbHost });
      data.push({ text: "Db Driver Class Name", value: this.devConfig.dbDriverClassName });
      data.push({ text: "Client Group", value: this.devConfig.clientGroupId });

      return {
        data: data,
        startXPos: 10,
        startYPos: 25,
        lineBreak: 4,
        hSpace: 50,
        vSpace: 10,
        title: "Dev Config"

      };
    },


  },
  path: "dev-configs",
  rules: {
    devName: [(v) => !!v || "Dev Name is required",
    (v) => v.length < 10 || "Dev Name length must be less or equal to 10",], dbType: [(v) => !!v || "Db Type is required",
    ], dbUsername: [(v) => !!v || "Db Username is required",
    (v) => v.length < 100 || "Db Username length must be less or equal to 100",], dbPassword: [(v) => !!v || "Db Password is required",
    (v) => v.length < 100 || "Db Password length must be less or equal to 100",], dbPort: [(v) => !!v || "Db Port is required",
    ], dbHost: [(v) => !!v || "Db Host is required",
    (v) => v.length < 100 || "Db Host length must be less or equal to 100",],
    dbDriverClassName: [(v) => v.length < 100 || "Db Driver Class Name length must be less or equal to 100",],

  }
}

export default devConfigModel;
