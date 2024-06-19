<script>
export default {
    data: ()=>({

    }),
    methods: {
      saveClicked() {
        this.$store.commit("search/selectedData", []);
        this.$store.commit("search/dialog", true);
        this.selectedItem = {};
      },

      editClicked(items) {
        this.$store.commit("search/selectedData", items);
        this.$store.commit("search/dialog", true);
        this.selectedItem = {};
      },

      deleteItemConfirm(items) {
        this.$store.dispatch("search/delete", items[0].value.id);
        this.selectedItem = {};
      },

      republishClicked(items) {
        this.$store.dispatch("search/republish", items[0].value.id);
        this.selectedItem = {};
      },
    }
}
</script>