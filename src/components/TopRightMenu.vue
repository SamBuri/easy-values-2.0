<script setup>
     import { useAuthStore } from '@/store/authstore';
     const authStore = useAuthStore();
    import keycloakService from '@/keycloak/keycloakService';
    import { useRouter } from 'vue-router';
    const router = useRouter();
    const logout =  ()=> {
       let keycloak = keycloakService.getKeycloak();
       console.log("The keycloak Object, keycloak");
       
      // router.push({name: 'load'})
      if(keycloak) keycloak.logout();
      // await keycloakService..getlogout();
    }

</script>

<template>
  <div class="text-center">

    <v-menu>
            <template v-slot:activator="{ props }">
              <v-btn icon=" mdi-account-circle" v-bind="props"></v-btn>
            </template>

            <v-list dense v-if="authStore.authenticated">
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title
                >Logged in as {{ authStore.fullName }}</v-list-item-title
              >
            </v-list-item-content>
          </v-list-item>
          <v-list-item @click="logout">

            <template v-slot:prepend>
          <v-icon icon="mdi-logout"></v-icon>
        </template>

            <v-list-item-title>Logout</v-list-item-title>
          </v-list-item>
          <v-divider horizontal />

        </v-list>
          </v-menu>
  </div>
</template>
