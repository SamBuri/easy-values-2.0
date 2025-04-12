<script setup>
import expenseController from "./ExpenseController";
import rootOptions from '@/root/RootOptions';
const cols = 12;
const sm = 4;
const md = 4;
rootOptions.maxWidth = 1000;
const controller = expenseController();

const model = controller.model;
const rules = controller.rules;
</script><template>
  <crud-form :controller="controller">
    <template #heading>Expense</template>

    <template #form-data>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-date-picker id="tranDate" label="Tran Date" v-model="model.tranDate" :rules="rules.tranDate" /></v-col>
        <v-col :cols="cols" :sm="sm" :md="md">
        <s-autocomplete id="bankAccountId" label="Bank Account" v-model="model.bankAccountId"
          :rules="rules.bankAccountId" :items="controller.bankAccountStore.mini"
          :loading="controller.bankAccountStore.miniLoading" item-title="bankAccountName"
          item-value="id"></s-autocomplete>
      </v-col>

      <v-col :cols="cols" :sm="sm" :md="md">
        <s-text-field id="bankAccountType" label="Bank AccountType" v-model="model.bankAccountType"
          :rules="rules.bankAccountType" disabled></s-text-field>
      </v-col>
     
    <!-- <v-col :cols="cols" :sm="sm" :md="md">
        <s-number-input id="baseAmount" label="Base Amount" v-model="model.baseAmount" :rules="rules.baseAmount"
          :counter="100" disabled></s-number-input>
      </v-col>  -->
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-text-field id="currencyId" label="Currency" v-model="model.currency" :rules="rules.currencyId"
           disabled></s-text-field>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-number-input id="exchangeRate" label="Exchange Rate" v-model="model.exchangeRate" :rules="rules.exchangeRate"
          :counter="100" disabled></s-number-input>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-number-input id="amount" label="Amount" v-model="model.amount" :rules="rules.amount"
          :counter="100" disabled></s-number-input>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-textarea id="amountWords" label="Amount Words" v-model="model.amountWords" :rules="rules.amountWords"
          :counter="200" rows="1" auto-grow disabled></s-textarea>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-textarea id="description" label="Description" v-model="model.description" :rules="rules.description"
          :counter="200" rows="1" auto-grow></s-textarea>
      </v-col>
      <v-col cols="12">
        <crud-table title="Expense Details" :headers="controller.expenseDetailNav.menu.editHeaders"
        @after="controller.expenseDetailsChanged"
          :items="model.expenseDetails" :component="controller.expenseDetailNav.menu.component" maxWidth="700px" />
      </v-col>
    </template>
  </crud-form>
</template>
