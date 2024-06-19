<template>
  <crud-form @save="save" @update="update" @search="search" @updateDialog="updateDialog" @reset="reset" @done="done"
    @updateCrudTableDialog="updateCrudTableDialog" @resetCrudTableDialog="resetCrudTableDialog" :path="path"
    :maxWidth="maxWidth" :showPrintPrompt="showPrintPrompt" @print="print">
    <template slot="heading">Creditor</template>

    <template slot="form-data" slot-scope="{isUpdate}">
      <v-col :cols="cols" :sm="sm" :md="md" v-if="!isUpdate">
        <v-text-field id="profileId" label="Profile Id" v-model="creditor.profileId" :rules="profileIdRules" :counter="20"
          append-icon="mdi-view-list" @click:append="showProfileIdDialog"></v-text-field>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-text-field id="name" label="Name" v-model="creditor.name" :rules="nameRules" :counter="61" disabled></v-text-field>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-text-field id="phoneNo" label="Phone No" v-model="creditor.phoneNo" disabled
          :counter="30"></v-text-field>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-select id="accountId" label="Account" v-model="creditor.accountId" :rules="accountRules" :counter="20"
          :items="$store.state.accounting.account.liabilityAccounts" :loading="$store.state.accounting.account.liabilityAccountsLoading"
          item-text="accountName" item-value="id"></v-select>
      </v-col>

      <v-col :cols="cols" :sm="sm" :md="md" v-if="isUpdate">
        <s-number-input id="balance" label="Balance" v-model="creditor.balance" :disabled="true"></s-number-input>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md" v-if="isUpdate">
        <v-checkbox id="hidden" label="Hidden" v-model="creditor.hidden"></v-checkbox>
      </v-col>
      <v-dialog v-model="profileIdDialog" persistent :max-with="600">
        <search-mini :mtdsProvided="mtdsProvided" @ok="profileIdOk" @close="profileIdClose"
          :items="$store.state.profile.profile.mini" :headers="profileNav.menu.miniHeaders" />
      </v-dialog>

    </template>
  </crud-form>
</template>
<script>
import creditorModel from "./CreditorModel";
import profileNav from "../../profile/profile/ProfileNav";
export default {
  components: {},
  name: "Creditor",
  data: () => ({
    cols: 12,
    sm: 6,
    md: 6,
    maxWidth: 700,
    path: creditorModel.path,
    creditor: creditorModel.creditor,
    profileNav: profileNav,
    profileIdRules: [(v) => !!v || "Profile Id is required",
    ], nameRules: [(v) => !!v || "Name is required",
    (v) => v.length < 61 || "Name length must be less or equal to 61",], phoneNoRules: [(v) => !!v || "Phone No is required",
    (v) => v.length < 30 || "Phone No length must be less or equal to 30",], accountRules: [(v) => !!v || "Account is required",
    ], accountNameRules: [(v) => !!v || "Account Name is required",
    (v) => v.length < 100 || "Account Name length must be less or equal to 100",], balanceRules: [(v) => !!v || "Balance is required",
    ],

    profileIdDialog: false,
    profileIdData: null,
    mtdsProvided: true,
    showPrintPrompt: true,
  }),
  created() {
    this.$store.dispatch("profile/profile/getMini");
    this.$store.dispatch("accounting/account/getLiabilityAccounts");
  },
  computed: {

  },

  watch: {
    profileIdData() {
      if (this.profileIdData) {
        this.creditor.profileId = this.profileIdData.id;
        this.creditor.name = this.profileIdData.display;
        this.creditor.phoneNo = this.profileIdData.primaryPhoneNo
      }

    },

  },
  methods: {
    save() {
      this.$store.dispatch("post", { path: this.path, body: this.creditor });
    },
    update() {
      this.$store.dispatch("put", { path: `${this.path}/${this.creditor.id}`, body: this.creditor });
    },
    updateDialog() {
      var obj = this.$store.state.search.selectedData[0].value;
      this.setDialog(obj);
    },
    async search() {
      var obj = this.$store.state.obj;
      this.creditor = Object.assign({}, obj);
      this.setObjects(obj);
    },
    reset() {
      this.creditor.clear();
    },
    setObjects(obj) {
      this.creditor.profileId = obj.id;
      console.log(obj);
    }, setDialog(obj) {
      this.creditor = Object.assign({}, obj);
      this.setObjects(obj);
    },
    done() {
      this.$store.commit(
        "crudtable/data",
        Object.assign({}, this.creditor)
      );
    },
    updateCrudTableDialog() {
      this.setDialog(this.$store.state.crudtable.data);
    },
    resetCrudTableDialog() {
      this.reset();
    },
    print() {
      let data = [];
      data.push({ text: "Profile Id", value: this.creditor.profileId });
      data.push({ text: "Name", value: this.creditor.name });
      data.push({ text: "Phone No", value: this.creditor.phoneNo });
      data.push({ text: "Account", value: this.creditor.accountId });
      // data.push({ text: "Account Name", value: this.creditor.accountName });
      // data.push({ text: "Balance", value: this.creditor.balance });

      let options = {
        data: data,
        startXPos: 10,
        startYPos: 25,
        lineBreak: 4,
        hSpace: 50,
        vSpace: 10,
        title: "Creditor"

      }

      this.makePDFDocument(options);
    },
    profileIdOk(data) {
      this.profileIdData = data
    },
    profileIdClose() {
      this.profileIdDialog = false;
    },

    showProfileIdDialog() {
      this.profileIdDialog = true;
    },
  }
};
</script>
