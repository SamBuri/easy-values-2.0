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
    <template slot="heading">User</template>

    <template slot="form-data">
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-text-field
          label="First Name"
          v-model="user.firstName"
          :rules="firstNameRules"
          :counter="20"
          required
        ></v-text-field>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-text-field
          label="Last Name"
          v-model="user.lastName"
          :rules="lastNameRules"
          :counter="20"
          required
        ></v-text-field>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-text-field
          label="Staff No"
          v-model="user.staffNo"
          :rules="staffNoRules"
          :counter="20"
          required
        ></v-text-field>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-text-field
          label="Username"
          v-model="user.username"
          :rules="usernameRules"
          :counter="50"
          required
        ></v-text-field>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-text-field
          label="Password"
          v-model="user.password"
          :rules="passwordRules"
          :counter="100"
          required
        ></v-text-field>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-select
          label="Role"
          v-model="user.role"
          type="number"
          :rules="roleRules"
          :counter="100"
          required
          :items="$store.state.security.role.mini"
          :loading="$store.state.security.role.miniLoading"
          item-text="roleName"
          item-value="id"
          return-object
        ></v-select>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-checkbox label="Locked" v-model="user.locked"></v-checkbox>
      </v-col>
    </template>
  </crud-form>
</template>
<script>
import userModel from "./UserModel";
import CrudForm from "../../components/CrudForm.vue";
export default {
  components: { CrudForm },
  name: "User",
  data: () => ({
    cols: 12,
    sm: 6,
    md: 4,
    maxWidth: 700,
    path: userModel.path,
    user: userModel.user,
    firstNameRules: [
      (v) => !!v || "First Name is required",
      (v) => v.length < 20 || "First Name length must be less or equal to 20",
    ],
    lastNameRules: [
      (v) => !!v || "Last Name is required",
      (v) => v.length < 20 || "Last Name length must be less or equal to 20",
    ],
    staffNoRules: [
      (v) => !!v || "Staff No is required",
      (v) => v.length < 20 || "Staff No length must be less or equal to 20",
    ],
    usernameRules: [
      (v) => !!v || "Username is required",
      (v) => v.length < 50 || "Username length must be less or equal to 50",
    ],
    passwordRules: [
      (v) => !!v || "Password is required",
      (v) => v.length < 100 || "Password length must be less or equal to 100",
    ],
    roleRules: [(v) => !!v || "Role is required"],
  }),
  created() {
    this.$store.dispatch("security/role/getMini");
  },
  computed: {},

  watch: {},

  methods: {
    save() {
      this.$store.dispatch("post", { path: this.path, body: this.user });
    },
    update() {
      this.$store.dispatch("put", {
        path: `${this.path}/${this.user.id}`,
        body: this.user,
      });
    },
    updateDialog() {
      var obj = this.$store.state.search.selectedData[0].value;
      this.setDialog(obj);
    },
    async search() {
      var obj = this.$store.state.obj;
      this.user = Object.assign({}, obj);
      this.setObjects(obj);
    },
    reset() {
      this.user.clear();
    },
    setObjects(obj) {
      console.log(obj);
    },
    setDialog(obj) {
      this.user = Object.assign({}, obj);
      this.setObjects(obj);
    },
    done() {
      this.$store.commit("crudtable/data", Object.assign({}, this.user));
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
