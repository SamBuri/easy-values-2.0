<template>
  <crud-form
    @save="save"
    @update="update"
    @search="search"
    @updateDialog="updateDialog"
    @reset="reset"
    :path="path"
  >
    <template slot="heading">Parish</template>

    <template slot="form-data">
      <v-col cols="12" sm="6" md="6"
        ><v-select
          label="Country"
          v-model="parish.country"
          :rules="countryRules"
          :counter="100"
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
          v-model="parish.district"
          :rules="districtRules"
          :counter="100"
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
          v-model="parish.county"
          :rules="countyRules"
          :counter="100"
          required
          :items="$store.state.county.miniCountiesByDistrict"
          item-text="countyName"
          item-value="id"
          return-object
          @change="countySelected($event)"
        ></v-select> </v-col
      ><v-col cols="12" sm="6" md="6"
        ><v-select
          label="Sub County"
          v-model="parish.subCounty"
          :rules="subCountyRules"
          :counter="100"
          required
          :items="$store.state.subcounty.miniSubCountiesByCounty"
          item-text="subCountyName"
          item-value="id"
          return-object
        ></v-select> </v-col
      ><v-col cols="12" sm="6" md="6"
        ><v-text-field
          label="Parish Name"
          v-model="parish.parishName"
          :rules="parishNameRules"
          :counter="100"
          required
        ></v-text-field> </v-col
      ><v-col cols="12" sm="6" md="6"
        ><v-checkbox label="Hidden" v-model="parish.hidden"></v-checkbox>
      </v-col>
    </template>
  </crud-form>
</template>
<script>
import parishModel from "./ParishModel";
import constants from "../../utils/constants";
import CrudForm from "../../components/CrudForm.vue";
export default {
  components: { CrudForm },
  name: "Parish",
  data: () => ({
    path: constants.endPoints.parishes,
    parish: parishModel.parish,
    countryRules: [(v) => !!v || "Country is required"],
    districtRules: [(v) => !!v || "District is required"],
    countyRules: [(v) => !!v || "County is required"],
    subCountyRules: [(v) => !!v || "Sub County is required"],
    parishNameRules: [
      (v) => !!v || "Parish Name is required",
      (v) =>
        v.length < 100 || "Parish Name length must be less or equal to 100",
    ],
  }),
  created() {
    this.$store.dispatch("country/getMini");
  },
  computed: {},

  watch: {},

  methods: {
    save() {
      this.$store.dispatch("post", { path: this.path, body: this.parish });
    },
    update() {
      this.$store.dispatch("put", {
        path: `${this.path}/${this.parish.id}`,
        body: this.parish,
      });
    },
    updateDialog() {
      var obj = this.$store.state.search.selectedData[0].value;
      this.parish = Object.assign({}, obj);
      this.setObjects(obj);
    },
    async search() {
      var obj = this.$store.state.obj;
      this.parish = Object.assign({}, obj);
      this.setObjects(obj);
    },
    reset() {
      this.parish.clear();
    },
    loadDistricts() {
      this.$store.dispatch(
        "district/getMiniDistrictsByCountry",
        this.parish.country.id
      );
    },

    loadCounties() {
      this.$store.dispatch(
        "county/getMiniCountiesByDistrict",
        this.parish.district.id
      );
    },

    loadSubCounties() {
      this.$store.dispatch(
        "subcounty/getMiniSubCountiesByCounty",
        this.parish.county.id
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

    async countySelected(event) {
      this.loadSubCounties();
      console.log("Event", event);
    },

    setObjects(obj) {
      console.log(obj);
      this.parish.subCounty = obj.subCounty;
      this.parish.county = obj.subCounty.county;
      this.parish.district = obj.subCounty.county.district;
      this.parish.country = obj.subCounty.county.district.country;
    
      this.loadDistricts();
      this.loadCounties();
      this.loadSubCounties();
    },
  },
};
</script>
