<script setup>
import branchController from "./BranchController";
const cols = 12;
const sm = 6;
 const md = 6;
const controller= branchController();

const model =  controller.model;
const rules= controller.rules;
</script><template>
  <crud-form
    :controller="controller"
>
    <template #heading>Branch</template>

    <template #form-data>
<v-col :cols="cols" :sm="sm" :md="md">
<s-autocomplete id="companyId" label="Company"
          v-model="model.companyId"
 :rules="rules.companyId"
:items="controller.companyStore.mini"
:loading="controller.companyStore.miniLoading"
item-title="companyName"
          item-value="id"
          ></s-autocomplete>
</v-col>
<v-col :cols="cols" :sm="sm" :md="md">
<s-text-field
 id="branchName" label="Branch Name"
          v-model="model.branchName"
 :rules="rules.branchName"
:counter="50"
></s-text-field>
</v-col>
<v-col :cols="cols" :sm="sm" :md="md">
<s-textarea
 id="address" label="Address"
          v-model="model.address"
 :rules="rules.address"
:counter="200"
rows="1"
           auto-grow></s-textarea>
</v-col>
<v-col :cols="cols" :sm="sm" :md="md">
<s-text-field
 id="phoneNo" label="Phone No"
          v-model="model.phoneNo"
 :rules="rules.phoneNo"
:counter="30"
></s-text-field>
</v-col>
<v-col :cols="cols" :sm="sm" :md="md">
<s-text-field
 id="email" label="Email"
          v-model="model.email"
 :rules="rules.email"
:counter="50"
></s-text-field>
</v-col>
    </template>
  </crud-form>
</template>

