<template>
  <crud-form
    @save="save"
    @update="update"
    @search="search"
    @updateDialog="updateDialog"
    @reset="reset"
    @done="done"
    @updateCrudTableDialog="updateCrudTableDialog"
    @resetCrudTableDialog="resetCrudTableDialog"
    :path="path"
    :maxWidth="maxWidth"
  >
    <template slot="heading">Customer Sponsor</template>

    <template slot="form-data">
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-select
          label="Customer"
          v-model="customerSponsor.customer"
          :rules="customerRules"
          :counter="100"
          required
          :items="$store.state.customer.customer.mini"
          :loading="$store.state.customer.customer.miniLoading"
          item-text="customerName"
          item-value="id"
          return-object
        ></v-select>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-select
          label="Sponsor"
          v-model="customerSponsor.sponsor"
          :rules="sponsorRules"
          :counter="100"
          required
          :items="$store.state.customer.customer.mini"
          :loading="$store.state.customer.customer.miniLoading"
          item-text="customerName"
          item-value="id"
          return-object
        ></v-select>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-checkbox
          label="Is Default"
          v-model="customerSponsor.isDefault"
        ></v-checkbox>
      </v-col>
    </template>
  </crud-form>
</template>
<script>
import customerSponsorModel from "./CustomerSponsorModel";
import CrudForm from "../../components/CrudForm.vue";
export default {
  components: { CrudForm },
  name: "CustomerSponsor",
  data: () => ({
    cols: 12,
    sm: 6,
    md: 4,
    maxWidth: 700,
    path: customerSponsorModel.path,
    customerSponsor: customerSponsorModel.customerSponsor,
    customerRules: [(v) => !!v || "Customer is required"],
    sponsorRules: [(v) => !!v || "Sponsor is required"],
  }),
  created() {
    this.$store.dispatch("customer/customer/getMini");
    this.$store.dispatch("customer/customer/getMini");
  },
  computed: {},

  watch: {},

  methods: {
    save() {
      this.$store.dispatch("post", {
        path: this.path,
        body: this.customerSponsor,
      });
    },
    update() {
      this.$store.dispatch("put", {
        path: `${this.path}/${this.customerSponsor.id}`,
        body: this.customerSponsor,
      });
    },
    updateDialog() {
      var obj = this.$store.state.search.selectedData[0].value;
      this.setDialog(obj);
    },
    async search() {
      var obj = this.$store.state.obj;
      this.customerSponsor = Object.assign({}, obj);
      this.setObjects(obj);
    },
    reset() {
      this.customerSponsor.clear();
    },
    setObjects(obj) {
      console.log(obj);
    },
    setDialog(obj) {
      this.customerSponsor = Object.assign({}, obj);
      this.setObjects(obj);
    },
    done() {
      this.$store.commit(
        "crudtable/data",
        Object.assign({}, this.customerSponsor)
      );
    },
    updateCrudTableDialog() {
      this.setDialog(this.$store.state.crudtable.data);
    },
    resetCrudTableDialog() {
      this.reset();
    },
  },
};
</script>
