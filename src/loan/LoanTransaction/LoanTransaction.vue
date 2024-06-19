<template>
  <SDataFileInputVue title="Loan Transactions" 
  :headers="headers" 
  :columns="columns"
  :valid="valid"
  :data="data"
  :loading="$store.state.loan.loantransaction.loading"
  @loadData="loadData"
  @saveData="saveData"
  @reset="reset"
  >
  </SDataFileInputVue>
</template>

<script>


import SDataFileInputVue from "../../components/SDataFileInput.vue";
// import SnackBar from "./SnackBar.vue";
export default {
  name: "LoanTransactions",
  props: {},
  components: {
    // SnackBar,
    SDataFileInputVue,
  },
  data: () => ({
    headers: [
      {value: "tranId", text: "Tran Id"},
      { value: "profileId", text: "Profile Id" },
      { value: "tranDate", text: "Tran Date" },
      { value: "tranType", text: "Tran Type" },
      { value: "itemName", text: "Item Name" },
      { value: "amount", text: "Amount" },
      
    ],

     columns: [
      {field: "tranId", label: "tranId"},
      { field: "profileId", label: "profileId" },
      { field: "tranDate", label: "tranDate" },
      { field: "tranType", label: "tranType" },
      { field: "itemName", label: "itemName" },
      { field: "amount", label: "amount" },
      
    ],
    path: "loantransactions"
  }),

  computed: {
      valid() {
      return this.data.length > 0;
    },

    data() {
      return this.$store.state.loan.loantransaction.data;
    },
  },

  created() {},

  methods: {

      loadData(fileData){
          this.$store.dispatch("loan/loantransaction/getData", fileData);
      },

      reset(){
          // this.$store.commit("loan/loantransaction/data", []);
      },

       saveData() {
      this.$store.dispatch("loan/loantransaction/post", {
        path: this.path,
        body: this.data,
      });
    },
  },
};
</script>