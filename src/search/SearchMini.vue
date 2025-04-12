
<script setup>
import { ref, computed } from 'vue'
import funcs from '../utils/funcs';
import SnackBar from '../components/SnackBar.vue';

const props = defineProps({
    items: Array,
    headers: Array,
    mtdsProvided: Object,
    title: String
})

const emit = defineEmits(['close', 'ok'])

// Reactive state
const menuItems = ref([
    { title: "Add", icon: "mdi-plus" },
    { title: "Edit", icon: "mdi-pencil" },
    { title: "Delete", icon: "mdi-delete" },
])
const menuX = ref(0)
const menuY = ref(0)
const showMenu = ref(false)
const closeOnClick = ref(true)
const selectedItem = ref({})
const search = ref("")
const alignments = ref(["start", "center", "end"])
const dialogDelete = ref(false)
const defaultItem = ref({})

// Computed properties
const toFormatHeaders = computed(() => {
    return props.headers.filter(h => h.isNumeric === true || h.isDate === true || h.isDateTime === true)
})

// Methods
const onRowContextmenu = (event, data) => {
    event.preventDefault()

    props.items = Object.entries(data).map(([key, value]) => {
        return {
            id: key,
            value: value,
        }
    })
    
    showMenu.value = false
    menuX.value = event.clientX
    menuY.value = event.clientY
    
    nextTick(() => {
        showMenu.value = true
    })
}

const closeDialog = () => {
    emit("close")
}

const doubleClicked = (event, data) => {
    emit("ok", data.item)
    closeDialog()
}

const formatTableData = (header, item, value) => {
    return funcs.formatTableData(header, item, value)
}

const filterOnlyCapsText = (value, search, item) => {
    console.log("Search Item: ", item)
    return value != null &&
        search != null &&
        typeof value === 'string' &&
        value.toString().toLocaleUpperCase().indexOf(search) !== -1
}
</script>

<template>
    <div>
        <v-data-table :headers="headers" :items="items" :single-select="true" @dblclick:row="doubleClicked"
            class="elevation-1" fixed-header height="420px" dense :search="search">
            <template v-slot:top>
                <v-toolbar flat>
                    <v-toolbar-title>{{
                    title
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
            <template v-for="(header, i) in toFormatHeaders" v-slot:[`item.${header.key}`]="{ item }">
                <span :key="i"> {{ formatTableData(header, item, header.key) }} </span>
            </template>
        </v-data-table>

        <snack-bar />
    </div>
</template>

<!-- <template>
    <div>
        <v-data-table :headers="headers" :items="items" :single-select="true" @dblclick:row="doubleClicked"
            class="elevation-1" fixed-header height="420px" dense :search="search">
            <template v-slot:top>
                <v-toolbar flat>
                    <v-toolbar-title>{{
                    title
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

        toFormatHeaders() {
            return this.headers.filter(h => h.isNumeric === true || h.isDate === true || h.isDateTime === true);
        },

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
            this.$emit("close")

        },

   
    doubleClicked(event, data) {

        this.$emit("ok", data.item);

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
</script> -->
