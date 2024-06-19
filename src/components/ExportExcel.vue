<template>
    <v-btn @click="exportExcel" text>
        <slot></slot>
    </v-btn>
</template>

<script>
// var XLSX = require("xlsx");
import funcs from '../utils/funcs'

export default {
    name: "ExportEcel",
    props: {
        columns: {
            type: Array,
            default: () => []
        },
        data: {
            type: Array,
            default: () => []
        },
        fileName: {
            type: String,
            default: 'excel'
        },
        sheetName: {
            type: String,
            default: 'SheetName'
        },
        fileType: {
            type: String,
            default: 'xlsx',
            validator: (val) => ['xlsx', 'xls'].includes(val)
        }
    },

    methods: {
        exportExcel() {

            let options = {
                columns: this.columns,
                data: this.data,
                fileName: this.fileName,
                fileType: this.fileType,
                sheetName: this.sheetName

            }

            return funcs.exportExcel(options)

        }
    }
}
</script>
