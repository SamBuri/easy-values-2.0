<template>
  <v-card flat :max-width="formWidth" class="mx-auto mt-0 pa-1">
  
    <v-toolbar flat>
      <v-card-title  v-if="!isInner">
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

      <!-- ID Form for searching -->
      <template v-if="showSearch">
        <v-form ref="idForm" v-model="idValid" @submit="searchData">
          <v-container>
            <v-row>
              <v-col cols="10">
                <v-text-field label="Id" v-model="id" hint="Enter the id. and press enter to load data"
                  v-on:keyup.enter="searchData" :rules="idRules" required @change="resetForm"></v-text-field>
              </v-col>
              <v-col cols="2">
                <v-btn color="primary" text type="submit" :loading="$store.state.objLoading"
                  loading-text="Please Wait...">
                  search
                </v-btn>
              </v-col>
            </v-row>
          </v-container>


          <!-- save update dialog -->

          <!-- <v-dialog v-model="confirmEdit" :max-width="500">
            <s-confirm-dialog message="toWarnMsg" @confirm="saveData" @cancel="cancelEdit" />
          </v-dialog> -->

        </v-form>
      </template>
      <v-form ref="form" v-model="valid" @submit="(e) => e.preventDefault">
        <v-container>
          <v-row>
            <slot name="form-data" :isUpdate="isUpdate" :isPreview="isPreview"></slot>
          </v-row>
        </v-container>
        <v-dialog v-model="$store.state.search.miniDialog" :max-width="formWidth" persistent>
          <search-mini />
        </v-dialog>

        <v-dialog v-model="confirmEdit" :max-width="500">
          <s-confirm-dialog :message="toWarnMsg" @confirm="editConfirmOk" @cancel="editConfirmCancel" />
        </v-dialog>

        <v-dialog v-model="confirmDelete" :max-width="500">
          <s-confirm-dialog :message="toWarnMsg" @confirm="deleteConfirmOk" @cancel="deleteConfirmCancel" />
        </v-dialog>

      </v-form>

    </v-card-text>

    <v-card-actions>
      <slot name="card-actions" :valid="valid">
        <v-spacer></v-spacer>
        <v-btn color="primary" v-if="showCancel" text @click="cancelClicked">
          Cancel
        </v-btn>
        <v-checkbox label="Print" v-model="printData" v-if="showPrintCheck">  </v-checkbox>
        <v-btn color="primary" text @click="saveData" :loading="$store.state.loading" :disabled="!valid">
          {{ buttonTex }}
        </v-btn>

        <v-btn v-if="isUpdate && deletable" color="primary" text @click="deleteClicked" :disabled="!valid" :loading="deleteLoading">
          Delete
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
  name: "CrudForm",
  props: ["path", "maxWidth", "warn", "warningMsg", "showPrintPrompt", "inner", "disableUpdate", 'deletable'],
  components: {
    SnackBar,
  },
  data: () => ({
    responseMessage: "",
    errorMessage: "",
    id: "",
    idValid: false,
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
    this.valid
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
      if (this.$store.state.crudtable.dialog) {
        return constants.buttonTexts.done;
      }
      if(this.disableUpdate) return constants.buttonTexts.save;
      return this.mode === 1? constants.buttonTexts.update 
        : this.mode === 2 ? constants.buttonTexts.print : constants.buttonTexts.save;
    },
    isUpdate() {
      return this.buttonTex === constants.buttonTexts.update;
    },
    showSearch() {
      if(this.disableUpdate) return false;
      return (
        (this.mode === 1 || this.mode === 2) &&
        !(this.$store.state.search.dialog || this.$store.state.crudtable.dialog)
      );
    },

    isPreview() {
       return this.mode === 2;
    },

    showPrintCheck(){
      return !this.isPreview && this.showPrintPrompt;
    },

    disabeUpdateButton() {
      return !this.valid;
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
      return this.$store.state.search.dialog || this.$store.state.crudtable.dialog || this.$store.state.components.dialog || this.isDialog;
    },

    componentData() {
      return this.$store.state.components.data;
    },

    isInner(){
         if(!this.inner) return false;
         return this.inner
       },

  },

  watch: {
    selectedData() {
      this.init();
    },

    crudTableDialog() {
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
    this.mode = parseInt(this.$route.params.mode, 10);
    this.init();
    this.valid;
  },

  // showEditConfirmDialog(buttonTex){
  //   if()
  //   this.editConfirmed = false;
  //     this.confirm = true;
  //     if(!this.editConfirmed){return}
  // }

  methods: {
    saveData() {
      // this.$refs.form.validate();
      if (!this.valid) return;


      if (this.buttonTex === constants.buttonTexts.done) {
        this.done();
      }
      else if (this.buttonTex === constants.buttonTexts.print) {
        this.printClicked();
      } else {
        this.confirmEdit = true;
      }

    },


    deleteClicked() {
      this.confirmDelete = true;
    },

    printClicked() {
      this.$emit("print");
    },

    reset() {
      if (this.buttonTex === constants.buttonTexts.save) {
        let results = this.$store.state.results;
        if (results.success === true) {
         
          if(this.printData){
            this.printClicked();
          }
          
        this.postSave(results.entity);
          this.$emit("reset");
        }
      }
    },

    postSave(entity){
      this.$emit('postSave',entity)
    },

    init() {
      if (this.$store.state.crudtable.dialog) {
        let data = this.$store.state.crudtable.data;
        if (JSON.stringify(data) === JSON.stringify({})) {
          this.$emit("resetCrudTableDialog");
        } else {
          this.$emit("updateCrudTableDialog");
        }
        return;
      }
      if (this.$store.state.search.dialog === true) {
        if (this.selectedData.length) {
          this.mode = 1;
          this.$emit("updateDialog");
        } else {
          this.mode = 0;
          this.$store.commit("obj", null);
          this.$emit("reset");
          
        }
      }
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
      // this.resetForm();
      if (this.$store.state.crudtable.dialog == true) {
        this.$store.commit("crudtable/dialog", false);
        this.$store.commit("crudtable/results", 0); // cancel
        return;
      }
      this.$store.commit("search/dialog", false);
      this.$store.commit("components/dialog", false);
      this.$store.commit("components/obj", null);

      if(this.close){
        this.$emit('close')
      }

    },

    done() {
      this.$emit("done");
      this.$store.commit("crudtable/dialog", false);
      this.$store.commit("crudtable/results", 1); // set the state to 1 for confirm done
    },

    showEditConfirm() {
      this.confirmEdit = true;
    },

    editConfirmOk() {


      if (this.buttonTex === constants.buttonTexts.update) {

        this.$emit("update");
      } else {
        this.$emit("save");
      }
      this.confirmEdit = false;
    },

    editConfirmCancel() {
      this.confirmEdit = false;
    },



    deleteConfirmOk() {
      this.deleteData();
      this.confirmDelete = false;
    },

    deleteConfirmCancel() {
      this.confirmDelete = false;

    }


  },
};
</script>