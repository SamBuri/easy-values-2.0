<template>
  <v-card>
    <v-card-title class="headline">{{message}}</v-card-title>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="blue darken-1" text @click="emitCancel">Cancel</v-btn>
      <v-btn color="blue darken-1" text @click="emitConfirm">OK</v-btn>
      <v-spacer></v-spacer>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "SConfirmDialog",
  props: ["message"],
  data: () => ({
  }),
  methods: {
    emitConfirm() {
      this.$emit("confirm");
    },
    emitCancel() {
      this.$emit("cancel");
    },
  },
};
</script>