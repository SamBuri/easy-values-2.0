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
    <template slot="heading">Permission</template>

    <template slot="form-data">
<v-col :cols="cols" :sm="sm" :md="md">
<v-text-field
 label="Permission Name"
          v-model="permission.permissionName"
 :rules="permissionNameRules"
:counter="50"          required
></v-text-field>
</v-col>
    </template>
  </crud-form>
</template>
<script>
import permissionModel from "./PermissionModel";
import CrudForm from "../../components/CrudForm.vue";
export default {
  components: { CrudForm },
  name: "Permission",
data: () => ({
    cols: 12,
    sm:6,
       md: 4,
       maxWidth:700,
path: permissionModel.path,
    permission: permissionModel.permission,
permissionNameRules: [(v) => !!v || "Permission Name is required",
(v) => v.length < 50 || "Permission Name length must be less or equal to 50", ],  }),
 created() {},
  computed: {},

  watch: {},

methods: {save() {
      this.$store.dispatch("post", { path: this.path, body: this.permission});
    },
update() {
      this.$store.dispatch("put", { path: `${this.path}/${this.permission.id}`,body: this.permission});
    },
updateDialog() {
      var obj = this.$store.state.search.selectedData[0].value;
      this.setDialog(obj);
    },
async search() {
      var obj = this.$store.state.obj;
      this.permission = Object.assign({}, obj);
      this.setObjects(obj);
    },
reset() {
      this.permission.clear();
    },
setObjects(obj){
console.log(obj);
},setDialog(obj) {
this.permission = Object.assign({}, obj);
this.setObjects(obj);
},
done() {
      this.$store.commit(
        "crudtable/data",
        Object.assign({}, this.permission)
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
