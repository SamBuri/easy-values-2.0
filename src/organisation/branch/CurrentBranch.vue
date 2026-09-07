<script setup>
import { useRouter } from "vue-router";
import { defineBranchStore } from "./BranchStore";
import { ref, watch, onMounted } from "vue";

const props = defineProps(["dialog"]);
const emit = defineEmits(["close"]);

const router = useRouter();
const branchStore = defineBranchStore();
const selectedItem = ref(branchStore.currentBranch);

watch(
  () => branchStore.currentBranch,
  (newVal) => {
    if (newVal) {
      selectedItem.value = newVal;
    }
  },
  { immediate: true }
);

watch(
  () => branchStore.currentUserBranches,
  (list) => {
    if (list && list.length > 0 && !selectedItem.value) {
      selectedItem.value = branchStore.currentBranch || list[0];
    }
  },
  { immediate: true }
);

onMounted(() => {
  if (!selectedItem.value && branchStore.currentBranch) {
    selectedItem.value = branchStore.currentBranch;
  }
});

const set = () => {
  let target = selectedItem.value;
  if (typeof target === "string" || typeof target === "number") {
    target = branchStore.currentUserBranches.find((b) => String(b.id) === String(target)) || null;
  }
  if (target) {
    branchStore.setCurrentBranch(target);
  }

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
        Set {{ branchStore.currentUserCompany?.companyName || selectedItem?.company?.companyName || 'Organisation' }} Branch
        <v-spacer></v-spacer>
        <v-icon v-if="dialog" @click="$emit('close')">mdi-close</v-icon>
      </v-toolbar>
    </v-card-title>

    <v-card-text>
      <v-autocomplete
        :items="branchStore.currentUserBranches"
        v-model="selectedItem"
        density="compact"
        item-title="display"
        item-value="id"
        return-object
        :loading="branchStore.currentUserBranchesLoading"
        placeholder="Select a branch"
        label="Branch"
      ></v-autocomplete>
    </v-card-text>

    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="primary" @click="set" id="set">Set Branch</v-btn>
    </v-card-actions>
  </v-card>
</template>

