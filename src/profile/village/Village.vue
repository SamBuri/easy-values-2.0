<template>
  <crud-form
    @save="save"
    @update="update"
    @search="search"
    @updateDialog="updateDialog"
    @reset="reset"
    :path="path"
  >
    <template slot="heading">Village</template>

    <template slot="form-data">
      <v-col cols="12" sm="6" md="6"
        ><v-select
          label="Country"
          v-model="village.country"
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
          v-model="village.district"
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
          v-model="village.county"
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
          v-model="village.subCounty"
          :rules="subCountyRules"
          :counter="100"
          required
          :items="$store.state.subcounty.miniSubCountiesByCounty"
          item-text="subCountyName"
          item-value="id"
          return-object
          @change="subCountySelected($event)"
        ></v-select> </v-col
      ><v-col cols="12" sm="6" md="6"
        ><v-select
          label="Parish"
          v-model="village.parish"
          :rules="parishRules"
          :counter="100"
          required
          :items="$store.state.parish.miniParishesBySubCounty"
          item-text="parishName"
          item-value="id"
          return-object
         
        ></v-select> </v-col
      ><v-col cols="12" sm="6" md="6"
        ><v-text-field
          label="Village Name"
          v-model="village.villageName"
          :rules="villageNameRules"
          :counter="100"
          required
        ></v-text-field> </v-col
      ><v-col cols="12" sm="6" md="6"
        ><v-checkbox label="Hidden" v-model="village.hidden"></v-checkbox>
      </v-col>
    </template>
  </crud-form>
</template>
<script>
import villageModel from "./VillageModel";
import constants from "../../utils/constants";
import CrudForm from "../../components/CrudForm.vue";
export default {
  components: { CrudForm },
  name: "Village",
  data: () => ({
    path: constants.endPoints.villages,
    village: villageModel.village,
    countryRules: [(v) => !!v || "Country is required"],
    districtRules: [(v) => !!v || "District is required"],
    countyRules: [(v) => !!v || "County is required"],
    subCountyRules: [(v) => !!v || "Sub County is required"],
    parishRules: [(v) => !!v || "Parish is required"],
    villageNameRules: [
      (v) => !!v || "Village Name is required",
      (v) =>
        v.length < 100 || "Village Name length must be less or equal to 100",
    ],
  }),
  created() {
    this.$store.dispatch("country/getMini");
    
  },
  computed: {},

  watch: {},

  methods: {
    save() {
      this.$store.dispatch("post", { path: this.path, body: this.village });
    },
    update() {
      this.$store.dispatch("put", {
        path: `${this.path}/${this.village.id}`,
        body: this.village,
      });
    },
    updateDialog() {
      var obj = this.$store.state.search.selectedData[0].value;
      this.village = Object.assign({}, obj);
      this.setObjects(obj);
    },
    async search() {
      var obj = this.$store.state.obj;
      this.village = Object.assign({}, obj);
      this.setObjects(obj);
    },
    reset() {
      this.village.clear();
    },
    loadDistricts() {
      this.$store.dispatch(
        "district/getMiniDistrictsByCountry",
        this.village.country.id
      );
    },

    loadCounties() {
      this.$store.dispatch(
        "county/getMiniCountiesByDistrict",
        this.village.district.id
      );
    },

    loadSubCounties() {
      this.$store.dispatch(
        "subcounty/getMiniSubCountiesByCounty",
        this.village.county.id
      );
    },

    loadParishes() {
      this.$store.dispatch(
        "parish/getMiniParishesBySubCounty",
        this.village.subCounty.id
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

    async subCountySelected(event) {
      this.loadParishes();
      console.log("Event", event);
    },

    setObjects(obj) {
      console.log(obj);
      this.village.subCounty = obj.subCounty;
      this.village.county = obj.subCounty.county;
      this.village.district = obj.subCounty.county.district;
      this.village.country = obj.subCounty.county.district.country;
    
      this.loadDistricts();
      this.loadCounties();
      this.loadSubCounties();
      this.loadParishes();
    },
  },
};
</script>
