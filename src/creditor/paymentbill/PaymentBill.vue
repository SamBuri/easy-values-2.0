<script setup>
import paymentBillController from "./PaymentBillController";
const cols = 12;
const sm = 6;
 const md = 6;
const controller= paymentBillController();

const model =  controller.model;
const rules= controller.rules;
</script><template>
  <crud-form
    :controller="controller"
>
    <template #heading>Payment Bill</template>

    <template #form-data>
<v-col :cols="cols" :sm="sm" :md="md">
<s-autocomplete id="paymentId" label="Payment"
          v-model="model.paymentId"
 :rules="rules.paymentId"
:items="controller.paymentStore.mini"
:loading="controller.paymentStore.miniLoading"
item-title="paymentName"
          item-value="id"
          ></s-autocomplete>
</v-col>
<v-col :cols="cols" :sm="sm" :md="md">
<s-autocomplete id="billId" label="Bill"
          v-model="model.billId"
 :rules="rules.billId"
:items="controller.billStore.mini"
:loading="controller.billStore.miniLoading"
item-title="billName"
          item-value="id"
          ></s-autocomplete>
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
 id="amount" label="Amount"
          v-model="model.amount"
 :rules="rules.amount"
:counter="100"
></s-number-input>
</v-col>
<v-col :cols="cols" :sm="sm" :md="md">
<s-number-input
 id="amountRefunded" label="AmountRefunded"
          v-model="model.amountRefunded"
 :rules="rules.amountRefunded"
:counter="100"
></s-number-input>
</v-col>
    </template>
  </crud-form>
</template>

