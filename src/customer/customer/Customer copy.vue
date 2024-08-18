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
    <template slot="heading">Customer</template>

    <template slot="form-data">
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-text-field
          label="Customer Name"
          v-model="customer.customerName"
          :rules="customerNameRules"
          :counter="50"
          required
        ></v-text-field>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-select
          label="Customer Type"
          v-model="customer.customerTypeId"
          :rules="customerTypeIdRules"
          :counter="20"
          required
          :items="$store.state.lookup.lookupdata.customerTypes"
          item-text="lookupDataName"
          item-value="id"
        ></v-select>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-text-field
          label="Phone No"
          v-model="customer.phoneNo"
          :rules="phoneNoRules"
          :counter="30"
          required
        ></v-text-field>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-text-field
          label="Email"
          v-model="customer.email"
          :rules="emailRules"
          :counter="100"
          required
        ></v-text-field>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-textarea
          label="Address"
          v-model="customer.address"
          :rules="addressRules"
          :counter="200"
          required
          rows="1"
          auto-grow
        ></v-textarea>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-select
          label="Price Group"
          v-model="customer.priceGroupId"
          :items="$store.state.lookup.lookupdata.priceGroups"
          item-text="lookupDataName"
          item-value="id"
        ></v-select>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-select
          label="Default Sponsor"
          v-model="customer.defaultSponsor"
         :items="$store.state.customer.customer.sponsors"
          item-text="customerName"
          item-value="id"
          return-object
          clearable
        ></v-select>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-checkbox
          label="Can Sponsor"
          v-model="customer.canSponsor"
        ></v-checkbox>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-checkbox
          label="Sponsor Only"
          v-model="customer.sponsorOnly"
        ></v-checkbox>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-checkbox
          label="Allow Credit"
          v-model="customer.allowCredit"
        ></v-checkbox>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-text-field
          label="Credit Limit"
          v-model="customer.creditLimit"
          :counter="100"
          required
        ></v-text-field>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-select
          label="Customer Accounts Group"
          v-model="customer.customerAccountsGroupId"
          :rules="customerAccountsGroupIdRules"
          :counter="100"
          required
          :items="$store.state.lookup.lookupdata.customerAccountsGroups"
          item-text="lookupDataName"
          item-value="id"
        ></v-select>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-text-field
          label="Balance"
          v-model="customer.balance"
          disabled
          :counter="100"
          required
        ></v-text-field>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-checkbox label="Hidden" 
        v-model="customer.hidden"
        :disabled="$store.state.mode!==1"
        ></v-checkbox>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-select
          label="Customer Sponsors"
          v-model="customer.sponsors"
          :items="$store.state.customer.customer.sponsors"
          item-text="customerName"
          item-value="id"
          return-object
          multiple
        ></v-select>
      </v-col>
    </template>
  </crud-form>
</template>
<script>
import customerModel from "./CustomerModel";
import CrudForm from "../../components/CrudForm.vue";
export default {
  components: { CrudForm },
  name: "Customer",
  data: () => ({
    cols: 12,
    sm: 6,
    md: 3,
    maxWidth: 1000,
    path: customerModel.path,
    customer: customerModel.customer,
    customerNameRules: [
      (v) => !!v || "Customer Name is required",
      (v) =>
        v.length < 50 || "Customer Name length must be less or equal to 50",
    ],
    customerTypeIdRules: [(v) => !!v || "Customer Type is required"],
    phoneNoRules: [
      (v) => !!v || "Phone No is required",
      (v) => v.length < 30 || "Phone No length must be less or equal to 30",
    ],
    emailRules: [
      (v) => v.length < 100 || "Email length must be less or equal to 100",
    ],
    addressRules: [
      (v) => !!v || "Address is required",
      (v) => v.length < 200 || "Address length must be less or equal to 200",
    ],

    customerAccountsGroupIdRules: [(v) => !!v || "Customer Accounts Group is required"],

   
  }),
  created() {
    this.$store.dispatch("lookup/lookupdata/getCustomerTypes");
    this.$store.dispatch("lookup/lookupdata/getPriceGroups");
    this.$store.dispatch("customer/customer/getSponsors");
    this.$store.dispatch("lookup/lookupdata/getCustomerAccountsGroups");
  },
  computed: {
    // isEdit(){
    //   return this.$store.state.mode===1;
    // }
  },

  watch: {},

  methods: {
    save() {
      this.$store.dispatch("post", { path: this.path, body: this.customer });
    },
    update() {
      this.$store.dispatch("put", {
        path: `${this.path}/${this.customer.id}`,
        body: this.customer,
      });
    },
    updateDialog() {
      var obj = this.$store.state.search.selectedData[0].value;
      this.setDialog(obj);
    },
    async search() {
      var obj = this.$store.state.obj;
      this.customer = Object.assign({}, obj);
      this.customer.sponsors = obj.customerSponsors.map(ob=>ob.sponsor);
      this.setObjects(obj);
    },
    reset() {
      this.customer.clear();
    },
    setObjects(obj) {
      console.log(obj);
    },
    async setDialog(obj) {
      await this.$store.dispatch("customer/customersponsor/getSponsors", obj.id);
       this.customer = Object.assign({}, obj);
      let customerSponsors = this.$store.state.customer.customersponsor.sponsors;
      this.customer.sponsors = customerSponsors.map(cs=>cs.sponsor);
      this.setObjects(obj);
    },
    done() {
      this.$store.commit("crudtable/data", Object.assign({}, this.customer));
    },
    updateCrudTableDialog() {
      this.setDialog(this.$store.state.crudtable.data);
    },
    resetCrudTableDialog() {
      this.reset();
    },
 
    componentDataChanged(data){
      this.setCustomerId(data.obj.loanApplication.applicantId);
    }
  },
};
</script>
