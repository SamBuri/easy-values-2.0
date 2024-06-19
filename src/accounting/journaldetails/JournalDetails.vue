<template>
  <crud-form @save="save" @update="update" @search="search" @updateDialog="updateDialog" @reset="reset" @done="done"
    @updateCrudTableDialog="updateCrudTableDialog" @resetCrudTableDialog="resetCrudTableDialog" :path="path"
    :max-width="maxWidth">
    <template slot="heading">Journal Details</template>

    <template slot="form-data">

      <v-col :cols="cols" :sm="sm" :md="md">
        <v-text-field label="Account Id" v-model="journalDetails.accountId" :rules="accountIdRules" :counter="100"
          append-icon="mdi-view-list" @click:append="appendIconCallback"></v-text-field>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-text-field label="Account Name" v-model="journalDetails.accountName" :rules="accountNameRules" :counter="100"
          disabled></v-text-field>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-text-field label="Account Type" v-model="journalDetails.accountType" disabled></v-text-field>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-select label="Account Action" v-model="journalDetails.accountAction" :rules="accountActionRules" :counter="100"
          :items="$store.state.lookup.accountActions" :loading="$store.state.lookup.accountActionsLoading"></v-select>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-number-input label="Base Amount" v-model="journalDetails.baseAmount" :rules="baseAmountRules"
          :counter="100"></s-number-input>
      </v-col>

      <v-col :cols="cols" :sm="sm" :md="md">
        <v-textarea label="Notes" v-model="journalDetails.notes" :counter="200" rows="1" auto-grow></v-textarea>
      </v-col>
      <v-dialog v-model="accountIdDialog" persistent :max-with="600">
        <search-mini :mtdsProvided="mtdsProvided" @ok="accountIdOk" @close="accountIdClose" :items="items"
          :headers="accountNav.menu.miniHeaders" />
      </v-dialog>
    </template>

  </crud-form>
</template>
<script>
import journalDetailsModel from "./JournalDetailsModel";
import accountNav from '../account/AccountNav'
export default {
  components: {},
  name: "JournalDetails",
  data: () => ({
    cols: 12,
    sm: 6,
    md: 4,
    maxWidth: 700,
    path: journalDetailsModel.path,
    journalDetails: journalDetailsModel.journalDetails,
    journalRules: [(v) => !!v || "Journal is required",
    ], accountIdRules: [(v) => !!v || "Account Id is required",
    (v) => v.length < 100 || "Account Id length must be less or equal to 100",], accountNameRules: [(v) => !!v || "Account Name is required",
    (v) => v.length < 100 || "Account Name length must be less or equal to 100",], accountTypeRules: [(v) => !!v || "Account Type is required",
    ], accountActionRules: [(v) => !!v || "Account Action is required",
    ], baseAmountRules: [(v) => !!v || "Base Amount is required",
    ], amountRules: [(v) => !!v || "Amount is required",
    ], notesRules: [(v) => !!v || "Notes is required",
    (v) => v.length < 200 || "Notes length must be less or equal to 200",],
    accountNav: accountNav,
    mtdsProvided: true,
    accountIdData: null,
    accountIdDialog: false,

  }),
  created() {
    this.$store.dispatch("accounting/account/getMini");
    // this.$store.dispatch("lookup/getAccountTypes");
    this.$store.dispatch("lookup/getAccountActions");
  },
  computed: {
    // selectedData() {
    //   return this.$store.state.search.selectedMiniItem;
    // },

    baseAmount() {
      return this.journalDetails.baseAmount;
    },
    items() {
      return this.$store.state.accounting.account.mini;
    },
    // headers(){
    //   return accountNav.minHeaders;
    // }

  },

  watch: {
    accountIdData() {
      if (this.accountIdData) {
        this.journalDetails.accountId = this.accountIdData.id;
        this.journalDetails.accountName = this.accountIdData.accountName;
        this.journalDetails.accountType = this.accountIdData.accountCategory.accountType;
      }
    },
    baseAmount() {
      this.journalDetails.amount = this.baseAmount;
    }
  },

  methods: {
    save() {
      this.$store.dispatch("post", { path: this.path, body: this.journalDetails });
    },
    update() {
      this.$store.dispatch("put", { path: `${this.path}/${this.journalDetails.id}`, body: this.journalDetails });
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
      console.log(obj);
    }, setDialog(obj) {
      this.journalDetails = Object.assign({}, obj);
      this.setObjects(obj);
    },
    done() {
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
    appendIconCallback() {
      this.accountIdDialog = true
    },

    accountIdOk(data) {
      this.accountIdData = data;

    },

    accountIdClose() {
      this.accountIdDialog = false;
    }
  }
};
</script>


<!-- 10.0.0.27 ev-master
10.0.0.115 ev-node01 -->


<!-- sudo firewall-cmd --permanent --add-port=6443/tcp
sudo firewall-cmd --permanent --add-port=2379-2380/tcp
sudo firewall-cmd --permanent --add-port=10250/tcp
sudo firewall-cmd --permanent --add-port=10251/tcp
sudo firewall-cmd --permanent --add-port=10252/tcp
sudo firewall-cmd --reload -->

