<template>
    <s-count-dashboard-card title="Due Engagements"  :items="dashboardList"  :headers="headers"
    @open="open" @close="close" :dialog="dialog">
    </s-count-dashboard-card>
</template>

<script>
import engagementNav from '../customer/engagement/EngagementNav'
export default {
  name: 'DDueEngagements',
  props: ["title"],
  data: ()=>({
    toSumField: "",
    headers: engagementNav.menu.headers,
    dialog: false,

  }),

  created(){
    
      this.$store.dispatch("customer/engagement/getDueEngagements");
  },

  computed: {
       
       dashboardList(){
         return this.$store.state.customer.engagement.dueEngagements;
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