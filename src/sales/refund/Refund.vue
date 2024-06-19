<template>
  <crud-form @save="save" @update="update" @search="search" @updateDialog="updateDialog" @reset="reset" @done="done"
    @updateCrudTableDialog="updateCrudTableDialog" @resetCrudTableDialog="resetCrudTableDialog" :path="path"
    :maxWidth="maxWidth">
    <template slot="heading">Refund</template>

    <template slot="form-data">
      <!-- <v-col :cols="cols" :sm="sm" :md="md">
        <v-select label="Receipt" v-model="refund.receipt" :rules="receiptRules" :counter="100"
          :items="$store.state.sales.receipt.mini" :loading="$store.state.sales.receipt.miniLoading"
          item-text="id" item-value="id" return-object></v-select>
      </v-col> -->
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-text-field label="Receipt Id" v-model="refund.receiptId" :rules="receiptIdRules" :counter="20"
          append-icon="mdi-view-list" @click:append="appendIconCallback"></v-text-field>
      </v-col>

      <v-col :cols="cols" :sm="sm" :md="md">
        <v-text-field label="Customer Name" v-model="refund.customerName" disabled></v-text-field>
      </v-col>

      <v-col :cols="cols" :sm="sm" :md="md">
        <s-date-picker label="Refund Date" v-model="refund.refundDate" :rules="refundDateRules" />
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-select label="Refund Type" v-model="refund.refundType" :rules="refundTypeRules" :counter="100"
          :items="$store.state.sales.refundTypes" :loading="$store.state.sales.refundTypesLoading" return-object>
        </v-select>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-textarea label="Notes" v-model="refund.notes" :rules="notesRules" :counter="200" rows="1" auto-grow>
        </v-textarea>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md" v-if="refundType ===this.creditMemoRefundType">
        <v-text-field label="Credit Note Id" v-model="refund.creditNoteId" :rules="creditNoteIdRules" :counter="100" :disabled="disableControls">
        </v-text-field>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-select label="Bank Account Type" v-model="refund.bankAccountType" :rules="bankAccountTypeRules"
          :counter="100" :items="$store.state.banking.bankAccountTypes"
          :loading="$store.state.banking.bankAccountTypesLoading" :disabled="disableControls"></v-select>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-select label="Bank Account Id" v-model="refund.bankAccount" :rules="bankAccountIdRules" :counter="100"
          :items="$store.state.banking.bankaccount.bankAccountsByType" :loading="$store.state.banking.bankaccount.bankAccountsByTypeLoading"
          item-text="bankAccountName" item-value="id" return-object :disabled="disableControls"></v-select>
      </v-col>
     
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-number-input label="Amount" v-model="refund.amount" :rules="amountRules" :counter="100" :disabled="disableControls"></s-number-input>
      </v-col>
   
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-textarea label="Amount Words" v-model="refund.amountWords" :rules="amountWordsRules" :counter="200" rows="1"
          auto-grow disabled></v-textarea>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-number-input label="Discount" v-model="refund.receipt.discount" :disabled="true">
        </s-number-input>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-number-input label="Withholding Tax" v-model="refund.receipt.withholdingTax" :disabled="true"></s-number-input>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-number-input label="Amount Received" v-model="refund.receipt.amountReceived" :disabled="true"></s-number-input>
      </v-col>

      <v-col :cols="cols" :sm="sm" :md="md">
        <s-number-input label="Amount Paid" v-model="refund.receipt.amountPaid"  :disabled="true">
        </s-number-input>
      </v-col>

      <v-col :cols="cols" :sm="sm" :md="md">
        <s-number-input label="Total Bill" v-model="refund.receipt.totalBill"  :disabled="true">
        </s-number-input>
      </v-col>


      <v-col :cols="cols" :sm="sm" :md="md">
        <s-number-input label="Change" v-model="change"  :disabled="true">
        </s-number-input>
      </v-col>

      <v-col :cols="cols" :sm="sm" :md="md">
        <s-number-input label="Previously Refunded" v-model="refund.receipt.amountRefunded"  :disabled="true">
        </s-number-input>
      </v-col>
   
    </template>
  </crud-form>
</template>
<script>
import refundModel from "./RefundModel";
import receiptNav from '../receipt/ReceiptNav';
import funcs from '../../utils/funcs'
export default {
  name: "Refund",
  data: () => ({
    cols: 12,
    sm: 6,
    md: 3,
    maxWidth: 1000,
    path: refundModel.path,
    refund: refundModel.refund,
    cancellationRefundType: 'Cancellation',
    creditMemoRefundType: 'Credit_Memo',
    balanceClaimRefundType: 'Balance_Claim',
 
    receiptRules: [(v) => !!v || "Receipt is required", ], 
    receiptIdRules: [(v) => !!v || "Receipt Id is required",],
    refundDateRules: [(v) => !!v || "Refund Date is required",
    ], bankAccountTypeRules: [(v) => !!v || "Bank Account Type is required",
    ], bankAccountIdRules: [(v) => !!v || "Bank Account Id is required",
    ], refundTypeRules: [(v) => !!v || "Refund Type is required",
    ], creditNoteIdRules: [(v) => !!v || "Credit Note Id is required",
    (v) => v.length < 100 || "Credit Note Id length must be less or equal to 100",], amountRules: [(v) => !!v || "Amount is required",
    ], notesRules: [(v) => !!v || "Notes is required",
    (v) => v.length < 200 || "Notes length must be less or equal to 200",], amountWordsRules: [(v) => !!v || "Amount Words is required",
    (v) => v.length < 200 || "Amount Words length must be less or equal to 200",], refundReceiptInvoicesRules: [(v) => !!v || "Refund Receipt Invoices is required",
    ],
  }),
  created() {
    this.$store.dispatch("banking/getBankAccountTypes");
    this.$store.dispatch("sales/getRefundTypes");
  },
  computed: {
    bankAccountType() {
      return this.refund.bankAccountType;
    },

    selectedData() {
      return this.$store.state.search.selectedMiniItem;
    },

    disableControls(){
      return this.refund.refundType ===this.cancellationRefundType;
    },
    receiptId(){
      return this.refund.receiptId;
    },

    receipt(){
      let receipt = this.$store.state.sales.receipt.obj;
      if(receipt){
          return receipt;
      }
      return this.refund.receipt;
    },

    refundType(){
      return this.refund.refundType;
    },
    amount(){
      return this.refund.amount;
    },
    bankAccount(){
      return this.refund.bankAccount;
    },
    change(){
      if(this.refund.receipt.amountPaid>this.refund.receipt.totalBill)
      return Math.round(this.refund.receipt.amountPaid-(this.refund.receipt.totalBill+this.refund.receipt.amountRefunded));
      else return 0;
    }
  },

  watch: {

    bankAccountType() {
      if (this.bankAccountType) {
        this.$store.dispatch("banking/bankaccount/getBankAccountsByType", this.bankAccountType
        );
      }
    },

    bankAccount(){
      return this.refund.bankAccountId = this.bankAccount.id;
    },

    selectedData() {
     if(this.selectedData){
      this.refund.receiptId = this.selectedData.id;
     }
    },

    receiptId(){
      this.receiptIdEntered();
    },

    receipt(){
      let receipt = this.receipt;
      this.refund.receipt= receipt;
      if(this.receipt){
        this.refund.customerName = receipt.customer;
        this.setControls();
        
      }
    },
    refundType(){
      
      this.setControls();
      if(this.refundType ===this.creditMemoRefundType){
        this.creditNoteIdRules=[(v) => !!v || "Credit Note Id is required",];
      }
     
    },
    amount(){
       this.refund.amountWords= funcs.toWords(this.amount);
    }
  },

  methods: {
    save() {
      this.$store.dispatch("post", { path: this.path, body: this.refund });
    },
    update() {
      this.$store.dispatch("put", { path: `${this.path}/${this.refund.id}`, body: this.refund });
    },
    updateDialog() {
      var obj = this.$store.state.search.selectedData[0].value;
      this.setDialog(obj);
    },
    async search() {
      var obj = this.$store.state.obj;
      this.refund = Object.assign({}, obj);
      this.setObjects(obj);
    },
    reset() {
      this.refund.clear();
    },
    setObjects(obj) {
      console.log(obj);
    }, setDialog(obj) {
      this.refund = Object.assign({}, obj);
      this.setObjects(obj);
    },
    done() {
      this.$store.commit(
        "crudtable/data",
        Object.assign({}, this.refund)
      );
    },
    updateCrudTableDialog() {
      this.setDialog(this.$store.state.crudtable.data);
    },
    resetCrudTableDialog() {
      this.reset();
    },

    appendIconCallback() {
      let miniSelected = { path: receiptNav.menu.path, name: receiptNav.menu.name, headers: receiptNav.menu.miniHeaders };
      this.$store.commit("search/miniSelected", miniSelected);
      this.$store.dispatch("search/getMiniData");
      this.$store.commit("search/miniDialog", true);

    },

    receiptIdEntered(){
   
      this.$store.commit("sales/receipt/obj", null);
     
      if (this.receiptId) {
         console.log("Dispatched Receipt Id", this.receiptId)
          this.$store.dispatch("sales/receipt/get", this.receiptId);
      }
    },

    setControls(){
     
      if(this.refund.refundType ===this.cancellationRefundType){
         let receipt = this.receipt;
         this.refund.creditNoteId = "";
       this.creditNoteIdRules = [];
         if(receipt){
            this.refund.bankAccountType = receipt.bankAccountType;
            this.refund.bankAccount = {id: receipt.bankAccountId}; 
            this.refund.amount = receipt.amountReceived;
            
         }
      }
      else if(this.refund.refundType ===this.balanceClaimRefundType){
         let receipt = this.receipt;
         this.refund.creditNoteId = "";
       this.creditNoteIdRules = [];
         if(receipt){
         
            this.refund.amount = this.change;
            
         }
      }
      
    },

  }
};
</script>


