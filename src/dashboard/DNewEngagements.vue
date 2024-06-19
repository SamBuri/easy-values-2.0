<template>
    <s-count-dashboard-card title="New Engagements"  :items="dashboardList"  :headers="headers"
    @open="open" @close="close" :dialog="dialog">
    </s-count-dashboard-card>
</template>

<script>
import engagementNav from '../customer/engagement/EngagementNav'
export default {
  name: 'DNewEngagements',
  props: ["title"],
  data: ()=>({
    toSumField: "",
    headers: engagementNav.menu.headers,
    dialog: false,

  }),

  created(){
    
      this.$store.dispatch("customer/engagement/getNewEngagements");
  },

  computed: {
       
       dashboardList(){
         return this.$store.state.customer.engagement.newEngagements;
       },

     
  },
  methods: {
    open() {
      this.dialog = true;
    },
    close() {
      this.dialog = false;
    }
  }
};
</script>