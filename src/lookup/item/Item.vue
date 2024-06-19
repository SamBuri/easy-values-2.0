<template>
  <crud-form @save="save" @update="update" @search="search" @updateDialog="updateDialog" @reset="reset" @done="done"
    @updateCrudTableDialog="updateCrudTableDialog" @resetCrudTableDialog="resetCrudTableDialog" :path="path"
    :maxWidth="maxWidth">
    <template slot="heading">Item</template>

    <template slot="form-data" slot-scope="{ isUpdate }">
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-select label="Item Category" v-model="item.itemCategory" :rules="itemCategoryRules" :counter="100"
          :items="$store.state.lookup.itemcategory.mini" :loading="$store.state.lookup.itemcategory.miniLoading"
          item-text="itemCategory" item-value="id" return-object></v-select>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-text-field label="Item Name" v-model="item.itemName" :rules="itemNameRules" :counter="100"></v-text-field>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-number-input label="Unit Cost" v-model="item.unitCost" :rules="unitCostRules" :counter="100"></s-number-input>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-number-input label="Unit Price" v-model="item.unitPrice" :rules="unitPriceRules"
          :counter="100"></s-number-input>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-select label="VAT Item Group" v-model="item.vatItemGroupId" :rules="vatItemGroupIdRules" :counter="100"
          :items="$store.state.lookup.lookupdata.vATItemGroups"
          :loading="$store.state.lookup.lookupdata.vATItemGroupsLoading" item-text="lookupDataName" item-value="id"
          ></v-select>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-select label="Inventory Group" v-model="item.inventoryGroupId" :rules="inventoryGroupIdRules" :counter="100"
          :items="$store.state.lookup.lookupdata.inventoryGroups"
          :loading="$store.state.lookup.lookupdata.inventoryGroupsLoading" item-text="lookupDataName" item-value="id"
         ></v-select>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-select label="Measure Group" v-model="item.measureGroup" :rules="measureGroupRules" :counter="100"
          :items="$store.state.lookup.measuregroup.mini" :loading="$store.state.lookup.measuregroup.miniLoading"
          item-text="measureGroupName" item-value="id" return-object></v-select>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-checkbox label="Edit Unit Cost" v-model="item.editUnitCost"></v-checkbox>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-checkbox label="Edit Unit Price" v-model="item.editUnitPrice"></v-checkbox>
      </v-col>
     
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-checkbox label="Edit Quantity" v-model="item.editQuantity"></v-checkbox>
      </v-col>

      <v-col :cols="cols" :sm="sm" :md="md" v-if="isUpdate">
        <v-checkbox label="Hidden" v-model="item.hidden"></v-checkbox>
      </v-col>
      <v-col cols="12">
        <crud-table title="Item Price Groups" :headers="itemPriceGroupNav.menu.editHeaders" :items="item.itemPriceGroups"
          :component="itemPriceGroupNav.menu.component" maxWidth="700px" />
      </v-col>
    </template>
  </crud-form>
</template>
<script>
import itemModel from "./ItemModel";
import CrudTable from "../../components/CrudTable.vue";
import itemPriceGroupNav from '../itempricegroup/ItemPriceGroupNav.js';
export default {
  components: { CrudTable },
  name: "Item",
  data: () => ({
    cols: 12,
    sm: 6,
    md: 3,
    maxWidth: 1000,
    path: itemModel.path,
    item: itemModel.item,
    itemPriceGroupNav: itemPriceGroupNav,
    itemCategoryRules: [(v) => !!v || "Item Category is required",
    ], itemNameRules: [(v) => !!v || "Item Name is required",
    (v) => v.length < 100 || "Item Name length must be less or equal to 100",], unitCostRules: [(v) => !!v || "Unit Cost is required",
    ], unitPriceRules: [(v) => !!v || "Unit Price is required",
    ], vatItemGroupIdRules: [(v) => !!v || "VAT Item Group is required",
    ], inventoryGroupIdRules: [(v) => !!v || "Inventory Group is required",
    ], measureGroupRules: [(v) => !!v || "Measure Group is required",
    ], itemPriceGroupsRules: [(v) => !!v || "Item Price Groups is required",
    ],
  }),
  created() {
    this.$store.dispatch("lookup/itemcategory/getMini");
    this.$store.dispatch("lookup/lookupdata/getVATItemGroups");
    this.$store.dispatch("lookup/lookupdata/getInventoryGroups");
    this.$store.dispatch("lookup/measuregroup/getMini");
  },
  computed: {},

  watch: {},

  methods: {
    save() {
      this.$store.dispatch("post", { path: this.path, body: this.item });
    },
    update() {
      this.$store.dispatch("put", { path: `${this.path}/${this.item.id}`, body: this.item });
    },
    updateDialog() {
      var obj = this.$store.state.search.selectedData[0].value;
      this.setDialog(obj);
    },
    async search() {
      var obj = this.$store.state.obj;
      this.item = Object.assign({}, obj);
      this.setObjects(obj);
    },
    reset() {
      this.item.clear();
    },
    setObjects(obj) {
      console.log(obj);
    }, setDialog(obj) {
      this.item = Object.assign({}, obj);
      this.setObjects(obj);
    },
    done() {
      this.$store.commit(
        "crudtable/data",
        Object.assign({}, this.item)
      );
    },
    updateCrudTableDialog() {
      this.setDialog(this.$store.state.crudtable.data);
    },
    resetCrudTableDialog() {
      this.reset();
    },
  }
};
</script>
