
<template >
    <v-card :max-height="tWidth" :max-width="tHeight">
        <v-img :max-height="tWidth" :max-width="tHeight" v-if="photoUrl"  :src="photoUrl"></v-img>
    </v-card>
   
   
</template>
     
  
<script>
import funcs from '../utils/funcs';
export default {
    name: "SImage",
    props: ["imageData", "width", "height"],
    data: () => ({
        photoUrl:null,
    }),
    computed: {

        // photoUrl() {
            
            
        // },
        tWidth() {
            return this.width || 400;
        },

        tHeight() {
            return this.height || 400;
        }

    },
    watch: {
        async imageData(){
          
            if (this.imageData) {
                try{
                    let file = await funcs.createFileFromBytes(this.imageData);
                this.photoUrl= URL.createObjectURL(file);
                }catch(e){
                    console.log("Failed to create image url ", e)
                    this.photoUrl=  "https://cdn.vuetifyjs.com/images/parallax/material.jpg";
                }
            } else {
                // return null;
                this.photoUrl=  "https://cdn.vuetifyjs.com/images/parallax/material.jpg";

            }
        }

    },
    methods: {


    },
};
</script>