<script setup>
import financialPeriodController from "./FinancialPeriodController";
const cols = 12;
const sm = 6;
 const md = 6;
const controller= financialPeriodController();

const model =  controller.model;
const rules= controller.rules;
</script><template>
  <crud-form
    :controller="controller"
>
    <template #heading>Financial Period</template>

    <template #form-data>
<v-col :cols="cols" :sm="sm" :md="md">
<s-text-field
 id="name" label="Name"
          v-model="model.name"
 :rules="rules.name"
:counter="100"
></s-text-field>
</v-col>
<v-col :cols="cols" :sm="sm" :md="md">
 <s-date-picker id="startDate" label="Start Date"
          v-model="model.startDate"
 :rules="startDateRules"
/></v-col>
<v-col :cols="cols" :sm="sm" :md="md">
 <s-date-picker id="endDate" label="End Date"
          v-model="model.endDate"
 :rules="endDateRules"
/></v-col>
<v-col :cols="cols" :sm="sm" :md="md">
<v-checkbox id="active" label="Active"
          v-model="model.active"
></v-checkbox>
</v-col>
    </template>
  </crud-form>
</template>

