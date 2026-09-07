<script setup>
   import { defineLoanStore } from '@/loan/loan/LoanStore';
    import loanNav from '../loan/loan/LoanNav'
    import { computed,onMounted } from 'vue';
    const loanStore = defineLoanStore();
    onMounted(() => {
      loanStore.getMini();
    });
    const headers = loanNav.menu.midHeaders;
    const toSumField = "balance";
    const dashboardList = computed(() => {
      return loanStore.mini.filter(l => l.loanStatus == 'Active')||[];
    });

</script><template>
  <s-count-dashboard-card title="Total Active Loans" :items="dashboardList" :toSumField="toSumField" :headers="headers"
   />
</template>
