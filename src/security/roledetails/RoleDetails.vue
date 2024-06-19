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
    <template slot="heading">RoleDetails</template>

    <template slot="form-data">
<v-col :cols="cols" :sm="sm" :md="md">
<v-select label="Role"
          v-model="roleDetails.role"
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
<v-select label="Secured Resource"
          v-model="roleDetails.securedResource"
 type="number" :rules="securedResourceRules"
:counter="100"          required
:items="$store.state.security.securedresource.mini"
:loading="$store.state.security.securedresource.miniLoading"
item-text="securedResourceName"
          item-value="id"
          return-object
></v-select>
</v-col>
<v-col :cols="cols" :sm="sm" :md="md">
<v-select label="Permission"
          v-model="roleDetails.permission"
 :rules="permissionRules"
:counter="20"          required
:items="$store.state.security.permissions"
:loading="$store.state.security.permissionsLoading"
          return-object
></v-select>
</v-col>
    </template>
  </crud-form>
</template>
<script>
import roleDetailsModel from "./RoleDetailsModel";
import CrudForm from "../../components/CrudForm.vue";
export default {
  components: { CrudForm },
  name: "RoleDetails",
data: () => ({
    cols: 12,
    sm:6,
       md: 4,
       maxWidth:700,
path: roleDetailsModel.path,
    roleDetails: roleDetailsModel.roleDetails,
roleRules: [(v) => !!v || "Role is required",
 ],securedResourceRules: [(v) => !!v || "Secured Resource is required",
 ],permissionRules: [(v) => !!v || "Permission is required",
 ],  }),
 created() {this.$store.dispatch("security/role/getMini");
this.$store.dispatch("security/securedresource/getMini");
this.$store.dispatch("security/getPermissions");
},
  computed: {},

  watch: {},

methods: {save() {
      this.$store.dispatch("post", { path: this.path, body: this.roleDetails});
    },
update() {
      this.$store.dispatch("put", { path: `${this.path}/${this.roleDetails.id}`,body: this.roleDetails});
    },
updateDialog() {
      var obj = this.$store.state.search.selectedData[0].value;
      this.setDialog(obj);
    },
async search() {
      var obj = this.$store.state.obj;
      this.roleDetails = Object.assign({}, obj);
      this.setObjects(obj);
    },
reset() {
      this.roleDetails.clear();
    },
setObjects(obj){
console.log(obj);
},setDialog(obj) {
this.roleDetails = Object.assign({}, obj);
this.setObjects(obj);
},
done() {
      this.$store.commit(
        "crudtable/data",
        Object.assign({}, this.roleDetails)
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
