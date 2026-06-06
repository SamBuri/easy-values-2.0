<template>
  <v-app>
    <v-navigation-drawer app v-model="drawer" :width="300" color="primary" v-if="authStore.authenticated && tenantStore.firstTenant">
      <SideBarNav :nav-items="navData.tree" :capitalize="true" variant="list" density="comfortable" title-class="text-subtitle-1" />
    </v-navigation-drawer>

    <v-app-bar app flat border v-if="authStore.authenticated && tenantStore.firstTenant">
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
        { title: 'Security Profile', icon: 'mdi-shield-account', to: '/profile' }
      ]" />
    </v-app-bar>

    <v-main>
      <v-container fluid>
        <router-view />
      </v-container>
    </v-main>

    <v-footer app border v-if="authStore.authenticated && tenantStore.firstTenant" class="d-flex justify-center pa-2">
      <span class="text-caption text-grey">© Powered by Capidattex Consults Ltd</span>
    </v-footer>
  </v-app>
</template>

<script setup>
import { SideBarNav } from 'saburi-vue-utils';
import navData from './nav/NavData';
import CurrentBranch from './organisation/branch/CurrentBranch.vue';
// import LoadingPage from './views/LoadingPage.vue';
import { useAuthStore } from './store/authstore';
import { defineBranchStore } from './organisation/branch/BranchStore';
import { defineTenantStore } from './organisation/tenant/TenantStore';
import { ref, onMounted } from 'vue';
import { inject } from 'vue';
const keycloak = inject('keycloak')

console.log("Injected Keycloak", keycloak);

const drawer = ref(false);
const authStore = useAuthStore();
const branchStore = defineBranchStore();
const tenantStore = defineTenantStore();
const currentBranchDialog = ref(false);

const closeCurrentBranch = () => {
  currentBranchDialog.value = false;
};

onMounted(async () => {
  try {
    await tenantStore.getFirstTenant();
   if(!branchStore.currentBranch) currentBranchDialog.value = true;

  } catch (e) {
    console.error('Failed to initialize app:', e);

  }
});
</script>

<style>
tbody tr:nth-of-type(even) {
  background-color: rgba(236, 237, 237);
}

tbody tr:nth-of-type(odd) {
  background-color: rgb(250, 250, 250);
}

.v-data-table-header {
  background-color: rgba(182, 183, 187);
  color: white;
}

.v-data-footer {
  background-color: rgb(250, 250, 250);
}

.theme--light.v-data-table thead tr th {
  color: white;
}
</style>
