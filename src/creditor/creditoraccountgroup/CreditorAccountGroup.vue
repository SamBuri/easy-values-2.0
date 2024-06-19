<template>
  <crud-form @save="save" @update="update" @search="search" @updateDialog="updateDialog" @reset="reset" @done="done"
    @updateCrudTableDialog="updateCrudTableDialog" @resetCrudTableDialog="resetCrudTableDialog" :path="path"
    :maxWidth="maxWidth" :showPrintPrompt="showPrintPrompt" @print="print">
    <template slot="heading">Creditor Account Group</template>

    <template slot="form-data">
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-select id="businessSectionId" label="Business Section" v-model="creditorAccountGroup.businessSectionId"
          :rules="businessSectionIdRules" :counter="40" :items="$store.state.lookup.lookupdata.businessSections"
          :loading="$store.state.lookup.lookupdata.businessSectionsLoading" item-text="lookupDataName"
          item-value="id"></v-select>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-select id="creditAccountId" label="Credit Account" v-model="creditorAccountGroup.creditAccountId"
          :rules="creditAccountIdRules" :counter="20" :items="$store.state.accounting.account.mini"
          :loading="$store.state.accounting.account.miniLoading" item-text="accountName" item-value="id"></v-select>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-select id="discountAccountId" label="Discount Account" v-model="creditorAccountGroup.discountAccountId"
          :rules="discountAccountIdRules" :counter="20" :items="$store.state.accounting.account.mini"
          :loading="$store.state.accounting.account.miniLoading" item-text="accountName" item-value="id"></v-select>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-select id="debtWaiverAccountId" label="Debt Waiver Account" v-model="creditorAccountGroup.debtWaiverAccountId"
          :rules="debtWaiverAccountIdRules" :counter="20" :items="$store.state.accounting.account.mini"
          :loading="$store.state.accounting.account.miniLoading" item-text="accountName" item-value="id"></v-select>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-select id="withholdingTaxAccountId" label="Withholding Tax Account"
          v-model="creditorAccountGroup.withholdingTaxAccountId" :rules="withholdingTaxAccountIdRules" :counter="20"
          :items="$store.state.accounting.account.mini" :loading="$store.state.accounting.account.miniLoading"
          item-text="accountName" item-value="id"></v-select>
      </v-col>
    </template>
  </crud-form>
</template>
<script>
import creditorAccountGroupModel from "./CreditorAccountGroupModel";
export default {
  components: {},
  name: "CreditorAccountGroup",
  data: () => ({
    cols: 12,
    sm: 6,
    md: 6,
    maxWidth: 1000,
    path: creditorAccountGroupModel.path,
    creditorAccountGroup: creditorAccountGroupModel.creditorAccountGroup,
    businessSectionIdRules: [(v) => !!v || "Business Section is required",
    ], creditAccountIdRules: [(v) => !!v || "Credit Account is required",
    ], discountAccountIdRules: [(v) => !!v || "Discount Account is required",
    ], debtWaiverAccountIdRules: [(v) => !!v || "Debt Waiver Account is required",
    ], withholdingTaxAccountIdRules: [(v) => !!v || "Withholding Tax Account is required",
    ],

    showPrintPrompt: false,
  }),
  created() {
    this.$store.dispatch("lookup/lookupdata/getBusinessSections");
    this.$store.dispatch("accounting/account/getMini");
  },
  computed: {

  },

  watch: {

  },
  methods: {
    save() {
      this.$store.dispatch("post", { path: this.path, body: this.creditorAccountGroup });
    },
    update() {
      this.$store.dispatch("put", { path: `${this.path}/${this.creditorAccountGroup.id}`, body: this.creditorAccountGroup });
    },
    updateDialog() {
      var obj = this.$store.state.search.selectedData[0].value;
      this.setDialog(obj);
    },
    async search() {
      var obj = this.$store.state.obj;
      this.creditorAccountGroup = Object.assign({}, obj);
      this.setObjects(obj);
    },
    reset() {
      this.creditorAccountGroup.clear();
    },
    setObjects(obj) {
      console.log(obj);
    }, setDialog(obj) {
      this.creditorAccountGroup = Object.assign({}, obj);
      this.setObjects(obj);
    },
    done() {
      this.$store.commit(
        "crudtable/data",
        Object.assign({}, this.creditorAccountGroup)
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
      data.push({ text: "Business Section", value: this.creditorAccountGroup.businessSectionId });
      data.push({ text: "Business Section", value: this.creditorAccountGroup.businessSection });
      data.push({ text: "Credit Account", value: this.creditorAccountGroup.creditAccountId });
      data.push({ text: "Credit Account", value: this.creditorAccountGroup.creditAccount });
      data.push({ text: "Discount Account", value: this.creditorAccountGroup.discountAccountId });
      data.push({ text: "Discount Account", value: this.creditorAccountGroup.discountAccount });
      data.push({ text: "Debt Waiver Account", value: this.creditorAccountGroup.debtWaiverAccountId });
      data.push({ text: "Debt Waiver Account", value: this.creditorAccountGroup.debtWaiverAccount });
      data.push({ text: "Withholding Tax Account", value: this.creditorAccountGroup.withholdingTaxAccountId });
      data.push({ text: "Withholding Tax Account", value: this.creditorAccountGroup.withholdingTaxAccount });

      let options = {
        data: data,
        startXPos: 10,
        startYPos: 25,
        lineBreak: 4,
        hSpace: 50,
        vSpace: 10,
        title: "Creditor Account Group"

      }

      this.makePDFDocument(options);
    },
  }
};
</script>
