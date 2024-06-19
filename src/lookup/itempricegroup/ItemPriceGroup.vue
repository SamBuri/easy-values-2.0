<template>
  <crud-form
    @save="save"
    @update="update"
    @search="search"
    @updateDialog="updateDialog"
    @reset="reset"
    @done="done"
    @updateCrudTableDialog="updateCrudTableDialog"
    @resetCrudTableDialog="resetCrudTableDialog"
    :path="path"
    :maxWidth="maxWidth"
  >
    <template slot="heading">Item Price Group</template>

    <template slot="form-data">
    
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-select
          label="Price Group"
          v-model="itemPriceGroup.priceGroupObj"
          :rules="priceGroupIdRules"
          :counter="100"
          required
          :items="$store.state.lookup.lookupdata.priceGroups"
          item-text="lookupDataName"
          item-value="id"
          return-object
        ></v-select>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-text-field
          label="Unit Price"
          v-model="itemPriceGroup.unitPrice"
          :counter="100"
          required
        ></v-text-field>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-text-field
          label="Discount"
          v-model="itemPriceGroup.discount"
          :counter="100"
          required
        ></v-text-field>
      </v-col>
    </template>
  </crud-form>
</template>
<script>
import itemPriceGroupModel from "./ItemPriceGroupModel";
import CrudForm from "../../components/CrudForm.vue";
export default {
  components: { CrudForm },
  name: "ItemPriceGroup",
  data: () => ({
    cols: 12,
    sm: 6,
    md: 4,
    maxWidth: 700,
    path: itemPriceGroupModel.path,
    itemPriceGroup: itemPriceGroupModel.itemPriceGroup,
    itemRules: [(v) => !!v || "Item is required"],
    priceGroupIdRules: [(v) => !!v || "Price Group is required"],
  }),
  created() {
    this.$store.dispatch("items/item/getMini");
    this.$store.dispatch("lookup/lookupdata/getPriceGroups");
  },
  computed: {
    priceGroupObj(){
      return this.itemPriceGroup.priceGroupObj;
    }
  },

  watch: {
     priceGroupObj(){
      this.itemPriceGroup.priceGroupId = this.priceGroupObj.id;
    }
  },

  methods: {
    save() {
      this.$store.dispatch("post", {
        path: this.path,
        body: this.itemPriceGroup,
      });
    },
    update() {
      this.$store.dispatch("put", {
        path: `${this.path}/${this.itemPriceGroup.id}`,
        body: this.itemPriceGroup,
      });
    },
    updateDialog() {
      var obj = this.$store.state.search.selectedData[0].value;
      this.setDialog(obj);
    },
    async search() {
      var obj = this.$store.state.obj;
      this.itemPriceGroup = Object.assign({}, obj);
      this.setObjects(obj);
    },
    reset() {
      this.itemPriceGroup.clear();
    },
    setObjects(obj) {
      console.log(obj);
    },
    setDialog(obj) {
      this.itemPriceGroup = Object.assign({}, obj);
      this.setObjects(obj);
    },
    done() {
      this.$store.commit(
        "crudtable/data",
        Object.assign({}, this.itemPriceGroup)
      );
    },
    updateCrudTableDialog() {
      this.setDialog(this.$store.state.crudtable.data);
    },
    resetCrudTableDialog() {
      this.reset();
    },
  },
};
</script>
