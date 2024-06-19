<template>
  <v-data-table :headers="headers" :items="items" class="elevation-1" 
  :loading="loading"
  :items-per-page="20"
  :items-length ="20" dense>
    <template v-slot:top>
      <v-toolbar flat>
        <v-toolbar-title>{{ title }}</v-toolbar-title>
        <v-divider class="mx-4" inset vertical></v-divider>
        <v-spacer></v-spacer>
        <template v-if="component">

          <v-dialog v-model="$store.state.crudtable.dialog" :max-width="maxWidth">
            <template v-slot:activator="{ on, attrs }">
              <v-btn color="primary" text class="mb-2" v-bind="attrs" v-on="on">
                Add
              </v-btn>
            </template>
            <!-- <journal-details/> -->
            <component v-bind:is="component" />
          </v-dialog>

        </template>


        <v-dialog v-model="dialogDelete" max-width="500px">
          <v-card>
            <v-card-title class="text-h5">Are you sure you want to delete this item?</v-card-title>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="primary" text @click="closeDelete">Cancel</v-btn>
              <v-btn color="primary" text @click="deleteItemConfirm">OK</v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>
    <template v-slot:item.actions="{ item }">
      <template v-if="component">
        <v-icon small class="mr-2" @click="editItem(item)"> mdi-pencil </v-icon>
      </template>
      <v-icon small @click="deleteItem(item)"> mdi-delete </v-icon>
    </template>
         <template v-for="(header, i) in toFormatHeaders" v-slot:[`item.${header.value}`]="{ item }">
                <span :key="i"> {{ formatData(header, item[header.value]) }} </span>
            </template>
  </v-data-table>
</template>
 
 
<script>
import funcs from '../utils/funcs';
export default {

  props: {
    title: String, headers: Array, items: Array, component: Object, maxWidth: String,
    loading: { type: Boolean, default: false }
  },
  data: () => ({
    dialogDelete: false,
    editedIndex: -1,
    editedItem: {},

  }),

  computed: {

    dialog() {
      return this.$store.state.crudtable.dialog;
    },

   toFormatHeaders() {
            return this.headers.filter(h => h.isNumeric === true ||  h.isDate === true ||h.isDateTime === true);
        },



  },

  watch: {
    dialog() {
      let data = this.$store.state.crudtable.data;
      if (this.editedIndex > -1) {
        if (this.$store.state.crudtable.results === 0) {
          this.$store.commit("crudtable/data", this.editedItem);
        } else {
          this.items.splice(this.editedIndex, 1, data);
          this.$store.commit("crudtable/data", {});
          this.editedIndex = -1
        }
      } else {
        if (JSON.stringify(data) !== JSON.stringify({})) {
          this.items.push(data);
          this.$store.commit("crudtable/data", {});
        }
      }

    },

    dialogDelete(val) {
      val || this.closeDelete();
    },
  },

  created() { },

  methods: {
    saveClicked() {
      this.$store.commit("crudtable/data", {});
      this.$store.commit("crudtable/dialog", true);
      this.$store.commit("crudtable/results", 0);
      this.editedIndex = -1
    },

    editItem(item) {
      this.editedIndex = this.items.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.$store.commit("crudtable/data", Object.assign({}, item));
      this.$store.commit("crudtable/dialog", true);
      this.$store.commit("crudtable/results", 0);
    },

    deleteItem(item) {
      this.editedIndex = this.items.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialogDelete = true;
    },

    deleteItemConfirm() {
      this.items.splice(this.editedIndex, 1);
      this.closeDelete();
    },

    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = {};
        this.editedIndex = -1;
      });
    },

    closeDelete() {
      this.dialogDelete = false;
      this.$nextTick(() => {
        this.editedItem = {}
        this.editedIndex = -1;
      });
    },

    formatData(header, value) {
        return funcs.formatData(header, value);
    }

  },
};
</script>