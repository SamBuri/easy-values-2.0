<template>
  <crud-form
    @save="save"
    @update="update"
    @search="search"
    @updateDialog="updateDialog"
    @reset="reset"
    :path="path"
  >
    <template slot="heading">County</template>

    <template slot="form-data">
      <v-col cols="12" sm="6" md="6">
        <v-select
          label="Country"
          v-model="county.country"
          :items="$store.state.country.mini"
          :rules="countryRules"
          item-text="countryName"
          item-value="id"
          return-object
          required
          @change="countrySelected($event)"
        ></v-select>
      </v-col>

      <v-col cols="12" sm="6" md="6">
        <v-select
          label="District"
          v-model="county.district"
          :items="$store.state.district.miniDistrictsByCountry"
          :rules="countryRules"
          item-text="districtName"
          item-value="id"
          return-object
          required

        ></v-select>
      </v-col>

      <v-col cols="12" sm="6" md="6">
        <v-text-field
          label="County Name"
          v-model="county.countyName"
          :rules="countyNameRules"
          required
        ></v-text-field>
      </v-col>

      <v-col cols="12" sm="6" md="6">
        <v-checkbox label="Default" v-model="county.isDefault"></v-checkbox>
      </v-col>

      <v-col cols="12" sm="6" md="6">
        <v-checkbox label="Hidden" v-model="county.hidden"></v-checkbox>
      </v-col>
    </template>
  </crud-form>
</template>

<script>
import countyModel from "./CountyModel";
import constants from "../../utils/constants";
import CrudForm from "../../components/CrudForm.vue";
export default {
  components: { CrudForm },
  name: "County",
  data: () => ({
    path: constants.endPoints.counties,
    // responseMessage: "",
    // errorMessage: "",
    // countries: [],
    county: countyModel.county,
    countryRules: [(v) => !!v || "Country is required"],

    countyNameRules: [
      (v) => !!v || "County Name is required",
      (v) => v.length <= 40 || "County Code length must be less or equal to 40",
    ],
  }),
  created() {
    // this.county.district.country.id
     this.$store.dispatch("country/getMini");
    
  },
  computed: {},

  watch: {
  //  country(){
  //    this.$store.dispatch("district/getMiniCountryDistricts", this.county.country.id);
  //  }
  },

  methods: {
    save() {
      this.$store.dispatch("post", { path: this.path, body: this.county });
    },

    update() {
      this.$store.dispatch("put", {
        path: `${this.path}/${this.county.id}`,body: this.county,
      });
    },

    updateDialog() {
      var obj=this.$store.state.search.selectedData[0].value;
      this.county = Object.assign({},obj);

      this.setObjects(obj);
      console.log("The Country Selected: ", this.county.country);
      console.log( "Selected Data", obj );
    },

    async search() {
      var obj = this.$store.state.obj;
      this.county = Object.assign({}, obj);
      this.setObjects(obj);
    },
    reset() {
      this.county.clear();
    },

    loadDistricts(){
       this.$store.dispatch("district/getMiniDistrictsByCountry",  this.county.country.id);
    },
    async countrySelected(event){
     this.loadDistricts();
     console.log("Event", event)
    },
    setObjects(obj){
     this.county.country = {id: obj.countryId};
     this.loadDistricts();
      this.county.district = {id: obj.districtId};
    }
  },
};
</script>