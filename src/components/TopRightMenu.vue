<script setup>
     import { useAuthStore } from '@/store/authstore';
     const authStore = useAuthStore();

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
                >Logged in as {{ authStore.user.fullName }}</v-list-item-title
              >
            </v-list-item-content>
          </v-list-item>
          <v-list-item @click="authStore.logout">

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
