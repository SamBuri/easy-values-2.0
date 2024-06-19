<template>
  <crud-form @save="save" @update="update" @search="search" @updateDialog="updateDialog" @reset="reset" @done="done"
    @updateCrudTableDialog="updateCrudTableDialog" @resetCrudTableDialog="resetCrudTableDialog" :path="path"
    :maxWidth="maxWidth">
    <template slot="heading">Bank Account</template>

    <template slot="form-data">
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-text-field label="Bank Account Name" v-model="bankAccount.bankAccountName" :rules="bankAccountNameRules"
          :counter="100" required></v-text-field>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-select label="Bank Account Type" v-model="bankAccount.bankAccountType" :rules="bankAccountTypeRules"
          :counter="100" required :items="$store.state.banking.bankAccountTypes"></v-select>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-text-field label="Account No" v-model="bankAccount.accountNo" :rules="accountNoRules" :counter="100"
          required></v-text-field>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-text-field label="Bank Name" v-model="bankAccount.bankName" :rules="bankNameRules" :counter="100"
          required></v-text-field>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-text-field label="Branch Name" v-model="bankAccount.branchName" :rules="branchNameRules" :counter="100"
          required></v-text-field>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-select label="Currency" v-model="bankAccount.currencyId" :rules="currencyIdRules" :counter="100" required
          :items="$store.state.lookup.currency.mini" item-text="currency" item-value="id"></v-select>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-select label="Gl Account" v-model="bankAccount.glAccountId" :rules="glAccountIdRules" :counter="20"
          :items="$store.state.accounting.account.assetAccounts"
          :loading="$store.state.accounting.account.assetAccountsLoading" item-text="accountName"
          item-value="id"></v-select>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-select label="Charges Gl Account" v-model="bankAccount.chargesGlAccountId" :rules="chargesGlAccountIdRules"
          :counter="20" :items="$store.state.accounting.account.expenseAccounts"
          :loading="$store.state.accounting.account.expenseAccountsLoading" item-text="accountName" item-value="id"></v-select>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-text-field label="Phone No" v-model="bankAccount.phoneNo"></v-text-field>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-text-field label="Email" v-model="bankAccount.email" :counter="100"></v-text-field>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-textarea label="Address" v-model="bankAccount.address" :counter="200" rows="1" auto-grow></v-textarea>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-checkbox label="Is Default" v-model="bankAccount.isDefault"></v-checkbox>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-checkbox label="Hidden" v-model="bankAccount.hidden"></v-checkbox>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-text-field label="Balance" v-model="bankAccount.balance" disabled :counter="100" required></v-text-field>
      </v-col>
    </template>
  </crud-form>
</template>
<script>
import bankAccountModel from "./BankAccountModel";
import CrudForm from "../../components/CrudForm.vue";
export default {
  components: { CrudForm },
  name: "BankAccount",
  data: () => ({
    cols: 12,
    sm: 6,
    md: 3,
    maxWidth: 1000,
    path: bankAccountModel.path,
    bankAccount: bankAccountModel.bankAccount,
    bankAccountNameRules: [
      (v) => !!v || "Bank Account Name is required",
      (v) =>
        v.length < 100 ||
        "Bank Account Name length must be less or equal to 100",
    ],
    bankAccountTypeRules: [(v) => !!v || "Bank Account Type is required"],

    bankNameRules: [
      (v) => v.length < 100 || "Bank Name length must be less or equal to 100",
    ],
    branchNameRules: [

      (v) => v.length < 100 || "Branch Name length must be less or equal to 100",
    ],
    currencyIdRules: [(v) => !!v || "Currency is required"],
    glAccountIdRules: [(v) => !!v || "Gl Account  is required"],
    chargesGlAccountIdRules: [(v) => !!v || "Gl Account  is required"],
    phoneNoRules: [
      (v) => v.length < 30 || "Phone No length must be less or equal to 100",
    ],
    emailRules: [
      (v) => v.length < 100 || "Email length must be less or equal to 100",
    ],
    addressRules: [
      (v) => v.length < 200 || "Address length must be less or equal to 200",
    ],
  }),
  created() {
    this.$store.dispatch("banking/getBankAccountTypes");
    this.$store.dispatch("lookup/currency/getMini");
    this.$store.dispatch("accounting/account/getAssetAccounts");
    this.$store.dispatch("accounting/account/getExpenseAccounts");
  },
  computed: {
    accountNoRules() {
      let bankAccountType = this.bankAccount.bankAccountType;
      if (bankAccountType === "Cash") {
        return [(v) => v.length < 100 || "Account No length must be less or equal to 100"];
      } else {
        return [
          (v) => v.length < 100 || "Account No length must be less or equal to 100",
          (v) => !!v || "Bank Account Name is required",];
      }
    }
  },

  watch: {},

  methods: {
    save() {
      this.$store.dispatch("post", { path: this.path, body: this.bankAccount });
    },
    update() {
      this.$store.dispatch("put", {
        path: `${this.path}/${this.bankAccount.id}`,
        body: this.bankAccount,
      });
    },
    updateDialog() {
      var obj = this.$store.state.search.selectedData[0].value;
      this.setDialog(obj);
    },
    async search() {
      var obj = this.$store.state.obj;
      this.bankAccount = Object.assign({}, obj);
      this.setObjects(obj);
    },
    reset() {
      this.bankAccount.clear();
    },
    setObjects(obj) {
      console.log(obj);
    },
    setDialog(obj) {
      this.bankAccount = Object.assign({}, obj);
      this.setObjects(obj);
    },
    done() {
      this.$store.commit("crudtable/data", Object.assign({}, this.bankAccount));
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
