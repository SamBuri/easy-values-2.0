<template>
    <div>
        <v-data-table :headers="headers" :items="allItems" :loading="dataLoading" :hide-default-footer="hideFooter"
            :items-per-page="pageItems" :single-select="true" class="elevation-1" dense :search="search"
            :row-class="rowClass">

            <template v-slot:top v-if="title">
                <v-toolbar flat>
                    <v-toolbar-title>{{
                        title
                    }}</v-toolbar-title>
                    <!-- <v-divider class="mx-4" inset vertical></v-divider>
                    <v-text-field v-model="search" append-icon="mdi-magnify" label="Search" single-line hide-details>
                    </v-text-field>

                    <v-spacer></v-spacer>
                    <div>
                        <v-btn text @click="closeDialog">
                            <v-icon> mdi-close</v-icon>
                        </v-btn>
                        <v-spacer></v-spacer>

                    </div>

                    <v-menu v-model="showMenu" :position-x="menuX" :position-y="menuY" :close-on-click="closeOnClick"
                        absolute offset-y>
                        <v-list nav dense>
                            <v-list-item-group v-model="selectedItem" color="primary" return-object>
                                <v-list-item v-for="(item, i) in menuItems" :key="i">
                                    <v-list-item-icon>
                                        <v-icon small v-text="item.icon"></v-icon>
                                    </v-list-item-icon>

                                    <v-list-item-content>
                                        <v-list-item-title v-text="item.title"></v-list-item-title>
                                    </v-list-item-content>
                                </v-list-item>
                            </v-list-item-group>
                        </v-list>
                    </v-menu> -->


                </v-toolbar>
            </template>

            <template v-for="(header, i) in toFormatHeaders" v-slot:[`item.${header.key}`]="{ item }">
                <span :key="i"> {{ formatTableData(header, item, header.key) }} </span>
            </template>



        </v-data-table>

        <snack-bar />
    </div>
</template>


<script>
import funcs from '../utils/funcs';
import SnackBar from '../components/SnackBar.vue';
export default {
    components: { SnackBar },
    props: ['headers', 'items', 'loading', 'title', 'hideDefaultFooter', 'search', 'itemPerPage'],
    name: "SDataTable",
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
        alignments: ["start", "center", "end"],
        dialogDelete: false,
        defaultItem: {},
    }),
    computed: {

        dataLoading() {
            return this.loading || false;
        },
        hideFooter() {
            return this.hideDefaultFooter || false;
        },
        toFormatHeaders() {
            return this.headers.filter(h => h.isNumeric === true || h.isDate === true || h.isDateTime === true);
        },

        pageItems() {
            if (this.hideFooter) {
                return -1;
            }
            else {
                if (this.itemsPerPage) {
                    return this.itemsPerPage;
                }
                else {
                    return 20;
                }
            }
        },

        // getTotalRow() {
        //     let obj = {};

        //     for (let i = 0; i < this.headers.length; i++) {
        //         let h = this.headers[i]
        //         if (h.isNumeric) {
        //             obj[h.field] = funcs.sum(this.data, h.field)
        //         }
        //         else {
        //             if (i === 0) {
        //                 obj[h.field] = "Total";

        //             } else {
        //                 obj[h.field] = "";
        //             }
        //         }
        //     }

        //     console.log("obj created", obj)

        //     return obj;
        // },

        allItems() {
            let allItems = this.items
            if (this.items.length > 1) {
                let totalRow = funcs.getTotalRow(this.headers, this.items)
                console.log("Excetung all items ", totalRow)
                allItems.push(totalRow);
            }
            return allItems;
        }


    },
    watch: {

    },

    created() {

    },

    methods: {
        saveClicked() {
            this.$store.commit("search/selectedData", []);
            this.$store.commit("search/dialog", true);
            this.selectedItem = {};
        },

        editClicked() {
            this.$store.commit("search/selectedData", this.items);
            this.$store.commit("search/dialog", true);
            this.selectedItem = {};
        },

        deleteItemConfirm() {
            this.$store.dispatch("search/delete", this.items[0].value.id);
            this.closeDelete();
            this.selectedItem = {};
        },

        closeDelete() {
            this.dialogDelete = false;
        },

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
            this.$store.commit("search/miniDialog", false);
            this.$store.commit("search/miniSelected", { path: "", headers: [], name: "", });
            this.$store.commit("search/miniData", []);

        },

        resetMiniSelected() {
            this.$store.commit("search/miniSelected", { path: "", headers: [], name: "", });

        },

        doubleClicked(event, data) {
            this.$store.commit("search/selectedMiniItem", data.item);
            this.closeDialog();

        },


        formatTableData(header, item, value) {
            return funcs.formatTableData(header,item, value)
        },

        filterOnlyCapsText(value, search, item) {
            console.log("Search Item: ", item)
            return value != null &&
                search != null &&
                typeof value === 'string' &&
                value.toString().toLocaleUpperCase().indexOf(search) !== -1
        },

        rowClass(item) {
            if (item.isTotal) {
                return 'highlight-row';
            }
        },



    },
};
</script>

<style>
.highlight-row {
    background-color: yellow;
}
</style>
