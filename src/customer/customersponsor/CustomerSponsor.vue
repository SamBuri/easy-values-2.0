<script setup>
import customerSponsorController from "./CustomerSponsorController";
const cols = 12;
const sm = 6;
 const md = 6;
const controller= customerSponsorController();

const model =  controller.model;
const rules= controller.rules;
</script><template>
  <crud-form
    :controller="controller"
>
    <template #heading>Customer Sponsor</template>

    <template #form-data>
<v-col :cols="cols" :sm="sm" :md="md">
<s-autocomplete id="customer" label="Customer"
          v-model="model.customer"
 :rules="rules.customer"
:counter="100"
:items="controller.customerStore.mini"
:loading="controller.customerStore.miniLoading"
item-title="customerName"
          item-value="id"
          return-object
></s-autocomplete>
</v-col>
<v-col :cols="cols" :sm="sm" :md="md">
<s-autocomplete id="sponsor" label="Sponsor"
          v-model="model.sponsor"
 :rules="rules.sponsor"
:counter="100"
:items="controller.customerStore.mini"
:loading="controller.customerStore.miniLoading"
item-title="customerName"
          item-value="id"
          return-object
></s-autocomplete>
</v-col>
<v-col :cols="cols" :sm="sm" :md="md">
<v-checkbox id="isDefault" label="Is Default"
          v-model="model.isDefault"
></v-checkbox>
</v-col>
    </template>
  </crud-form>
</template>

