<script setup>
import loanBillDetailController from "./LoanBillDetailController";
const cols = 12;
const sm = 6;
 const md = 6;
const controller= loanBillDetailController();

const model =  controller.model;
const rules= controller.rules;
</script><template>
  <crud-form
    :controller="controller"
>
    <template #heading>Loan Bill Detail</template>

    <template #form-data>
<v-col :cols="cols" :sm="sm" :md="md">
<s-select-field
 id="itemId" label="Item"
          v-model="model.itemId"
 :rules="rules.itemId"
:counter="100"
@ok="controller.itemIdOk"
          :items="controller.itemStore.mini"
          :headers="controller.itemNav.menu.miniHeaders"
        ></s-select-field>
</v-col>
<v-col :cols="cols" :sm="sm" :md="md">
<s-text-field
 id="itemName" label="Item Name"
          v-model="model.itemName"
disabled
 :rules="rules.itemName"
:counter="100"
></s-text-field>
</v-col>
<v-col :cols="cols" :sm="sm" :md="md">
<s-autocomplete id="determiningMethod" label="Determining Method"
          v-model="model.determiningMethod"
 :rules="rules.determiningMethod"
:items="controller.loanStore.determiningMethods"
:loading="controller.loanStore.determiningMethodsLoading"
          ></s-autocomplete>
</v-col>
<v-col :cols="cols" :sm="sm" :md="md">
<s-number-input
 id="quantity" label="Quantity"
          v-model="model.quantity"
 :rules="rules.quantity"
:counter="100"
></s-number-input>
</v-col>
<v-col :cols="cols" :sm="sm" :md="md">
<s-number-input
 id="charge" label="Charge"
          v-model="model.charge"
 :rules="rules.charge"
:counter="100"
></s-number-input>
</v-col>
    </template>
  </crud-form>
</template>

