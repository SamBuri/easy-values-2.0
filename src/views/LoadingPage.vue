<!-- <script setup>
import { defineTenantStore } from '@/organisation/tenant/TenantStore';
import { useAuthStore } from '@/store/authstore';
import { useRouter } from 'vue-router';
import { ref, onMounted } from 'vue';
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
    console.log('Starting app initialization...');

    if (tenantStore.firstTenant && authStore.authenticated) {
      console.log('Already initialized, redirecting to dashboard');
      // router.push({ name: 'dashboard' });
      return;
    }

    console.log('Fetching first tenant...');
    await tenantStore.getFirstTenant();
    console.log('Tenant fetched:', tenantStore.firstTenant);

    if (!tenantStore.firstTenant) {
      throw new Error('No tenant found for this host');
    }

    console.log('Initializing Keycloak...');
    try {
      await keycloakService.initKeycloak();
      console.log('Keycloak initialized successfully');
    } catch (e) {
      console.error('Keycloak initialization failed:', e);
      throw new Error(`Keycloak initialization failed: ${e.message}`);
    }

    if (!authStore.authenticated) {
      throw new Error('Authentication failed');
    }

    console.log('Redirecting to dashboard...');
    router.push({ name: 'dashboard' });
  } catch (e) {
    console.error('Initialization failed:', e);
    error.value = e.message;
  } finally {
    console.log('Initialization complete, setting isLoading to false');
    isLoading.value = false;
  }
};

const retryInitialization = () => {
  initializeApp();
};

onMounted(() => {
  initializeApp();
});
</script> -->