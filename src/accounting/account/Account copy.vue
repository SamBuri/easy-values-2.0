<template>
  <crud-form @save="save" @update="update" @search="search" @updateDialog="updateDialog" @reset="reset" @done="done"
    @updateCrudTableDialog="updateCrudTableDialog" @resetCrudTableDialog="resetCrudTableDialog" :path="path"
    :maxWidth="maxWidth">
    <template slot="heading">Account</template>

    <template slot="form-data" slot-scope="{isUpdate}">
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-select label="Account Type" v-model="account.accountType" :rules="accountTypeRules" :counter="100"
          :items="$store.state.lookup.accountTypes" :loading="$store.state.lookup.accountTypesLoading"></v-select>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-select label="Account Category" v-model="account.accountCategory" :rules="accountCategoryRules"
          :counter="100" :items="$store.state.accounting.accountcategory.accountCategoriesByAccountType"
          :loading="$store.state.accounting.accountcategory.accountCategoriesByAccountTypeLoading"
          item-text="categoryName" item-value="id" return-object></v-select>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-text-field label="Account Name" v-model="account.accountName" :rules="accountNameRules"
          :counter="40"></v-text-field>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-select label="Account Action" v-model="account.accountAction" :rules="accountActionRules" :counter="100"
          :items="$store.state.lookup.accountActions" :loading="$store.state.lookup.accountActionsLoading"
          disabled></v-select>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-select label="Account Report" v-model="account.accountReport" :rules="accountReportRules" :counter="100"
          :items="$store.state.lookup.accountReports" :loading="$store.state.lookup.accountReportsLoading"></v-select>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-checkbox label="Contra" v-model="account.contra"></v-checkbox>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-checkbox label="Control Account" v-model="account.controlAccount"></v-checkbox>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-number-input label="Balance" v-model="account.balance" :disabled="true"></s-number-input>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-checkbox label="Read Only" v-model="account.readOnly"></v-checkbox>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md" v-if="isUpdate">
        <v-checkbox label="Hidden" v-model="account.hidden"></v-checkbox>
      </v-col>
    </template>
  </crud-form>
</template>
<script>
import accountModel from "./AccountModel";
export default {
  components: {},
  name: "Account",
  data: () => ({
    cols: 12,
    sm: 6,
    md: 3,
    maxWidth: 1000,
    path: accountModel.path,
    account: accountModel.account,
    accountTypeRules: [(v) => !!v || "Account Type is required",
    ], accountCategoryRules: [(v) => !!v || "Account Category is required",
    ], accountNameRules: [(v) => !!v || "Account Name is required",
    (v) => v.length < 40 || "Account Name length must be less or equal to 40",], accountActionRules: [(v) => !!v || "Account Action is required",
    ], accountReportRules: [(v) => !!v || "Account Report is required",
    ], balanceRules: [(v) => !!v || "Balance is required",
    ],

    assetAccountType: "Asset",
    liabilityAccountType: "Liability",
    equityAccountType: "Equity",
    incomeAccountType: "Income",
    expenseAccountType: "Expense"
  }),
  created() {
    this.$store.dispatch("lookup/getAccountTypes");
    this.$store.dispatch("lookup/getAccountActions");
    this.$store.dispatch("lookup/getAccountReports");
  },
  computed: {
    accountType() {
      return this.account.accountType;
    },

    isContra(){
      return this.account.contra
    }


  },

  watch: {
    accountType() {
      if (this.accountType) {
        this.$store.dispatch("accounting/accountcategory/getAccountCategoriesByAccountType", this.accountType);
        this.setControls();
      }
    },

    isContra(){
      this.setControls();
    }
  },

  methods: {
    save() {
      this.$store.dispatch("post", { path: this.path, body: this.account });
    },
    update() {
      this.$store.dispatch("put", { path: `${this.path}/${this.account.id}`, body: this.account });
    },
    updateDialog() {
      var obj = this.$store.state.search.selectedData[0].value;
      this.setDialog(obj);
    },
    async search() {
      var obj = this.$store.state.obj;
      this.account = Object.assign({}, obj);
      this.setObjects(obj);
    },
    reset() {
      this.account.clear();
    },
    setObjects(obj) {
      if (obj)
      this.account.accountType = obj.accountCategory.accountType;
      console.log(obj);
    }, setDialog(obj) {
      this.account = Object.assign({}, obj);
      this.setObjects(obj);
    },
    done() {
      this.$store.commit(
        "crudtable/data",
        Object.assign({}, this.account)
      );
    },
    updateCrudTableDialog() {
      this.setDialog(this.$store.state.crudtable.data);
    },
    resetCrudTableDialog() {
      this.reset();
    },

    setAccountAction() {
      let accountType = this.account.accountType;
      let isContra = this.account.contra;
      let debitAccountAction = "Debit"
      let creditAccountAction = "Credit"

      if (accountType == this.assetAccountType || accountType == this.expenseAccountType) {
        this.account.accountAction = debitAccountAction
        if (isContra) {
          this.account.accountAction = creditAccountAction
        }
      }
      else {
        this.account.accountAction = creditAccountAction
          if (isContra) {
            this.account.accountAction = debitAccountAction
          }
        
      }
    },

    setAccountReport() {
      let accountType = this.account.accountType;
      let financialStatementAccountReport = "Financial_Statement"
      let balanceSheetAccountReport = "Balance_Sheet"
      // let contra = this.account.contra

      if (accountType == this.incomeAccountType || accountType == this.expenseAccountType) {
        this.account.accountReport = financialStatementAccountReport
        // if (contra) {
        //   this.account.accountReport = balanceSheetAccountReport
        // }
      }
      else {
         this.account.accountReport = balanceSheetAccountReport;
          // if (contra) {
          //   this.account.accountReport = financialStatementAccountReport;
          // }
        
      }
    },

    setControls(){
      this.setAccountAction();
      this.setAccountReport();
    }
  
}
};
</script>
