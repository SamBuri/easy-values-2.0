import rootController from "@/root/RootController";
import receiptModel from "./ReceiptModel";
import { onMounted } from "vue";
import { defineCustomerStore } from "@/customer/customer/CustomerStore.js";
import { defineBankingStore } from "@/banking/BankingStore.js";
import { defineBankAccountStore } from "@/banking/bankaccount/BankAccountStore.js";
import { defineCurrencyStore } from "@/lookup/currency/CurrencyStore.js";
import { defineReceiptInvoiceStore } from "@/sales/receiptinvoice/ReceiptInvoiceStore.js";
import { ref, watch, computed } from "vue";
import customerNav from "@/customer/customer/CustomerNav";
import { defineInvoiceStore } from "../invoice/InvoiceStore";
import funcs from "@/utils/funcs";

export default function receiptController() {
  const controller = rootController(receiptModel);
  const customerStore = defineCustomerStore();
  controller.customerStore = customerStore;
  const bankingStore = defineBankingStore();
  controller.bankingStore = bankingStore;
  const bankAccountStore = defineBankAccountStore();
  controller.bankAccountStore = bankAccountStore;
  const currencyStore = defineCurrencyStore();
  controller.currencyStore = currencyStore;
  const receiptInvoiceStore = defineReceiptInvoiceStore();
  controller.receiptInvoiceStore = receiptInvoiceStore;
  onMounted(() => {
    customerStore.getMini();

    bankingStore.getBankAccountTypes();

    bankAccountStore.getMini();

    currencyStore.getMini();

    receiptInvoiceStore.getMini();
  });

  //customer selected starts here



  const customerIdOk = (data) => {
    if (data) {

      controller.model.value.customerId = data.id;
      controller.model.value.customer = data.customerName;

    }
  };



  controller.customerIdOk = customerIdOk;
  controller.customerNav = customerNav;


  const receiptInvoiceRequests = ref([]);
  const totalBill = ref(0);
  const invoiceStore = defineInvoiceStore();
  controller.invoiceStore = invoiceStore
  watch(
    () => controller.model.value.customerId,
    async (newValue) => {
      let returnedData = await invoiceStore.getDue(newValue);
     let total=0;
      var mappedList = returnedData.map((item) => {
        var container = {};
        container.id = item.id;
        container.invoiceAmount = item.invoiceAmount;
        container.toPayAmount = 0;
        total += Number(item.invoiceAmount);

        return container;
      });
      let customers=customerStore.mini.filter(m=>m.id===newValue);
      // controller.model.value.customerId = '';
           controller.model.value.customer = '';
      if(!customers.isEmpty()){
           let customer = customers[0];
           controller.model.value.customerId = customer.id;
           controller.model.value.customer = customer.customerName;
      }

      controller.model.value.receiptInvoiceRequests = mappedList;
      totalBill.value= total;
      controller.model.value.totalBill=total;
    }
  );


  const totalAmountPaid = computed(()=>{
    let md = controller.model.value;
    return (md.amountTendered * md.exchangeRate) + md.discount + md.withholdingTax;
  });

  const calculateChange=() =>{
    let change = Math.round(Number(totalAmountPaid.value) - Number(controller.model.value.totalBill));
     controller.model.value.changeGiven = change < 0 ? 0 : change;
  }

  const calculateReceiptInvoiceAmount=() =>{

    //if (controller.rootState.buttonText === constants.buttonTexts.save) {

      let amoutPaid = controller.model.value.amountPaid;
      for (let receiptInvoice of controller.model.value.receiptInvoiceRequests) {
        let invoiceAmount = receiptInvoice.invoiceAmount;
        let toPayAmount = 0;

        if (invoiceAmount >= amoutPaid) {
          toPayAmount = amoutPaid;
          amoutPaid = 0;
        } else {
          toPayAmount = invoiceAmount;
          amoutPaid -= invoiceAmount;
        }

        receiptInvoice.toPayAmount = toPayAmount;
        // receiptInvoice.amount = toPayAmount;
     // }
    }
  };

  controller.receiptInvoiceRequests = receiptInvoiceRequests;
  controller.invoiceStore = invoiceStore;
 controller.model.value.receiptInvoiceRequests = receiptInvoiceRequests;
  const setAmountPaid = ()=> {
    let discount = Number(controller.model.value.discount);
    let withholdingTax = Number(controller.model.value.withholdingTax)

    //  let change = Number(this.totalAmountPaid) -Number(this.model.totalBill);
    //     change = change<0?0:change;
    let amountPaid = Math.round(totalAmountPaid.value - controller.model.value.changeGiven);
    controller.model.value.amountPaid = amountPaid;
    controller.model.value.amountReceived = Math.round(amountPaid - (discount + withholdingTax));
    controller.model.value.amountWords = funcs.toWords(amountPaid)
    calculateReceiptInvoiceAmount();
  };

watch([totalAmountPaid, ()=>controller.model.value.totalBill],()=>calculateChange())
watch([totalAmountPaid, ()=>controller.model.value.changeGiven],()=>setAmountPaid())

watch(
    () => controller.model.value.bankAccountType,
    (newValue) => {
      if(newValue) bankAccountStore.getBankAccountsByType(newValue);
    }
  );

  const setDefaultCurrency = ()=>{
    if(currencyStore.defaultCurrency)
      controller.model.value.currencyId = currencyStore.defaultCurrency.id;
    }


  watch(() => currencyStore.mini, () => setDefaultCurrency() );

  watch(
    () => controller.model.value.currencyId,
    (newValue) => {

      if (!newValue) {
        setDefaultCurrency();
        controller.model.value.exchangeRate = 1;
        return;
      }
      let currencies = currencyStore.mini.filter((c) => c.id === newValue);

      if (currencies.length < 1) {
        controller.model.value.exchangeRate = 1;
        return;
      }

      let currency = currencies[0];

      controller.model.value.exchangeRate = currency.buying;
      controller.model.value.currency = currency.currency;
    }
  );

  return controller;
}
