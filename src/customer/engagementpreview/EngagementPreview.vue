<script setup>
import { onMounted, ref } from "vue";
import engagementPreviewModel from "./EngagementPreviewModel";
import engagementNav from "../engagement/EngagementNav.js";
import customerNav from "../customer/CustomerNav";
import funcs from "../../utils/funcs";
import { defineCustomerStore } from "../customer/CustomerStore";
import { defineEngagementStore } from "../engagement/EngagementStore";
const customerStore = defineCustomerStore();
const model = ref(engagementPreviewModel.model);
const rules = engagementPreviewModel.rules;
const valid = ref(false);
const form = ref(null);
const cols = 12;
const sm = 6;
const md = 4;
const title = "Engagements"
const maxWidth = 1300;

onMounted(() => {
  customerStore.getMini();
  model.value.startDate = funcs.formatDate(funcs.addDays(funcs.today(), -30));
  model.value.endDate = funcs.today();
});

const engagementStore = defineEngagementStore();

const loadData = () => engagementStore.getCustomerEngagements(model.value);

const customerIdOk = (data) => {
  if (data) {
    model.value.customerId = data.id;
    model.value.customerName = data.customerName;
    model.value.phoneNo = data.phoneNo;
    model.value.address = data.address;
  }
};
</script>

<template>
  <container >
      <v-row class="ml-4">
        <v-toolbar flat>
          <h2>Customer Engagements</h2>
          <v-spacer></v-spacer>
          Returned row {{ engagementStore.customerEngagements.length }}
        <export-excel
          :data="engagementStore.customerEngagements"
          :columns="engagementNav.menu.midHeaders"
          :file-name="title"
          :file-type="'xlsx'"
          :sheet-name="title"
        >
          <v-icon>mdi-microsoft-excel</v-icon>
        </export-excel>
          <v-btn color="primary" v-if="showCancel" text @click="cancelClicked">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-toolbar>
      </v-row>

      <v-form ref="form" v-model="valid" @submit="(e) => e.preventDefault" class="mx-0">
        <v-container fluid>
          <v-row>
            <v-col :cols="cols" :sm="sm" :md="md">
              <s-select-field
                id="customerId"
                label="Customer Id"
                v-model="model.customerId"
                :rules="rules.customerId"
                :counter="20"
                @ok="customerIdOk"
                :items="customerStore.mini"
                :headers="customerNav.menu.miniHeaders"
              ></s-select-field>
            </v-col>
            <v-col :cols="cols" :sm="sm" :md="md">
              <s-text-field
                id="customerName"
                label="Customer Name"
                v-model="model.customerName"
                :rules="rules.customerName"
                :counter="40"
                disabled
              ></s-text-field>
            </v-col>
            <v-col :cols="cols" :sm="sm" :md="md">
              <s-text-field
                id="phoneNo"
                label="Phone No"
                v-model="model.phoneNo"
                disabled
              ></s-text-field>
            </v-col>
            <v-col :cols="cols" :sm="sm" :md="md">
              <s-date-picker
                id="startDate"
                label="Start Date"
                v-model="model.startDate"
                :rules="rules.startDate"
            /></v-col>
            <v-col :cols="cols" :sm="sm" :md="md">
              <s-date-picker
                id="endDate"
                label="End Date"
                v-model="model.endDate"
                :rules="rules.endDate"
              />
            </v-col>

            <v-col :cols="cols" :sm="sm" :md="md">
              <v-btn text color="primary" @click="loadData">Load</v-btn>
            </v-col>

            <v-col :cols="cols" :sm="cols" :md="cols">
              <s-data-table
                :headers="engagementNav.menu.midHeaders"
                :items="engagementStore.customerEngagements"
                :loading="engagementStore.customerEngagementsLoading"
              >
              </s-data-table>
            </v-col>


          </v-row>
        </v-container>
      </v-form>


    </container>

</template>
<!-- <script>
import engagementPreviewModel from "./EngagementPreviewModel";
import engagementNav from "../engagement/EngagementNav.js";
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
    engegementsRules: [(v) => !!v || "Engagements is required"],
    customerIdDialog: false,
    mtdsProvided: true,
    customerNav: customerNav,
    valid: false,
  }),
  created() {
    this.$store.dispatch("customer/customer/getMini");
  },
  mounted() {
    this.engagementPreview.startDate = funcs.formatDate(
      funcs.addDays(funcs.today(), -30)
    );
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
      return this.$store.state.customer.engagement.customerEngagements;
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
          this.engagementPreview.customerId =
            this.componentData.obj.loanApplication.applicantId;
        }
      });
    },
  },

  methods: {
    save() {
      this.$store.dispatch("post", {
        path: this.path,
        body: this.engagementPreview,
      });
    },
    update() {
      this.$store.dispatch("put", {
        path: `${this.path}/${this.engagementPreview.id}`,
        body: this.engagementPreview,
      });
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
    },
    setDialog(obj) {
      this.engagementPreview = Object.assign({}, obj);
      this.setObjects(obj);
    },
    cancelClicked() {
      this.$store.commit("components/dialog", false);
      this.$store.commit("components/obj", null);
    },

    searchData() {},

    appendIconCallback() {
      this.customerIdDialog = true;
    },

    customerIdOk(data) {
      this.engagementPreview.customerId = data.id;
      this.engagementPreview.customerName = data.customerName;
      this.engagementPreview.phoneNo = data.phoneNo;
    },

    customerIdClose() {
      this.customerIdDialog = false;
    },

    loadData() {
      if (!this.valid) {
        return;
      }
      let ledgerRequest = {
        customerId: this.engagementPreview.customerId,
        startDate: this.engagementPreview.startDate,
        endDate: this.engagementPreview.endDate,
      };

      this.$store.dispatch(
        "customer/engagement/getCustomerEngagements",
        ledgerRequest
      );
    },
  },
};
</script> -->
