<template>
 
  <v-container fluid>
    <v-row>
     <loan-dashboard></loan-dashboard>
    </v-row>
  </v-container>
</template>

<script>

import LoanDashboard from '../loan/loaddashboard/LoanDashboard.vue';

export default {
  name: 'Home',
  components: { LoanDashboard},
  data: () => ({
   
  }),

  computed: {
    currentUser() {
      return this.$store.state.security.user.currentUser;
    }
  },
  methods: {

  }


}
</script>
