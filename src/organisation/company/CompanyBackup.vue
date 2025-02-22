<template>
  <crud-form @save="save" @update="update" @search="search" @updateDialog="updateDialog" @reset="reset" @done="done"
    @updateCrudTableDialog="updateCrudTableDialog" @resetCrudTableDialog="resetCrudTableDialog" :path="path"
    :maxWidth="maxWidth">
    <template slot="heading">Company</template>

    <template slot="form-data">
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-file-input label="Logo" v-model="company.logo"></s-file-input>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-text-field label="Company Name" v-model="company.companyName" :rules="companyNameRules"
          :counter="100"></v-text-field>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-select label="Business Type" v-model="company.businessType" :rules="businessTypeRules" :counter="100"
          :items="$store.state.organisation.businessTypes" :loading="$store.state.organisation.businessTypesLoading"
          return-object></v-select>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-text-field label="Address" v-model="company.address" :rules="addressRules" :counter="100"></v-text-field>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-text-field label="Phone No" v-model="company.phoneNo" :rules="phoneNoRules" :counter="100"></v-text-field>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-text-field label="Email" v-model="company.email" :rules="emailRules" :counter="100"></v-text-field>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-text-field label="Website" v-model="company.website" :rules="websiteRules" :counter="50"></v-text-field>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-text-field label="Tag Line" v-model="company.tagLine" :rules="tagLineRules" :counter="40"></v-text-field>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-text-field label="Dev Name" v-model="company.devName" :rules="devNameRules" :counter="100"></v-text-field>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-select label="Db Type" v-model="company.dbType" :rules="dbTypeRules" :counter="100"
          :items="$store.state.organisation.dbTypes" :loading="$store.state.organisation.dbTypesLoading"
          return-object></v-select>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-text-field label="Db Username" v-model="company.dbUsername" :rules="dbUsernameRules"
          :counter="100"></v-text-field>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-text-field label="Db Password" v-model="company.dbPassword" :rules="dbPasswordRules"
          :counter="100"></v-text-field>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-number-input label="Db Port" v-model="company.dbPort" :rules="dbPortRules" :counter="100"></s-number-input>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-text-field label="Db Host" v-model="company.dbHost" :rules="dbHostRules" :counter="100"></v-text-field>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-text-field label="Db Driver Class Name" v-model="company.dbDriverClassName" :rules="dbDriverClassNameRules"
          :counter="100"></v-text-field>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-checkbox label="Db Initialize" v-model="company.dbInitialize"></v-checkbox>
      </v-col>
    </template>
  </crud-form>
</template>
<script>
import companyModel from "./CompanyModel";
import funcs from '../../utils/funcs'
export default {
  components: {},
  name: "Company",
  data: () => ({
    cols: 12,
    sm: 6,
    md: 3,
    maxWidth: 1000,
    path: companyModel.path,
    company: companyModel.company,
    logoRules: [(v) => !!v || "Logo is required",
    ], companyNameRules: [(v) => !!v || "Company Name is required",
    (v) => v.length < 100 || "Company Name length must be less or equal to 100",], businessTypeRules: [(v) => !!v || "Business Type is required",
    ], addressRules: [(v) => !!v || "Address is required",
    (v) => v.length < 100 || "Address length must be less or equal to 100",], phoneNoRules: [(v) => !!v || "Phone No is required",
    (v) => v.length < 100 || "Phone No length must be less or equal to 100",], 
    emailRules: [
    (v) => v.length < 100 || "Email length must be less or equal to 100",], 
    websiteRules: [
    (v) => v.length < 50 || "Website length must be less or equal to 50",], tagLineRules: [(v) => !!v || "Tag Line is required",
    (v) => v.length < 40 || "Tag Line length must be less or equal to 40",], devNameRules: [(v) => !!v || "Dev Name is required",
    (v) => v.length < 100 || "Dev Name length must be less or equal to 100",], dbTypeRules: [(v) => !!v || "Db Type is required",
    ], dbUsernameRules: [(v) => !!v || "Db Username is required",
    (v) => v.length < 100 || "Db Username length must be less or equal to 100",], dbPasswordRules: [(v) => !!v || "Db Password is required",
    (v) => v.length < 100 || "Db Password length must be less or equal to 100",], dbPortRules: [(v) => !!v || "Db Port is required",
    ], dbHostRules: [(v) => !!v || "Db Host is required",
    (v) => v.length < 100 || "Db Host length must be less or equal to 100",], dbDriverClassNameRules: [(v) => !!v || "Db Driver Class Name is required",
    (v) => v.length < 100 || "Db Driver Class Name length must be less or equal to 100",], logoUrl: null,
  }),
  created() {
    this.$store.dispatch("organisation/getBusinessTypes");
    this.$store.dispatch("organisation/getDbTypes");
  },
  computed: {},

  watch: {},

  methods: {
    save() {
      this.$store.dispatch("post", { path: this.path, body: this.getFormData() });
    },
    update() {
      this.$store.dispatch("put", { path: `${this.path}/${this.company.id}`, body: this.getFormData() });
    },
    updateDialog() {
      var obj = this.$store.state.search.selectedData[0].value;
      this.setDialog(obj);
    },
    async search() {
      var obj = this.$store.state.obj;
      this.company = Object.assign({}, obj);
      this.setObjects(obj);
    },
    reset() {
      this.company.clear();
    },
    setObjects(obj) {
      console.log(obj);
      funcs.createFileFromBytes(obj.logo).then(e => {
        this.company.logo = e;

      }).catch(error => console.log(error));
    }, setDialog(obj) {
      this.company = Object.assign({}, obj);
      this.setObjects(obj);
    },
    done() {
      this.$store.commit(
        "crudtable/data",
        Object.assign({}, this.company)
      );
    },
    updateCrudTableDialog() {
      this.setDialog(this.$store.state.crudtable.data);
    },
    resetCrudTableDialog() {
      this.reset();
    },
    getFormData() {
      var data = new FormData();
      data.append("logo", this.company.logo);
      data.append("companyName", this.company.companyName);
      data.append("businessType", this.company.businessType);
      data.append("address", this.company.address);
      data.append("phoneNo", this.company.phoneNo);
      data.append("email", this.company.email);
      data.append("website", this.company.website);
      data.append("tagLine", this.company.tagLine);
      data.append("devName", this.company.devName);
      data.append("dbType", this.company.dbType);
      data.append("dbUsername", this.company.dbUsername);
      data.append("dbPassword", this.company.dbPassword);
      data.append("dbPort", this.company.dbPort);
      data.append("dbHost", this.company.dbHost);
      data.append("dbDriverClassName", this.company.dbDriverClassName);
      data.append("dbInitialize", this.company.dbInitialize);

      return data;
    }, async setLogoFile(obj) {
      let logo = obj.logo;
      if (logo) {
        this.logoUrl = "data:image/png;base64," + logo;
        const getUrlExtension = (url) => {
          return url.split(/[#?]/)[0].split(".").pop().trim();
        };
        var imgExt = getUrlExtension(this.logoUrl);

        const response = await fetch(this.logoUrl);
        const blob = await response.blob();
        console.log("Blob: ", blob);
        const file = new File([blob], "logo." + imgExt, {
          type: blob.type,
        });
        this.company.logo = file;

      } else {
        this.logoUrl = null;
      }
    },
  }
};
</script>
