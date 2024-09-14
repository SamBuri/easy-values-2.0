<template>
  <crud-form @save="save" @update="update" @search="search" @updateDialog="updateDialog" @reset="reset" @done="done"
    @updateCrudTableDialog="updateCrudTableDialog" @resetCrudTableDialog="resetCrudTableDialog" :path="path"
    :maxWidth="maxWidth" @componentDataChanged="componentDataChanged">
    <template slot="heading">Loan Bill</template>

    <template slot="form-data">
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-text-field label="Loan Id" v-model="loanBill.loanId" :rules="loanIdRules" append-icon="mdi-view-list"
          @click:append="appendIconCallback"></v-text-field>
      </v-col>

      <v-col :cols="cols" :sm="sm" :md="md">
        <v-text-field label="Name" v-model="loanBill.name" disabled></v-text-field>
      </v-col>

      <v-col :cols="cols" :sm="sm" :md="md">

        <s-date-picker v-model="loanBill.billDate" label="Bill Date" :rules="billDateRules"></s-date-picker>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-number-input label="Balance" v-model="loanBill.balance" :disabled="true"></s-number-input>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-number-input label="Amount" v-model="loanBill.amount" :rules="amountRules" :disabled="true"></s-number-input>
      </v-col>

      <v-col cols="12">
        <crud-table title="Loan Bill Details" :headers="loanBillDetailNav.menu.editHeaders"
          :items="loanBill.loanBillDetails" :component="loanBillDetailNav.menu.component" maxWidth="700px" />
      </v-col>
    </template>
  </crud-form>
</template>
<script>
import loanBillModel from "./LoanBillModel";
import CrudForm from "../../components/CrudForm.vue";
import CrudTable from "../../components/CrudTable.vue";
import loanBillDetailNav from "../loanbilldetail/LoanBillDetailNav.js";
import loanConstants from "../LoanConstants";
import constants from '../../utils/constants'
import SNumberInput from '../../components/SNumberInput.vue';
import loanNav from "../loan/LoanNav";
export default {
  components: { CrudForm, CrudTable, SNumberInput },
  name: "LoanBill",
  data: () => ({
    cols: 12,
    sm: 6,
    md: 4,
    maxWidth: 1000,
    path: loanBillModel.path,
    loanBill: loanBillModel.loanBill,
    loanBillDetailNav: loanBillDetailNav,
    loanIdRules: [(v) => !!v || "Loan is required"],
    billDateRules: [(v) => !!v || "Bill Date is required"],
    amountRules: [(v) => !!v || "Amount is required"],
    entryModeRules: [(v) => !!v || "Entry Mode is required"],
    loanBillDetailsRules: [(v) => !!v || "Loan Bill Details is required"],
    menu: false,
  }),
  created() {
    this.$store.dispatch("loan/loan/getMini");
  },
  computed: {
    loanId() {
      return this.loanBill.loanId;
    },
    loanBillDetails() {
      return this.loanBill.loanBillDetails;
    },
    balance() {
      return this.loanBill.balance;
    },
    selectedData() {
      return this.$store.state.search.selectedMiniItem;
    },

    searchedObject() {
      return this.$store.state.obj;
    },

    loan() {
      return this.loanBill.loan;
    }
  },

  watch: {
    loan() {
      if (this.loan) {
        this.loanBill.balance = this.loan.balance;
      }
    },
    loanBillDetails() {
      this.calculateBillDetailsAmount();
    },

    balance() {
      this.calculateBillDetailsAmount();
    },


    loanId() {
      this.$store.commit("obj", null);
      if(!this.loanId) return;
      
      if (this.loanId) {
        this.$store.dispatch("get", `${loanNav.menu.path}/${this.loanId}`);
 }
    },



    selectedData() {
      let selectedData = this.selectedData;
      if (selectedData) {
        this.loanBill.loanId = selectedData.id;
      }
    },

    searchedObject() {

      let selectedData = this.$store.state.obj;
      this.loanBill.loan = null;
      if (selectedData) {
        this.loanBill.loan = { id: selectedData.id, balance: selectedData.balance };
        this.loanBill.loanId = selectedData.id;
        this.loanBill.name = selectedData.loanApplication.name;

      }
    },


  },

  methods: {
    save() {
      this.loanBill.entryMode = constants.ENTRY_MODES.MANUAL;
      this.$store.dispatch("post", { path: this.path, body: this.loanBill });
    },
    update() {
      this.loanBill.entryMode = constants.ENTRY_MODES.MANUAL;
      this.$store.dispatch("put", {
        path: `${this.path}/${this.loanBill.id}`,
        body: this.loanBill,
      });
    },
    updateDialog() {
      var obj = this.$store.state.search.selectedData[0].value;
      this.setDialog(obj);
    },
    async search() {
      var obj = this.$store.state.obj;
      this.loanBill = Object.assign({}, obj);
      this.setObjects(obj);
    },
    reset() {
      this.loanBill.clear();
    },
    setObjects(obj) {
      console.log(obj);
    },
    setDialog(obj) {
      this.loanBill = Object.assign({}, obj);
      this.setObjects(obj);
    },
    done() {
      // this.$store.commit("crudtable/data", Object.assign({}, this.loanBill));
    },
    updateCrudTableDialog() {
      // this.setDialog(this.$store.state.crudtable.data);
    },
    resetCrudTableDialog() {
      // this.reset();
    },

    calculateBillDetailsAmount() {
      let loanBalance = this.loanBill.balance;
      loanBalance = loanBalance < 0 ? 0 : loanBalance;
      let totalBill = 0;
      for (let billDetails of this.loanBill.loanBillDetails) {
      
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

      this.loanBill.amount = Number(totalBill);
      // this.loan.balance = (Number(loanAmount)+totalBill).toLocaleString();
      // console.log(Number(this.loan.balance.replaceAll(',', '') ))
    },

    getFormData() {
      var data = new FormData();
      data.append("loan", this.loanBill.loan);
      data.append("billDate", this.loanBill.billDate);
      data.append("balance", this.loanBill.balance);
      data.append("amount", this.loanBill.amount);
      data.append("entryMode", this.loanBill.entryMode);
      data.append("loanBillDetails", this.loanBill.loanBillDetails);

      return data;
    },

    appendIconCallback() {
      let miniSelected = { path: loanNav.menu.path, name: loanNav.menu.name, headers: loanNav.menu.miniHeaders };
      this.$store.commit("search/miniSelected", miniSelected);
      this.$store.dispatch("search/getMiniData");
      this.$store.commit("search/miniDialog", true);

    },


    setPassedLoanId() {
      console.log("passed Loan id", this.passedLoanId);
      this.loanBill.loanId = this.passedLoanId;
    },

    componentDataChanged(data){
      this.$nextTick(()=>{
        this.loanBill.loanId = data.obj.id;
      })
    
    }



  },
};
</script>
