<template>
  <crud-form @save="save" @update="update" @search="search" @updateDialog="updateDialog" @reset="reset" @done="done"
    @updateCrudTableDialog="updateCrudTableDialog" @resetCrudTableDialog="resetCrudTableDialog" :path="path"
    :maxWidth="maxWidth" :showPrintPrompt="showPrintPrompt" @print="print">
    <template slot="heading">Bill</template>

    <template slot="form-data">
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-date-picker id="tranDate" label="Tran Date" v-model="bill.tranDate" :rules="tranDateRules" /></v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-select id="creditor" label="Creditor" v-model="bill.creditor" :rules="creditorRules" :counter="100"
          :items="$store.state.creditor.creditor.mini" :loading="$store.state.creditor.creditor.miniLoading"
          item-text="name" item-value="id" return-object></v-select>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-date-picker id="startDate" label="Start Date" v-model="bill.startDate" :rules="startDateRules" /></v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-date-picker id="endDate" label="End Date" v-model="bill.endDate" :rules="endDateRules" :allowFuture="true" /></v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-number-input id="amount" label="Amount" v-model="bill.amount" :rules="amountRules"
          :counter="100" :disabled="true"></s-number-input>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-textarea id="amountWords" label="Amount Words" v-model="bill.amountWords" :rules="amountWordsRules"
          :counter="200" rows="1" auto-grow disabled></v-textarea>
      </v-col>
      <v-col cols="12">
        <crud-table title="Bill Items" :headers="billItemNav.menu.editHeaders" :items="bill.billItems"
          :component="billItemNav.menu.component" maxWidth="700px" />
      </v-col>
    </template>
  </crud-form>
</template>
<script>
import billModel from "./BillModel";
import CrudTable from "../../components/CrudTable.vue";
import billItemNav from '../billitem/BillItemNav.js';
import funcs from "../../utils/funcs";
export default {
  components: { CrudTable },
  name: "Bill",
  data: () => ({
    cols: 12,
    sm: 6,
    md: 4,
    maxWidth: 1000,
    path: billModel.path,
    bill: billModel.bill,
    billItemNav: billItemNav,
    tranDateRules: [(v) => !!v || "Tran Date is required",
    ], creditorRules: [(v) => !!v || "Creditor is required",
    ], startDateRules: [(v) => !!v || "Start Date is required",
    ], endDateRules: [(v) => !!v || "End Date is required",
    ], amountRules: [(v) => !!v || "Amount is required",
    ], amountWordsRules: [(v) => !!v || "Amount Words is required",
    (v) => v.length < 200 || "Amount Words length must be less or equal to 200",], billItemsRules: [(v) => !!v || "Bill Items is required",
    ],

    showPrintPrompt: true,
  }),
  created() {
    this.$store.dispatch("creditor/creditor/getMini");
  },
  computed: {
    creditor() {
      return this.bill.creditor;
    },
    billItems() {
      return this.bill.billItems;
    },

  },

  watch: {
    creditor() {
      if (this.creditor) {
        this.bill.creditorId = this.creditor.id;
      }
    },

    billItems() {
      this.calculateAmount();
    },

  },
  methods: {
    save() {
      this.$store.dispatch("post", { path: this.path, body: this.bill });
    },
    update() {
      this.$store.dispatch("put", { path: `${this.path}/${this.bill.id}`, body: this.bill });
    },
    updateDialog() {
      var obj = this.$store.state.search.selectedData[0].value;
      this.setDialog(obj);
    },
    async search() {
      var obj = this.$store.state.obj;
      this.bill = Object.assign({}, obj);
      this.setObjects(obj);
    },
    reset() {
      this.bill.clear();
    },
    setObjects(obj) {
      console.log(obj);
    }, setDialog(obj) {
      this.bill = Object.assign({}, obj);
      this.setObjects(obj);
    },
    done() {
      // this.$store.commit(
      //   "crudtable/data",
      //   Object.assign({}, this.bill)
      // );
    },
    updateCrudTableDialog() {
      // this.setDialog(this.$store.state.crudtable.data);
    },
    resetCrudTableDialog() {
      // this.reset();
    },
    print() {
      let data = [];
      data.push({ text: "Tran Date", value: this.bill.tranDate });
      data.push({ text: "Creditor", value: this.bill.creditor });
      data.push({ text: "Start Date", value: this.bill.startDate });
      data.push({ text: "End Date", value: this.bill.endDate });
      data.push({ text: "Reference Type", value: this.bill.referenceType });
      data.push({ text: "Referece No", value: this.bill.refereceNo });
      data.push({ text: "Amount", value: this.bill.amount });
      data.push({ text: "Amount Words", value: this.bill.amountWords });
      data.push({ text: "Original Amount", value: this.bill.originalAmount });
      data.push({ text: "Amount Paid", value: this.bill.amountPaid });
      data.push({ text: "Bill Items", value: this.bill.billItems });

      let options = {
        data: data,
        startXPos: 10,
        startYPos: 25,
        lineBreak: 4,
        hSpace: 50,
        vSpace: 10,
        title: "Bill"

      }

      this.makePDFDocument(options);
    },

    calculateAmount() {
      let totalAmount = 0;

      for (let billItem of this.bill.billItems) {
        totalAmount += Number(billItem.amount);
       
        
      }

      this.bill.amount = totalAmount;
      this.bill.amountWords = funcs.toWords(totalAmount);
    

    }
  }
};
</script>
