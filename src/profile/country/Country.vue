<template>
  <crud-form
    @save="save"
    @update="update"
    @search="search"
    @updateDialog="updateDialog"
    @reset="reset"
    :path="path"
  >
    <template slot="heading">Country</template>

    <template slot="form-data">
      <v-col cols="12" sm="6" md="6" spellcheck="true">
        <v-text-field
          label="Country Name"
          v-model="country.countryName"
          :rules="countryNameRules"
          :counter="40"
          required
        ></v-text-field>
      </v-col>

      <v-col cols="12" sm="6" md="6">
        <v-text-field
          label="Country Code"
          v-model="country.countryCode"
          :rules="countryCodeRules"
          :counter="4"
          required
        ></v-text-field>
      </v-col>

      <v-col cols="12" sm="6" md="6">
        <v-checkbox label="Default" v-model="country.isDefault"></v-checkbox>
      </v-col>

      <template v-if="isUpdate">
        <v-col cols="12" sm="6" md="6">
          <v-checkbox label="Hidden" v-model="country.hidden"></v-checkbox>
        </v-col>
      </template>
      <template v-else> </template>
    </template>
  </crud-form>
</template>
  

<script>
import constants from "../../utils/constants";
import countryModel from "./CountryModel";
import CrudForm from "../../components/CrudForm.vue";
export default {
  components: { CrudForm },
  name: "Country",
  data: () => ({
    path: constants.endPoints.countries,
    country: countryModel.country,

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

    updateDialog() {
      this.country = Object.assign(
        {},
        this.$store.state.search.selectedData[0].value
      );
    },

    async search() {
      this.country = Object.assign({}, this.$store.state.obj);
    },
    reset() {
      this.country.clear();
    },
  },
};
</script>