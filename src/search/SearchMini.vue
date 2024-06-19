<template>
    <div>
        <v-data-table :headers="heads" :items="data" :loading="$store.state.search.miniLoading" :single-select="true"
            @dblclick:row="doubleClicked" class="elevation-1" fixed-header height="420px" dense :search="search">
            <template v-slot:top>
                <v-toolbar flat>
                    <v-toolbar-title>{{
                    $store.state.search.miniSelected.name
                    }}</v-toolbar-title>
                    <v-divider class="mx-4" inset vertical></v-divider>
                    <v-text-field v-model="search" append-icon="mdi-magnify" label="Search" single-line hide-details>
                    </v-text-field>

                    <v-spacer></v-spacer>
                    <div>
                        <v-btn text @click="closeDialog">
                            <v-icon> mdi-close</v-icon>
                        </v-btn>
                        <v-spacer></v-spacer>

                    </div>




                </v-toolbar>
            </template>
            <template v-for="(header, i) in toFormatHeaders" v-slot:[`item.${header.value}`]="{ item }">
                <span :key="i"> {{ formatTableData(header, item, header.value) }} </span>
            </template>

        </v-data-table>
        <!-- <div class="text-center pt-2">
      <v-toolbar flat>
        <v-spacer></v-spacer>

        <v-pagination
          v-model="currentPage"
          :length="totalPages"
          :total-visible="8"
        ></v-pagination>
         {{ numberOfElements }} Out of: {{ totalElements }}
      </v-toolbar>
    </div> -->
        <snack-bar />
    </div>
</template>


<script>
import funcs from '../utils/funcs';
import SnackBar from '../components/SnackBar.vue';
export default {
    props: ['items', 'headers', 'mtdsProvided'],
    components: { SnackBar },
    name: "SearchMini",
    data: () => ({
       
        menuItems: [
            { title: "Add", icon: "mdi-plus" },
            { title: "Edit", icon: "mdi-pencil" },
            { title: "Delete", icon: "mdi-delete" },
        ],
        menuX: 0,
        menuY: 0,
        showMenu: false,
        closeOnClick: true,
        selectedItem: {},
        search: "",

        alignments: ["start", "center", "end"],
        dialogDelete: false,
        defaultItem: {},
    }),
    computed: {

        miniDialog() {
            return this.$store.state.search.miniDialog;
        },
        miniSelected() {
            return this.$store.state.search.miniSelected;
        },

        heads() {
            if(this.headers){
                return this.headers;
            }
             
              
             return this.$store.state.search.miniSelected.headers;
        },

        data() {
            if(this.items){
                return this.items;
            }

            return this.items||this.$store.state.search.miniData;
        },

      toFormatHeaders() {
            return this.heads.filter(h => h.isNumeric === true ||  h.isDate === true ||h.isDateTime === true);
     },

    },
    watch: {

    },

    created() {

    },

    methods: {
     

        onRowContextmenu(event, data) {
            event.preventDefault();

            this.items = Object.entries(data).map(([key, value]) => {
                return {
                    id: key,
                    value: value,
                };
            });
            // .sort((item1, item2) => item1.title.localeCompare(item2.title))
            this.showMenu = false;
            this.menuX = event.clientX;
            this.menuY = event.clientY;
            this.$nextTick(() => {
                this.showMenu = true;
            });
        },

        closeDialog() {
            if(this.mtdsProvided){
                this.$emit("close")
            }
           else{
            this.$store.commit("search/miniDialog", false);
            this.$store.commit("search/miniSelected", { path: "", headers: [], name: "", });
            this.$store.commit("search/miniData", []);
           }

        },

         resetMiniSelected() {
            if(!this.mtdsProvided){
             this.$store.commit("search/miniSelected", { path: "", headers: [], name: "", });
            }

        },

        doubleClicked(event, data) {
           if(this.mtdsProvided){
             this.$emit("ok", data.item);
           }
           else{
            this.$store.commit("search/selectedMiniItem", data.item);
           }

           this.closeDialog();

        },

        formatTableData(header, item, value) { return funcs.formatTableData(header, item, value); },


        filterOnlyCapsText(value, search, item) {
            console.log("Search Item: ", item)
            return value != null &&
                search != null &&
                typeof value === 'string' &&
                value.toString().toLocaleUpperCase().indexOf(search) !== -1
        },

    },
};
</script>