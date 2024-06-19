<template>
  <crud-form @save="save" @update="update" @search="search" @updateDialog="updateDialog" @reset="reset" @done="done"
    @updateCrudTableDialog="updateCrudTableDialog" @resetCrudTableDialog="resetCrudTableDialog" :path="path"
    :maxWidth="maxWidth" :showPrintPrompt="showPrintPrompt" @print="print">
    <template slot="heading">Share Transfer</template>

    <template slot="form-data">
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-select label="Transfer From" v-model="shareTransfer.transferFrom" :rules="transferFromRules"
          :items="$store.state.shares.shareholder.mini" :loading="$store.state.shares.shareholder.miniLoading"
          item-text="name" item-value="id" return-object></v-select>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-select label="Transfer To" v-model="shareTransfer.transferTo" :rules="transferToRules"
          :items="$store.state.shares.shareholder.mini" :loading="$store.state.shares.shareholder.miniLoading"
          item-text="name" item-value="id" return-object></v-select>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-date-picker label="Transfer Date" v-model="shareTransfer.transferDate" :rules="transferDateRules" /></v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-select label="Share Type" v-model="shareTransfer.shareType" :rules="shareTypeRules"
          :items="$store.state.shares.shareholdershares.shareholderShares"
          :loading="$store.state.shares.shareholdershares.shareholderSharesLoading" item-text="shareType.name"
          item-value="shareType.id" return-object></v-select>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-number-input label="Quantity" v-model="shareTransfer.quantity" :rules="quantityRules"
          :counter="100"></s-number-input>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-number-input label="Unit Price" v-model="shareTransfer.unitPrice" :rules="unitPriceRules" :counter="100"
          :disabled="true"></s-number-input>
      </v-col>

      <v-col :cols="cols" :sm="sm" :md="md">
        <s-number-input label="From Qty Balance" v-model="shareTransfer.fromQtyBalance" :counter="100"
          :disabled="true"></s-number-input>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-number-input label="From Balance" v-model="shareTransfer.fromBalance" :counter="100"
          :disabled="true"></s-number-input>
      </v-col>

      <v-col :cols="cols" :sm="sm" :md="md">
        <s-number-input label="To Qty Balance" v-model="shareTransfer.toQtyBalance" :counter="100"
          :disabled="true"></s-number-input>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-number-input label="To Balance" v-model="shareTransfer.toBalance" :counter="100"
          :disabled="true"></s-number-input>
      </v-col>

      <v-col :cols="cols" :sm="sm" :md="md">
        <s-number-input label="Amount" v-model="shareTransfer.amount" :rules="amountRules"
          :disabled="true"></s-number-input>
      </v-col>
    </template>
  </crud-form>
</template>
<script>

import shareTransferModel from "./ShareTransferModel";
export default {
  components: {},
  name: "ShareTransfer",
   data: () => ({
    cols: 12,
    sm: 6,
    md: 4,
    maxWidth: 1000,
    path: shareTransferModel.path,
    shareTransfer: shareTransferModel.shareTransfer,
    transferFromRules: [(v) => !!v || "Transfer From is required",
    ], transferToRules: [(v) => !!v || "Transfer To is required",
    ], transferDateRules: [(v) => !!v || "Transfer Date is required",
    ], shareTypeRules: [(v) => !!v || "Share Type is required",
    ], quantityRules: [(v) => !!v || "Quantity is required",
    ], unitPriceRules: [(v) => !!v || "Unit Price is required",
    ], amountRules: [(v) => !!v || "Amount is required",
    ],

    showPrintPrompt: true,
  }),
  created() {
    this.$store.dispatch("shares/shareholder/getMini");
    this.$store.dispatch("shares/sharetype/getMini");
  },
  computed: {
    transferFrom() {
      return this.shareTransfer.transferFrom;
    },
    transferTo() {
      return this.shareTransfer.transferTo;
    },


    toShareholderShare() {
      return this.$store.state.shares.shareholdershares.shareholderShare;
    },

    quantity() { return this.shareTransfer.quantity; },
    unitPrice() { return this.shareTransfer.unitPrice; },
    fromShareholderShare() { return this.shareTransfer.shareType },
    shareType() { return this.fromShareholderShare.shareType; }

  },

  watch: {
    transferFrom() {
      if (this.transferFrom) {
        this.shareTransfer.transferFromId = this.transferFrom.id;
        this.$store.dispatch("shares/shareholdershares/getShareholderShares", this.transferFrom.id);
      }
    },
    transferTo() {
      if (this.transferTo) {
        this.shareTransfer.transferToId = this.transferTo.id;
        this.setShareholderShare(this.shareType.id);
      }
    },
    fromShareholderShare() {

      if (this.fromShareholderShare) {
        this.shareTransfer.shareTypeId = this.shareType.id;
        this.shareTransfer.fromQtyBalance = this.fromShareholderShare.qtyBalance;
        this.shareTransfer.fromBalance = this.fromShareholderShare.balance;
        this.shareTransfer.unitPrice = this.shareType.unitPrice
        this.setShareholderShare(this.shareType.id);

      }
    },

    toShareholderShare() {
      console.log("This is to shareholder share: ", this.toShareholderShare);
      if (this.toShareholderShare === null) {
        this.shareTransfer.toQtyBalance = 0;
        this.shareTransfer.toBalance = 0;
      } else {
        this.shareTransfer.toQtyBalance = this.toShareholderShare.qtyBalance;
        this.shareTransfer.toBalance = this.toShareholderShare.balance;
      }
    },

    quantity() {
      this.calculateAmount();
    },

    unitPrice() {
      this.calculateAmount();
    }

  },
  methods: {
    save() {
      this.$store.dispatch("post", { path: this.path, body: this.shareTransfer });
    },
    update() {
      this.$store.dispatch("put", { path: `${this.path}/${this.shareTransfer.id}`, body: this.shareTransfer });
    },
    updateDialog() {
      var obj = this.$store.state.search.selectedData[0].value;
      this.setDialog(obj);
    },
    async search() {
      var obj = this.$store.state.obj;
      this.shareTransfer = Object.assign({}, obj);
      this.setObjects(obj);
    },
    reset() {
      this.shareTransfer.clear();
    },
    setObjects(obj) {
      console.log(obj);
    }, setDialog(obj) {
      this.shareTransfer = Object.assign({}, obj);
      this.setObjects(obj);
    },
    done() {
      this.$store.commit(
        "crudtable/data",
        Object.assign({}, this.shareTransfer)
      );
    },
    updateCrudTableDialog() {
      this.setDialog(this.$store.state.crudtable.data);
    },
    resetCrudTableDialog() {
      this.reset();
    },

    calculateAmount() {
      this.shareTransfer.amount = this.quantity * this.unitPrice;
    },

    setShareholderShare(shareTypeId) {
      console.log("Share Type Id", shareTypeId);
      this.$store.dispatch("shares/shareholdershares/getShareholderShare",
        { shareholderId: this.shareTransfer.transferToId, shareTypeId: shareTypeId });
    },
    print() {
      let data = [];
      data.push({ text: "Transfer From", value: this.shareTransfer.transferFrom.name });
      data.push({ text: "Transfer To", value: this.shareTransfer.transferTo.name });
      data.push({ text: "Transfer Date", value: this.shareTransfer.transferDate });
      data.push({ text: "Share Type", value: this.shareTransfer.shareType.shareType.name });
      data.push({ text: "Quantity", value: this.shareTransfer.quantity });
      data.push({ text: "Unit Price", value: this.shareTransfer.unitPrice });
      data.push({ text: "Amount", value: this.shareTransfer.amount });

      let options = {
        data: data,
        startXPos: 10,
        startYPos: 25,
        lineBreak: 4,
        hSpace: 50,
        vSpace: 10,
        title: "Share Transfer"

      }

      this.makePDFDocument(options);
    },
  }
};
</script>
