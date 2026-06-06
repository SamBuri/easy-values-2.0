<script setup>
import { ref } from 'vue';
import DReceipt from './DReceipt.vue';
import DNewLoan from './DNewLoan.vue';
import DActiveLoanSummary from './DActiveLoanSummary.vue';
import DDormantLoanSummary from './DDormantLoanSummary.vue';
import DCompletedLoanSummary from './DCompletedLoanSummary.vue';
import DTodayReceipts from './DTodayReceipts.vue';
import DTotalActiveLoans from './DTotalActiveLoans.vue';
import DReceiptDiscount from './DReceiptDiscount.vue';
import DReceiptChange from './DReceiptChange.vue';
import DNewBankTransactionDebits from './DNewBankTransactionDebits.vue';
import DNewBankTransactionCredits from './DNewBankTransactionCredits.vue';
import DNewEngagements from './DNewEngagements.vue';
import DNewBankTransfers from './DNewBankTransfers.vue';
import DNewExpenseDetails from './DNewExpenseDetais.vue';
import DNewLoanBillDetails from './DNewLoanBillDetails.vue';
import DRecoveryLoanSummary from './DRecoveryLoanSummary.vue';
import DDefaultedLoanSummary from './DDefaultedLoanSummary.vue';
import DDueEngagements from './DDueEngagements.vue';
import DLoanStatusSummary from './DLoanStatusSummary.vue';

const now = new Date();
const greeting = now.getHours() < 12 ? 'Good Morning' : now.getHours() < 17 ? 'Good Afternoon' : 'Good Evening';
const today = now.toLocaleDateString('en-GB', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
</script>

<template>
  <div class="dashboard-root">

    <!-- ── Hero Banner ─────────────────────────────────── -->
    <div class="dashboard-hero">
      <div class="hero-content">
        <div class="hero-text">
          <p class="hero-greeting">{{ greeting }} 👋</p>
          <h1 class="hero-title">Financial Overview</h1>
          <p class="hero-date">{{ today }}</p>
        </div>
        <div class="hero-badge">
          <v-icon size="64" color="white" style="opacity:0.15">mdi-chart-areaspline</v-icon>
        </div>
      </div>
      <!-- Decorative blobs -->
      <div class="hero-blob blob-1"></div>
      <div class="hero-blob blob-2"></div>
    </div>

    <v-container fluid class="dashboard-body pa-4 pa-md-6">

      <!-- ── Section: Sales & Receipts ───────────────── -->
      <div class="section-header">
        <v-icon color="blue-darken-1" class="mr-2">mdi-receipt</v-icon>
        <span>Sales &amp; Receipts</span>
        <div class="section-line"></div>
      </div>

      <v-row dense class="mb-4">
        <v-col cols="12" sm="6" md="3">
          <div class="card-wrap accent-steel">
            <d-receipt />
          </div>
        </v-col>
        <v-col cols="12" sm="6" md="3">
          <div class="card-wrap accent-slate">
            <d-today-receipts />
          </div>
        </v-col>
        <v-col cols="12" sm="6" md="3">
          <div class="card-wrap accent-muted-teal">
            <d-receipt-discount />
          </div>
        </v-col>
        <v-col cols="12" sm="6" md="3">
          <div class="card-wrap accent-cool-grey">
            <d-receipt-change />
          </div>
        </v-col>
      </v-row>

      <!-- ── Section: Loans ───────────────────────────── -->
      <div class="section-header">
        <v-icon color="blue-darken-2" class="mr-2">mdi-bank-outline</v-icon>
        <span>Loans</span>
        <div class="section-line"></div>
      </div>

      <v-row dense class="mb-4">
        <v-col cols="12" sm="6" md="3">
          <div class="card-wrap accent-navy">
            <d-new-loan />
          </div>
        </v-col>
        <v-col cols="12" sm="6" md="3">
          <div class="card-wrap accent-steel">
            <d-total-active-loans />
          </div>
        </v-col>
        <v-col cols="12" sm="6" md="3">
          <div class="card-wrap accent-slate">
            <d-new-loan-bill-details />
          </div>
        </v-col>
        <v-col cols="12" sm="6" md="3">
          <div class="card-wrap accent-muted-teal">
            <d-new-expense-details />
          </div>
        </v-col>
      </v-row>

      <!-- ── Section: Banking ─────────────────────────── -->
      <div class="section-header">
        <v-icon color="blue-darken-1" class="mr-2">mdi-bank-transfer</v-icon>
        <span>Banking</span>
        <div class="section-line"></div>
      </div>

      <v-row dense class="mb-4">
        <v-col cols="12" sm="6" md="4">
          <div class="card-wrap accent-steel">
            <d-new-bank-transfers />
          </div>
        </v-col>
        <v-col cols="12" sm="6" md="4">
          <div class="card-wrap accent-cool-grey">
            <d-new-bank-transaction-debits />
          </div>
        </v-col>
        <v-col cols="12" sm="6" md="4">
          <div class="card-wrap accent-muted-teal">
            <d-new-bank-transaction-credits />
          </div>
        </v-col>
      </v-row>

      <!-- ── Section: Engagements ─────────────────────── -->
      <div class="section-header">
        <v-icon color="blue-darken-1" class="mr-2">mdi-handshake-outline</v-icon>
        <span>Engagements</span>
        <div class="section-line"></div>
      </div>

      <v-row dense class="mb-6">
        <v-col cols="12" sm="6">
          <div class="card-wrap accent-navy">
            <d-due-engagements />
          </div>
        </v-col>
        <v-col cols="12" sm="6">
          <div class="card-wrap accent-slate">
            <d-new-engagements />
          </div>
        </v-col>
      </v-row>

      <!-- ── Section: Loan Summaries ──────────────────── -->
      <div class="section-header">
        <v-icon color="blue-darken-1" class="mr-2">mdi-chart-box-outline</v-icon>
        <span>Loan Portfolio Summaries</span>
        <div class="section-line"></div>
      </div>

      <v-row dense class="mb-4">
        <v-col cols="12">
          <div class="summary-card-wrap">
            <d-loan-status-summary />
          </div>
        </v-col>
      </v-row>

      <v-row dense class="mb-4">
        <v-col cols="12">
          <div class="summary-card-wrap">
            <d-active-loan-summary />
          </div>
        </v-col>
        <v-col cols="12">
          <div class="summary-card-wrap">
            <d-dormant-loan-summary />
          </div>
        </v-col>
      </v-row>

      <v-row dense class="mb-4">
        <v-col cols="12">
          <div class="summary-card-wrap">
            <d-recovery-loan-summary />
          </div>
        </v-col>
        <v-col cols="12">
          <div class="summary-card-wrap">
            <d-defaulted-loan-summary />
          </div>
        </v-col>
        <v-col cols="12">
          <div class="summary-card-wrap">
            <d-completed-loan-summary />
          </div>
        </v-col>
      </v-row>

    </v-container>
  </div>
</template>

<style scoped>
/* ── Root ──────────────────────────────────────────────── */
.dashboard-root {
  min-height: 100vh;
  background: #f4f6f9;
}

/* ── Hero ──────────────────────────────────────────────── */
.dashboard-hero {
  position: relative;
  background: linear-gradient(135deg, rgb(var(--v-theme-primary)) 0%, rgb(var(--v-theme-navy)) 100%);
  padding: 36px 32px 48px;
  overflow: hidden;
  color: white;
}
.hero-content {
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.hero-greeting {
  font-size: 0.95rem;
  opacity: 0.8;
  margin: 0 0 4px;
  letter-spacing: 0.5px;
}
.hero-title {
  font-size: clamp(1.6rem, 3vw, 2.4rem);
  font-weight: 800;
  letter-spacing: -0.5px;
  margin: 0 0 6px;
}
.hero-date {
  font-size: 0.85rem;
  opacity: 0.65;
  margin: 0;
}
.hero-blob {
  position: absolute;
  border-radius: 50%;
  opacity: 0.1;
  background: white;
}
.blob-1 {
  width: 280px;
  height: 280px;
  top: -80px;
  right: -60px;
}
.blob-2 {
  width: 180px;
  height: 180px;
  bottom: -60px;
  right: 120px;
}

/* ── Body ──────────────────────────────────────────────── */
.dashboard-body {
  margin-top: -20px;
  border-radius: 20px 20px 0 0;
  background: #f4f6f9;
}

/* ── Section Headers ───────────────────────────────────── */
.section-header {
  display: flex;
  align-items: center;
  gap: 4px;
  margin-bottom: 12px;
  margin-top: 8px;
  font-weight: 700;
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: rgb(var(--v-theme-primary));
  opacity: 0.8;
}
.section-line {
  flex: 1;
  height: 1px;
  background: linear-gradient(to right, rgb(var(--v-theme-primary)), transparent);
  opacity: 0.25;
  margin-left: 8px;
}

/* ── Count Card Wrappers ───────────────────────────────── */
.card-wrap {
  border-radius: 12px;
  padding: 2px;
  height: 100%;
  transition: transform 0.22s ease, box-shadow 0.22s ease;
}
.card-wrap:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.08);
}
.card-wrap :deep(.v-card) {
  background: white !important;
  border-radius: 10px !important;
  border: none !important;
}

/* Summary Card Wrappers */
.summary-card-wrap {
  border-radius: 12px;
  overflow: hidden;
  transition: transform 0.22s ease, box-shadow 0.22s ease;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
}
.summary-card-wrap:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
}

/* ── Calm blue-family accent borders ───────────────────── */
/* Primary blue — matches sidebar */
.accent-steel     { border-top: 3px solid rgb(var(--v-theme-primary)); box-shadow: 0 3px 14px rgba(0, 0, 0, 0.05); }
/* Slightly lighter blue */
.accent-navy      { border-top: 3px solid rgb(var(--v-theme-navy)); box-shadow: 0 3px 14px rgba(0, 0, 0, 0.05); }
/* Muted slate-blue */
.accent-slate     { border-top: 3px solid rgb(var(--v-theme-slate)); box-shadow: 0 3px 14px rgba(0, 0, 0, 0.05); }
/* Desaturated teal — calm contrast */
.accent-muted-teal { border-top: 3px solid rgb(var(--v-theme-muted-teal)); box-shadow: 0 3px 14px rgba(0, 0, 0, 0.05); }
/* Cool blue-grey */
.accent-cool-grey { border-top: 3px solid rgb(var(--v-theme-cool-grey)); box-shadow: 0 3px 14px rgba(0, 0, 0, 0.05); }
</style>
