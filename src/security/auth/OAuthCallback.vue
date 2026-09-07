<template>
  <div class="d-flex flex-column justify-center align-center" style="min-height: 60vh">
    <v-progress-circular indeterminate color="primary" size="64" />
    <div v-if="errorMessage" class="mt-4 text-error text-body-1">
      {{ errorMessage }}
    </div>
    <v-btn v-if="errorMessage" class="mt-4" color="primary" @click="retryLogin">
      Return to Login
    </v-btn>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useAuthStore } from "@/store/authstore";
import { authService } from "./AuthService";

const route = useRoute();
const router = useRouter();
const authStore = useAuthStore();
const errorMessage = ref(null);

const retryLogin = async () => {
  authStore.clear();
  const config = await authService.getClientConfig();
  await authService.login(config, "/");
};

onMounted(async () => {
  try {
    const code = route.query.code;
    const state = route.query.state;
    if (!code) {
      throw new Error("No authorization code found in callback query parameters.");
    }
    const result = await authService.exchangeCode(code, state);
    let userContext = null;
    try {
      userContext = await authService.getUserContext(result.tokens.access_token);
    } catch (e) {
      console.warn("Failed to fetch backend user-context, decoding token directly", e);
    }
    await authStore.setTokens(result.tokens, userContext);
    const destination = (result.returnTo && !result.returnTo.startsWith("/oauth/callback")) ? result.returnTo : "/";
    await router.replace(destination);
  } catch (error) {
    console.error("OAuth callback failed:", error);
    errorMessage.value = error.message || "Authentication callback failed";
    authStore.clear();
    setTimeout(() => {
      router.replace("/");
    }, 2500);
  }
});
</script>
