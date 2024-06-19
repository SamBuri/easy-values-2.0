<template>
  <crud-form @save="save" @update="update" @search="search" @updateDialog="updateDialog" @reset="reset" @done="done"
    @updateCrudTableDialog="updateCrudTableDialog" @resetCrudTableDialog="resetCrudTableDialog" :path="path"
    :maxWidth="maxWidth">
    <template slot="heading">Loan</template>

    <template slot="form-data">
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-select label="Loan Application" v-model="loan.loanApplication" :rules="loanApplicationRules" :counter="20"
          required :items="$store.state.loan.loanapplication.approved"
          :loading="$store.state.loan.loanapplication.approvedLoading" item-text="name" item-value="id" return-object>
        </v-select>
      </v-col>

      <v-col :cols="cols" :sm="sm" :md="md">
        <s-date-picker label="Loan Date" v-model="loan.loanDate" :rules="loanDateRules" />
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-select label="Bank Account Type" v-model="loan.bankAccountType" :rules="bankAccountTypeRules" :counter="100"
          required :items="$store.state.banking.bankAccountTypes" :loading="$store.state.lookup.bankAccountTypeLoading"
          return-object></v-select>
      </v-col>

      <v-col :cols="cols" :sm="sm" :md="md">
        <v-select label="Account" v-model="loan.accountId" :rules="accountIdRules" required
          :items="$store.state.banking.bankaccount.bankAccountsByType"
          :loading="$store.state.banking.bankaccount.bankAccountsByTypeLoading" item-text="bankAccountName"
          item-value="id"></v-select>
      </v-col>

      <v-col :cols="cols" :sm="sm" :md="md">
        <v-select label="Business Section" v-model="loan.customerTypeId" :rules="customerTypeIdRules" :counter="20"
          :items="$store.state.lookup.lookupdata.businessSections"
          :loading="$store.state.lookup.lookupdata.businessSectionsLoading" item-text="lookupDataName" item-value="id">
        </v-select>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-number-input label="Principle" v-model="loan.principle" :rules="principleRules" :disabled="true">
        </s-number-input>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-number-input label="Balance" v-model="loan.balance" :disabled="true" required></s-number-input>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-text-field label="Loan Product" v-model="loan.productName" disabled></v-text-field>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-text-field label="Payment Interval" v-model="loan.paymentInterval" disabled></v-text-field>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-menu ref="paytMenu" v-model="paytMenu" :close-on-content-click="true" transition="scale-transition" offset-y
          min-width="auto" disabled>
          <template v-slot:activator="{ on, attrs }">
            <v-text-field label="Next Payment Date" v-model="loan.nextPaymentDate" prepend-icon="mdi-calendar" readonly
              v-bind="attrs" v-on="on" disabled></v-text-field>
          </template>
          <v-date-picker v-model="loan.nextPaymentDate" :max="
            new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
              .toISOString()
              .substr(0, 10)
          " min="1950-01-01"></v-date-picker>
        </v-menu>
      </v-col>

      <v-col cols="12">
        <crud-table title="Loan Bill Details" :headers="loanBillDetailNav.menu.readOnlyHeaders"
          :items="loan.loanBillDetails" maxWidth="700px" />
      </v-col>
    </template>
  </crud-form>
</template>
<script>
import loanModel from "./LoanModel";
import CrudForm from "../../components/CrudForm.vue";
import CrudTable from "../../components/CrudTable.vue";
import loanBillDetailNav from '../loanbilldetail/LoanBillDetailNav'
import loanConstants from "../LoanConstants";
import funcs from "../../utils/funcs";
export default {
  components: { CrudForm, CrudTable },
  name: "Loan",
  data: () => ({
    cols: 12,
    sm: 6,
    md: 4,
    maxWidth: 1000,
    path: loanModel.path,
    loan: loanModel.loan,
    loanBillDetailNav: loanBillDetailNav,
    loanApplicationRules: [(v) => !!v || "Loan Application is required"],
    principleRules: [(v) => !!v || "Principal is required"],
    loanDateRules: [(v) => !!v || "Loan Date is required"],
    bankAccountTypeRules: [(v) => !!v || "Bank Account Type is required"],
    accountIdRules: [(v) => !!v || "Account is required"],
    balanceRules: [(v) => !!v || "Balance is required"],
    nextPaymentDateRules: [(v) => !!v || "Next Payment Date is required"],
    loanBillDetailsRules: [(v) => !!v || "Loan Bill Details is required"],
    customerTypeIdRules: [(v) => !!v || "Customer Type Id is required"],
    menu: false,
    paytMenu: false,
    loanProduct: { id: "", productName: "" },
    loanProductCharges: [],
  }),
  created() {
    this.$store.dispatch("loan/loanapplication/getApproved");
    this.$store.dispatch("banking/getBankAccountTypes");
    this.$store.dispatch("lookup/lookupdata/getBusinessSections");
  },
  computed: {
    loanApplication() {
      return this.loan.loanApplication;
    },
    bankAccountType() {
      return this.loan.bankAccountType;
    },
    principle() {
      return this.loan.principle;
    },

    loanBillDetails() {
      return this.loan.loanBillDetails;
    },
    loanDate() {
      return this.loan.loanDate;
    },
  },
  watch: {
    async loanApplication() {
      this.loanProductCharges = [];
      this.loan.loanBillDetails = [];
      this.loanProduct = null;
      this.loan.principle = 0;
      if (!this.loanApplication) {
        return;
      }
      let loanApp = this.loanApplication;
      this.loan.principle = loanApp.approvedAmount;
      this.loanProduct = loanApp.loanProduct;
      if (this.loanProduct){
        this.loan.productName = this.loanProduct.productName;
      

      // await this.$store.dispatch(
      //   "get",
      //   `loanproducts/${loanApp.loanProduct.id}`
      // );
      // this.loanProduct = this.$store.state.obj;
      // if (!this.loanProduct) {
      //   return;
      // }
      let loanProductCharges = this.loanProduct.loanProductCharges;
      this.loan.paymentInterval = this.loanProduct.paymentPeriod.periodName;
      this.setNextPayDate();
      this.loan.loanBillDetails = loanProductCharges.map((item) => {
        var container = {};
        container.itemId = item.itemId;
        container.itemName = item.itemName;
        container.determiningMethod = item.determiningMethod;
        container.quantity = item.quantity;
        container.rawUnitCost = item.unitCost;
        container.rawUnitPrice = item.unitPrice;
        container.amount = 0;

        return container;
      });
      }
    },

    bankAccountType() {
      if (!this.bankAccountType) return;
      this.$store.dispatch(
        "banking/bankaccount/getBankAccountsByType",
        this.bankAccountType
      );
    },

    principle() {
      this.calculateBillDetailsAmount();
    },

    loanBillDetails() {
      this.calculateBillDetailsAmount();
    },

    loanDate() {
      this.setNextPayDate();
    },
  },

  methods: {
    save() {
      this.$store.dispatch("post", { path: this.path, body: this.loan });
    },
    update() {
      this.$store.dispatch("put", {
        path: `${this.path}/${this.loan.id}`,
        body: this.loan,
      });
    },
    updateDialog() {
      var obj = this.$store.state.search.selectedData[0].value;
      this.setDialog(obj);
    },
    async search() {
      var obj = this.$store.state.obj;
      this.loan = Object.assign({}, obj);
      this.setObjects(obj);
    },
    reset() {
      this.loan.clear();
      this.$store.dispatch("loan/loanapplication/getApproved");
    },
    setObjects(obj) {
      console.log(obj);
    },
    setDialog(obj) {
      this.loan = Object.assign({}, obj);
      this.setObjects(obj);
    },
    done() {
      // this.$store.commit("crudtable/data", Object.assign({}, this.loan));
    },
    updateCrudTableDialog() {
      // this.setDialog(this.$store.state.crudtable.data);
    },
    resetCrudTableDialog() {
      // this.reset();
    },

    // calculateBillDetailsAmount() {
    //   let loanAmount = this.loan.principle;
    //   loanAmount = loanAmount < 0 ? 0 : loanAmount;
    //   let totalBill = 0;
    //   for (let billDetails of this.loan.loanBillDetails) {
    //     let toBillAmount = 0;
    //     let charge = billDetails.charge;
    //     if (
    //       billDetails.determiningMethod ==
    //       loanConstants.determiningMethods.Percentage
    //     ) {
    //       toBillAmount = (charge * loanAmount) / 100;
    //     } else {
    //       toBillAmount = charge;
    //     }
    //     console.log(toBillAmount);
    //     totalBill += toBillAmount;
    //     billDetails.amount = toBillAmount;
    //   }
    //   this.loan.balance = Number(totalBill);
    //   // this.loan.balance = (Number(loanAmount)+totalBill).toLocaleString();
    //   // console.log(Number(this.loan.balance.replaceAll(',', '') ))
    // },


    calculateBillDetailsAmount() {
      let loanBalance = this.loan.principle;
      loanBalance = loanBalance < 0 ? 0 : loanBalance;
      let totalBill = 0;
      for (let billDetails of this.loan.loanBillDetails) {
      
        let unitCost = 0;
        let unitPrice = 0;

        let cost = Number(billDetails.rawUnitCost);
        let price = Number(billDetails.rawUnitPrice);
        if (
          billDetails.determiningMethod ==
          loanConstants.determiningMethods.Percentage
        ) {
          unitCost = Math.ceil((cost * loanBalance) / 100);
          unitPrice = Math.ceil((price * loanBalance) / 100);
        } 
        else{
          unitCost = cost;
          unitPrice = price;
        }
 
        billDetails.unitCost =  unitCost;
        billDetails.unitPrice = unitPrice
        let quantity =  Number(billDetails.quantity)
        let amount = Math.ceil(unitPrice*quantity)
        billDetails.amount = amount;
        totalBill+=amount;
      }

      this.loan.balance = Number(totalBill);
      // this.loan.balance = (Number(loanAmount)+totalBill).toLocaleString();
      // console.log(Number(this.loan.balance.replaceAll(',', '') ))
    },


    setNextPayDate() {
      this.loan.nextPaymentDate = null;
      let loanDate = this.loan.loanDate;
      if (loanDate) {
        if (this.loanProduct) {
          this.loan.nextPaymentDate = funcs.formatDate(
            funcs.addDays(loanDate, this.loanProduct.paymentPeriod.days)
          );
          console.log(this.loan.nextPaymentDate);
        }
      }
    },
  },
};
</script>


