<template>
  <crud-form
    @save="save"
    @update="update"
    @search="search"
    @updateDialog="updateDialog"
    @reset="reset"
    :path="path"
  >
    <template slot="heading">District</template>

    <template slot="form-data">
      <v-col cols="12" sm="6" md="6">
        <v-select
          label="Country"
          v-model="district.country"
          :items="$store.state.country.mini"
          :rules="countryRules"
          item-text="countryName"
          item-value="id"
          return-object
          required
        ></v-select>
      </v-col>

      <v-col cols="12" sm="6" md="6">
        <v-text-field
          label="District Name"
          v-model="district.districtName"
          :rules="districtNameRules"
          required
        ></v-text-field>
      </v-col>

      <v-col cols="12" sm="6" md="6">
        <v-checkbox label="Default" v-model="district.isDefault"></v-checkbox>
      </v-col>

      <v-col cols="12" sm="6" md="6">
        <v-checkbox label="Hidden" v-model="district.hidden"></v-checkbox>
      </v-col>
    </template>
  </crud-form>
</template>

<script>
import districtModel from "./DistrictModel";
import constants from "../../utils/constants";
import CrudForm from "../../components/CrudForm.vue";
export default {
  components: { CrudForm },
  name: "District",
  data: () => ({
    path: constants.endPoints.districts,
    responseMessage: "",
    errorMessage: "",
    countries: [],
    district: districtModel.district,
    countryRules: [(v) => !!v || "Country is required"],

    districtNameRules: [
      (v) => !!v || "District Name is required",
      (v) =>
        v.length <= 40 || "Country Code length must be less or equal to 40",
    ],
  }),
  created() {
    this.$store.dispatch("country/getMini");
  },
  computed: {},

  watch: {},

  methods: {
    save() {
      this.$store.dispatch("post", { path: this.path, body: this.district });
    },

    update() {
      this.$store.dispatch("put", {
        path: `${this.path}/${this.district.id}`,
        body: this.district,
      });
    },

    updateDialog() {
      this.district = Object.assign(
        {},
        this.$store.state.search.selectedData[0].value
      );
      console.log(
        "Selected Data",
        this.$store.state.search.selectedData[0].value
      );
    },

    async search() {
      this.district = Object.assign({}, this.$store.state.obj);
    },
    reset() {
      this.district.clear();
    },
  },
};
</script>