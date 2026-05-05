const groupModel = {
  model: {
    id: "",
    name: "",
    path: "",
    clear() {
      this.id = "";
      this.name = "";
      this.path = "";
    },
    copy(obj) {
      this.id = obj.id;
      this.name = obj.name;
      this.path = obj.path;
       this.roles=obj.realmRoles
    },
    printOptions() {
      let data = [];
      data.push({ text: "Id", value: this.group.id });
      data.push({ text: "Name", value: this.group.name });
      data.push({ text: "Path", value: this.group.path });

      return {
        data: data,
        startXPos: 10,
        startYPos: 25,
        lineBreak: 4,
        hSpace: 50,
        vSpace: 10,
        title: "Group"

      };
    },


  },
  path: "groups",
  rules: {
    name: [(v) => !!v || "Name is required",
    (v) => v.length < 100 || "Name length must be less or equal to 100",],

  }
}

export default groupModel;
