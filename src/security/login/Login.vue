<template>
  <crud-form
    @save="save"
    @update="update"
    @search="search"
    @updateDialog="updateDialog"
    @reset="reset"
    @done="done"
    @updateCrudTableDialog="updateCrudTableDialog"
    @resetCrudTableDialog="resetCrudTableDialog"
    :path="path"
    :maxWidth="maxWidth"
  >
    <template slot="heading">Login</template>

    <template slot="form-data">
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-text-field
          label="Username"
          v-model="login.username"
          :rules="usernameRules"
          :counter="100"
          required
        ></v-text-field>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-text-field
          label="Password"
          v-model="login.password"
          :rules="passwordRules"
          :counter="100"
          required
          type="password"
        ></v-text-field>
      </v-col>
    </template>
    <template slot="card-actions" slot-scope="{valid}">
      <v-spacer/>
       <v-btn
        color="blue darken-1"
        text
        @click="loginClicked"
        :loading="$store.state.security.user.miniLoading"
        :disabled="!valid"
      >
        Login
      </v-btn>
    </template>
  </crud-form>
  
  
</template>
<script>
import loginModel from "./LoginModel";
import CrudForm from "../../components/CrudForm.vue";
export default {
  components: { CrudForm },
  name: "Login",
  data: () => ({
    cols: 12,
    sm: 12,
    md: 12,
    maxWidth: 700,
    path: "oauth2/authorize",
    login: loginModel.login,
    usernameRules: [
      (v) => !!v || "Username is required",
      (v) => v.length < 100 || "Username length must be less or equal to 100",
    ],
    passwordRules: [
      (v) => !!v || "Password is required",
      (v) => v.length < 100 || "Password length must be less or equal to 100",
    ],
  }),
  created() {},
  computed: {

  },

  watch: {},

  methods: {
    async loginClicked() {
       await this.$store.dispatch("security/user/login", this.login);
    },
    save(){},
    update() {
      this.$store.dispatch("put", {
      
        path: `${this.path}/${this.login.id}`,
        body: this.login,
      });
    },
    updateDialog() {
      var obj = this.$store.state.search.selectedData[0].value;
      this.setDialog(obj);
    },
    async search() {
      var obj = this.$store.state.obj;
      this.login = Object.assign({}, obj);
      this.setObjects(obj);
    },
    reset() {
      this.login.clear();
    },
    setObjects(obj) {
      console.log(obj);
    },
    setDialog(obj) {
      this.login = Object.assign({}, obj);
      this.setObjects(obj);
    },
    done() {
      this.$store.commit("crudtable/data", Object.assign({}, this.login));
    },
    updateCrudTableDialog() {
      this.setDialog(this.$store.state.crudtable.data);
    },
    resetCrudTableDialog() {
      this.reset();
    },
  },
};
</script>
