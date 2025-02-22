<script setup>
import companyController from "./CompanyController";
import funcs from '../../utils/funcs'
import rootOptions from '@/root/RootOptions';
const cols = 12;
const sm = 4;
 const md = 4;
rootOptions.maxWidth=1000;
const controller= companyController();

const model =  controller.model;
const rules= controller.rules;
</script><template>
  <crud-form
    :controller="controller"
>
    <template #heading>Company</template>

    <template #form-data>
<v-col :cols="cols" :sm="sm" :md="md">
<s-file-input
 id="logo" label="Logo"
          v-model="model.logo"
></s-file-input>
</v-col>
<v-col :cols="cols" :sm="sm" :md="md">
<s-text-field
 id="companyName" label="Company Name"
          v-model="model.companyName"
 :rules="rules.companyName"
:counter="100"
></s-text-field>
</v-col>
<v-col :cols="cols" :sm="sm" :md="md">
<s-autocomplete id="businessType" label="Business Type"
          v-model="model.businessType"
 :rules="rules.businessType"
:items="controller.organisationStore.businessTypes"
:loading="controller.organisationStore.businessTypesLoading"
          ></s-autocomplete>
</v-col>
<v-col :cols="cols" :sm="sm" :md="md">
<s-text-field
 id="address" label="Address"
          v-model="model.address"
 :rules="rules.address"
:counter="100"
></s-text-field>
</v-col>
<v-col :cols="cols" :sm="sm" :md="md">
<s-text-field
 id="phoneNo" label="Phone No"
          v-model="model.phoneNo"
 :rules="rules.phoneNo"
:counter="100"
></s-text-field>
</v-col>
<v-col :cols="cols" :sm="sm" :md="md">
<s-text-field
 id="email" label="Email"
          v-model="model.email"
 :rules="rules.email"
:counter="100"
></s-text-field>
</v-col>
<v-col :cols="cols" :sm="sm" :md="md">
<s-text-field
 id="website" label="Website"
          v-model="model.website"
 :rules="rules.website"
:counter="50"
></s-text-field>
</v-col>
<v-col :cols="cols" :sm="sm" :md="md">
<s-text-field
 id="tagLine" label="Tag Line"
          v-model="model.tagLine"
 :rules="rules.tagLine"
:counter="40"
></s-text-field>
</v-col>
<v-col :cols="cols" :sm="sm" :md="md">
<s-text-field
 id="devName" label="Dev Name"
          v-model="model.devName"
 :rules="rules.devName"
:counter="100"
></s-text-field>
</v-col>
<v-col :cols="cols" :sm="sm" :md="md">
<s-autocomplete id="dbType" label="Db Type"
          v-model="model.dbType"
 :rules="rules.dbType"
:items="controller.organisationStore.dbTypes"
:loading="controller.organisationStore.dbTypesLoading"
          ></s-autocomplete>
</v-col>
<v-col :cols="cols" :sm="sm" :md="md">
<s-text-field
 id="dbUsername" label="Db Username"
          v-model="model.dbUsername"
 :rules="rules.dbUsername"
:counter="100"
></s-text-field>
</v-col>
<v-col :cols="cols" :sm="sm" :md="md">
<s-text-field
 id="dbPassword" label="Db Password"
          v-model="model.dbPassword"
 :rules="rules.dbPassword"
:counter="100"
></s-text-field>
</v-col>
<v-col :cols="cols" :sm="sm" :md="md">
<s-number-input
 id="dbPort" label="Db Port"
          v-model="model.dbPort"
 :rules="rules.dbPort"
:counter="100"
></s-number-input>
</v-col>
<v-col :cols="cols" :sm="sm" :md="md">
<s-text-field
 id="dbHost" label="Db Host"
          v-model="model.dbHost"
 :rules="rules.dbHost"
:counter="100"
></s-text-field>
</v-col>
<v-col :cols="cols" :sm="sm" :md="md">
<s-text-field
 id="dbDriverClassName" label="Db Driver Class Name"
          v-model="model.dbDriverClassName"
 :rules="rules.dbDriverClassName"
:counter="100"
></s-text-field>
</v-col>
<v-col :cols="cols" :sm="sm" :md="md">
<v-checkbox id="dbInitialize" label="Db Initialize"
          v-model="model.dbInitialize"
></v-checkbox>
</v-col>
    </template>
  </crud-form>
</template>

