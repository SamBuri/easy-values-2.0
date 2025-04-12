<script setup>
import expenseGroupController from "./ExpenseGroupController";
const cols = 12;
const sm = 6;
const md = 6;
const controller = expenseGroupController();

const model = controller.model;
const rules = controller.rules;
</script><template>
  <crud-form :controller="controller">
    <template #heading>Expense Group</template>

    <template #form-data>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-autocomplete id="itemCategoryId" label="Item Category" v-model="model.itemCategoryId"
          :rules="rules.itemCategoryId" :items="controller.itemCategoryStore.expensableItemCategories"
          :loading="controller.itemCategoryStore.expensableItemCategoriesLoading" item-title="itemCategory"
          item-value="id"></s-autocomplete>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-autocomplete id="glAccountId" label="Gl Account" v-model="model.glAccountId" :rules="rules.glAccountId"
          :items="controller.accountStore.expenseAccounts" :loading="controller.accountStore.expenseAccountsLoading" item-title="accountName"
          item-value="id"></s-autocomplete>
      </v-col>
      <!-- <v-col :cols="cols" :sm="sm" :md="md">
        <s-autocomplete id="equityAccountId" label="Equity Account" v-model="model.equityAccountId"
          :rules="rules.equityAccountId" :items="controller.accountStore.mini"
          :loading="controller.accountStore.miniLoading" item-title="accountName" item-value="id"></s-autocomplete>
      </v-col> -->
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-checkbox id="enforceBudget" label="Enforce Budget" v-model="model.enforceBudget"></v-checkbox>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-number-input id="monthlyBudget" label="Monthly Budget" v-model="model.monthlyBudget"
          :rules="rules.monthlyBudget" :counter="100"></s-number-input>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-number-input id="alertPercent" label="Alert Percent" v-model="model.alertPercent" :rules="rules.alertPercent"
          :counter="100"></s-number-input>
      </v-col>
    </template>
  </crud-form>
</template>
