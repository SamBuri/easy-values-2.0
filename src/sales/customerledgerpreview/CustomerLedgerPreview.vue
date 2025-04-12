<template>
  <crud-form @save="save" @update="update" @search="search" @updateDialog="updateDialog" @reset="reset" @done="done"
    @updateCrudTableDialog="updateCrudTableDialog" @resetCrudTableDialog="resetCrudTableDialog" :path="path"
    :maxWidth="maxWidth" @componentDataChanged="componentDataChanged">
    <template slot="heading">Customer Ledger</template>

    <template slot="form-data">
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-text-field label="Customer Id" v-model="customerLedgerPreview.customerId" :rules="customerIdRules"
          append-icon="mdi-view-list" @click:append="appendIconCallback" :counter="20"></v-text-field>

      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-text-field label="Customer Name" v-model="customerLedgerPreview.customerName" disabled></v-text-field>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-text-field label="Phone No" v-model="customerLedgerPreview.phoneNo" disabled>
        </v-text-field>
      </v-col>

      <v-col :cols="cols" :sm="sm" :md="md">
        <v-textarea label="Address" v-model="customerLedgerPreview.address" rows="1" auto-grow disabled>
        </v-textarea>
      </v-col>
      <!-- <v-col :cols="cols" :sm="sm" :md="md">
        <s-date-picker label="Start Date" v-model="customerLedgerPreview.startDate" :rules="startDateRules" />
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-date-picker label="End Date" v-model="customerLedgerPreview.endDate" :rules="endDateRules" />
      </v-col> -->
      <v-col cols="12">
        <crud-table title="Customer Ledgers" :headers="customerLedgerNav.menu.editHeaders"
          :items="$store.state.customer.customerledger.customerLedgers"
          :loading="$store.state.customer.customerledger.customerLedgersLoading" maxWidth="700px" />
      </v-col>


    </template>
  </crud-form>
</template>
<script>
import customerLedgerPreviewModel from "./CustomerLedgerPreviewModel";
import CrudTable from "../../components/CrudTable.vue";
import customerLedgerNav from "../customerledger/CustomerLedgerNav.js";
import customerNav from '../customer/CustomerNav';

export default {
  components: { CrudTable },
  name: "CustomerLedgerPreview",
  props: ['passedCustomerNo'],
  data: () => ({
    cols: 12,
    sm: 6,
    md: 3,
    maxWidth: 1200,
    path: customerLedgerPreviewModel.path,
    customerLedgerPreview: customerLedgerPreviewModel.customerLedgerPreview,
    customerLedgerNav: customerLedgerNav,
    customerIdRules: [
      (v) => !!v || "Customer Id is required",
      (v) => v.length < 20 || "Customer Id length must be less or equal to 20",
    ],
    customerNameRules: [
      (v) => !!v || "Customer Name is required",
      (v) =>
        v.length < 40 || "Customer Name length must be less or equal to 40",
    ],
    phoneNoRules: [
      (v) => !!v || "Phone No is required",
      (v) => v.length < 100 || "Phone No length must be less or equal to 100",
    ],
    startDateRules: [(v) => !!v || "Start Date is required"],
    endDateRules: [(v) => !!v || "End Date is required"],
    customerLedgersRules: [(v) => !!v || "Customer Ledgers is required"],
    searchDialog: false,
  }),
  created() {
    this.loadCustomerLedgers();
    this.$store.commit("search/selectedMiniItem", null);
  },
  computed: {
    customerId() {
      return this.customerLedgerPreview.customerId;
    },



    selectedData() {
      return this.$store.state.search.selectedMiniItem;
    },

    searchedCustomer() {
      return this.$store.state.obj;
    }
  },

  watch: {
    customerId() {
      this.$store.dispatch("get", `${customerNav.menu.path}/${this.customerId}`);
      this.loadCustomerLedgers();
    },

    // passedCustomerNo() {
    //   this.setCustomerId(this.passedCustomerNo);
    // },


    selectedData() {
      let selectedData = this.selectedData;
      if (selectedData) {
        this.customerLedgerPreview.customerId = selectedData.id;
      }
    },

    searchedCustomer() {

      let selectedData = this.$store.state.obj;
      if (selectedData) {
        this.customerLedgerPreview.customerId = selectedData.id;
        this.customerLedgerPreview.customerName = selectedData.customerName
        this.customerLedgerPreview.phoneNo = selectedData.phoneNo;
        this.customerLedgerPreview.address = selectedData.address;
      } else {


        this.customerLedgerPreview.customerName = ""
        this.customerLedgerPreview.phoneNo = "";
        this.customerLedgerPreview.address = "";

      }
    }
  },

  methods: {

    loadCustomerLedgers() {
      this.$store.commit("customer/customerledger/customerLedgers", []);
      if (this.customerId) {
        this.$store.dispatch("customer/customerledger/getCustomerLedgers", this.customerId);
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

    appendIconCallback() {
      let miniSelected = { path: customerNav.menu.path, name: customerNav.menu.name, headers: customerNav.menu.miniHeaders };
      this.$store.commit("search/miniSelected", miniSelected);
      this.$store.dispatch("search/getMiniData");
      this.$store.commit("search/miniDialog", true);

    },

    setCustomerId(passedCustomerId) {
      console.log("passed Customer Id", passedCustomerId);
      this.customerLedgerPreview.customerId = passedCustomerId;
    },

    componentDataChanged(data){
      this.$nextTick(()=>{
      this.setCustomerId(data.obj.loanApplication.applicantId);
      });
    }, 
  },
};
</script>
