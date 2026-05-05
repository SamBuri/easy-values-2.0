const branchModel = {
  model: {
    companyId: "",
    branchName: "",
    address: "",
    phoneNo: "",
    email: "",
    inactive: false,

    clear() {
      this.companyId = "";
      this.branchName = "";
      this.address = "";
      this.phoneNo = "";
      this.email = "";
      this.inactive = false;
    },
    copy(obj) {
      this.id = obj.id;
      this.companyId = obj.company?obj.company.id:'';
      this.branchName = obj.branchName;
      this.address = obj.address;
      this.phoneNo = obj.phoneNo;
      this.email = obj.email;
      this.inactive = obj.inactive;

    },
    printOptions() {
      let data = [];
      data.push({ text: "Company", value: this.branch.company.displayKey });
      data.push({ text: "Branch Name", value: this.branch.branchName });
      data.push({ text: "Address", value: this.branch.address });
      data.push({ text: "Phone No", value: this.branch.phoneNo });
      data.push({ text: "Email", value: this.branch.email });

      return {
        data: data,
        startXPos: 10,
        startYPos: 25,
        lineBreak: 4,
        hSpace: 50,
        vSpace: 10,
        title: "Branch"

      };
    },


  },
  path: "branches",
  rules: {
    companyId: [(v) => !!v || "Company is required",
    ], branchName: [(v) => !!v || "Branch Name is required",
    (v) => v.length < 50 || "Branch Name length must be less or equal to 50",], address: [(v) => !!v || "Address is required",
    (v) => v.length < 200 || "Address length must be less or equal to 200",], phoneNo: [(v) => !!v || "Phone No is required",
    (v) => v.length < 30 || "Phone No length must be less or equal to 30",], email: [(v) => !!v || "Email is required",
    (v) => v.length < 50 || "Email length must be less or equal to 50",],

  }
}

export default branchModel;
