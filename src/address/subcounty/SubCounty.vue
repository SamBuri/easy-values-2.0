<template>
  <crud-form
    @save="save"
    @update="update"
    @search="search"
    @updateDialog="updateDialog"
    @reset="reset"
    :path="path"
  >
    <template slot="heading">Sub County</template>

    <template slot="form-data">
      <v-col cols="12" sm="6" md="6"
        ><v-select
          label="Country"
          v-model="subCounty.country"
          :rules="countryRules"
          required
          :items="$store.state.country.mini"
          item-text="countryName"
          item-value="id"
          return-object
          @change="countrySelected($event)"
        ></v-select> </v-col
      ><v-col cols="12" sm="6" md="6"
        ><v-select
          label="District"
          v-model="subCounty.district"
          :rules="districtRules"
          required
          :items="$store.state.district.miniDistrictsByCountry"
          item-text="districtName"
          item-value="id"
          return-object
          @change="districtSelected($event)"
        ></v-select> </v-col
      ><v-col cols="12" sm="6" md="6"
        ><v-select
          label="County"
          v-model="subCounty.county"
          :rules="countyRules"
          required
          :items="$store.state.county.miniCountiesByDistrict"
          item-text="countyName"
          item-value="id"
          return-object
        ></v-select> </v-col
      ><v-col cols="12" sm="6" md="6"
        ><v-text-field
          label="Sub County Name"
          v-model="subCounty.subCountyName"
          :rules="subCountyNameRules"
          required
        ></v-text-field> </v-col
      ><v-col cols="12" sm="6" md="6"
        ><v-checkbox label="Hidden" v-model="subCounty.hidden"></v-checkbox>
      </v-col>
    </template>
  </crud-form>
</template>
<script>
import subCountyModel from "./SubCountyModel";
import constants from "../../utils/constants";
import CrudForm from "../../components/CrudForm.vue";
export default {
  components: { CrudForm },
  name: "SubCounty",
  data: () => ({
    path: constants.endPoints.subcounties,
    subCounty: subCountyModel.subCounty,
    countryRules: [(v) => !!v || "Country is required"],
    districtRules: [(v) => !!v || "District is required"],
    countyRules: [(v) => !!v || "County is required"],
    subCountyNameRules: [
      (v) => !!v || "Sub County Name is required",
      (v) =>
        v.length < 100 || "Sub County Name length must be less or equal to 100",
    ],
  }),
  created() {
    this.$store.dispatch("country/getMini");
  },
  computed: {},

  watch: {},

  methods: {
    save() {
      this.$store.dispatch("post", { path: this.path, body: this.subCounty });
    },
    update() {
      this.$store.dispatch("put", {
        path: `${this.path}/${this.subCounty.id}`,
        body: this.subCounty,
      });
    },
    updateDialog() {
      var obj = this.$store.state.search.selectedData[0].value;
      this.subCounty = Object.assign({}, obj);
      this.setObjects(obj);
    },
    async search() {
      var obj = this.$store.state.obj;
      this.subCounty = Object.assign({}, obj);
      this.setObjects(obj);
    },
    reset() {
      this.subCounty.clear();
    },

    loadDistricts() {
      this.$store.dispatch(
        "district/getMiniDistrictsByCountry",
        this.subCounty.country.id
      );
    },

    loadCounties() {
      this.$store.dispatch(
        "county/getMiniCountiesByDistrict",
        this.subCounty.district.id
      );
    },
    async countrySelected(event) {
      this.loadDistricts();
      console.log("Event", event);
    },

    async districtSelected(event) {
      this.loadCounties();
      console.log("Event", event);
    },

    setObjects(obj) {
      console.log(obj);
      this.subCounty.county = obj.county;
      this.subCounty.district = obj.county.district;
      this.subCounty.country = obj.county.district.country;
      this.loadDistricts();
      this.loadCounties();
    },
  },
};
</script>
