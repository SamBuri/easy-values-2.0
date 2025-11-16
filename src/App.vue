<template>
  <v-app>
    <v-navigation-drawer app dark v-model="drawer" :width="325" v-if="authStore.authenticated && tenantStore.firstTenant">
      <side-bar-nav />
    </v-navigation-drawer>

    <v-app-bar app color="primary" dark dense v-if="authStore.authenticated && tenantStore.firstTenant">
      <v-app-bar-nav-icon @click="drawer = !drawer" />

      <v-toolbar-title class="mr-3">Easy Values</v-toolbar-title>

      <div  class="mx-3">
        <v-icon small>mdi-source-branch</v-icon>{{ branchStore.getBranchName }}
        <v-icon small @click="currentBranchDialog = true">mdi-arrow-down-drop-circle-outline</v-icon>
        <v-dialog v-model="currentBranchDialog" width="300" persistent>
          <current-branch :dialog="currentBranchDialog" @close="closeCurrentBranch" />
        </v-dialog>
      </div>

      <v-spacer></v-spacer>
      <div>
        <top-right-menu />
      </div>
    </v-app-bar>

    <v-main>
      <!-- <loading-page v-if="tenantStore.isFirstTenantLoading || tenantStore.tenantError || !tenantStore.firstTenant" :tenant-store="tenantStore" /> -->
      <router-view  />
    </v-main>
    <v-footer app color="primary" dark dense v-if="authStore.authenticated && tenantStore.firstTenant">
      <p><span>@Powered by Capidattex Consults Ltd</span></p>
    </v-footer>
  </v-app>
</template>

<script setup>
import SideBarNav from './nav/SideBarNav.vue';
import TopRightMenu from './components/TopRightMenu.vue';
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
