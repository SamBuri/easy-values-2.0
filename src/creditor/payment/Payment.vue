<script setup>
import paymentController from "./PaymentController";
import rootOptions from '@/root/RootOptions';
const cols = 12;
const sm = 4;
 const md = 4;
rootOptions.maxWidth=1000;
const controller= paymentController();

const model =  controller.model;
const rules= controller.rules;
</script><template>
  <crud-form
    :controller="controller"
>
    <template #heading>Payment</template>

    <template #form-data>
<v-col :cols="cols" :sm="sm" :md="md">
<s-autocomplete id="creditorId" label="Creditor"
          v-model="model.creditorId"
 :rules="rules.creditorId"
:items="controller.creditorStore.mini"
:loading="controller.creditorStore.miniLoading"
item-title="creditorName"
          item-value="id"
          ></s-autocomplete>
</v-col>
<v-col :cols="cols" :sm="sm" :md="md">
<s-text-field
 id="name" label="Name"
          v-model="model.name"
disabled
 :rules="rules.name"
:counter="100"
></s-text-field>
</v-col>
<v-col :cols="cols" :sm="sm" :md="md">
<s-number-input
 id="amoundDue" label="Amount Due"
          v-model="model.amoundDue"
disabled
 :rules="rules.amoundDue"
:counter="100"
></s-number-input>
</v-col>
<v-col :cols="cols" :sm="sm" :md="md">
 <s-date-picker id="payDate" label="Pay Date"
          v-model="model.payDate"
 :rules="rules.payDate"
/></v-col>
<v-col :cols="cols" :sm="sm" :md="md">
<s-autocomplete id="bankAccountId" label="Bank Account"
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
 id="bankAccountType" label="Bank Account Type"
          v-model="model.bankAccountType"
disabled
 :rules="rules.bankAccountType"
:counter="100"
></s-text-field>
</v-col>
<v-col :cols="cols" :sm="sm" :md="md">
<s-number-input
 id="balance" label="Balance"
          v-model="model.balance"
disabled
 :rules="rules.balance"
:counter="100"
></s-number-input>
</v-col>
<v-col :cols="cols" :sm="sm" :md="md">
<s-number-input
 id="baseAmount" label="Base Amount"
          v-model="model.baseAmount"
 :rules="rules.baseAmount"
:counter="100"
></s-number-input>
</v-col>
<v-col :cols="cols" :sm="sm" :md="md">
<s-number-input
 id="discount" label="Discount"
          v-model="model.discount"
 :rules="rules.discount"
:counter="100"
></s-number-input>
</v-col>
<v-col :cols="cols" :sm="sm" :md="md">
<s-number-input
 id="withholdingTax" label="Withholding Tax"
          v-model="model.withholdingTax"
 :rules="rules.withholdingTax"
:counter="100"
></s-number-input>
</v-col>
<v-col :cols="cols" :sm="sm" :md="md">
<s-text-field
 id="currency" label="Currency"
          v-model="model.currency"
disabled
 :rules="rules.currency"
:counter="100"
></s-text-field>
</v-col>
<v-col :cols="cols" :sm="sm" :md="md">
<s-number-input
 id="exchangeRate" label="Exchange Rate"
          v-model="model.exchangeRate"
disabled
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
<s-textarea
 id="amountWords" label="Amount Words"
          v-model="model.amountWords"
disabled
 :rules="rules.amountWords"
:counter="200"
rows="1"
           auto-grow></s-textarea>
</v-col>
<v-col :cols="cols" :sm="sm" :md="md">
<s-number-input
 id="amountPaid" label="Amount Paid"
          v-model="model.amountPaid"
disabled
 :rules="rules.amountPaid"
:counter="100"
></s-number-input>
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
<v-col :cols="cols" :sm="sm" :md="md">
<s-text-field
 id="referenceNo" label="Reference No"
          v-model="model.referenceNo"
 :rules="rules.referenceNo"
:counter="100"
></s-text-field>
</v-col>
<v-col cols="12">
<crud-table 
      title="Payment Bills"
       :headers ="controller.paymentBillNav.menu.editHeaders"
       :items="model.paymentBills"
       :component="controller.paymentBillNav.menu.component"
       maxWidth="700px"
      />
</v-col>
    </template>
  </crud-form>
</template>

