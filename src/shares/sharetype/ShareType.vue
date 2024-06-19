<template>
  <crud-form @save="save" @update="update" @search="search" @updateDialog="updateDialog" @reset="reset" @done="done"
    @updateCrudTableDialog="updateCrudTableDialog" @resetCrudTableDialog="resetCrudTableDialog" :path="path"
    :maxWidth="maxWidth" :showPrintPrompt="showPrintPrompt" @print="print">
    <template slot="heading">Share Type</template>

    <template slot="form-data" slot-scope="{ isUpdate }">
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-text-field label="Name" v-model="shareType.name" :rules="nameRules" :counter="40"></v-text-field>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-number-input label="Unit Price" v-model="shareType.unitPrice" :rules="unitPriceRules"
          :counter="100"></s-number-input>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-number-input label="Dividend Percent" v-model="shareType.dividendPercent" :rules="dividendPercentRules"
          :counter="100"></s-number-input>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md" v-if="isUpdate">
        <v-checkbox label="Hidden" v-model="shareType.hidden"></v-checkbox>
      </v-col>
    </template>
  </crud-form>
</template>
<script>

import shareTypeModel from "./ShareTypeModel";
export default {
  components: {},
  name: "ShareType",
  data: () => ({
    cols: 12,
    sm: 6,
    md: 6,
    maxWidth: 700,
    path: shareTypeModel.path,
    shareType: shareTypeModel.shareType,
    nameRules: [(v) => !!v || "Name is required",
    (v) => v.length < 40 || "Name length must be less or equal to 40",], unitPriceRules: [(v) => !!v || "Unit Price is required",
    ], dividendPercentRules: [(v) => !!v || "Dividend Percent is required",
    ],

    showPrintPrompt: true,
  }),
  created() { },
  computed: {},

  watch: {},

  methods: {
    save() {
      this.$store.dispatch("post", { path: this.path, body: this.shareType });
    },
    update() {
      this.$store.dispatch("put", { path: `${this.path}/${this.shareType.id}`, body: this.shareType });
    },
    updateDialog() {
      var obj = this.$store.state.search.selectedData[0].value;
      this.setDialog(obj);
    },
    async search() {
      var obj = this.$store.state.obj;
      this.shareType = Object.assign({}, obj);
      this.setObjects(obj);
    },
    reset() {
      this.shareType.clear();
    },
    setObjects(obj) {
      console.log(obj);
    }, setDialog(obj) {
      this.shareType = Object.assign({}, obj);
      this.setObjects(obj);
    },
    done() {
      this.$store.commit(
        "crudtable/data",
        Object.assign({}, this.shareType)
      );
    },
    updateCrudTableDialog() {
      this.setDialog(this.$store.state.crudtable.data);
    },
    resetCrudTableDialog() {
      this.reset();
    },
    print() {
      let data = [];
      data.push({ text: "Name", value: this.shareType.name });
      data.push({ text: "Unit Price", value: this.shareType.unitPrice });
      data.push({ text: "Dividend Percent", value: this.shareType.dividendPercent });

      let options = {
        data: data,
        startXPos: 10,
        startYPos: 25,
        lineBreak: 4,
        hSpace: 50,
        vSpace: 10,
        title: "Share Types"

      }

      this.makePDFDocument(options);
    },
  }
};
</script>
