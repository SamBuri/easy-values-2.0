import keycloakService from "@/keycloak/keycloakService";

const groupModel = {
  model: {
    name: "",

    clear() {
      this.name = "";
      
    },

    copy(obj) {
      this.id = obj.id;
      this.name = obj.name;
      this.roles = obj.realmRoles;

    },

    getFormData() {
      return { name: this.name }
    },


    printOptions() {
      let data = [];
      data.push({ text: "Group", value: this.group.name });

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
  httpStrategy: async () => keycloakService.getHttpStrategy(),
  rules: {
    name: [(v) => !!v || "Group is required",
    (v) => v.length < 100 || "Group length must be less or equal to 100",],

  }
}

export default groupModel;
