<!-- v-if="photoUrl"  -->
<template >
    <!-- <v-img :max-height="tWidth" :max-width="tHeight"  :src="photoUrl"></v-img> -->

    <div class="d-flex justify-space-around">
        <v-menu v-model="menu" :close-on-click="closeOnClick"  offset-y>
            <template v-slot:activator="{ props }">

                <v-img :max-height="tWidth" :max-width="tHeight" :src="photoUrl" v-bind="props"
                    @click.left.prevent="menu = false" @click.right.prevent="menu = true"></v-img>

            </template>
            <v-list>
                <v-list-item v-for="(item, index) in items" :key="index" :value="index">
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item>
            </v-list>
        </v-menu>
    </div>
</template>



     
  
<script>
import funcs from '../utils/funcs';
export default {
    name: "SImage",
    props: ["imageData", "width", "height", "items"],
    data: () => ({
        photoUrl: null,
        menu: false,
        closeOnClick: true,
    }),

    async mounted() {
        await this.setPhotoUrl();

    },
    computed: {

        // photoUrl() {


        // },
        tWidth() {
            return this.width || 200;
        },

        tHeight() {
            return this.height || 200;
        },


    },
    watch: {


    },
    methods: {
        async setPhotoUrl() {
            this.photoUrl = '';
            if (this.imageData) {
                try {
                    let file = await funcs.createFileFromBytes(this.imageData);
                    this.photoUrl = URL.createObjectURL(file);
                } catch (e) {
                    console.log("Failed to create image url ", e)
                    //   this.photoUrl=    "https://cdn.vuetifyjs.com/images/parallax/material.jpg";
                }
            } else {
                // return null;
                //   this.photoUrl=   "https://cdn.vuetifyjs.com/images/parallax/material.jpg";

            }
        }


    },
};
</script>