<script setup>
import customerGroupItemCategoryController from "./CustomerGroupItemCategoryController";
const cols = 12;
const sm = 6;
const md = 6;
const controller = customerGroupItemCategoryController();

const model = controller.model;
const rules = controller.rules;
</script><template>
  <crud-form :controller="controller">
    <template #heading>Customer Group Item Category</template>

    <template #form-data>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-text-field id="name" label="Name" v-model="model.name" :rules="rules.name" :counter="100"></s-text-field>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-autocomplete id="customerGroupId" label="Customer Group" v-model="model.customerGroupId"
          :rules="rules.customerGroupId" :items="controller.customerGroupStore.mini"
          :loading="controller.customerGroupStore.miniLoading" item-title="customerGroup"
          item-value="id"></s-autocomplete>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-autocomplete id="itemCategoryId" label="Item Category" v-model="model.itemCategoryId"
          :rules="rules.itemCategoryId" :items="controller.itemCategoryStore.mini"
          :loading="controller.itemCategoryStore.miniLoading" item-title="itemCategory"
          item-value="id"></s-autocomplete>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-autocomplete id="salesAccountId" label="Sales Account" v-model="model.salesAccountId"
          :rules="rules.salesAccountId" :items="controller.accountStore.incomeAccounts"
          :loading="controller.accountStore.incomeAccountsLoading" item-title="accountName" item-value="id"></s-autocomplete>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-autocomplete id="expenseAccountId" label="Expense Account" v-model="model.expenseAccountId"
          :rules="rules.expenseAccountId" :items="controller.accountStore.expenseAccounts"
          :loading="controller.accountStore.expenseAccountsLoading" item-title="accountName" item-value="id"></s-autocomplete>
      </v-col>
    </template>
  </crud-form>
</template>
