<script setup>
import expensesController from "./ExpensesController";
import rootOptions from '@/root/RootOptions';
const cols = 12;
const sm = 4;
 const md = 4;
rootOptions.maxWidth=1000;
const controller= expensesController();

const model =  controller.model;
const rules= controller.rules;
</script><template>
  <crud-form
    :controller="controller"
>
    <template #heading>Expenses</template>

    <template #form-data>
<v-col :cols="cols" :sm="sm" :md="md">
 <s-date-picker id="tranDate" label="Tran Date"
          v-model="model.tranDate"
 :rules="rules.tranDate"
/></v-col>
<v-col :cols="cols" :sm="sm" :md="md">
<s-autocomplete id="bankAccountType" label="Bank AccountType"
          v-model="model.bankAccountType"
 :rules="rules.bankAccountType"
:items="controller.expensesStore.bankAccountTypes"
:loading="controller.expensesStore.bankAccountTypesLoading"
          ></s-autocomplete>
</v-col>
<v-col :cols="cols" :sm="sm" :md="md">
<s-autocomplete id="bankAccountId" label="Bank Account Id"
          v-model="model.bankAccountId"
 :rules="rules.bankAccountId"
:items="controller.bankAccountStore.mini"
:loading="controller.bankAccountStore.miniLoading"
item-title="bankAccountName"
          item-value="id"
          ></s-autocomplete>
</v-col>
<v-col :cols="cols" :sm="sm" :md="md">
<s-text-field
 id="bankAccount" label="BankAccount"
          v-model="model.bankAccount"
disabled
 :rules="rules.bankAccount"
:counter="100"
></s-text-field>
</v-col>
<v-col :cols="cols" :sm="sm" :md="md">
<s-number-input
 id="amountTendered" label="Amount Tendered"
          v-model="model.amountTendered"
 :rules="rules.amountTendered"
:counter="100"
></s-number-input>
</v-col>
<v-col :cols="cols" :sm="sm" :md="md">
<s-autocomplete id="currencyId" label="Currency Id"
          v-model="model.currencyId"
 :rules="rules.currencyId"
:items="controller.currencyStore.mini"
:loading="controller.currencyStore.miniLoading"
item-title="currencyName"
          item-value="id"
          ></s-autocomplete>
</v-col>
<v-col :cols="cols" :sm="sm" :md="md">
<s-number-input
 id="exchangeRate" label="Exchange Rate"
          v-model="model.exchangeRate"
 :rules="rules.exchangeRate"
:counter="100"
></s-number-input>
</v-col>
<v-col :cols="cols" :sm="sm" :md="md">
<s-number-input
 id="amount" label="Amount"
          v-model="model.amount"
 :rules="rules.amount"
:counter="100"
></s-number-input>
</v-col>
<v-col :cols="cols" :sm="sm" :md="md">
<s-text-field
 id="amountWords" label="Amount Words"
          v-model="model.amountWords"
 :rules="rules.amountWords"
:counter="100"
></s-text-field>
</v-col>
<v-col :cols="cols" :sm="sm" :md="md">
<s-textarea
 id="description" label="Description"
          v-model="model.description"
 :rules="rules.description"
:counter="200"
rows="1"
           auto-grow></s-textarea>
</v-col>
<v-col cols="12">
<crud-table 
      title="Expense Details"
       :headers ="controller.expenseDetailsNav.menu.editHeaders"
       :items="model.expenseDetails"
       :component="controller.expenseDetailsNav.menu.component"
       maxWidth="700px"
      />
</v-col>
    </template>
  </crud-form>
</template>

