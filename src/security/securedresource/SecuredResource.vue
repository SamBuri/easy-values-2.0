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
    <template slot="heading">SecuredResource</template>

    <template slot="form-data">
<v-col :cols="cols" :sm="sm" :md="md">
<v-text-field
 label="Resource Name"
          v-model="securedResource.resourceName"
 :rules="resourceNameRules"
:counter="40"          required
></v-text-field>
</v-col>
<v-col :cols="cols" :sm="sm" :md="md">
<v-text-field
 label="Caption"
          v-model="securedResource.caption"
 :rules="captionRules"
:counter="50"          required
></v-text-field>
</v-col>
<v-col :cols="cols" :sm="sm" :md="md">
<v-text-field
 label="Resource Type"
          v-model="securedResource.resourceType"
 :rules="resourceTypeRules"
:counter="20"          required
></v-text-field>
</v-col>
    </template>
  </crud-form>
</template>
<script>
import securedResourceModel from "./SecuredResourceModel";
import CrudForm from "../../components/CrudForm.vue";
export default {
  components: { CrudForm },
  name: "SecuredResource",
data: () => ({
    cols: 12,
    sm:6,
       md: 4,
       maxWidth:700,
path: securedResourceModel.path,
    securedResource: securedResourceModel.securedResource,
resourceNameRules: [(v) => !!v || "Resource Name is required",
(v) => v.length < 40 || "Resource Name length must be less or equal to 40", ],captionRules: [(v) => !!v || "Caption is required",
(v) => v.length < 50 || "Caption length must be less or equal to 50", ],resourceTypeRules: [(v) => !!v || "Resource Type is required",
(v) => v.length < 20 || "Resource Type length must be less or equal to 20", ],  }),
 created() {},
  computed: {},

  watch: {},

methods: {save() {
      this.$store.dispatch("post", { path: this.path, body: this.securedResource});
    },
update() {
      this.$store.dispatch("put", { path: `${this.path}/${this.securedResource.id}`,body: this.securedResource});
    },
updateDialog() {
      var obj = this.$store.state.search.selectedData[0].value;
      this.setDialog(obj);
    },
async search() {
      var obj = this.$store.state.obj;
      this.securedResource = Object.assign({}, obj);
      this.setObjects(obj);
    },
reset() {
      this.securedResource.clear();
    },
setObjects(obj){
console.log(obj);
},setDialog(obj) {
this.securedResource = Object.assign({}, obj);
this.setObjects(obj);
},
done() {
      this.$store.commit(
        "crudtable/data",
        Object.assign({}, this.securedResource)
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
