<template>
  <crude-form
    @save="save"
    @update="update"
    @search="search"
    @updateDialog="updateDialog"
    :path="path"
  >
    <template slot="heading">Sample</template>

    <template slot="form-data">
      <v-col cols="12" sm="6" md="4" spellcheck="true">
        <v-text-field
          label="Country Name"
          v-model="country.countryName"
          :rules="countryNameRules"
          :counter="40"
          required
        ></v-text-field>
      </v-col>

      <v-col cols="12" sm="6" md="4">
        <v-text-field
          label="Country Code"
          v-model="country.countryCode"
          :rules="countryCodeRules"
          :counter="4"
          required
        ></v-text-field>
      </v-col>

      <v-col cols="12" sm="6" md="4">
        <v-checkbox label="Default" v-model="country.isDefault"></v-checkbox>
      </v-col>

      <template v-if="isUpdate">
        <v-col cols="12" sm="6" md="4">
          <v-checkbox label="Hidden" v-model="country.hidden"></v-checkbox>
        </v-col>
      </template>
      <template v-else> </template> </template
  ></crude-form>
</template>


 
<script>
import constants from "../utils/constants";
import CrudeForm from "../components/CrudForm.vue";
import countryModel from "../address/country/CountryModel";
export default {
  components: { CrudeForm },
  name: "Sample",
  data: () => ({
    path: constants.endPoints.countries,
    responseMessage: "",
    errorMessage: "",
    country: countryModel.country,
    idRules: [(v) => !!v || "Please enter the Id"],
    countryNameRules: [
      (v) => !!v || "Name is required",
      (v) => v.length <= 40 || "Name must be less than 40 characters",
    ],

    countryCodeRules: [
      (v) => !!v || "Country Code is required",
      (v) => v.length <= 4 || "Country Code length must be less or equal to 4",
    ],
  }),

  computed: {
    // selectedData() {
    //   return this.$store.state.search.selectedData;
    // },

    isUpdate() {
      return (
        parseInt(this.$route.params.mode, 10) === 1 ||
        this.$store.state.search.dialog
      );
    },
  },

  watch: {},

  methods: {
    save() {
      this.$store.dispatch("post", { path: this.path, body: this.country });
    },

    update() {
      this.$store.dispatch("put", {
        path: `${this.path}/${this.country.id}`,
        body: this.country,
      });
    },

    updateDialog(selectData) {
      this.country = Object.assign({}, selectData);
    },

    async search() {
      this.country = Object.assign({}, this.$store.state.obj);
    },
  },
};
</script>