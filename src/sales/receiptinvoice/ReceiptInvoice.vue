<script setup>
import receiptInvoiceController from "./ReceiptInvoiceController";
const cols = 12;
const sm = 6;
 const md = 6;
const controller= receiptInvoiceController();

const model =  controller.model;
const rules= controller.rules;

</script><template>
  <crud-form
    :controller="controller"
>
    <template #heading>Receipt Invoice</template>

    <template #form-data>
<v-col :cols="cols" :sm="sm" :md="md">
<s-autocomplete id="receipt" label="Receipt"
          v-model="model.receipt"
 :rules="rules.receipt"
:counter="100"
:items="controller.receiptStore.mini"
:loading="controller.receiptStore.miniLoading"
item-text="receiptName"
          item-value="id"
          return-object
></s-autocomplete>
</v-col>
<v-col :cols="cols" :sm="sm" :md="md">
<s-autocomplete id="invoice" label="Invoice"
          v-model="model.invoice"
 :rules="rules.invoice"
:counter="100"
:items="controller.invoiceStore.mini"
:loading="controller.invoiceStore.miniLoading"
item-text="invoiceName"
          item-value="id"
          return-object
></s-autocomplete>
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
 id="amountRefunded" label="Amount Refunded"
          v-model="model.amountRefunded"
 :rules="rules.amountRefunded"
:counter="100"
></s-number-input>
</v-col>
    </template>
  </crud-form>
</template>

