<script setup>
     import { useAuthStore } from '@/store/authstore';
     import initKeyCloak from '@/keycloak/InitKeyCloak';
     const authStore = useAuthStore();
    // import keycloakService from '@/keycloak/keycloakService';
    import { useRouter } from 'vue-router';
    const router = useRouter();
    const logout =  async ()=> {
       let keycloak = authStore.keycloak;
       
       console.log("The keycloak Object", keycloak);
       
      // router.push({name: 'load'})
      if(!keycloak) {
        console.log("Key Cloak is now");
        try{
          await initKeyCloak();
          keycloak = authStore.keycloak();
         
        }catch(e){
          console.log("Initializing Keycloak Failed "+e)
          
        }
      }
      if(keycloak.logout) await keycloak.logout();
      // router.push({name: 'load'})
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





