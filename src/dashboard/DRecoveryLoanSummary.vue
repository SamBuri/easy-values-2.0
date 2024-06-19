<template>
     <s-data-dashboard  title="Recovery Loan Summary" :headers="headers" :data="dashboardList"> </s-data-dashboard>
</template>

<script>
import funcs from '../utils/funcs'
export default {
    name: 'DRecoveryLoanSummary',
    props: ["title"],
    data: () => ({

        headers: [
        { title: "Product Name", key: "productName", chartLabel: true },
        { title: "Total Principle", key: "sumPrinciple", isNumeric: true, chartValue: true },
        { title: "Total Balance", key: "sumBalance", isNumeric: true, chartValue: true },
        { title: "Count", key: "count", isNumeric: true, chartValue: true }
        ]

    }),

    created() {

        this.$store.dispatch("loan/loan/getLoanSummary");
    },

    computed: {

        dashboardList() {
            return this.$store.state.loan.loan.loanSummary.filter(l => l.loanStatus == 'Recovery');
        },

        count() {
            if (!this.dashboardList) return 0;
            return this.dashboardList.length;
        },

        totalLoans() {
            if (!this.dashboardList) return 0;
            return funcs.formatNumber(this.dashboardList.map((a) => a.sumBalance).map(Number).reduce((a, b) => a + b, 0));
        },


    }
};
</script>
