<template>
  <crud-form @save="save" @update="update" @search="search" @updateDialog="updateDialog" @reset="reset" @done="done"
    @updateCrudTableDialog="updateCrudTableDialog" @resetCrudTableDialog="resetCrudTableDialog" :path="path"
    :maxWidth="maxWidth" :showPrintPrompt="showPrintPrompt" @print="print">
    <template slot="heading">Shareholder</template>

    <template slot="form-data" slot-scope="{isUpdate}">
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-text-field label="Profile Id" v-model="shareholder.id" :rules="idRules" :counter="20"
          append-icon="mdi-view-list" @click:append="showProfileDialog"></v-text-field>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-text-field label="Name" v-model="shareholder.name" :rules="nameRules" :counter="100" disabled></v-text-field>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-text-field label="Phone No" v-model="shareholder.phoneNo" :rules="phoneNoRules" :counter="100"
          disabled></v-text-field>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-select label="Account" v-model="shareholder.accountId" :rules="accountIdRules" :counter="100"
          :items="$store.state.accounting.account.equityAccounts"
          :loading="$store.state.accounting.account.equityAccountsLoading" item-text="accountName"
          item-value="id"></v-select>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md" v-if="isUpdate">
        <v-checkbox label="Hidden" v-model="shareholder.hidden"></v-checkbox>
      </v-col>
      <v-dialog v-model="profileDialog" persistent :max-with="600">
        <search-mini :mtdsProvided="mtdsProvided" @ok="profileOk" @close="profileClose"
          :items="$store.state.profile.profile.mini" :headers="profileNav.menu.miniHeaders" />
      </v-dialog>
    </template>
  </crud-form>
</template>
<script>
import shareholderModel from "./ShareholderModel";
import profileNav from "../../profile/profile/ProfileNav";
export default {
  components: {},
  name: "Shareholder",
 data: () => ({
    cols: 12,
    sm: 6,
    md: 6,
    maxWidth: 700,
    path: shareholderModel.path,
    shareholder: shareholderModel.shareholder,
    idRules: [(v) => !!v || "Profile Id is required",
    ], nameRules: [(v) => !!v || "Name is required",],
    phoneNoRules: [(v) => !!v || "Phone No is required",],
    accountIdRules: [(v) => !!v || "Account is required",
    ],
    profileDialog: false,

    showPrintPrompt: true,
    profileNav: profileNav,
    profileData: null,
    mtdsProvided: true
  }),
  created() {
    this.$store.dispatch("profile/profile/getMini");
    this.$store.dispatch("accounting/account/getEquityAccounts");
  },
  computed: {},

  watch: {
    profileData() {
      if (this.profileData) {
        this.shareholder.id = this.profileData.id;
        this.shareholder.name = this.profileData.display;
        this.shareholder.phoneNo = this.profileData.primaryPhoneNo;

      }
    }
  },

  methods: {
    save() {
      this.$store.dispatch("post", { path: this.path, body: this.shareholder });
    },
    update() {
      this.$store.dispatch("put", { path: `${this.path}/${this.shareholder.id}`, body: this.shareholder });
    },
    updateDialog() {
      var obj = this.$store.state.search.selectedData[0].value;
      this.setDialog(obj);
    },
    async search() {
      var obj = this.$store.state.obj;
      this.shareholder = Object.assign({}, obj);
      this.setObjects(obj);
    },
    reset() {
      this.shareholder.clear();
    },
    setObjects(obj) {
      console.log(obj);
    }, setDialog(obj) {
      this.shareholder = Object.assign({}, obj);
      this.setObjects(obj);
    },
    done() {
      this.$store.commit(
        "crudtable/data",
        Object.assign({}, this.shareholder)
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
      data.push({ text: "Profile Id", value: this.shareholder.id });
      data.push({ text: "Name", value: this.shareholder.name });
      data.push({ text: "Phone No", value: this.shareholder.phoneNo });
      data.push({ text: "Account", value: this.shareholder.accountId });
      data.push({ text: "Account", value: this.shareholder.account });
      data.push({ text: "Shares", value: this.shareholder.shares });
      data.push({ text: "Balance", value: this.shareholder.balance });

      let options = {
        data: data,
        startXPos: 10,
        startYPos: 25,
        lineBreak: 4,
        hSpace: 50,
        vSpace: 10,
        title: "Shareholder"

      }

      this.makePDFDocument(options);
    },
    profileOk(data) {
      this.profileData = data
    },
    profileClose() {
      this.profileDialog = false;
    },

    showProfileDialog() {
      this.profileDialog = true;
    },


  }
};
</script>
