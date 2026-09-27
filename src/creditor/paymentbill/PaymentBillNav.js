import PaymentBill from "./PaymentBill.vue";
import PaymentBills from "./PaymentBills.vue";
import { navUtils } from 'saburi-vue-utils';
const paymentBillNav = {

  routes: [navUtils.viewRoute(  "payment-bills", PaymentBills, true )],
  menu: {
    id: "creditor.paymentbill",
    title: "Payment Bills",
    component: PaymentBill,
    path: "payment-bills",
    requires: navUtils.viewRoles("payment-bills"),
    to: { name:"payment-bills"},
    icon: "mdi-cash-multiple",
    width: "700px",
    editHeaders: [
      { title: "Bill", key: "bill.id" },
      { title: "Discount", key: "discount", isNumeric: true },
      { title: "Amount", key: "amount", isNumeric: true },
      { title: "Actions", key: "actions" },
    ],
    headers: [
      {
        title: "Id",
        align: "start",
        // sortable: false,
        key: "id",
      },
      { title: "Payment", key: "payment.id" },
      { title: "Bill", key: "bill.id" },
      { title: "Discount", key: "discount", isNumeric: true },
      { title: "Amount", key: "amount", isNumeric: true },
      { title: "AmountRefunded", key: "amountRefunded", isNumeric: true },
      { title: "Branch", key: "branch" },
      {
        title: "Creation Date",
        key: "creationDate",
        label: "Creation Date",
        field: "creationDate",
        isDateTime: true,
      },
      {
        title: "Last Modified Date",
        key: "lastModifiedDate",
        isDateTime: true,
      },
      { title: "Created By", key: "createdBy" },
      { title: "Modified By", key: "modifiedBy" },
    ],


  },
};
export default paymentBillNav;
