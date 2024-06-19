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
    <template slot="heading">Role</template>

    <template slot="form-data">
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-text-field
          label="Role Name"
          v-model="role.roleName"
          :rules="roleNameRules"
          :counter="40"
          required
        ></v-text-field>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-textarea
          label="Description"
          v-model="role.description"
          :rules="descriptionRules"
          :counter="200"
          required
          rows="1"
          auto-grow
        ></v-textarea>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-select
          label="Permissions"
          v-model="role.permissions"
          :rules="permissionsRules"
          :counter="100"
          required
          :items="$store.state.security.permission.mini"
          :loading="$store.state.security.permission.miniLoading"
          item-text="permissionName"
          item-value="id"
          return-object
          multiple
        ></v-select>
      </v-col>
    </template>
  </crud-form>
</template>
<script>
import roleModel from "./RoleModel";
import CrudForm from "../../components/CrudForm.vue";
export default {
  components: { CrudForm },
  name: "Role",
  data: () => ({
    cols: 12,
    sm: 6,
    md: 4,
    maxWidth: 700,
    path: roleModel.path,
    role: roleModel.role,
    roleNameRules: [
      (v) => !!v || "Role Name is required",
      (v) => v.length < 40 || "Role Name length must be less or equal to 40",
    ],
    descriptionRules: [
      (v) => !!v || "Description is required",
      (v) =>
        v.length < 200 || "Description length must be less or equal to 200",
    ],
    permissionsRules: [(v) => !!v || "Permissions is required"],
  }),
  created() {},
  computed: {},

  watch: {},

  methods: {
    save() {
      this.$store.dispatch("post", { path: this.path, body: this.role });
    },
    update() {
      this.$store.dispatch("put", {
        path: `${this.path}/${this.role.id}`,
        body: this.role,
      });
    },
    updateDialog() {
      var obj = this.$store.state.search.selectedData[0].value;
      this.setDialog(obj);
    },
    async search() {
      var obj = this.$store.state.obj;
      this.role = Object.assign({}, obj);
      this.setObjects(obj);
    },
    reset() {
      this.role.clear();
    },
    setObjects(obj) {
      console.log(obj);
    },
    setDialog(obj) {
      this.role = Object.assign({}, obj);
      this.setObjects(obj);
    },
    done() {
      this.$store.commit("crudtable/data", Object.assign({}, this.role));
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
