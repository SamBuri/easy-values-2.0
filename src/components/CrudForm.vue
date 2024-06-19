<script setup>
import { ref, onMounted,computed, defineEmits } from "vue";
import { defineRootStore } from "@/root/RootStore";

const props = defineProps([
  "inner",
  "dialog",
  "data",
  "buttonLabel",
  "controller",
]);
const emit = defineEmits("done");
props.controller.props(props)
const rootState= props.controller.rootState;
const options = props.controller.options;
const isUpdate = props.controller.isUpdate;
// const buttonText = computed(()=>rootState.value.buttonText)
// const {
//   clear,
//   search,
//   cancelEdit,
//   editClicked,
//   editConfirmOk,
//   // options,
//   // rootState,
//   cancelDelete,
//   deleteOk,
//   deleteData,
//   isUpdate,
//   isPreview,
//   buttonText,
// } = props.controller();

const form = ref(null);
const idForm = ref(null);

// watch(
//   () => props.mode,
//   (value) => {
//     alert(value)
//     if (value) setButtonText(value);
//   }
// );

onMounted(() => {
  form.value.validate();
  if (!props.dialog) {
    props.controller.clear();
  }
});

const rootStore = defineRootStore();
</script>

<template>
  <v-card flat :max-width="options.maxWidth" class="mx-auto mt-0 pa-1">
    <v-toolbar flat v-if="!props.inner">
      <v-card-title>
        <!-- <span class="headline"> -->
        <slot name="heading"> </slot>
        <!-- </span> -->
      </v-card-title>
      <v-spacer></v-spacer>
      <v-btn color="primary" v-if="props.dialog" text @click="$emit('cancel')">
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </v-toolbar>
    <v-card-text>
      <!-- ID Form for searching -->

      <template v-if="rootState.showSearch">
        <v-form ref="idForm" v-model="rootState.idValid" @submit="controller.search">
          <v-container>
            <v-row>
              <v-col cols="10">
                <v-text-field
                  label="Id"
                  v-model="rootState.id"
                  hint="Enter the id. and press enter to load data"
                  v-on:keyup.enter="controller.search"
                  :rules="rootState.idRules"
                  required
                  @change="controller.clear"
                ></v-text-field>
              </v-col>
              <v-col cols="2">
                <v-btn
                  color="primary"
                  text
                  type="submit"
                  :disabled="!rootState.idValid"
                  :loading="rootStore.objLoading"
                  loading-text="Please Wait..."
                >
                  search
                </v-btn>
              </v-col>
            </v-row>
          </v-container>


        </v-form>
      </template>
      <v-form
        ref="form"
        v-model="rootState.valid"
        @submit="(e) => e.preventDefault"
      >
        <v-container>
          <v-row>
            <slot
              name="form-data"
              :isUpdate="controller.isUpdate"
              :isPreview="controller.isPreview"
            ></slot>
          </v-row>
        </v-container>
        <!-- <v-dialog v-model="$store.state.search.miniDialog" :max-width="formWidth" persistent>
            <search-mini />
          </v-dialog> -->

        <v-dialog v-model="rootState.confirmEdit" :max-width="500">
          <s-confirm-dialog
            :message="options.warningMsg"
            @confirm="controller.editConfirmOk"
            @cancel="controller.cancelEdit"
          />
        </v-dialog>

        <v-dialog v-model="rootState.confirmDelete" :max-width="500">
          <s-confirm-dialog
            :message="options.warningMsg"
            @confirm="controller.deleteOk"
            @cancel="controller.cancelDelete"
          />
        </v-dialog>
      </v-form>
    </v-card-text>

    <v-card-actions>
      <slot name="left-actions"></slot>
      <v-spacer></v-spacer>
      <slot name="card-actions" :valid="rootState.valid">
        <v-btn
          color="primary"
          v-if="props.dialog"
          text
          @click="$emit('cancel')"
        >
          Cancel
        </v-btn>
        <span
          ><v-checkbox
            label="Print"
            v-model="printData"
            v-if="options.showPrintPrompt"
          >
          </v-checkbox
        ></span>
        <v-btn
          color="primary"
          text
          @click="controller.editClicked"
          :loading="rootStore.loading"
          :disabled="!rootState.valid"
        >
          {{ rootState.buttonText }}
        </v-btn>

        <v-btn
          v-if="isUpdate"
          color="primary"
          text
          @click="controller.deleteData"
          :disabled="!rootState.valid"
          :loading="rootStore.deleteLoading"
        >
          Delete
        </v-btn>
      </slot>
    </v-card-actions>
    <snack-bar />
  </v-card>
</template>
