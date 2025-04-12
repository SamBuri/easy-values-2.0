<script setup>
import invoiceDetailController from "./InvoiceDetailController";
import rootOptions from '@/root/RootOptions';
const cols = 12;
const sm = 4;
const md = 4;
rootOptions.maxWidth = 1000;
const controller = invoiceDetailController();

const model = controller.model;
const rules = controller.rules;
</script><template>
  <crud-form :controller="controller">
    <template #heading>Invoice Detail</template>

    <template #form-data>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-select-field id="itemId" label="Item" v-model="model.itemId" :rules="rules.itemId" :counter="100"
          @ok="controller.itemIdOk" :items="controller.itemStore.billableItems"
          :headers="controller.itemNav.menu.miniHeaders"></s-select-field>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-text-field id="itemName" label="Item Name" v-model="model.itemName" disabled :rules="rules.itemName"
          :counter="100"></s-text-field>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-autocomplete id="measureas" label="Measure" v-model="model.measureRelation" :rules="rules.measureas"
          :items="model.measureRelations" item-title="measureName" item-value="id" return-object></v-autocomplete>
      </v-col>
      
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-number-input id="measureQuantity" label="Measure Quantity" v-model="model.measureQuantity"
          :rules="rules.measureQuantity" :counter="100"></s-number-input>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-number-input id="measureSize" label="Measure Size" v-model="model.measureSize" :rules="rules.measureSize" disabled
          :counter="100"></s-number-input>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-text-field id="unitMeasure" label="Unit Measure" v-model="model.unitMeasure" :rules="rules.unitMeasure"
          :counter="100" disabled></s-text-field>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-number-input id="quantity" label="Quantity" v-model="model.quantity" disabled
          :counter="100"></s-number-input>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-number-input id="unitCost" label="Unit Cost" v-model="model.unitCost" :rules="rules.unitCost" :disabled="!model.editUnitCost"
          :counter="100"></s-number-input>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-number-input id="unitPrice" label="Unit Price" v-model="model.unitPrice" :rules="rules.unitPrice" :disabled="!model.editUnitPrice"
          :counter="100"></s-number-input>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-number-input id="discount" label="Discount" v-model="model.discount" :rules="rules.discount"
          :counter="100"></s-number-input>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-number-input id="amount" label="Amount" v-model="model.amount" disabled
          :counter="100"></s-number-input>
      </v-col>
    </template>
  </crud-form>
</template>
