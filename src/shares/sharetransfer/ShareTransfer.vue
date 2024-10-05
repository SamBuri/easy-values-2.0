<script setup>
import shareTransferController from "./ShareTransferController";
const cols = 12;
const sm = 6;
 const md = 6;
const controller= shareTransferController();

const model =  controller.model;
const rules= controller.rules;
</script><template>
  <crud-form
    :controller="controller"
>
    <template #heading>Share Transfer</template>

    <template #form-data>
<v-col :cols="cols" :sm="sm" :md="md">
<s-select-field
 id="transferFromId" label="Transfer From"
          v-model="model.transferFromId"
 :rules="rules.transferFromId"
:counter="20"
@ok="controller.transferFromIdOk"
          :items="controller.shareholderStore.mini"
          :headers="controller.shareholderNav.menu.miniHeaders"
        ></s-select-field>
</v-col>
<v-col :cols="cols" :sm="sm" :md="md">
<s-text-field
 id="transferFromName" label="Transfer From Name"
          v-model="model.transferFromName"
disabled
 :rules="rules.transferFromName"
:counter="100"
></s-text-field>
</v-col>
<v-col :cols="cols" :sm="sm" :md="md">
<s-select-field
 id="transferToId" label="Transfer To"
          v-model="model.transferToId"
 :rules="rules.transferToId"
:counter="20"
@ok="controller.transferToIdOk"
          :items="controller.shareholderStore.mini"
          :headers="controller.shareholderNav.menu.miniHeaders"
        ></s-select-field>
</v-col>
<v-col :cols="cols" :sm="sm" :md="md">
<s-text-field
 id="transferToName" label="Transfer To Name"
          v-model="model.transferToName"
disabled
 :rules="rules.transferToName"
:counter="100"
></s-text-field>
</v-col>
<v-col :cols="cols" :sm="sm" :md="md">
 <s-date-picker id="transferDate" label="Transfer Date"
          v-model="model.transferDate"
 :rules="rules.transferDate"
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

