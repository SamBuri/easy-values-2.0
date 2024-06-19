<template>
  <crud-form @save="save" @update="update" @search="search" @updateDialog="updateDialog" @reset="reset" @done="done"
    @updateCrudTableDialog="updateCrudTableDialog" @resetCrudTableDialog="resetCrudTableDialog"
    @componentDataChanged="componentDataChanged" :path="path" :maxWidth="maxWidth">
    <template slot="heading">Engagement</template>

    <template slot="form-data">
      <!-- <v-col :cols="cols" :sm="sm" :md="md">
        <v-select label="Customer" v-model="engagement.customer" :rules="customerRules" :counter="100"
          :items="$store.state.customer.customer.mini" :loading="$store.state.customer.customer.miniLoading"
          item-text="customerName" item-value="id" return-object></v-select>
      </v-col> -->

      <v-col :cols="cols" :sm="sm" :md="md">
        <v-text-field label="Customer Id" v-model="engagement.customerId" :rules="customerIdRules" :counter="20"
          append-icon="mdi-view-list" @click:append="appendIconCallback"></v-text-field>
      </v-col>

      <v-col :cols="cols" :sm="sm" :md="md">
        <v-text-field label="Customer Name" v-model="engagement.customerName" disabled :rules="customerNameRules">
        </v-text-field>
      </v-col>

      <v-col :cols="cols" :sm="sm" :md="md">
        <s-date-picker label="Engagement Date" v-model="engagement.engagementDate" :rules="engagementDateRules" />
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-select label="Engagement Reason" v-model="engagement.engagementReason" :rules="engagementReasonRules"
          :counter="100" :items="$store.state.customer.engagementReasons"
          :loading="$store.state.customer.engagementReasonsLoading" return-object></v-select>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-select label="Engagement Mode" v-model="engagement.engagementMode" :rules="engagementModeRules" :counter="100"
          :items="$store.state.customer.engagementModes" :loading="$store.state.customer.engagementModesLoading"
          return-object></v-select>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-text-field label="Title" v-model="engagement.title" :rules="titleRules" :counter="100"></v-text-field>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-textarea label="Description" v-model="engagement.description" :counter="200" rows="1" auto-grow></v-textarea>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-text-field label="Attending Personnel" v-model="engagement.attendingPersonnel" :rules="attendingPersonnelRules"
          :counter="100"></v-text-field>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-select label="Status" v-model="engagement.status" :rules="statusRules" :counter="100"
          :items="$store.state.lookup.openStatuses" :loading="$store.state.lookup.openStatusesLoading"></v-select>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-date-picker label="Next Engagement Date" v-model="engagement.nextEngagementDate"
          :rules="nextEngagementDateRules" :max="maxDate" />
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-select label="Expected Next Engagement Mode" v-model="engagement.expectedNextEngagementMode"
          :rules="expectedNextEngagementModeRules" :counter="100" :items="$store.state.customer.engagementModes"
          :loading="$store.state.customer.engagementModesLoading" return-object></v-select>
      </v-col>

    </template>
  </crud-form>
</template>
<script>
import engagementModel from "./EngagementModel";
import customerNav from "../customer/CustomerNav";

export default {
  components: {},
  name: "Engagement",
  data: () => ({
    cols: 12,
    sm: 6,
    md: 3,
    maxWidth: 1000,
    path: engagementModel.path,
    engagement: engagementModel.engagement,

    customerIdRules: [(v) => !!v || "Customer is required",
    ],
    customerNameRules: [(v) => !!v || "Customer is required",
    ], engagementDateRules: [(v) => !!v || "Engagement Date is required",
    ], engagementReasonRules: [(v) => !!v || "Engagement Reason is required",
    ], engagementModeRules: [(v) => !!v || "Engagement Mode is required",
    ], titleRules: [(v) => !!v || "Title is required",
    (v) => v.length < 100 || "Title length must be less or equal to 100",], descriptionRules: [(v) => !!v || "Description is required",
    (v) => v.length < 200 || "Description length must be less or equal to 200",], attendingPersonnelRules: [(v) => !!v || "Attending Personnel is required",
    (v) => v.length < 100 || "Attending Personnel length must be less or equal to 100",], statusRules: [(v) => !!v || "Status is required",

    ],
    openStatus: 'Open'
  }),
  created() {
    this.$store.dispatch("customer/getEngagementReasons");
    this.$store.dispatch("customer/getEngagementModes");
    this.$store.dispatch("lookup/getOpenStatuses");
    this.$store.dispatch("customer/getEngagementModes");

  },
  mounted() {
    this.setDefaultData();
  },
  computed: {
    selectedData() {
      return this.$store.state.search.selectedMiniItem;
    },

    customerId() {
      return this.engagement.customerId;
    },

    maxDate() {
      let date = new Date();
      date.setDate(date.getDate() + 365);
      return date.toISOString().substr(0, 10);
    },
    currentUser() {
      let tokenParsed = this.$store.state.security.user.keycloak.tokenParsed;
      return `${tokenParsed.given_name} ${tokenParsed.family_name}`;
    },


    nextEngagementDateRules() {
      if (this.engagement.status == this.openStatus) {
        return [(v) => !!v || "Next engegement date is required"];
      }
      return [];
    },

    expectedNextEngagementModeRules() {
      if (this.engagement.status == this.openStatus) {
        return [(v) => !!v || "Exppected next engagement mode is required"];
      }
      return [];
    }


  },

  watch: {
    selectedData() {
      let selectedData = this.selectedData;
      if (selectedData) {
        this.engagement.customerId = selectedData.id;

      }
    },
    customerId() {
      this.setCustomer();
    }
  },

  methods: {
    save() {
      this.$store.dispatch("post", { path: this.path, body: this.engagement });
    },
    update() {
      this.$store.dispatch("put", { path: `${this.path}/${this.engagement.id}`, body: this.engagement });
    },
    updateDialog() {
      var obj = this.$store.state.search.selectedData[0].value;
      this.setDialog(obj);
    },
    async search() {
      var obj = this.$store.state.obj;
      this.engagement = Object.assign({}, obj);
      this.setObjects(obj);
    },
    reset() {
      this.engagement.clear();
      this.setDefaultData();
    },
    setObjects(obj) {
     this.engagement.customerId = obj.customer.id;
    }, 
    
    setDialog(obj) {
      this.engagement = Object.assign({}, obj);
      this.setObjects(obj);
    },
    done() {
      this.$store.commit(
        "crudtable/data",
        Object.assign({}, this.engagement)
      );
    },
    updateCrudTableDialog() {
      this.setDialog(this.$store.state.crudtable.data);
    },
    resetCrudTableDialog() {
      this.reset();
    },

    appendIconCallback() {
      let miniSelected = { path: customerNav.menu.path, name: customerNav.menu.name, headers: customerNav.menu.miniHeaders };
      this.$store.commit("search/miniSelected", miniSelected);
      this.$store.dispatch("search/getMiniData");
      this.$store.commit("search/miniDialog", true);

    },

    async setCustomer() {
      if (this.customerId) {
        await this.$store.dispatch("customer/customer/get", this.customerId);
        let customer = this.$store.state.customer.customer.obj;
        this.engagement.customerName = customer.customerName;
        this.engagement.customer = { id: customer.id, customerName: customer.customerName }
      }

    },

    componentDataChanged(data) {

      this.$nextTick(() => {
        this.engagement.customerId = data.obj.loanApplication.applicantId;
      });
    },

    setDefaultData() {
      this.engagement.attendingPersonnel = this.currentUser
      this.engagement.status = this.openStatus
    },



  }
};
</script>
