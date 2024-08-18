<script setup>
import customerController from "./CustomerController";
const cols = 12;
const sm = 6;
 const md = 6;
const controller= customerController();

const model =  controller.model;
const rules= controller.rules;
</script><template>
  <crud-form
    :controller="controller"
>
    <template #heading>Customer</template>

    <template #form-data>
<v-col :cols="cols" :sm="sm" :md="md">
<s-text-field
 id="customerName" label="Customer Name"
          v-model="model.customerName"
 :rules="rules.customerName"
:counter="50"
></s-text-field>
</v-col>
<v-col :cols="cols" :sm="sm" :md="md">
<s-autocomplete id="customerTypeId" label="Customer Type"
          v-model="model.customerTypeId"
 :rules="rules.customerTypeId"
:counter="20"
:items="controller.lookupStore.customerTypes"
:loading="controller.lookupStore.customerTypesLoading"
item-title="lookupDataName"
          item-value="id"
          ></s-autocomplete>
</v-col>
<v-col :cols="cols" :sm="sm" :md="md">
<s-text-field
 id="phoneNo" label="Phone No"
          v-model="model.phoneNo"
 :rules="rules.phoneNo"
:counter="30"
></s-text-field>
</v-col>
<v-col :cols="cols" :sm="sm" :md="md">
<s-text-field
 id="email" label="Email"
          v-model="model.email"
 :rules="rules.email"
:counter="100"
></s-text-field>
</v-col>
<v-col :cols="cols" :sm="sm" :md="md">
<s-textarea
 id="address" label="Address"
          v-model="model.address"
 :rules="rules.address"
:counter="200"
rows="1"
           auto-grow></s-textarea>
</v-col>
<v-col :cols="cols" :sm="sm" :md="md">
<s-autocomplete id="priceGroupId" label="Price Group"
          v-model="model.priceGroupId"
 :rules="rules.priceGroupId"
:counter="100"
:items="controller.lookupStore.priceGroups"
:loading="controller.lookupStore.priceGroupsLoading"
item-title="lookupDataName"
          item-value="id"
          ></s-autocomplete>
</v-col>
<v-col :cols="cols" :sm="sm" :md="md">
<s-autocomplete id="defaultSponsor" label="Default Sponsor"
          v-model="model.defaultSponsor"
 :rules="rules.defaultSponsor"
:counter="100"
:items="controller.customerStore.mini"
:loading="controller.customerStore.miniLoading"
item-title="customerName"
          item-value="id"
          return-object
></s-autocomplete>
</v-col>
<v-col :cols="cols" :sm="sm" :md="md">
<v-checkbox id="canSponsor" label="Can Sponsor"
          v-model="model.canSponsor"
></v-checkbox>
</v-col>
<v-col :cols="cols" :sm="sm" :md="md">
<v-checkbox id="sponsorOnly" label="Sponsor Only"
          v-model="model.sponsorOnly"
></v-checkbox>
</v-col>
<v-col :cols="cols" :sm="sm" :md="md">
<v-checkbox id="allowCredit" label="Allow Credit"
          v-model="model.allowCredit"
></v-checkbox>
</v-col>
<v-col :cols="cols" :sm="sm" :md="md">
<s-number-input
 id="creditLimit" label="Credit Limit"
          v-model="model.creditLimit"
 :rules="rules.creditLimit"
:counter="100"
></s-number-input>
</v-col>
<v-col :cols="cols" :sm="sm" :md="md">
<s-autocomplete id="customerAccountsGroupId" label="Customer Accounts Group"
          v-model="model.customerAccountsGroupId"
 :rules="rules.customerAccountsGroupId"
:counter="100"
:items="controller.lookupStore.customerAccountsGroups"
:loading="controller.lookupStore.customerAccountsGroupsLoading"
item-title="lookupDataName"
          item-value="id"
          ></s-autocomplete>
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
<v-checkbox id="hidden" label="Hidden"
          v-model="model.hidden"
></v-checkbox>
</v-col>
<v-col :cols="cols" :sm="sm" :md="md">
<s-autocomplete id="referenceType" label="Reference Type"
          v-model="model.referenceType"
 :rules="rules.referenceType"
:counter="40"
:items="controller.customerStore.customerReferenceTypes"
:loading="controller.customerStore.customerReferenceTypesLoading"
          return-object
></s-autocomplete>
</v-col>
<v-col :cols="cols" :sm="sm" :md="md">
<s-text-field
 id="referenceNo" label="Reference No"
          v-model="model.referenceNo"
 :rules="rules.referenceNo"
:counter="100"
></s-text-field>
</v-col>
<v-col :cols="cols" :sm="sm" :md="md">
<v-select id="customerSponsors" label="Customer Sponsors"
          v-model="model.customerSponsors"
 :rules="rules.customerSponsors"
:counter="100"
:items="controller.customerSponsorStore.mini"
:loading="controller.customerSponsorStore.miniLoading"
item-title="customerSponsorName"
          item-value="id"
          return-object
multiple
></v-select>
</v-col>
    </template>
  </crud-form>
</template>

