<template>
  <crud-form
    @save="save"
    @update="update"
    @search="search"
    @updateDialog="updateDialog"
    @reset="reset"
    :path="path"
  >
    <template slot="heading">LookupObject</template>

    <template slot="form-data">
      <v-col :cols="cols" :sm="sm" :md="md"
        ><v-text-field
          label="Object Name"
          v-model="lookupObject.objectName"
          :rules="objectNameRules"
          :counter="100"
          required
        ></v-text-field> </v-col
      ><v-col :cols="cols" :sm="sm" :md="md"
        ><v-checkbox
          label="ReadOnly"
          v-model="lookupObject.readOnly"
        ></v-checkbox> </v-col
      ><v-col :cols="cols" :sm="sm" :md="md"
        ><v-checkbox label="Hidden" v-model="lookupObject.hidden"></v-checkbox>
      </v-col>
    </template>
  </crud-form>
</template>
<script>
import lookupObjectModel from "./LookupObjectModel";
import constants from "../../utils/constants";
import CrudForm from "../../components/CrudForm.vue";
export default {
  components: { CrudForm },
  name: "LookupObject",
  data: () => ({
    cols: 12,
    sm: 6,
    md: 6,
    path: constants.endPoints.lookupobjects,
    lookupObject: lookupObjectModel.lookupObject,
    objectNameRules: [
      (v) => !!v || "Object Name is required",
      (v) =>
        v.length < 100 || "Object Name length must be less or equal to 100",
    ],
  }),
  created() {},
  computed: {},

  watch: {},

  methods: {
    save() {
      this.$store.dispatch("post", {
        path: this.path,
        body: this.lookupObject,
      });
    },
    update() {
      this.$store.dispatch("put", {
        path: `${this.path}/${this.lookupObject.id}`,
        body: this.lookupObject,
      });
    },
    updateDialog() {
      var obj = this.$store.state.search.selectedData[0].value;
      this.lookupObject = Object.assign({}, obj);
      this.setObjects(obj);
    },
    async search() {
      var obj = this.$store.state.obj;
      this.lookupObject = Object.assign({}, obj);
      this.setObjects(obj);
    },
    reset() {
      this.lookupObject.clear();
    },
    setObjects(obj) {
      console.log(obj);
    },
  },
};
</script>
