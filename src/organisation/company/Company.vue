<script setup>
import companyController from "./CompanyController";
import rootOptions from '@/root/RootOptions';
const cols = 12;
const sm = 6;
const md = 6;
rootOptions.maxWidth = 1000;
const controller = companyController();

const model = controller.model;
const rules = controller.rules;
const isUpdate = controller.isUpdate;
</script><template>
  <crud-form :controller="controller">
    <template #heading>Company</template>

    <template #form-data>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-file-input id="logo" label="Logo" v-model="model.logo"></s-file-input>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-text-field id="companyName" label="Company Name" v-model="model.companyName" :rules="rules.companyName"
          :counter="100"></s-text-field>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-autocomplete id="businessType" label="Business Type" v-model="model.businessType" :rules="rules.businessType"
          :items="controller.organisationStore.businessTypes"
          :loading="controller.organisationStore.businessTypesLoading"></s-autocomplete>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-text-field id="address" label="Address" v-model="model.address" :rules="rules.address"
          :counter="100"></s-text-field>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-text-field id="phoneNo" label="Phone No" v-model="model.phoneNo" :rules="rules.phoneNo"
          :counter="100"></s-text-field>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-autocomplete id="devConfigId" label="Dev Config" v-model="model.devConfigId" :rules="rules.devConfigId"
          :items="controller.devConfigStore.mini" item-title="devName" item-value="id"
          :loading="controller.devConfigStore.miniLoading"></s-autocomplete>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-text-field id="email" label="Email" v-model="model.email" :rules="rules.email" :counter="100"></s-text-field>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-text-field id="website" label="Website" v-model="model.website" :rules="rules.website"
          :counter="50"></s-text-field>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-text-field id="tagLine" label="Tag Line" v-model="model.tagLine" :rules="rules.tagLine"
          :counter="40"></s-text-field>
      </v-col>



      <v-col :cols="cols" :sm="sm" :md="md" v-if="isUpdate">
        <v-checkbox id="disabled" label="Disabled" v-model="model.disabled"></v-checkbox>
      </v-col>
      <v-col cols="12">
        <crud-table title="Branches" :headers="controller.branchNav.menu.editHeaders" :items="model.branches"
          :component="controller.branchNav.menu.component" maxWidth="700px" />
      </v-col>
    </template>
  </crud-form>
</template>
