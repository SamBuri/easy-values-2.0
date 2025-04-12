<script setup>
import { onMounted, ref, watch } from "vue";
import engagementPreviewModel from "./EngagementPreviewModel";
import engagementNav from "../engagement/EngagementNav.js";
import customerNav from "../customer/CustomerNav";
import funcs from "../../utils/funcs";
import { defineCustomerStore } from "../customer/CustomerStore";
import { defineEngagementStore } from "../engagement/EngagementStore";
const props = defineProps(["dialog"]);
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
  model.value.startDate = funcs.formatDate(funcs.addDays(funcs.today(), -365));
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

watch(() => model.value.customerId, (newValue)=> {
  model.value.customerId = '';
    model.value.customerName = '';
    model.value.phoneNo = '';
    model.value.address = '';
    customerStore.customerEngagements = []
  if (!newValue)  return;
    let customer=customerStore.getCustomerMiniById(newValue);
    if(customer){
     customerIdOk(customer);
     loadData();
    }
  

},
{ immediate: true }); 
</script>

<template>
  <v-card flat :max-width="maxWidth" class="mx-auto mt-0 pa-1">
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
        <v-btn color="primary" v-if="props.dialog" text @click="$emit('cancel')">
        <v-icon>mdi-close</v-icon>
      </v-btn>
        </v-toolbar>
      

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


  </v-card>

</template>
