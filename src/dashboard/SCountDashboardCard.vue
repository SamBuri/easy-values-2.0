<template>
  <v-card color="transparent">
    <v-card-title>{{ title }}</v-card-title>
    <v-card-text>
      <h2>
        <p>Count: <v-chip :color="color" @click="open">{{ count }}</v-chip></p>
      </h2>
      <h2>
        <p v-if="showSum">
          Value: <v-chip>{{ amount }}</v-chip>
        </p>
      </h2>
      <v-dialog v-model="model" persistent>
        <search-mini :mtdsProvided="mtdsProvided" @close="close" :items="items" :headers="headers" />
      </v-dialog>
    </v-card-text>
  </v-card>
</template>

<script>
import funcs from '../utils/funcs';
export default {
  name: 'SCountDashboardCard',
  props: ["title", "items", "toSumField", "headers", "dialog"],
  data: () => ({
    width: 1000,
    mtdsProvided: true,
    model: false,
  }),

  computed: {
    count() {
      if (!this.items) return 0;
      return this.items.length;
    },



    amount() {
      if (!this.items) return 0;
      if (!this.toSumField) return 0;

      return funcs.formatNumber(this.items.filter(a=>a[this.toSumField]>=0).map((a) => a[this.toSumField]).map(Number).reduce((a, b) => a + b, 0));
    },

    createDialog() {
      return this.headers && this.count > 0;
    },

    color() {
      return this.createDialog ? "primary" : "";
    },

    showSum() {
      if (!this.toSumField) return 0;
      return this.toSumField.length > 0
    }


  },


  methods: {

    open() {
      this.$emit("open")
    },

    close() {
      this.$emit("close")
    }
  },

};
</script>

