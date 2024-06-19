<template>
  <crud-form
    @save="save"
    @update="update"
    @search="search"
    @updateDialog="updateDialog"
    @reset="reset"
    :path="path"
  >
    <template slot="heading">Customer Group</template>

    <template slot="form-data">
      <v-col :cols="cols" :sm="sm" :md="md"
        ><v-text-field
      label="Customer Group"
          v-model="customerGroup.customerGroup"
          :rules="customerGroupRules"
          :counter="40"
          required
        ></v-text-field> </v-col
      ><v-col :cols="cols" :sm="sm" :md="md"
        ><v-select
        label="Receivable Account"
          v-model="customerGroup.receivableAccountId"
          :rules="receivableAccountIdRules"
          :counter="20"
          required
          :items="$store.state.accounts.account.assetAccounts"
          item-text="accountName"
          item-value="id"
        ></v-select> </v-col
      ><v-col :cols="cols" :sm="sm" :md="md"
        ><v-select
          label="Service Charge Account"
          v-model="customerGroup.serviceChargeAccountId"
          :rules="serviceChargeAccountIdRules"
          :counter="20"
          required
          :items="$store.state.accounts.account.incomeAccounts"
          item-text="accountName"
          item-value="id"
        ></v-select> </v-col
      ><v-col :cols="cols" :sm="sm" :md="md"
        ><v-select
          label="Discount Account"
          v-model="customerGroup.discountAccountId"
          :rules="discountAccountIdRules"
          :counter="20"
          required
          :items="$store.state.accounts.account.expenseAccounts"
          item-text="accountName"
          item-value="id"
        ></v-select> </v-col
      ><v-col :cols="cols" :sm="sm" :md="md"
        ><v-select
          label="Refund Account"
          v-model="customerGroup.refundAccountId"
          :rules="refundAccountIdRules"
          :counter="20"
          required
          :items="$store.state.accounts.account.liabilityAccounts"
          item-text="accountName"
          item-value="id"
        ></v-select>
      </v-col>
    </template>
  </crud-form>
</template>
<script>
import customerGroupModel from "./CustomerGroupModel";
import constants from "../../utils/constants";
import CrudForm from "../../components/CrudForm.vue";
export default {
  components: { CrudForm },
  name: "CustomerGroup",
  data: () => ({
    cols: 12,
    sm: 6,
    md: 6,
    path: constants.endPoints.customergroups,
    customerGroup: customerGroupModel.customerGroup,
    customerGroupRules: [
      (v) => !!v || "Customer Group is required",
      (v) =>
        v.length < 40 || "Customer Group length must be less or equal to 40",
    ],
    receivableAccountIdRules: [(v) => !!v || "Receivable Account is required"],
    serviceChargeAccountIdRules: [
      (v) => !!v || "Service Charge Account is required",
    ],
    discountAccountIdRules: [(v) => !!v || "Discount Account is required"],
    refundAccountIdRules: [(v) => !!v || "Refund Account Id is required"],
  }),
  created() {
    this.$store.dispatch("account/getAssetAccounts");
    this.$store.dispatch("account/getLiabilityAccounts");
    this.$store.dispatch("account/getIncomeAccounts");
    this.$store.dispatch("account/getExpenseAccounts");
  },
  computed: {
    
  },

  watch: {
  },

  methods: {
    save() {
      console.log("Customer Group", this.customerGroup);
      this.$store.dispatch("post", {
        path: this.path,
        body: this.customerGroup,
      });
    },
    update() {
      this.$store.dispatch("put", {
        path: `${this.path}/${this.customerGroup.id}`,
        body: this.customerGroup,
      });
    },
    updateDialog() {
      var obj = this.$store.state.search.selectedData[0].value;
      this.customerGroup = Object.assign({}, obj);
      this.setObjects(obj);
    },
    async search() {
      var obj = this.$store.state.obj;
      this.customerGroup = Object.assign({}, obj);
      this.setObjects(obj);
    },
    reset() {
      this.customerGroup.clear();
    },
    setObjects(obj) {
      console.log(obj);
    },
  },
};
</script>
