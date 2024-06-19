<template>
  <s-count-dashboard-card title="Total Active Loans" :items="dashboardList" :toSumField="toSumField" :headers="headers"
    @open="open" @close="close" :dialog="dialog">


  </s-count-dashboard-card>
</template>

<script>
import funcs from '../utils/funcs'
import loanNav from '../loan/loan/LoanNav'
export default {
  name: 'DTotalActiveLoans',
  props: ["title"],
  data: () => ({
    toSumField: "balance",
    headers: loanNav.menu.midHeaders,
    dialog: false,

  }),

  created() {
    this.$store.dispatch("loan/loan/getMini");
  },

  computed: {

    dashboardList() {
      return this.$store.state.loan.loan.mini.filter(l => l.loanStatus == 'Active');
    },

    count() {
      if (!this.dashboardList) return 0;
      return this.dashboardList.length;
    },

    totalLoans() {
      if (!this.dashboardList) return 0;
      return funcs.formatNumber(this.dashboardList.map((a) => a.balance).map(Number).reduce((a, b) => a + b, 0));
    },

    todayLoans() {
      if (!this.dashboardList) return [];
      let currentDate = new Date();
      let today = currentDate.toISOString().slice(0, 10)
      let now = currentDate;
      return this.dashboardList.filter((a) => a.creationDate >= new Date(today).getTime() && a.creationDate <= now.getTime());
    },

    todayLoansCount() {
      if (!this.todayLoans) return 0;
      return this.todayLoans.length;
    },

    todayTotalLoans() {
      if (!this.todayLoans) return 0;
      return funcs.formatNumber(this.todayLoans.map((a) => a.principle).map(Number).reduce((a, b) => a + b, 0));
    },


    todayTotalLoansBalance() {
      if (!this.todayLoans) return 0;
      return funcs.formatNumber(this.todayLoans.map((a) => a.balance).map(Number).reduce((a, b) => a + b, 0));
    },
  },
  methods: {
    open() {
      this.dialog = true;
    },
    close() {
      this.dialog = false;
    }
  }
};
</script>