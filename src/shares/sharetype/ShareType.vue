<script setup>
import shareTypeController from "./ShareTypeController";
const cols = 12;
const sm = 6;
 const md = 6;
const controller= shareTypeController();

const model =  controller.model;
const rules= controller.rules;
</script><template>
  <crud-form
    :controller="controller"
>
    <template #heading>Share Type</template>

    <template #form-data>
<v-col :cols="cols" :sm="sm" :md="md">
<s-text-field
 id="name" label="Name"
          v-model="model.name"
 :rules="rules.name"
:counter="40"
></s-text-field>
</v-col>
<v-col :cols="cols" :sm="sm" :md="md">
<s-number-input
 id="unitPrice" label="Unit Price"
          v-model="model.unitPrice"
 :rules="rules.unitPrice"
:counter="100"
></s-number-input>
</v-col>
<v-col :cols="cols" :sm="sm" :md="md">
<s-number-input
 id="dividendPercent" label="Dividend Percent"
          v-model="model.dividendPercent"
 :rules="rules.dividendPercent"
:counter="100"
></s-number-input>
</v-col>
<v-col :cols="cols" :sm="sm" :md="md">
<v-checkbox id="hidden" label="Hidden"
          v-model="model.hidden"
></v-checkbox>
</v-col>
    </template>
  </crud-form>
</template>

