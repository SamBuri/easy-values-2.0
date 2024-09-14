import PaymentBill from "./PaymentBill.vue";
import PaymentBills from "./PaymentBills.vue";
const paymentBillNav = {
  routes: [
    {
      path: "/paymentbill/:mode",
      name: "paymentbill",
      component: PaymentBill,
      meta: { auth: true },
    },
    {
      path: "/paymentbills",
      name: "paymentbills",
      component: PaymentBills,
      meta: { auth: true },
    },
  ],
  menu: {
    id: "creditor.paymentbill",
    title: "Payment Bills",
    component: PaymentBill,
    path: "paymentbills",
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
    children: [
      {
        id: "creditor.paymentBill.view",
        title: "View",
        to: { name: "paymentbills" },
      },
      {
        id: "creditor.paymentBill.new",
        title: "New",
        to: { name: "paymentbill", params: { mode: 0 } },
      },
      {
        id: "creditor.paymentBill.edit",
        title: "Edit",
        to: { name: "paymentbill", params: { mode: 1 } },
      },
      {
        id: "creditor.paymentBill.history",
        title: "History",
        to: { name: "paymentbill", params: { mode: 2 } },
      },
    ],
  },
};
export default paymentBillNav;
