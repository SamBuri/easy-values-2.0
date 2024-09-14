<script setup>
import funcs from '../utils/funcs';
import constants from '@/utils/constants';
import {ref, computed, nextTick} from 'vue'

  const props = defineProps( {
    title: String, headers: Array, items: Array, component: Object, maxWidth: String,
    loading: { type: Boolean, default: false },
  });

  const emit = defineEmits(['setData', 'after'])
  const dialogDelete = ref(false);
  const editedIndex = ref(-1);
  const editedItem = ref({});
  const passedMode = ref(3);
  const buttonLabel= constants.buttonTexts.done;
  const toFormatHeaders =  computed(()=>props.headers.filter(h => h.isNumeric === true || h.isDate === true || h.isDateTime === true));
  const add= (item, clear) =>{
      item = Object.assign({}, item)

      if (editedIndex.value > -1) {
        props.items.splice(editedIndex.value, 1, item)


      }
      else {

        props.items.push(item);

      }

      emit('after', props.items);
      editedIndex.value=-1;
      clear();
      close();

    };

    const dialog =  ref(false)

    const open = ()=>dialog.value=true;

    const editItem=(item)=> {

      editedIndex.value = props.items.indexOf(item);
      editedItem.value = Object.assign({}, item);
      console.log("Item Passed", editedItem.value)
       emit('setData', editedItem.value);
      open();


    };

    const deleteItem= (item)=> {
      editedIndex.value = props.items.indexOf(item);
      editedItem.value = Object.assign({}, item);
      dialogDelete.value = true;
    };

    const deleteItemConfirm=() =>{
      props.items.splice(editedIndex.value, 1);
   closeDelete();
    };

    const close= async ()=> {
      dialog.value = false;
      await nextTick();
      editedItem.value= {};
      editedIndex.value =-1;

    };


    const closeDelete= async () =>{
    dialogDelete.value = false;
    await nextTick()
    editedItem.value= {};
    editedIndex.value =-1;
    };

    const formatData=(header, value) =>{
      return funcs.formatData(header, value);
    };


</script>

<template>
  <v-data-table
    :headers="headers"
    :items="items"
    class="elevation-1"
    :loading="loading"
    :items-per-page="20"
    width="100%"
    :items-length="20"
    dense
  >
    <template v-slot:top>
      <v-toolbar flat>
        <v-toolbar-title v-if="title">{{ title }}</v-toolbar-title>
        <v-divider class="mx-4" inset vertical></v-divider>
        <v-spacer></v-spacer>
        <template v-if="component">
          <div>
            <v-btn class="mb-2" color="primary" dark @click="open">
              <v-icon>mdi-plus-thick</v-icon> Add
            </v-btn>
            <v-dialog v-model="dialog" max-width="1000px">
              <component
                v-bind:is="component"
                :dialog="dialog"
                @add="add"
                @edit="editItem"
                @cancel="close"
                :buttonLabel="buttonLabel"
                :data="editedItem"
              />
            </v-dialog>
          </div>
        </template>

        <v-dialog v-model="dialogDelete" max-width="500">
          <v-card>
            <v-card-title class="text-h5"
              >Are you sure you want to delete this item?</v-card-title
            >
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

    <template
      v-for="(header, i) in toFormatHeaders"
      v-slot:[`item.${header.key}`]="{ item }"
    >
      <span :key="i"> {{ formatData(header, item[header.key]) }} </span>
    </template>
  </v-data-table>
</template>

<!--
<script setup>
import funcs from '../utils/funcs';
import constants from '@/utils/constants';
import {ref, computed} from 'vue'

  const props = defineProps( {
    title: String, headers: Array, items: Array, component: Object, maxWidth: String,
    loading: { type: Boolean, default: false }, dialog: { type: Boolean, default: false }
  });
  const dialogDelete = ref(false);
  const editedIndex = ref(-1);
  const editedItem = ref({});
  const passedMode = ref(3);
  const buttonLabel= constants.buttonTexts.done;
  const toFormatHeaders =  computed(()=>props.headers.filter(h => h.isNumeric === true || h.isDate === true || h.isDateTime === true))

  data: () => ({
    dialogDelete: false,
    editedIndex: -1,
    editedItem: {},
    passedMode: 3,

    buttonLabel: constants.buttonTexts.done;




  }),

  computed: {

    innerDialog() {
      return this.dialog;
    },


    toFormatHeaders() {
      return this.headers.filter(h => h.isNumeric === true || h.isDate === true || h.isDateTime === true);
    },
    showTitle() {
      if (!this.title) return false;
      return this.title.length > 0;
    }


  },

  watch: {


    dialogDelete(val) {
      val || this.closeDelete();
    },
  },

  created() { },

  methods: {

    add(item, clear) {
      item = Object.assign({}, item)

      if (this.editedIndex > -1) {
        this.items.splice(this.editedIndex, 1, item)


      }
      else {

        this.items.push(item);

      }
      this.editedIndex=-1;
      clear();
      this.close();
    },

    editItem(item) {

      this.editedIndex = this.items.indexOf(item);
      this.editedItem = Object.assign({}, item);
      console.log("Item Passed", this.editedItem)
      this.$emit('setData', this.editedItem);
      this.open();


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
      this.$emit('close');
      this.$nextTick(() => {
        this.editedItem = {};
        this.editedIndex = -1;
      });
    },

    open() {
      this.$emit('open');


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
</script> -->
