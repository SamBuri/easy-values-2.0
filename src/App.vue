<template>
  <v-app>
    <v-navigation-drawer app v-model="drawer" :width="300" color="primary" v-if="authStore.authenticated">
      <SideBarNav :nav-items="navData.tree" :capitalize="true" variant="list" density="comfortable" title-class="text-subtitle-1" />
    </v-navigation-drawer>

    <v-app-bar app flat border v-if="authStore.authenticated">
      <v-app-bar-nav-icon @click="drawer = !drawer" />

      <v-toolbar-title class="font-weight-bold mr-3">Easy Values</v-toolbar-title>

      <v-spacer></v-spacer>

      <div v-if="branchStore.currentBranch" class="mx-4 d-flex align-center">
        <v-icon start color="primary" class="mr-2">mdi-office-building-marker</v-icon>
        <span class="text-subtitle-2 font-weight-bold">
          {{ branchStore.currentUserCompany?.companyName || 'Easy Values' }} - {{ branchStore.getBranchName }}
        </span>
        <v-btn icon="mdi-chevron-down" variant="text" density="comfortable" @click="currentBranchDialog = true" class="ml-1"></v-btn>
        
        <v-dialog v-model="currentBranchDialog" width="900" persistent>
          <current-branch :dialog="true" @close="closeCurrentBranch" />
        </v-dialog>
      </div>

      <top-right-menu :menu-items="[
        { title: 'Organisation Profile', icon: 'mdi-office-building-cog', to: '/organisation-profile' },
        { title: 'Security Profile', icon: 'mdi-shield-account', to: '/profile' }
      ]" />
    </v-app-bar>

    <v-main>
      <v-container fluid>
        <router-view />
      </v-container>
    </v-main>

    <v-footer app border v-if="authStore.authenticated" class="d-flex justify-center pa-2">
      <span class="text-caption text-grey">© Powered by Capidattex Consults Ltd</span>
    </v-footer>
  </v-app>
</template>

<script setup>
import { SideBarNav, TopRightMenu, useThemeResolver } from 'saburi-vue-utils';
import navData from './nav/NavData';
import CurrentBranch from './organisation/branch/CurrentBranch.vue';
import { useAuthStore } from './store/authstore';
import { defineBranchStore } from './organisation/branch/BranchStore';
import { ref, onMounted } from 'vue';

const drawer = ref(null);
const authStore = useAuthStore();
const branchStore = defineBranchStore();
const currentBranchDialog = ref(false);
const { resolveAndApply } = useThemeResolver();

const closeCurrentBranch = () => {
  currentBranchDialog.value = false;
};

onMounted(async () => {
  try {
    await resolveAndApply();
    if(authStore.authenticated && !branchStore.currentBranch) currentBranchDialog.value = true;
  } catch (e) {
    console.error('Failed to initialize app:', e);
  }
});
</script>

<style>
/* Theme-aware alternating table row background */
.v-table .v-table__wrapper > table > tbody > tr:nth-of-type(even) {
  background-color: rgba(var(--v-theme-on-surface), 0.02);
}

.v-table .v-table__wrapper > table > tbody > tr:nth-of-type(odd) {
  background-color: rgba(var(--v-theme-on-surface), 0.04);
}

.v-table .v-table__wrapper > table > tbody > tr:hover {
  background-color: rgba(var(--v-theme-primary), 0.08) !important;
}

.v-data-table-header th {
  font-weight: 600 !important;
}
</style>
