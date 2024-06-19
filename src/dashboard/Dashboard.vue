<template>
 <div>
  <v-container fluid>
    <v-row>
      <v-col :cols="cols" :md="md" :sm="md">
        <d-receipt />
      </v-col>

      <v-col :cols="cols" :md="md" :sm="md">
        <d-today-receipts />
      </v-col>

      <v-col :cols="cols" :md="md" :sm="md">
        <d-receipt-discount />
      </v-col>

      <v-col :cols="cols" :md="md" :sm="md">
        <d-receipt-change />
      </v-col>


      <v-col :cols="cols" :md="md" :sm="md">
        <d-new-loan />
      </v-col>

      <v-col :cols="cols" :md="md" :sm="md">
        <d-new-loan-bill-details />
      </v-col>

      <v-col :cols="cols" :md="md" :sm="md">
        <d-new-bank-transfers/>
      </v-col>

      <v-col :cols="cols" :md="md" :sm="md">
        <d-new-expense-details/>
      </v-col>

      <v-col :cols="cols" :md="md" :sm="md">
        <d-total-active-loans />
      </v-col>


      <v-col :cols="cols" :md="md" :sm="md">
        <d-new-bank-transaction-debits/>
      </v-col>

      <v-col :cols="cols" :md="md" :sm="md">
        <d-new-bank-transaction-credits/>
      </v-col>

      <v-col :cols="cols" :md="md" :sm="md">
        <d-due-engagements/>
      </v-col>

      <v-col :cols="cols" :md="md" :sm="md">
        <d-new-engagements/>
      </v-col>

    </v-row>

    <v-row>
      <v-col>
        <d-loan-status-summary />
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <d-active-loan-summary />
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <d-dormant-loan-summary />
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <d-recovery-loan-summary />
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <d-defaulted-loan-summary />
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <d-completed-loan-summary />
      </v-col>

    </v-row>
  </v-container>
</div>
</template>

<script>
import DReceipt from '../dashboard/DReceipt'
import DNewLoan from '../dashboard/DNewLoan.vue';
import DActiveLoanSummary from '../dashboard/DActiveLoanSummary.vue';
import DDormantLoanSummary from '../dashboard/DDormantLoanSummary.vue';
import DCompletedLoanSummary from '../dashboard/DCompletedLoanSummary.vue';
import DTodayReceipts from  '../dashboard/DTodayReceipts.vue'
import DTotalActiveLoans from '../dashboard/DTotalActiveLoans.vue'
import DReceiptDiscount from './DReceiptDiscount.vue';
import DReceiptChange from './DReceiptChange.vue';
import DNewBankTransactionDebits from './DNewBankTransactionDebits.vue';
import DNewBankTransactionCredits from './DNewBankTransactionCredits.vue';
import DNewEngagements from './DNewEngagements.vue';
import DNewBankTransfers from './DNewBankTransfers.vue';
import DNewExpenseDetails from './DNewExpenseDetais.vue'
import DNewLoanBillDetails from './DNewLoanBillDetails.vue'
import DRecoveryLoanSummary from './DRecoveryLoanSummary.vue';
import DDefaultedLoanSummary from './DDefaultedLoanSummary.vue';
import DDueEngagements from './DDueEngagements.vue';
import DLoanStatusSummary from './DLoanStatusSummary.vue'
export default {
  name: 'Dashboard',
  components: { DReceipt, DNewLoan, DActiveLoanSummary, DDormantLoanSummary,
  DCompletedLoanSummary, DTodayReceipts, DTotalActiveLoans, DReceiptDiscount, DReceiptChange,
   DNewBankTransactionDebits, DNewBankTransactionCredits, DNewEngagements, DNewBankTransfers,
   DNewExpenseDetails,DNewLoanBillDetails, DRecoveryLoanSummary, DDefaultedLoanSummary,
   DDueEngagements, DLoanStatusSummary },
  data: () => ({
     cols: 12,
     md: 3
  }),

  computed: {


  },
  methods: {

  }


}
</script>
