import keycloakService from "@/keycloak/keycloakService";
import { h } from "vue";
const resetPasswordModel = {
  model: {
    userId: "",
    name: "",
    type: "password",
    value: "",
    temporary: true,

    clear() {
      this.userId = "";
      this.name = "";
      this.value = "";
      this.temporary = true;
      this.username = "";
      this.email = "";
    },
    copy(obj) {
      this.id = obj.id;
      this.userId = obj.user.id;
      this.name = obj.name;
      this.type = obj.type;
      this.value = obj.value;
      this.temporary = obj.temporary;

    },
    printOptions() {
      let data = [];
      data.push({ text: "User", value: this.resetPassword.user.displayKey });
      data.push({ text: "Name", value: this.resetPassword.name });
      data.push({ text: "Type", value: this.resetPassword.type });
      data.push({ text: "Password", value: this.resetPassword.value });

      return {
        data: data,
        startXPos: 10,
        startYPos: 25,
        lineBreak: 4,
        hSpace: 50,
        vSpace: 10,
        title: "Reset Password"

      };
    },


  },
  path: "resetpasswords",
  httpStrategy: async () => keycloakService.getHttpStrategy(),
  rules: {
    userId: [(v) => !!v || "User is required",
    ], name: [(v) => !!v || "Name is required",
    (v) => v.length < 100 || "Name length must be less or equal to 100",], type: [(v) => !!v || "Type is required",
    (v) => v.length < 100 || "Type length must be less or equal to 100",], value: [(v) => !!v || "Password is required",
    (v) => v.length < 100 || "Password length must be less or equal to 100",],

  }
}

export default resetPasswordModel;
