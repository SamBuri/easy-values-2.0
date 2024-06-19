<template>
    <v-card flat :width = "formWidth" class="mx-auto mt-1 pa-1">
      <v-card-title class="headline">
          Profile
  
        </v-card-title>
      <v-tabs dense v-model="selectedTab"> 
        <v-tab>Bio Data</v-tab>
        <v-tab>Photo</v-tab>
      
        <v-tab-item>
          <bio-data :inner="inner"></bio-data>
        </v-tab-item>
  
        <v-tab-item>
          <profile-picture :inner="inner"></profile-picture>
        </v-tab-item>
      </v-tabs>
     
    </v-card>
  </template>
  <script>
  import BioData from './BioData.vue'
  import ProfilePicture from '../profilepicture/ProfilePicture.vue'
  export default {
    components: { BioData, ProfilePicture },
    name: "Profile",
    data: () => ({
      formWidth:1000,
      inner: true,
      selectedTab:0,
  
    }),
    created() {
  
    },
    
    computed: {
       profile(){
        return this.$store.state.profile.profile.entity;
       }
  
    },
  
    watch: {
       profile(){
         if(this.profile!==null){
          this.selectedTab=1;
         }
       }
  
    },
  
    methods: {
     
    },
  };
  </script>
  
 
  