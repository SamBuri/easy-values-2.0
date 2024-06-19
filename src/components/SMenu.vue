<template>

<v-menu
        v-model="show"
        :position-x="posX"
        :position-y="posY"
        :close-on-click="closeBehavior"
        absolute
        offset-y
      >
        <!-- <v-list nav dense>
          <v-list-item-group
            v-model="selectedModel"
            color="primary"
            return-object
          >
            <v-list-item v-for="(item, i) in menuItems" :key="i">
              <v-list-item-icon>
                <v-icon small v-text="item.icon"></v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title v-text="item.title"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list> -->

        
        <slot/>
      </v-menu>
   
</template>
 
<script>
export default {
    name:"SMenu",
  props: { 
      menuX: {type: Number, default: 0},
      menuY:  {type: Number, default: 0},
      showMenu: {type: Boolean, default: false},
      closeOnClick:{type: Boolean, default: true},
      menuItems: Array
  },
  data: () => ({
    selectedModel: {}
   
  }),
  created() {
    
  },

  computed: {
    posX(){return this.menuX},
    posY(){return this.menuY},
    // selectedOption(){return this.model},
    
    show: {get: function () {return this.showMenu},
    set: function () {}},
    closeBehavior(){return this.closeOnClick}

  },

  watch: {
      selectedModel(){
          console.log("Any behavior", this.selectedModel);
          this.$emit("selectionChanged", this.selectedModel);
          
      }
  },

  methods: {
    
  },
};
</script>
