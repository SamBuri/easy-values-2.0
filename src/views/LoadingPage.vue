<template>
    <v-container class="fill-height" fluid>
      <v-row align="center" justify="center">
        <v-col cols="12" class="text-center">
          <div v-if="isLoading">
            <v-progress-circular indeterminate color="primary" size="64" />
            <p class="mt-4">Please Wait...</p>
          </div>
          <div v-else-if="error">
            <v-alert type="error" dense>
              Failed to initialize: {{ error }}
            </v-alert>
            <v-btn color="primary" @click="retryInitialization">Retry</v-btn>
            <p class="mt-4">If the issue persists, please contact support.</p>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script setup>
  import { defineTenantStore } from '@/organisation/tenant/TenantStore';
  import { useAuthStore } from '@/store/authstore';
  import { useRouter } from 'vue-router';
  import { ref, onMounted } from 'vue';
  // import initKeyCloak from '@/keycloak/InitKeyCloak';
  import keycloakService from '@/keycloak/keycloakService';
  
  const tenantStore = defineTenantStore();
  const authStore = useAuthStore();
  const router = useRouter();
  
  const isLoading = ref(true);
  const error = ref(null);
  
  const initializeApp = async () => {
    isLoading.value = true;
    error.value = null;
  
    try {
      await keycloakService.initKeycloak();
      
      // Check if already initialized
      if (tenantStore.firstTenant && authStore.authenticated) {
       
        router.push({name:'dashboard'});
       
        return;
      }
  
      // Fetch the first tenant
      await tenantStore.getFirstTenant();
  
      // Check if tenant was found
      if (!tenantStore.firstTenant) {
        throw new Error('No tenant found for this host');
      }
  
      // Initialize Keycloak
     try{
        await keycloakService.initKeycloak();}
      catch (e) {
        console.error('Keycloak initialization failed:', e);
        throw new Error('An expected error.');
      }
    
  
      // Check if authentication succeeded
      if (!authStore.authenticated) {
        throw new Error('Authentication failed');
      }
  
      // Redirect to the homepage
     
      router.push({name:'dashboard'});
    } catch (e) {
      console.error('Initialization failed:', e);
      error.value = e.message;
    } finally {
      isLoading.value = false;
    }
  };
  
  const retryInitialization = () => {
    initializeApp();
  };
  
  onMounted(() => {
    initializeApp();
  });
  </script>