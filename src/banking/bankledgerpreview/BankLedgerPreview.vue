<template>
  <crud-form @save="save" @update="update" @search="search" @updateDialog="updateDialog" @reset="reset" @done="done"
    @updateCrudTableDialog="updateCrudTableDialog" @resetCrudTableDialog="resetCrudTableDialog" :path="path"
    :maxWidth="maxWidth">
    <template slot="heading">Bank Ledger</template>

    <template slot="form-data">
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-select label="Bank Account" v-model="bankAccount"
          :items="$store.state.banking.bankaccount.mini"
          :loading="$store.state.banking.bankaccount.miniLoading"
          item-text="bankAccountName"
          item-value="id"
           return-object></v-select>

      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-number-input label="Balance" v-model="bankAccount.balance" :disabled="true"></s-number-input>
      </v-col>

      <v-col cols="12">
        <crud-table title="Bank Ledgers" :headers="bankLedgerNav.menu.editHeaders"
          :items="$store.state.banking.bankledger.bankLedgers"
          :loading="$store.state.banking.bankledger.bankLedgersLoading" maxWidth="700px" />
      </v-col>


    </template>
  </crud-form>
</template>
<script>

import CrudTable from "../../components/CrudTable.vue";
import bankLedgerNav from "../bankledger/BankLedgerNav";


export default {
  components: { CrudTable },
  name: "BankLedgerPreview",
  data: () => ({
    cols: 12,
    sm: 6,
    md: 3,
    maxWidth: 1200,
    path: '',
    bankAccount: { id: '', balance: '' },
    bankLedgerNav: bankLedgerNav,

    searchDialog: false,
  }),
  created() {
    this.loadBankLedgers();
    this.$store.dispatch("banking/bankaccount/getMini");
  },
  computed: {
    bankAccountId() {
      return this.bankAccount.id;
    },


  },

  watch: {
    bankAccountId() {
      if (this.bankAccountId) {
        this.$store.dispatch("banking/bankledger/getBankledgers", this.bankAccountId)
      }
    },



  },

  methods: {

    loadBankLedgers() {
      this.$store.commit("banking/bankledger/bankLedgers", []);
      if (this.bankAccountId) {
        this.$store.dispatch("banking/bankledger/getBankLedgers", this.bankAccountId);
      }
    },
    save() {
      this.$store.dispatch("post", {
        path: this.path,
        body: this.customerLedgerPreview,
      });
    },
    update() {
      this.$store.dispatch("put", {
        path: `${this.path}/${this.customerLedgerPreview.id}`,
        body: this.customerLedgerPreview,
      });
    },
    updateDialog() {
      var obj = this.$store.state.search.selectedData[0].value;
      this.setDialog(obj);
    },
    async search() {
      var obj = this.$store.state.obj;
      this.customerLedgerPreview = Object.assign({}, obj);
      this.setObjects(obj);
    },
    reset() {
      this.customerLedgerPreview.clear();
    },
    setObjects(obj) {
      console.log(obj);
    },
    setDialog(obj) {
      this.customerLedgerPreview = Object.assign({}, obj);
      this.setObjects(obj);
    },
    done() {
      this.$store.commit(
        "crudtable/data",
        Object.assign({}, this.customerLedgerPreview)
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
