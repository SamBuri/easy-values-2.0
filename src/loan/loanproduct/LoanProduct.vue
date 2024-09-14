<script setup>
import loanProductController from "./LoanProductController";
import rootOptions from '@/root/RootOptions';
const cols = 12;
const sm = 4;
 const md = 4;
rootOptions.maxWidth=1300;
const controller= loanProductController();

const model =  controller.model;
const rules= controller.rules;
</script><template>
  <crud-form
    :controller="controller"
>
    <template #heading>Loan Product</template>

    <template #form-data>
<v-col :cols="cols" :sm="sm" :md="md">
<s-text-field
 id="productName" label="Product Name"
          v-model="model.productName"
 :rules="rules.productName"
:counter="40"
></s-text-field>
</v-col>
<v-col :cols="cols" :sm="sm" :md="md">
<s-number-input
 id="interestRate" label="Interest Rate"
          v-model="model.interestRate"
 :rules="rules.interestRate"
:counter="20"
></s-number-input>
</v-col>
<v-col :cols="cols" :sm="sm" :md="md">
<s-autocomplete id="interestMethod" label="Interest Method"
          v-model="model.interestMethod"
 :rules="rules.interestMethod"
:items="controller.loanStore.interestMethods"
:loading="controller.loanStore.interestMethodsLoading"
          ></s-autocomplete>
</v-col>
<v-col :cols="cols" :sm="sm" :md="md">
<s-number-input
 id="leastSecurityScale" label="Least Security Scale"
          v-model="model.leastSecurityScale"
 :rules="rules.leastSecurityScale"
:counter="100"
></s-number-input>
</v-col>
<v-col :cols="cols" :sm="sm" :md="md">
<s-autocomplete id="interestPeriodId" label="Interest Period"
          v-model="model.interestPeriodId"
 :rules="rules.interestPeriodId"
:items="controller.periodStore.mini"
:loading="controller.periodStore.miniLoading"
item-title="periodName"
          item-value="id"
          ></s-autocomplete>
</v-col>
<v-col :cols="cols" :sm="sm" :md="md">
<s-autocomplete id="paymentPeriodId" label="Payment Period"
          v-model="model.paymentPeriodId"
 :rules="rules.paymentPeriodId"
:items="controller.periodStore.mini"
:loading="controller.periodStore.miniLoading"
item-title="periodName"
          item-value="id"
          ></s-autocomplete>
</v-col>
<v-col :cols="cols" :sm="sm" :md="md">
<s-number-input
 id="maxPeriods" label="Max Periods"
          v-model="model.maxPeriods"
 :rules="rules.maxPeriods"
:counter="100"
></s-number-input>
</v-col>
<v-col :cols="cols" :sm="sm" :md="md">
<s-number-input
 id="minAmount" label="Min Amount"
          v-model="model.minAmount"
 :rules="rules.minAmount"
:counter="100"
></s-number-input>
</v-col>
<v-col :cols="cols" :sm="sm" :md="md">
<s-number-input
 id="maxAmount" label="Max Amount"
          v-model="model.maxAmount"
 :rules="rules.maxAmount"
:counter="100"
></s-number-input>
</v-col>
<v-col :cols="cols" :sm="sm" :md="md">
<s-number-input
 id="preRemainder" label="Pre Remainder"
          v-model="model.preRemainder"
 :rules="rules.preRemainder"
:counter="100"
></s-number-input>
</v-col>
<v-col :cols="cols" :sm="sm" :md="md">
<s-number-input
 id="fineDays" label="Fine Days"
          v-model="model.fineDays"
 :rules="rules.fineDays"
:counter="100"
></s-number-input>
</v-col>
<v-col :cols="cols" :sm="sm" :md="md">
<s-number-input
 id="redFlagAfter" label="Red Flag After"
          v-model="model.redFlagAfter"
 :rules="rules.redFlagAfter"
:counter="100"
></s-number-input>
</v-col>
<v-col :cols="cols" :sm="sm" :md="md">
<v-checkbox id="hidden" label="Hidden"
          v-model="model.hidden"
></v-checkbox>
</v-col>
<v-col cols="12">
<crud-table
      title="Loan Product Charges"
       :headers ="controller.loanProductChargeNav.menu.editHeaders"
       :items="model.loanProductCharges"
       :component="controller.loanProductChargeNav.menu.component"
       maxWidth="700px"
      />
</v-col>
    </template>
  </crud-form>
</template>

