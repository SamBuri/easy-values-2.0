<template>
    <v-container fluid class="mt-0">
        <v-row>
            <v-toolbar flat> Loan Dashboard
                <v-spacer> </v-spacer>

                <v-text-field v-model="search" append-icon="mdi-magnify" label="Search" single-line hide-details>
                </v-text-field>
                <div v-if="selected.length" class="mx-1">
                    <v-btn text color="primary" @click="showDialog('ReceiptVue')">Receipt</v-btn>
                    <!-- <v-btn text color="primary" @click="showDialog('EngagementVue')">Engagement</v-btn> -->
                    <v-btn text color="primary" @click="showDialog('LoanBillVue')">Add Bill</v-btn>
                    <v-btn text color="primary" @click="showDialog('CustomerLedgerPreviewVue')">Ledger</v-btn>
                    <v-btn text>
                        <v-tooltip bottom>
                            <template v-slot:activator="{ on, attrs }">
                                <v-icon color="primary" dark v-bind="attrs" v-on="on" @click="showDialog('EngagementVue')">
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
                                <v-icon color="primary" dark v-bind="attrs" v-on="on"
                                    @click="showDialog('EngagementPreview')">
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
                <v-btn text color="primary" @click="showDialog('LoanTransition')" v-if="selected.length">Transition</v-btn>
                Total Items <v-chip class="primary"> {{ totalCount }} </v-chip>
            </v-toolbar>
            <v-data-table :headers="headers" :items="items" :loading="itemsLoading" :search="search"
                :show-select="showSelect" single-select v-model="selected" fixed-header height="480px" dense>

                <template v-for="(header, i) in toFormatHeaders" v-slot:[`item.${header.value}`]="{ item }">
                    <span :key="i"> {{ formatData(header, item[header.value]) }} </span>
                </template>

            </v-data-table>
        </v-row>
        <v-dialog v-model="$store.state.search.miniDialog" :max-width="formWidth" :provided="true" persistent>
            <search-mini :loading="loading" />
        </v-dialog>

        <v-dialog v-model="$store.state.components.dialog" :max-width="formWidth" persistent>
            <component v-bind:is="component" />
        </v-dialog>

        <!-- <v-dialog v-model="($store.state.components.dialog)" :max-width="formWidth" persistent> -->

        <!-- <component v-bind:is="component" v-bind="properties" /> -->

        <!--  </v-dialog>  -->


    </v-container>





    <!-- </v-card-text> -->

    <!-- <v-card-actions>

        </v-card-actions>
        <snack-bar @reset="reset" />
    </v-card> -->
</template>

<script>

// import SnackBar from "../../components/SnackBar.vue";
import loanNav from "./LoanNav";
import funcs from "../../utils/funcs";
import ReceiptVue from "../../sales/receipt/Receipt.vue";
import CustomerLedgerPreviewVue from "../../customer/customerledgerpreview/CustomerLedgerPreview.vue";
import LoanBillVue from "../loanbill/LoanBill.vue";
import EngagementVue from "../../customer/engagement/Engagement.vue";
import LoanTransition from '../loantransition/LoanTransition.vue'
import EngagementPreview from "../../customer/engagementpreview/EngagementPreview.vue";
export default {
    name: "LoanDashboard",
    props: ["path", "maxWidth", "warn", "warningMsg"],
    components: {
        // SnackBar,
        ReceiptVue, CustomerLedgerPreviewVue, LoanBillVue, EngagementVue, LoanTransition, EngagementPreview
    },
    data: () => ({

        customerTypeId: '',
        cols: "12",
        md: "3",
        sm: "3",
        search: "",
        selected: [],
        formWidth: 1000,
        component: null,
        tab: 0
    }),

    computed: {

        toFormatHeaders() {
            return this.headers.filter(h => h.isNumeric === true || h.isDate === true || h.isDateTime === true);
        },

        headers() {
            return loanNav.menu.headers;
        },

        items() {
            if (!this.tab) return this.$store.state.loan.loan.toFollowUpLoans;
            switch (this.tab) {
                case 0:
                    return this.$store.state.loan.loan.toFollowUpLoans;
                case 1:
                    return this.$store.state.loan.loan.activeLoans;
                case 2:
                    return this.$store.state.loan.loan.dormantLoans;
                case 3:
                    return this.$store.state.loan.loan.recoveryLoans;
                case 4:
                    return this.$store.state.loan.loan.defaultedLoans;
                case 5:
                    return this.$store.state.loan.loan.completedLoans;
            }
            return [];


        },

        itemsLoading() {
            if (!this.tab) return this.$store.state.loan.loan.toFollowUpLoansLoading;
            switch (this.tab) {
                case 0:
                    return this.$store.state.loan.loan.toFollowUpLoansLoading;
                case 1:
                    return this.$store.state.loan.loan.activeLoansLoading;
                case 2:
                    return this.$store.state.loan.loan.dormantLoansLoading;
                case 3:
                    return this.$store.state.loan.loan.recoveryLoansLoading;
                case 4:
                    return this.$store.state.loan.loan.defaultedLoansLoading;
                case 5:
                    return this.$store.state.loan.loan.completedLoansLoading;

            }
            return false;
        },

        toFollowUpLoans() {
            return this.$store.state.loan.loan.toFollowUpLoans;
        },

        loading() {
            return this.$store.state.loan.loan.toFollowUpLoansLoading;
        },

        dueToday() {
            if (!this.toFollowUpLoans) return [];
            let currentDate = new Date();
            return this.toFollowUpLoans.filter(l => funcs.hasTheSameDate(l.loanDate, currentDate) && new Date(l.loanDate).getMonth() !== currentDate.getMonth());
        },

        dueTodayCount() {
            return this.dueToday.length;
        },

        totalCount() {
            return this.items.length;
        },

        dependingBilling() {
            if (!this.toFollowUpLoans) return [];
            let currentDate = new Date();
            return this.toFollowUpLoans.filter(l => funcs.hasTheSameDate(l.loanDate, currentDate) && new Date(l.loanDate)
                .getMonth() !== currentDate.getMonth());
        },

        showSelect() {
            return this.tab !== 5;
        },



    },

    watch: {
        tab() {
            this.tabChanged(this.tab);
        },
    },

    created() {
        this.$store.dispatch("loan/loan/getToFollowUpLoans");
    },

    methods: {
        reset() { },


        viewClicked() {
            this.$store.commit("search/miniSelected", { path: "", headers: this.headers, name: "", });
            this.$store.commit("search/miniData", this.dueToday);
            this.$store.commit("search/miniDialog", true);
        },

        showDialog(component) {

            this.$store.commit("components/data", null);
            if (this.selected.length > 0) {

                this.component = component;
                let selectedObj = this.selected[0];

                let source = "LoanDashboard".concat(component);
                let data = { obj: selectedObj, source: source };

                setTimeout(() => {
                    this.$store.commit("components/data", data);
                }, 1000)

                this.$store.commit("components/dialog", true);


            }

        },

        formatData(header, value) {
            return funcs.formatData(header, value)
        },

        tabChanged(tab) {
            switch (tab) {
                case 0:
                    this.$store.dispatch("loan/loan/getToFollowUpLoans");
                    break;
                case 1:
                    this.$store.dispatch("loan/loan/getActiveLoans");
                    break;
                case 2:
                    this.$store.dispatch("loan/loan/getDormantLoans");
                    break;
                case 3:
                    this.$store.dispatch("loan/loan/getRecoveryLoans");
                    break;
                case 4:
                    this.$store.dispatch("loan/loan/getDefaultedLoans");
                    break;
                case 5:
                    this.$store.dispatch("loan/loan/getCompletedLoans");
                    break;

            }
        },

    }
};
</script>

