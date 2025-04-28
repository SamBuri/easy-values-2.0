<script setup>
import engagementController from "./EngagementController";
const cols = 12;
const sm = 6;
const md = 6;

const controller = engagementController();
const isUpdate = controller.isUpdate;

const model = controller.model;
const rules = controller.rules;
</script><template>
  <crud-form :controller="controller">
    <template #heading>Engagement</template>

    <template #form-data>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-select-field id="customerId" label="Customer" v-model="model.customerId" :rules="rules.customerId"
          :counter="100" @ok="controller.customerIdOk" :items="controller.customerStore.mini"
          :headers="controller.customerNav.menu.miniHeaders"></s-select-field>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-text-field id="customerName" label="Customer" v-model="model.customerName" disabled></s-text-field>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-date-picker id="engagementDate" label="Engagement Date" v-model="model.engagementDate"
          :rules="rules.engagementDate" /></v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-autocomplete id="engagementReason" label="Engagement Reason" v-model="model.engagementReason"
          :rules="rules.engagementReason" :items="controller.salesStore.engagementReasons"
          :loading="controller.salesStore.engagementReasonsLoading"></s-autocomplete>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-autocomplete id="engagementMode" label="Engagement Mode" v-model="model.engagementMode"
          :rules="rules.engagementMode" :items="controller.salesStore.engagementModes"
          :loading="controller.salesStore.engagementModesLoading"></s-autocomplete>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-text-field id="title" label="Title" v-model="model.title" :rules="rules.title" :counter="100"></s-text-field>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-textarea id="description" label="Description" v-model="model.description" :rules="rules.description"
          :counter="200" rows="1" auto-grow></s-textarea>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-text-field id="attendingPersonnel" label="Attending Personnel" v-model="model.attendingPersonnel"
          :rules="rules.attendingPersonnel" :counter="100"></s-text-field>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md" v-if="isUpdate">
        <s-autocomplete id="status" label="Status" v-model="model.status" :rules="rules.status"
          :items="controller.lookupStore.openStatuses"
          :loading="controller.lookupStore.openStatusesLoading"></s-autocomplete>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-date-picker id="nextEngagementDate" label="Next Engagement Date" v-model="model.nextEngagementDate"
          :rules="rules.nextEngagementDate" allowFuture /></v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-autocomplete id="expectedNextEngagementMode" label="Expected Next Engagement Mode"
          v-model="model.expectedNextEngagementMode" :rules="rules.expectedNextEngagementMode"
          :items="controller.salesStore.engagementModes"
          :loading="controller.salesStore.engagementModesLoading"></s-autocomplete>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-select-field id="parentEngagementId" label="Parent Engagement" v-model="model.parentEngagementId"
          :rules="rules.parentEngagementId" :counter="100" @ok="controller.parentEngagementIdOk"
          :items="controller.engagementStore.mini"
          :headers="controller.engagementNav.menu.miniHeaders"></s-select-field>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-text-field id="parentEngagementTitle" label="Parent Engagement" v-model="model.parentEngagementTitle" disabled>
        </s-text-field>
      </v-col>
    </template>
  </crud-form>
</template>
