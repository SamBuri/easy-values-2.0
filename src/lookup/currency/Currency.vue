<script setup>
import currencyController from "./CurrencyController";
const cols = 12;
const sm = 6;
 const md = 6;
const controller= currencyController();

const model =  controller.model;
const rules= controller.rules;
</script><template>
  <crud-form
    :controller="controller"
>
    <template #heading>Currency</template>

    <template #form-data>
<v-col :cols="cols" :sm="sm" :md="md">
<s-text-field
 id="currency" label="Currency"
          v-model="model.currency"
 :rules="rules.currency"
:counter="100"
></s-text-field>
</v-col>
<v-col :cols="cols" :sm="sm" :md="md">
<s-number-input
 id="buying" label="Buying"
          v-model="model.buying"
 :rules="rules.buying"
:counter="100"
></s-number-input>
</v-col>
<v-col :cols="cols" :sm="sm" :md="md">
<s-number-input
 id="selling" label="Selling"
          v-model="model.selling"
 :rules="rules.selling"
:counter="100"
></s-number-input>
</v-col>
<v-col :cols="cols" :sm="sm" :md="md">
<v-checkbox id="isDefault" label="Is Default"
          v-model="model.isDefault"
></v-checkbox>
</v-col>
    </template>
  </crud-form>
</template>

