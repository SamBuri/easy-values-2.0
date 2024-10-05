<script setup>
import investmentController from "./InvestmentController";
const cols = 12;
const sm = 6;
 const md = 6;
const controller= investmentController();

const model =  controller.model;
const rules= controller.rules;
</script><template>
  <crud-form
    :controller="controller"
>
    <template #heading>Investment</template>

    <template #form-data>
<v-col :cols="cols" :sm="sm" :md="md">
<s-select-field
 id="shareholderId" label="Shareholder"
          v-model="model.shareholderId"
 :rules="rules.shareholderId"
:counter="20"
@ok="controller.shareholderIdOk"
          :items="controller.shareholderStore.mini"
          :headers="controller.shareholderNav.menu.miniHeaders"
        ></s-select-field>
</v-col>
<v-col :cols="cols" :sm="sm" :md="md">
 <s-date-picker id="tranDate" label="Tran Date"
          v-model="model.tranDate"
 :rules="rules.tranDate"
/></v-col>
<v-col :cols="cols" :sm="sm" :md="md">
<s-autocomplete id="shareTypeId" label="Share Type"
          v-model="model.shareTypeId"
 :rules="rules.shareTypeId"
:items="controller.shareTypeStore.mini"
:loading="controller.shareTypeStore.miniLoading"
item-title="shareTypeName"
          item-value="id"
          ></s-autocomplete>
</v-col>
<v-col :cols="cols" :sm="sm" :md="md">
<s-autocomplete id="shareAction" label="Share Action"
          v-model="model.shareAction"
 :rules="rules.shareAction"
:items="controller.sharesStore.shareActions"
:loading="controller.sharesStore.shareActionsLoading"
          ></s-autocomplete>
</v-col>
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
<s-number-input
 id="quantity" label="Quantity"
          v-model="model.quantity"
 :rules="rules.quantity"
:counter="100"
></s-number-input>
</v-col>
<v-col :cols="cols" :sm="sm" :md="md">
<s-number-input
 id="unitPrice" label="Unit Price"
          v-model="model.unitPrice"
 :rules="rules.unitPrice"
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
    </template>
  </crud-form>
</template>

