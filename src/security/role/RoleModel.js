const roleModel = {
  model: {
    id: "",
    name: "",
    description: "",
    composite: false,
    clientRole: false,

    clear() {
      this.id = "";
      this.name = "";
      this.description = "";
      this.composite = false;
      this.clientRole = false;
    },
    copy(obj) {
      this.id = obj.id;
      this.name = obj.name;
      this.description = obj.description;
      this.composite = obj.composite;
      this.clientRole = obj.clientRole;

    },
    printOptions() {
      let data = [];
      data.push({ text: "Name", value: this.role.name });
      data.push({ text: "Description", value: this.role.description });

      return {
        data: data,
        startXPos: 10,
        startYPos: 25,
        lineBreak: 4,
        hSpace: 50,
        vSpace: 10,
        title: "Role"

      };
    },


  },
  path: "roles",
  rules: {
    name: [(v) => !!v || "Name is required",
    (v) => v.length < 100 || "Name length must be less or equal to 100",],

  }
}

export default roleModel;
