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
    <template slot="heading">Journal Details</template>

    <template slot="form-data">
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-select
          label="Account Group"
          v-model="journalDetails.accountGroup"
          :rules="accountGroupRules"
          :counter="100"
          required
          :items="$store.state.lookup.accountGroups"
        ></v-select>
      </v-col>
      <!-- <v-col :cols="cols" :sm="sm" :md="md">
        <v-select
          label="Journal"
          v-model="journalDetails.journal"
          :rules="journalRules"
          :counter="100"
          required
          :items="$store.state.posting.journal.mini"
          item-text="journalName"
          item-value="id"
          return-object
        ></v-select>
      </v-col> -->

      <v-col :cols="cols" :sm="sm" :md="md">
        <v-select
          label="Account Type"
          v-model="journalDetails.accountType"
          :rules="accountTypeRules"
          :counter="100"
          required
          :items="$store.state.lookup.accountTypes"
          @change="accountTypeSelected($event)"
          :disabled="accountTypeDisabled"
        ></v-select>
      </v-col>

      <v-col :cols="cols" :sm="sm" :md="md">
        <v-select
          :label="accountLabel"
          v-model="journalDetails.account"
          :rules="accountIDRules"
          :counter="100"
          required
          :items="accounts"
          :item-text="accountDisplay"
          item-value="id"
          return-object
        ></v-select>
      </v-col>

      <v-col :cols="cols" :sm="sm" :md="md">
        <v-select
          label="Account Action"
          v-model="journalDetails.accountAction"
          :rules="accountActionRules"
          :counter="100"
          required
          :items="$store.state.lookup.accountActions"
        ></v-select>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-text-field
          label="Amount"
          v-model="journalDetails.amount"
          :counter="100"
          required
        ></v-text-field>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-text-field
          label="Notes"
          v-model="journalDetails.notes"
          :counter="100"
        ></v-text-field>
      </v-col>
    </template>
  </crud-form>
</template>
<script>
import journalDetailsModel from "./JournalDetailsModel";
import constants from "../../utils/constants";
import CrudForm from "../../components/CrudForm.vue";
export default {
  components: { CrudForm },
  name: "JournalDetails",
  data: () => ({
    cols: 12,
    sm: 6,
    md: 6,
    maxWidth: 700,
    path: constants.endPoints.journaldetailss,
    journalDetails: journalDetailsModel.journalDetails,
    accountGroupRules: [(v) => !!v || "Account Group is required"],
    journalRules: [(v) => !!v || "Journal is required"],
    accountIDRules: [(v) => !!v || "Account is required"],
    accountTypeRules: [(v) => !!v || "Account Type is required"],
    accountActionRules: [(v) => !!v || "Account Action is required"],
    accountLabel: "Account",
    accountDisplay:"AccountName",
  }),
  created() {
    this.$store.dispatch("lookup/getAccountGroups");
    this.$store.dispatch("accounts/account/getMini");
    this.$store.dispatch("lookup/getAccountTypes");
    this.$store.dispatch("lookup/getAccountActions");
    this.$store.dispatch("customer/customer/getMini");
  },
  computed: {
    accountGroup(){
      return this.journalDetails.accountGroup;
    },
    accounts(){
      if(this.journalDetails.accountGroup == 'COA'){
         return this.$store.state.accounts.account.accountsByType;
      }
      else if(this.journalDetails.accountGroup == 'Customer'){
        return this.$store.state.customer.customer.mini;
        
      }
      else {
        return [];
      }

    },
    accountTypeDisabled(){
      return this.journalDetails.accountGroup !=='COA';
    }
  },

  watch: {
     accountGroup(){
      if(this.journalDetails.accountGroup == 'COA'){
        this.accountLabel ="Account";
         this.accountDisplay = "accountName";
        

      }
      else if(this.journalDetails.accountGroup == 'Customer'){
        //  this.$store.dispatch("customer/customer/getMini");
        this.accountLabel ="Customer";
        this.accountDisplay="customerName";
        this.journalDetails.accountType = "Asset"
        
      }
    }
  },

  methods: {
    save() {
      this.$store.dispatch("post", {
        path: this.path,
        body: this.journalDetails,
      });
    },
    update() {
      this.$store.dispatch("put", {
        path: `${this.path}/${this.journalDetails.id}`,
        body: this.journalDetails,
      });
    },
    updateDialog() {
      var obj = this.$store.state.search.selectedData[0].value;
      this.setDialog(obj);
    },
    async search() {
      var obj = this.$store.state.obj;
      this.journalDetails = Object.assign({}, obj);
      this.setObjects(obj);
    },
    reset() {
      this.journalDetails.clear();
    },
    setObjects(obj) {
      this.loadAccounts();
      console.log(obj);
    },
    setDialog(obj) {
      this.journalDetails = Object.assign({}, obj);
      this.setObjects(obj);
    },

   loadAccounts() {
    //  if(!this.journalDetails.accountType.length){

    //  }
      this.$store.dispatch(
        "accounts/account/getAccountsByType",
        this.journalDetails.accountType
      );
    },
    accountTypeSelected(event) {
      this.loadAccounts();
      console.log("Account Type Event", event);
    },

    done() {
      this.journalDetails.accountId = this.journalDetails.account.id
      this.journalDetails.accountName= this.journalDetails.account.accountName
      this.$store.commit(
        "crudtable/data",
        Object.assign({}, this.journalDetails)
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
