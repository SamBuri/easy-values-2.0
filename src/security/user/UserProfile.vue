<script setup>
import { useAuthStore } from '../../store/authstore';
const authStore = useAuthStore();
</script>

<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="8" offset-md="2">
        <v-card class="elevation-2 rounded-lg">
          <v-toolbar color="primary" flat title="User Profile">
          </v-toolbar>
          <v-card-text class="pa-6">
            <v-list>
              <v-list-item class="mb-4">
                <template v-slot:prepend>
                  <v-avatar color="primary" size="48" class="text-white mr-4">
                    <v-icon size="28">mdi-account</v-icon>
                  </v-avatar>
                </template>
                <v-list-item-title class="text-h6 font-weight-bold">{{ authStore.user?.fullName }}</v-list-item-title>
                <v-list-item-subtitle class="text-caption text-grey">Full Name</v-list-item-subtitle>
              </v-list-item>
              
              <v-list-item class="mb-4">
                <template v-slot:prepend>
                  <v-icon class="mr-4" color="primary">mdi-account-circle</v-icon>
                </template>
                <v-list-item-title class="text-body-1 font-weight-medium">{{ authStore.user?.username }}</v-list-item-title>
                <v-list-item-subtitle class="text-caption text-grey">Username</v-list-item-subtitle>
              </v-list-item>

              <v-list-item class="mb-4">
                <template v-slot:prepend>
                  <v-icon class="mr-4" color="primary">mdi-email</v-icon>
                </template>
                <v-list-item-title class="text-body-1 font-weight-medium">{{ authStore.user?.email || 'N/A' }}</v-list-item-title>
                <v-list-item-subtitle class="text-caption text-grey">Email Address</v-list-item-subtitle>
              </v-list-item>

              <v-list-item class="mb-4">
                <template v-slot:prepend>
                  <v-icon class="mr-4" color="primary">mdi-account-details</v-icon>
                </template>
                <v-list-item-title>
                  <v-chip
                    v-for="role in authStore.user?.roles"
                    :key="role"
                    size="small"
                    color="primary"
                    variant="tonal"
                    class="mr-1 mb-1"
                  >
                    {{ role }}
                  </v-chip>
                  <span v-if="!authStore.user?.roles || authStore.user?.roles.length === 0" class="text-grey text-body-2">No roles assigned</span>
                </v-list-item-title>
                <v-list-item-subtitle class="text-caption text-grey">Assigned Roles</v-list-item-subtitle>
              </v-list-item>
            </v-list>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
