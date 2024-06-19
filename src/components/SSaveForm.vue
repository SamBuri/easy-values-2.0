<template>
    <v-card flat :max-width="formWidth" class="mx-auto mt-0 pa-1">

        <v-toolbar flat>
            <v-card-title v-if="!isInner">
                <span class="headline">
                    <slot name="heading"> </slot>
                </span>

            </v-card-title>
            <v-spacer></v-spacer>
            <slot name="right"></slot>
            <span>
                <v-btn color="primary" v-if="showCancel" text @click="cancelClicked">
                    <v-icon>mdi-close</v-icon>
                </v-btn>
            </span>
        </v-toolbar>
        <v-card-text>


            <v-form ref="form" v-model="valid" @submit="(e) => e.preventDefault">
                <v-container>
                    <v-row>
                        <slot name="form-data"></slot>
                    </v-row>
                </v-container>
                <v-dialog v-model="$store.state.search.miniDialog" :max-width="formWidth" persistent>
                    <search-mini />
                </v-dialog>

                <v-dialog v-model="confirmEdit" :max-width="500">
                    <s-confirm-dialog :message="toWarnMsg" @confirm="editConfirmOk" @cancel="editConfirmCancel" />
                </v-dialog>


            </v-form>

        </v-card-text>

        <v-card-actions>
            <slot name="card-actions" :valid="valid">
                <v-spacer></v-spacer>
                <v-btn color="primary" v-if="showCancel" text @click="cancelClicked">
                    Cancel
                </v-btn>
                <v-checkbox label="Print" v-model="printData" v-if="showPrintCheck"> </v-checkbox>
                <v-btn color="primary" text @click="saveData" :loading="$store.state.loading" :disabled="!valid">
                    {{ buttonTex }}
                </v-btn>

                

            </slot>
        </v-card-actions>
        <snack-bar @reset="reset" />
        <slot name="afterForm"></slot>
    </v-card>
</template>
  
<script>
import constants from "../utils/constants";
import SnackBar from "./SnackBar.vue";
export default {
    name: "SSaveForm",
    props: ["path", "maxWidth", "warn", "warningMsg", "showPrintPrompt", "inner", 'isDialog'],
    components: {
        SnackBar,
    },
    data: () => ({
        responseMessage: "",
        errorMessage: "",
        id: "",
        valid: false,
        mode: 0,
        loading: false,
        deleteLoading: false,
        idRules: [(v) => !!v || "Please enter the Id"],
        confirmEdit: false,
        confirmDelete: false,
        printData: false,

    }),

    mounted() {
        this.printData = false;
        this.$refs.form.validate()
        
        

    },



    computed: {
        selectedData() {
            return this.$store.state.search.selectedData;
        },

        crudTableDialog() {
            return this.$store.state.crudtable.dialog;
        },
        buttonTex() {
            return "Save";
        },





        showPrintCheck() {
            return this.showPrintPrompt;
        },

        formWidth() {
            return this.maxWidth > 0 ? this.maxWidth : 700;
        },

        doWarining() {
            return this.warn
        },

        toWarnMsg() {
            return this.warningMsg || "Confirm Action?"
        },

        showCancel() {
            return this.isDialog;
        },

        componentData() {
            return this.$store.state.components.data;
        },

        isInner() {
            if (!this.inner) return false;
            return this.inner
        },

    },

    watch: {
        selectedData() {
            this.init();
        },


        $route() {
            this.mode = parseInt(this.$route.params.mode, 10);
            this.$emit("reset");
            this.init();
        },

        mode() {

            this.$store.commit("mode", this.mode);
        },
        results() {
            this.model = true;
        },
        componentData() {

            this.$nextTick(() => {
                this.$emit("componentDataChanged", this.componentData);
            });

        },

    },

    created() {

    },



    methods: {
        saveData() {

            this.confirmEdit = true;
        },
        


        printClicked() {
            this.$emit("print");
        },

        reset() {
            if (this.buttonTex === constants.buttonTexts.save) {
                let results = this.$store.state.results;
                if (results.success === true) {

                    if (this.printData) {
                        this.printClicked();
                    }
                    this.$store.commit("components/saveDialog", false);
                    this.$emit("reset");
                    this.postSave(results.entity);
                   
                }
            }
        },

        postSave(entity) {
            this.$emit('postSave', entity)
        },

        async searchData(e) {
            e.preventDefault();
            this.$refs.idForm.validate();
            if (!this.idValid) return;

            await this.$store.dispatch("get", `${this.path}/${this.id}`);
            this.$emit("search");
        },


        async deleteData() {

            await this.$store.dispatch("delete", `${this.path}/${this.id}`);
            this.id = "";
            this.$emit("reset");
            this.confirm = false;
            this.dialogAction = -1;
        },

        resetForm() {
            this.confirm = false;
            this.$emit("reset");
            this.$refs.form.reset();
        },
        cancelClicked() {
            this.$store.commit("components/saveDialog", false);
           
        },


        showEditConfirm() {
            this.confirmEdit = true;
        },

        editConfirmOk() {

            this.$emit("save");

            this.confirmEdit = false;
        },

        editConfirmCancel() {
            this.confirmEdit = false;
        },




    },
};
</script>