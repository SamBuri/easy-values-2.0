<template>
  <v-card :max-width="maxWidth" class="mx-auto mt-2 pa-1">
    <v-container>
      <v-row>
        <v-toolbar flat>
          <h2>Customer Engagements</h2>
          <v-spacer></v-spacer>
          <v-btn color="primary" v-if="showCancel" text @click="cancelClicked">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-toolbar>
      </v-row>
      <v-row>
        <v-form ref="form" v-model="valid" @submit="(e) => e.preventDefault">
          <container>
            <v-row>

              <v-col :cols="cols" :sm="sm" :md="md">
                <v-text-field label="Customer Id" v-model="engagementPreview.customerId" :rules="customerIdRules"
                  :counter="20" append-icon="mdi-view-list" @click:append="appendIconCallback"
                  v-on:keyup.enter="loadData">
                </v-text-field>
              </v-col>

              <v-col :cols="cols" :sm="sm" :md="md">
                <s-date-picker label="Start Date" v-model="engagementPreview.startDate" :rules="startDateRules"
                  v-on:keyup.enter="loadData" />
              </v-col>
              <v-col :cols="cols" :sm="sm" :md="md">
                <v-toolbar flat>
                  <s-date-picker label="End Date" v-model="engagementPreview.endDate" :rules="endDateRules"
                    v-on:keyup.enter="loadData" :disabled="!valid" />
                  <v-btn text color="primary" @click="loadData">Load</v-btn>
                </v-toolbar>
              </v-col>
              <v-col :cols="cols" :sm="sm" :md="md">
                <v-text-field label="Customer Name" v-model="engagementPreview.customerName" disabled
                  :counter="40"></v-text-field>
              </v-col>
              <v-col :cols="cols" :sm="sm" :md="md">
                <v-text-field label="Phone No" v-model="engagementPreview.phoneNo" disabled :counter="100"></v-text-field>
              </v-col>
            </v-row>
          </container>
        </v-form>
      </v-row>

      <v-row>
        <v-col :cols="cols">
          <s-data-table :headers="engagementNav.menu.midHeaders" :items="customerEngagements"
            :loading="$store.state.customer.engagement.customerEngagementsLoading">

          </s-data-table>
        </v-col>
      </v-row>
      <v-dialog v-model="customerIdDialog" persistent :max-with="600">
        <search-mini :mtdsProvided="mtdsProvided" @ok="customerIdOk" @close="customerIdClose" :items="customers"
          :headers="customerNav.menu.miniHeaders" />
      </v-dialog>


    </v-container>
  </v-card>
</template>
<script>
import engagementPreviewModel from "./EngagementPreviewModel";
import engagementNav from '../engagement/EngagementNav.js';
import customerNav from "../customer/CustomerNav";
import funcs from "../../utils/funcs";

export default {
  name: "EngagementPreview",
  data: () => ({
    cols: 12,
    sm: 6,
    md: 4,
    maxWidth: 1200,
    path: engagementPreviewModel.path,
    engagementPreview: engagementPreviewModel.engagementPreview,
    engagementNav: engagementNav,
    customerIdRules: [(v) => !!v || "Customer Id is required",
    (v) => v.length < 20 || "Customer Id length must be less or equal to 20",], customerNameRules: [(v) => !!v || "Customer Name is required",
    (v) => v.length < 40 || "Customer Name length must be less or equal to 40",], phoneNoRules: [(v) => !!v || "Phone No is required",
    (v) => v.length < 100 || "Phone No length must be less or equal to 100",], startDateRules: [(v) => !!v || "Start Date is required",
    ], endDateRules: [(v) => !!v || "End Date is required",
    ], engegementsRules: [(v) => !!v || "Engagements is required",
    ],
    customerIdDialog: false,
    mtdsProvided: true,
    customerNav: customerNav,
    valid: false,
  }),
  created() {
    this.$store.dispatch("customer/customer/getMini");
  },
  mounted() {
    this.engagementPreview.startDate = funcs.formatDate(funcs.addDays(funcs.today(), -30));
    this.engagementPreview.endDate = funcs.today();
  },
  computed: {
    customers() {
      return this.$store.state.customer.customer.mini;
    },

    customerId() {
      return this.engagementPreview.customerId;
    },

    customerEngagements() {
      return this.$store.state.customer.engagement.customerEngagements
    },

    componentData() {
      return this.$store.state.components.data;
    },

    showCancel() {
      return this.$store.state.components.dialog;
    },

  },

  watch: {
    customerId() {
      this.loadData();
    },

    componentData() {

      this.$nextTick(() => {
        if (this.componentData) {

          this.engagementPreview.customerId = this.componentData.obj.loanApplication.applicantId;
        }
      });

    }


  },

  methods: {
    save() {
      this.$store.dispatch("post", { path: this.path, body: this.engagementPreview });
    },
    update() {
      this.$store.dispatch("put", { path: `${this.path}/${this.engagementPreview.id}`, body: this.engagementPreview });
    },
    updateDialog() {
      var obj = this.$store.state.search.selectedData[0].value;
      this.setDialog(obj);
    },
    async search() {
      var obj = this.$store.state.obj;
      this.engagementPreview = Object.assign({}, obj);
      this.setObjects(obj);
    },
    reset() {
      this.engagementPreview.clear();
    },
    setObjects(obj) {
      console.log(obj);
    }, setDialog(obj) {
      this.engagementPreview = Object.assign({}, obj);
      this.setObjects(obj);
    },
    cancelClicked() {
      this.$store.commit("components/dialog", false);
      this.$store.commit("components/obj", null);
    },


    searchData() {

    },

    appendIconCallback() {
      this.customerIdDialog = true
    },


    customerIdOk(data) {
      this.engagementPreview.customerId = data.id
      this.engagementPreview.customerName = data.customerName
      this.engagementPreview.phoneNo = data.phoneNo

    },

    customerIdClose() {
      this.customerIdDialog = false;
    },

    loadData() {
      if (!this.valid) { return }
      let ledgerRequest = {
        customerId: this.engagementPreview.customerId,
        startDate: this.engagementPreview.startDate,
        endDate: this.engagementPreview.endDate
      }

      this.$store.dispatch("customer/engagement/getCustomerEngagements", ledgerRequest);
    }
  }
};
</script>
