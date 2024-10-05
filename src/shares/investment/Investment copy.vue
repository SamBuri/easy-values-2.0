<template>
  <crud-form @save="save" @update="update" @search="search" @updateDialog="updateDialog" @reset="reset" @done="done"
    @updateCrudTableDialog="updateCrudTableDialog" @resetCrudTableDialog="resetCrudTableDialog" :path="path"
    :maxWidth="maxWidth" :showPrintPrompt="showPrintPrompt" @print="print">
    <template slot="heading">Investment</template>

    <template slot="form-data">
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-select label="Shareholder" v-model="investment.shareholder" :rules="shareholderRules"
          :items="$store.state.shares.shareholder.mini" :loading="$store.state.shares.shareholder.miniLoading"
          item-text="name" item-value="id" return-object></v-select>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-date-picker label="Tran Date" v-model="investment.tranDate" :rules="tranDateRules" /></v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-select label="Share Type" v-model="investment.shareType" :rules="shareTypeRules" :counter="100"
          :items="$store.state.shares.sharetype.mini" :loading="$store.state.shares.sharetype.miniLoading"
          item-text="name" item-value="id" return-object></v-select>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-select label="Share Action" v-model="investment.shareAction" :rules="shareActionRules" :counter="10"
          :items="$store.state.shares.shareActions" :loading="$store.state.shares.shareActionsLoading"
          return-object></v-select>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-select label="Bank Account Type" v-model="investment.bankAccountType" :rules="bankAccountTypeRules" :counter="100"
          :items="$store.state.banking.bankAccountTypes" :loading="$store.state.banking.bankAccountTypesLoading"></v-select>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-select label="Bank Account" v-model="investment.bankAccountId" :rules="bankAccountIdRules" :counter="100"
          :items="$store.state.banking.bankaccount.bankAccountsByType" :loading="$store.state.banking.bankaccount.bankAccountsByTypeLoading"
          item-text="bankAccountName" item-value="id"></v-select>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-number-input label="Quantity" v-model="investment.quantity" :rules="quantityRules"
          :counter="100"></s-number-input>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-number-input label="Unit Price" v-model="investment.unitPrice" :rules="unitPriceRules"
          :counter="100" :disabled="true"></s-number-input>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-number-input label="Amount" v-model="investment.amount" :rules="amountRules" :counter="100" :disabled="true"></s-number-input>
      </v-col>
    </template>
  </crud-form>
</template>
<script>

import investmentModel from "./InvestmentModel";
export default {
  components: {},
  name: "Investment",
 data: () => ({
    cols: 12,
    sm: 6,
    md: 4,
    maxWidth: 1000,
    path: investmentModel.path,
    investment: investmentModel.investment,
    shareholderRules: [(v) => !!v || "Shareholder is required",
    ], tranDateRules: [(v) => !!v || "Tran Date is required",
    ], shareTypeRules: [(v) => !!v || "Share Type is required",
    ], shareActionRules: [(v) => !!v || "Share Action is required",
    ],
    bankAccountTypeRules: [(v) => !!v || "Bank AccountType is required",
    ],
    bankAccountIdRules: [(v) => !!v || "Bank Account Id is required",
    ], quantityRules: [(v) => !!v || "Quantity is required",
    ], unitPriceRules: [(v) => !!v || "Unit Price is required",
    ], amountRules: [(v) => !!v || "Amount is required",
    ],

    showPrintPrompt: true,
  }),
  created() {
    this.$store.dispatch("shares/shareholder/getMini");
    this.$store.dispatch("shares/sharetype/getMini");
    this.$store.dispatch("shares/getShareActions");
    this.$store.dispatch("banking/getBankAccountTypes");
  },
  computed: {
    unitPrice() {
      return this.investment.unitPrice;
    },

    quantity() {
      return this.investment.quantity;
    },

    shareType() {
      return this.investment.shareType;
    },
    bankAccountType(){
      return this.investment.bankAccountType;
    }
  },

  watch: {
    quantity() { this.setAmount(); },
    unitPrice() { this.setAmount(); },
    shareType() {
      if(this.shareType){
        this.investment.unitPrice = this.shareType.unitPrice;
      }
    },
    bankAccountType() {
      if (this.bankAccountType) {
        this.$store.dispatch("banking/bankaccount/getBankAccountsByType", this.bankAccountType
        );
      }
    },
  },
  methods: {
    save() {
      this.$store.dispatch("post", { path: this.path, body: this.investment });
    },
    update() {
      this.$store.dispatch("put", { path: `${this.path}/${this.investment.id}`, body: this.investment });
    },
    updateDialog() {
      var obj = this.$store.state.search.selectedData[0].value;
      this.setDialog(obj);
    },
    async search() {
      var obj = this.$store.state.obj;
      this.investment = Object.assign({}, obj);
      this.setObjects(obj);
    },
    reset() {
      this.investment.clear();
    },
    setObjects(obj) {
      console.log(obj);
    }, setDialog(obj) {
      this.investment = Object.assign({}, obj);
      this.setObjects(obj);
    },
    done() {
      this.$store.commit(
        "crudtable/data",
        Object.assign({}, this.investment)
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
      data.push({ text: "Shareholder Id", value: this.investment.shareholder.id });
      data.push({ text: "Shareholder", value: this.investment.shareholder.name });
      data.push({ text: "Tran Date", value: this.investment.tranDate });
      data.push({ text: "Share Type", value: this.investment.shareType.name });
      data.push({ text: "Share Action", value: this.investment.shareAction });
      data.push({ text: "Bank Account Id", value: this.investment.bankAccountId });
      data.push({ text: "Bank Account", value: this.investment.bankAccount });
      data.push({ text: "Quantity", value: this.investment.quantity });
      data.push({ text: "Unit Price", value: this.investment.unitPrice });
      data.push({ text: "Amount", value: this.investment.amount });

      let options = {
        data: data,
        startXPos: 10,
        startYPos: 25,
        lineBreak: 4,
        hSpace: 50,
        vSpace: 10,
        title: "Investment"

      }

      this.makePDFDocument(options);
    },

    setAmount() {
      if (this.quantity && this.unitPrice) {
        this.investment.amount = this.quantity * this.unitPrice;
      }
    }
  }
};
</script>
