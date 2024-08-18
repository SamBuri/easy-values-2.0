import rootController from "@/root/RootController";
import refundModel from "./RefundModel";
import { onMounted } from "vue";
import { defineReceiptStore } from "@/sales/receipt/ReceiptStore.js";
import { defineLookupStore } from "@/lookup/LookupStore.js";
import { defineBankAccountStore } from "@/banking/bankaccount/BankAccountStore.js";
import { defineSalesStore } from "@/sales/SalesStore.js";
import funcs from "@/utils/funcs";
// import refundReceiptInvoiceNav from "@/sales/refundreceiptinvoice/RefundReceiptInvoiceNav.js";
// import { defineRefundReceiptInvoiceStore } from "@/sales/refundreceiptinvoice/RefundReceiptInvoiceStore.js";
import receiptNav from "../receipt/ReceiptNav";
import { defineBankingStore } from "@/banking/BankingStore";
import { computed, watch } from "vue";
export default function refundController() {
  const controller = rootController(refundModel);
  const receiptStore = defineReceiptStore();
  controller.receiptStore = receiptStore;
  const lookupStore = defineLookupStore();
  controller.lookupStore = lookupStore;
  const bankAccountStore = defineBankAccountStore();
  controller.bankAccountStore = bankAccountStore;
  const salesStore = defineSalesStore();
  controller.salesStore = salesStore;
  // const refundReceiptInvoiceStore = defineRefundReceiptInvoiceStore();
  // controller.refundReceiptInvoiceStore = refundReceiptInvoiceStore;
  controller.receiptNav = receiptNav;
  const bankingStore = defineBankingStore();
  controller.bankingStore = bankingStore;

  const model = controller.model.value;
  var receipt = null;


  const cancellationRefundType = "Cancellation";
  const creditMemoRefundType = "Credit_Memo";
  const balanceClaimRefundType = "Balance_Claim";
  controller.creditMemoRefundType = creditMemoRefundType;
  const setControls = () => {
    let creditNoteIdRules = controller.rules.creditNoteId;
    if (model.refundType === cancellationRefundType) {
      model.creditNoteId = "";
      creditNoteIdRules = [];
      if (receipt) {
        let bks = bankAccountStore.mini.filter((b) => b.id === receipt.bankAccountId);
        model.bankAccountType = bks.isEmpty() ? "" : bks[0].bankAccountType;
        model.amount = receipt.amountReceived;
      }
    } else if (model.refundType === balanceClaimRefundType) {
      model.creditNoteId = "";
      creditNoteIdRules = [];
      // if (receipt) {
        model.amount = model.change;
      // }
    }

    // controller.rules.creditNoteId =
  };
  const receiptIdOk = (data) => {
    controller.model.value.receiptId = data.id;
    receipt = data;

    let bks = bankAccountStore.mini.filter((b) => b.id === data.bankAccountId);
    model.bankAccountType = bks.isEmpty() ? "" : bks[0].bankAccountType;
    model.customerId = data.customerId;
    model.customerName = data.customer;
    model.bankAccountId = data.bankAccountId;
    model.amountPaid = data.amountPaid;
    model.discount = data.discount;
    model.withholdingTax = data.withholdingTax;
    model.amountReceived = data.amountReceived;
    model.totalBill = data.totalBill;
    model.amountRefunded = data.amountRefunded;

    model.change=data.totalBill<data.amountPaid?data.amountPaid+data.amountRefunded-data.totalBill:0;
    setControls();
  };


  controller.receiptIdOk = receiptIdOk;


  onMounted(() => {
    receiptStore.getMini();

    bankingStore.getBankAccountTypes();

    bankAccountStore.getMini();

    salesStore.getRefundTypes();

    // refundReceiptInvoiceStore.getMini();
  });

     const  disableControls=  computed(()=> model.refundType ===cancellationRefundType);
     controller.disableControls = disableControls;

    watch(
    () => controller.model.value.bankAccountType,
    (newValue) => {
      if (newValue) bankAccountStore.getBankAccountsByType(newValue);
    }
  );

  watch(
    () => controller.model.value.refundType,
    (newValue) => {
      if (newValue) setControls();
    }
  );

  watch(
    () => controller.model.value.amount,
    (newValue) => {
     model.amountWords= funcs.toWords(newValue||0);
    }
  );



  // watch(
  //   () => controller.model.value.receiptId,
  //   (newValue) => {
  //    model.amountWords= funcs.toWords(newValue||0);
  //   }
  // );

  // watch(
  //   () => controller.model.value.refundDate,
  //   (newValue) => {
  //     if (newValue) model.refundDate= funcs.formatDate(newValue);
  //   }
  // );


  return controller;
}
