<script setup>
import expenseDetailController from "./ExpenseDetailController";
const cols = 12;
const sm = 6;
const md = 6;
const controller = expenseDetailController();

const model = controller.model;
const rules = controller.rules;
</script><template>
  <crud-form :controller="controller">
    <template #heading>Expense Detail</template>

    <template #form-data>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-select-field id="itemId" label="Item" v-model="model.itemId" :rules="rules.itemId" :counter="100"
          @ok="controller.itemIdOk" :items="controller.itemStore.expensableItems"
          :headers="controller.itemNav.menu.miniHeaders"></s-select-field>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-text-field id="itemName" label="Item Name" v-model="model.itemName" :rules="rules.itemName"
          :counter="100"></s-text-field>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-number-input id="quantity" label="Quantity" v-model="model.quantity" :rules="rules.quantity"
          :counter="100" :disabled="!model.editQuantity"></s-number-input>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-number-input id="UnitCost" label="Unit Cost" v-model="model.unitCost"
          :rules="rules.baseUnitCost" :disabled="!model.editUnitCost" :counter="100"></s-number-input>
      </v-col>
      <!-- <v-col :cols="cols" :sm="sm" :md="md">
        <s-number-input id="unitCost" label="Unit Cost" v-model="model.unitCost" :rules="rules.unitCost"
          :counter="100" :disabled="!model.editUnitCost"></s-number-input>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-number-input id="baseAmount" label="Base Amount" v-model="model.baseAmount" :rules="rules.baseAmount"
          :counter="100"></s-number-input> -->
      <!-- </v-col> -->
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-number-input id="amount" label="Amount" v-model="model.amount" :rules="rules.amount"
          :counter="100" disabled></s-number-input>
      </v-col>
    </template>
  </crud-form>
</template>
