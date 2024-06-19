<template>
  <div>
    <slot
      name="table"
    />
  </div>
</template>
 
<script>
export default {
  name: "STableWrapper",
  props: {
    items: Array,
    objectTemplate: Object,
  },
  data: () => ({}),
  created() {
    // if (this.items.length <= 0) {
      // this.items.push(this.objectTemplate);
    // }
  },

  watch: {
    // items() {
    //   if (this.items.length <= 0) {
    //     this.items.push(this.objectTemplate);
    //   }
    // },
  },

  methods: {
    selectionChanged(option) {
      switch (option) {
        case 0:
          this.deleteRow();
          break;
      }
    },
    onRowClicked(data, item) {
      console.log("Item: ", item);
      console.log("Data: ", data);
      this.selectedItem = item;
    
      if (item.index === lastIndex && data.id.length ||data.id===" ") {
            var lastIndex = this.items.length - 1; 
           var lastItem = this.items[lastIndex];
          if(lastItem.id === ''){
             lastItem.id = " ";
          }

        this.items.push(this.objectTemplate);
      }
    },

    deleteRow() {
    //   this.selected.forEach((item) => {
    //     this.items = this.items.filter((itm) => itm.id !== item.id);
    //   });
    },
  },
};
</script>
<style>
table {
  min-width: 900px;
  width: 100%;
  height: fit-content;
  overflow-y: scroll;
  border-collapse: collapse;
  border: 1px solid;
}

td {
  border: 1px solid;
}

th {
  border: 1px solid;
}
</style>