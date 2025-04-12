<script setup>
import { ref, computed, watch, onMounted } from 'vue';
import { defineLoanStore } from '../loan/LoanStore';
import loanNav from '../loan/LoanNav';
import funcs from '../../utils/funcs';
import Receipt from '../../sales/receipt/Receipt.vue';
import Ledger from '@/sales/ledger/Ledger.vue';
import LoanBill from '../loanbill/LoanBill.vue';
import Engagement from '@/sales/engagement/Engagement.vue';
import LoanTransition from '../loantransition/LoanTransition.vue';
import EngagementPreview from '@/sales/engagementpreview/EngagementPreview.vue';
import receiptController from '@/sales/receipt/ReceiptController';
import loanBillController from '../loanbill/LoanBillController';
import loanTransitionController from '../loantransition/LoanTransitionController';
import engagementController from '@/sales/engagement/EngagementController';
import ledgerNav from '@/sales/ledger/LedgerNav';
import engagementPreviewModel from '@/sales/engagementpreview/EngagementPreviewModel';


const loanStore = defineLoanStore();

// Refs
const search = ref('');
const selected = ref([]);
const formWidth = ref(1500);
const component = ref(null);
const tab = ref(0);
const miniDialog = computed(() => store.state.search.miniDialog);


// Computed Properties
const toFormatHeaders = computed(() => {
    if (headers)
      return headers.value.filter(
        (h) =>
          h.isNumeric === true || h.isDate === true || h.isDateTime === true
      );
    return [];
  });
const headers = computed(() => loanNav.menu.headers);

const items = computed(() => {
    switch (tab.value) {
        case 0: return loanStore.toFollowUpLoans;
        case 1: return loanStore.activeLoans;
        case 2: return loanStore.dormantLoans;
        case 3: return loanStore.recoveryLoans;
        case 4: return loanStore.defaultedLoans;
        case 5: return loanStore.completedLoans;
        default: return [];
    }
});

const itemsLoading = computed(() => {
    switch (tab.value) {
        case 0: return loanStore.toFollowUpLoansLoading;
        case 1: return loanStore.activeLoansLoading;
        case 2: return loanStore.dormantLoansLoading;
        case 3: return loanStore.recoveryLoansLoading;
        case 4: return loanStore.defaultedLoansLoading;
        case 5: return loanStore.completedLoansLoading;
        default: return false;
    }
});

const toFollowUpLoans = computed(() => loanStore.toFollowUpLoans);
const loading = computed(() => loanStore.toFollowUpLoansLoading);

const dueToday = computed(() => {
    if (!toFollowUpLoans.value) return [];
    const currentDate = new Date();
    return toFollowUpLoans.value.filter(l => funcs.hasTheSameDate(l.loanDate, currentDate) && new Date(l.loanDate).getMonth() !== currentDate.getMonth());
});

const dueTodayCount = computed(() => dueToday.value.length);
const totalCount = computed(() => items.value.length);
const showSelect = computed(() => tab.value !== 5);

// Watchers
watch(tab, (newTab) => {
    tabChanged(newTab);
});

// Lifecycle Hooks
onMounted(() => {
    loanStore.getToFollowUpLoans();
});

const toViewItems = ref([])

// Methods
const viewClicked = () => {
   searchMiniDiolog.value = true;
};

const dialog = ref(false);



const closeEditDialog = () => {
    dialog.value = false;
};

const showDialog = (componentName) => {

    if (selected.value.length > 0) {
        dialog.value = true;
        component.value = componentName;
        return selected.value[0];

    }
};

const searchMiniDiolog = ref(false);
const closeSearchMini = ()=>searchMiniDiolog.value = false;

const rController = receiptController();

const setReceiptData = () => {

    let selected = showDialog(Receipt);
    rController.setCustomerId(selected.loanApplication.applicantId);

}

const setLedgerData = () => {

    let selected = showDialog(Ledger);
    ledgerNav.model.accountId = selected.loanApplication.applicantId;

}

const lController = loanBillController();
const setLoanBillData = () => {

    let selected = showDialog(LoanBill);
    lController.setLoanId(selected.id);

}

const tController = loanTransitionController();
const setLoanTransitionData = () => {

    let selected = showDialog(LoanTransition);
    tController.setLoanId(selected.id);

}

const eController = engagementController();

const setEngagementData = () => {

    let selected = showDialog(Engagement);
    eController.setCustomerId(selected.loanApplication.applicantId);

}

const setEngagementPreviewData = () => {

    let selected = showDialog(EngagementPreview);
    engagementPreviewModel.model.customerId = selected.loanApplication.applicantId;

}


const formatTableData = (header, item, value) => {
    return funcs.formatTableData(header, item, value);
};

const tabChanged = (tab) => {
    switch (tab) {
        case 0: loanStore.getToFollowUpLoans(); break;
        case 1: loanStore.getActiveLoans(); break;
        case 2: loanStore.getDormantLoans(); break;
        case 3: loanStore.getRecoveryLoans(); break;
        case 4: loanStore.getDefaultedLoans(); break;
        case 5: loanStore.getCompletedLoans(); break;
    }
};
</script>

<template>
    <v-container fluid class="mt-0">
        <v-row>
            <v-toolbar flat> Loan Dashboard
                <v-spacer> </v-spacer>

                <v-text-field v-model="search" append-icon="mdi-magnify" label="Search" single-line hide-details>
                </v-text-field>
                <div v-if="selected.length" class="mx-1">
                    <v-btn text color="primary" @click="setReceiptData">Receipt</v-btn>
                    <v-btn text color="primary" @click="setEngagementData">Engagement</v-btn>
                    <v-btn text color="primary" @click="setLoanBillData">Add Bill</v-btn>
                    <v-btn text color="primary" @click="setLedgerData">Ledger</v-btn>
                    <v-btn text>
                        <v-tooltip location="bottom">
                            <template v-slot:activator="{ props }">
                                <v-icon color="primary" v-bind="props" @click="setEngagementData">
                                    mdi-phone-plus
                                </v-icon>
                            </template>
                            <span>Create Engagement</span>
                        </v-tooltip>
                    </v-btn>
                    <v-divider vertical color="red" height="3"></v-divider>
                    <v-btn text>
                        <v-tooltip bottom>
                            <template v-slot:activator="{ on, attrs }">
                                <v-icon color="primary" dark v-bind="attrs" v-on="on" @click="setEngagementPreviewData">
                                    mdi-phone-log-outline
                                </v-icon>
                            </template>
                            <span>Customer Engagements</span>
                        </v-tooltip>
                    </v-btn>
                </div>

                Pending Billing <v-chip class="primary" @click="viewClicked"> {{ dueTodayCount }} </v-chip>
                Due to Day &nbsp; &nbsp; <v-chip class="primary" @click="viewClicked"> {{ dueTodayCount }} </v-chip>
            </v-toolbar>
        </v-row>

        <v-row>
            <v-toolbar>
                <v-tabs v-model="tab">
                    <v-tab> Un Completed </v-tab>
                    <v-tab> Active</v-tab>
                    <v-tab> Dormant</v-tab>
                    <v-tab> Recovery</v-tab>
                    <v-tab> Defaulted</v-tab>
                    <v-tab> Completed</v-tab>

                </v-tabs>
                <v-spacer></v-spacer>
                <v-btn text color="primary" @click="setLoanTransitionData(LoanTransition)"
                    v-if="selected.length">Transition</v-btn>
                Total Items <v-chip class="primary"> {{ totalCount }} </v-chip>
            </v-toolbar>
            <v-data-table :headers="headers" :items="items" :loading="itemsLoading" :search="search"
                :show-select="showSelect" select-strategy="single" v-model="selected" fixed-header height="480px" dense
                return-object>

                <template v-for="(header, i) in toFormatHeaders" v-slot:[`item.${header.key}`]="{ item }">
                    <span :key="i"> {{ formatTableData(header, item, header.key) }} </span>
                </template>

            </v-data-table>
        </v-row>
        <v-dialog v-model="searchMiniDiolog" :max-width="formWidth" :provided="true" 
        persistent >
            <search-mini @ok="closeSearchMini" @close="closeSearchMini" :headers="headers" :items="dueToday" />
        </v-dialog>



        <v-dialog v-model="dialog" :max-width="formWidth" persistent>
            <component v-if="dialog" v-bind:is="component" :dialog="true" buttonLabel="Save" @cancel="closeEditDialog"
                :retain="true" />
        </v-dialog>



    </v-container>


</template>
