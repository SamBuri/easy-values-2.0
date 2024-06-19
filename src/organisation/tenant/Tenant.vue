<template>
  <crud-form @save="save" @update="update" @search="search" @updateDialog="updateDialog" @reset="reset" @done="done"
    @updateCrudTableDialog="updateCrudTableDialog" @resetCrudTableDialog="resetCrudTableDialog" :path="path"
    :maxWidth="maxWidth">
    <template slot="heading">Tenant</template>

    <template slot="form-data">
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-select label="Tenant Type" v-model="tenant.tenantType" :rules="tenantTypeRules" :counter="100"
          :items="$store.state.organisation.tenantTypes" :loading="$store.state.organisation.tenantTypesLoading"
          return-object></v-select>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-select label="Company" v-model="tenant.company" :rules="companyRules" :counter="100"
          :items="$store.state.organisation.company.mini" :loading="$store.state.organisation.company.miniLoading"
          item-text="companyName" item-value="id" return-object></v-select>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md" v-if="isBranch">
        <v-select label="Branch" v-model="tenant.branch" :rules="branchRules" :counter="100"
          :items="$store.state.organisation.branch.branchByCompanyId"
          :loading="$store.state.organisation.branch.branchByCompanyIdLoading" item-text="branchName" item-value="id"
          return-object></v-select>
      </v-col>

      <v-col :cols="cols" :sm="sm" :md="md">
        <v-text-field label="Host" v-model="tenant.host" :rules="hostRules" :counter="100"></v-text-field>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-text-field label="Auth Url" v-model="tenant.authUrl" :rules="authUrlRules" :counter="50"></v-text-field>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-text-field label="Realm" v-model="tenant.realm" :rules="realmRules" :counter="50"></v-text-field>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-text-field label="Issuer Url" v-model="tenant.issuerUrl" :rules="issuerUrlRules"
          :counter="100"></v-text-field>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-text-field label="Jwk Url" v-model="tenant.jwkUrl" :rules="jwkUrlRules" :counter="100"></v-text-field>
      </v-col>
    </template>
  </crud-form>
</template>
<script>
import tenantModel from "./TenantModel";
export default {
  components: {},
  name: "Tenant",
  data: () => ({
    cols: 12,
    sm: 6,
    md: 6,
    maxWidth: 800,
    path: tenantModel.path,
    tenant: tenantModel.tenant,
    tenantTypeRules: [(v) => !!v || "Tenant Type is required",
    ], companyRules: [(v) => !!v || "Company is required",
    ], branchRules: [(v) => !!v || "Branch is required",
    ], hostRules: [(v) => !!v || "Host is required",
    (v) => v.length < 100 || "Host length must be less or equal to 100",], authUrlRules: [(v) => !!v || "Auth Url is required",
    (v) => v.length < 100 || "Auth Url length must be less or equal to 100",], realmRules: [(v) => !!v || "Realm is required",
    (v) => v.length < 100 || "Realm length must be less or equal to 100",],
    issuerUrlRules: [(v) => !!v || "Issuer Url is required",
    (v) => v.length < 100 || "Issuer Url length must be less or equal to 100",], jwkUrlRules: [(v) => !!v || "Jwk Url is required",
    (v) => v.length < 100 || "Jwk Url length must be less or equal to 100",],

    branchTenantType: "Branch",
    companyTenantType: "Company",
  }),
  created() {
    this.$store.dispatch("organisation/getTenantTypes");
    this.$store.dispatch("organisation/company/getMini");

  },
  computed: {
    isBranch() {
      return this.tenant.tenantType === this.branchTenantType
    },
    tenantType() {
      return this.tenant.tenantType;
    },

    companyId() {
      return this.tenant.company.id;
    },

    branch() {
      return this.tenant.branch;
    }
  },

  watch: {
    tenantType() {
      this.setSourceId();
    },
    companyId() {
      if (this.isBranch) {
        this.$store.dispatch("organisation/branch/getBranchByCompanyId", this.companyId);
      }
      this.setSourceId();

    },
    branch() {

      this.setSourceId();
    }
  },

  methods: {
    save() {
      this.$store.dispatch("post", { path: this.path, body: this.tenant });
    },
    update() {
      this.$store.dispatch("put", { path: `${this.path}/${this.tenant.id}`, body: this.tenant });
    },
    updateDialog() {
      var obj = this.$store.state.search.selectedData[0].value;
      this.setDialog(obj);
    },
    async search() {
      var obj = this.$store.state.obj;
      this.tenant = Object.assign({}, obj);
      this.setObjects(obj);
    },
    reset() {
      this.tenant.clear();
    },
    setObjects(obj) {

      console.log(obj);
    }, setDialog(obj) {
      this.tenant = Object.assign({}, obj);
      this.setObjects(obj);
    },
    done() {
      this.$store.commit(
        "crudtable/data",
        Object.assign({}, this.tenant)
      );
    },
    updateCrudTableDialog() {
      this.setDialog(this.$store.state.crudtable.data);
    },
    resetCrudTableDialog() {
      this.reset();
    },

    setSourceId() {
      if (this.isBranch) {
        this.tenant.sourceId = this.tenant.branch.id;
      }
      else if (this.tenant.tenantType === this.companyTenantType) {
        this.tenant.sourceId = this.tenant.company.id;

      }
    }
  }
};
</script>
