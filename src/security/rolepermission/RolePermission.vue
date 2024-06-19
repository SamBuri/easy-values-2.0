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
    <template slot="heading">Role Permission</template>

    <template slot="form-data">
<v-col :cols="cols" :sm="sm" :md="md">
<v-select label="Role"
          v-model="rolePermission.role"
 type="number" :rules="roleRules"
:counter="100"          required
:items="$store.state.security.role.mini"
:loading="$store.state.security.role.miniLoading"
item-text="roleName"
          item-value="id"
          return-object
></v-select>
</v-col>
<v-col :cols="cols" :sm="sm" :md="md">
<v-select label="Permission"
          v-model="rolePermission.permission"
 type="number" :rules="permissionRules"
:counter="20"          required
:items="$store.state.security.permission.mini"
:loading="$store.state.security.permission.miniLoading"
item-text="permissionName"
          item-value="id"
          return-object
></v-select>
</v-col>
    </template>
  </crud-form>
</template>
<script>
import rolePermissionModel from "./RolePermissionModel";
import CrudForm from "../../components/CrudForm.vue";
export default {
  components: { CrudForm },
  name: "RolePermission",
data: () => ({
    cols: 12,
    sm:6,
       md: 4,
       maxWidth:700,
path: rolePermissionModel.path,
    rolePermission: rolePermissionModel.rolePermission,
roleRules: [(v) => !!v || "Role is required",
 ],permissionRules: [(v) => !!v || "Permission is required",
 ],  }),
 created() {this.$store.dispatch("security/role/getMini");
this.$store.dispatch("security/permission/getMini");
},
  computed: {},

  watch: {},

methods: {save() {
      this.$store.dispatch("post", { path: this.path, body: this.rolePermission});
    },
update() {
      this.$store.dispatch("put", { path: `${this.path}/${this.rolePermission.id}`,body: this.rolePermission});
    },
updateDialog() {
      var obj = this.$store.state.search.selectedData[0].value;
      this.setDialog(obj);
    },
async search() {
      var obj = this.$store.state.obj;
      this.rolePermission = Object.assign({}, obj);
      this.setObjects(obj);
    },
reset() {
      this.rolePermission.clear();
    },
setObjects(obj){
console.log(obj);
},setDialog(obj) {
this.rolePermission = Object.assign({}, obj);
this.setObjects(obj);
},
done() {
      this.$store.commit(
        "crudtable/data",
        Object.assign({}, this.rolePermission)
      );
    },
updateCrudTableDialog() {
      this.setDialog(this.$store.state.crudtable.data);
    },
resetCrudTableDialog() {
      this.reset();
    }
}};
</script>
