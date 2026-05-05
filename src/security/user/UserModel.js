const userModel = {
  model: {
    id: "",
    username: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    emailVerified: false,
    enabled: true,
    groups: [],
    attributes: {
      default_branch: [],
      other_branches: []
    },
    requiredActions: [],

    clear() {
      this.id = "";
      this.username = "";
      this.firstName = "";
      this.lastName = "";
      this.email = "";
      this.password = "";
      this.emailVerified = false;
      this.enabled = true;
      this.groups = [];
      this.attributes = {
        default_branch: [],
        other_branches: []
      };
      this.requiredActions = [];
    },
    copy(obj) {
      this.id = obj.id;
      this.username = obj.username;
      this.firstName = obj.firstName;
      this.lastName = obj.lastName;
      this.email = obj.email;
      this.emailVerified = obj.emailVerified;
      this.enabled = obj.enabled;
      this.attributes = obj.attributes || {
        default_branch: [],
        other_branches: []
      };
      this.defaultBranch = this.attributes.default_branch ? this.attributes.default_branch[0] : "";
      this.otherBranches = this.attributes.other_branches || [];
      this.requiredActions = obj.requiredActions || [];
    },
    modify() {
      if (this.attributes == null) this.attributes = {};
      this.attributes.default_branch = Array.isArray(this.defaultBranch) ? this.defaultBranch : [this.defaultBranch];
      this.attributes.other_branches = Array.isArray(this.otherBranches) ? this.otherBranches : [this.otherBranches];
    },
    printOptions() {
      let data = [];
      data.push({ text: "Id", value: this.user.id });
      data.push({ text: "Username", value: this.user.username });
      data.push({ text: "First Name", value: this.user.firstName });
      data.push({ text: "Last Name", value: this.user.lastName });
      data.push({ text: "Email", value: this.user.email });
      data.push({ text: "Email Verified", value: this.user.emailVerified });
      data.push({ text: "Enabled", value: this.user.enabled });

      return {
        data: data,
        startXPos: 10,
        startYPos: 25,
        lineBreak: 4,
        hSpace: 50,
        vSpace: 10,
        title: "User"

      };
    },


  },
  path: "users",
  rules: {
    username: [(v) => !!v || "Username is required",
    (v) => v.length < 100 || "Username length must be less or equal to 100",], firstName: [(v) => !!v || "First Name is required",
    (v) => v.length < 100 || "First Name length must be less or equal to 100",], lastName: [(v) => !!v || "Last Name is required",
    (v) => v.length < 100 || "Last Name length must be less or equal to 100",], email: [(v) => !!v || "Email is required",
    (v) => v.length < 100 || "Email length must be less or equal to 100",],
    password: [
      (v) => !!v || "Password is required",
    ]

  }
}

export default userModel;
