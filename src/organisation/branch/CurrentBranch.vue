<script setup>
import { useRouter } from "vue-router";
import { defineTenantStore } from "../tenant/TenantStore";
import { defineBranchStore } from "./BranchStore";
import { computed, ref } from "vue";

const props = defineProps(["dialog"]);
const emit = defineEmits(['close'])



const router = useRouter();
const tenantStore = defineTenantStore();
const branchStore = defineBranchStore();
const tenant = computed(() => tenantStore.firstTenant);
const selectedItem = ref(branchStore.currentBranch);
const set = () => {
  console.log("Selected Item", selectedItem)
 branchStore.setCurrentBranch(selectedItem.value);

  if (props.dialog) {
    emit("close");
  } else {
    router.push({ name: "dashboard" });
  }
};
</script>

<template>
  <v-card class="mx-auto mt-4 pa-1" max-width="520" tile>
    <v-card-title>
      <v-toolbar flat>
          Set a {{ tenantStore.getCurrentCompany.companyName }} Branch
          <v-spacer></v-spacer>
          <v-icon v-if="dialog" @click="$emit('close')"
            >mdi-close</v-icon
          ></v-toolbar>
    </v-card-title>

    <v-card-text>
       <v-autocomplete :items=" tenantStore.getCurrentTenantBranches" v-model="selectedItem" density="compact"
       item-title="branchName" item-value="id" return-object=""></v-autocomplete>
    </v-card-text>

    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn text color="primary" @click="set" id="set">Set</v-btn>
    </v-card-actions>
  </v-card>
</template>
