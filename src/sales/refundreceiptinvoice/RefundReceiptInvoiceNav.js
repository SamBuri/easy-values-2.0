import RefundReceiptInvoice from "./RefundReceiptInvoice.vue";
const refundReceiptInvoiceNav = {
  route: {
    path: "/refundReceiptInvoice/:mode",
    name: "refundReceiptInvoice",
    component: RefundReceiptInvoice,
    meta: { auth: true },
  },
  menu: {
    id: "sales.refundreceiptinvoice",
    name: "RefundReceiptInvoices",
    component: RefundReceiptInvoice,
    path: "refundreceiptinvoices",
    width: "700px",
    editHeaders: [
      { title: "Refund", key: "refund", label: "Refund", field: "refund" },
      {
        title: "Receipt Invoice",
        key: "receiptInvoice",
        label: "Receipt Invoice",
        field: "receiptInvoice",
      },
      {
        title: "Amount",
        key: "amount",
        label: "Amount",
        field: "amount",
        isNumeric: true,
      },
      { title: "Actions", key: "actions" },
    ],
    headers: [
      {
        title: "Id",
        align: "start",
        // sortable: false,
        key: "id",
      },
      { title: "Refund", key: "refund", label: "Refund", field: "refund" },
      {
        title: "Receipt Invoice",
        key: "receiptInvoice",
        label: "Receipt Invoice",
        field: "receiptInvoice",
      },
      {
        title: "Amount",
        key: "amount",
        label: "Amount",
        field: "amount",
        isNumeric: true,
      },
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
      {
        title: "Created By",
        key: "createdBy",
        label: "Created By",
        field: "createdBy",
      },
      {
        title: "Modified By",
        key: "modifiedBy",
        label: "Modified By",
        field: "modifiedBy",
      },
    ],
    children: [
      {
        id: "sales.refundReceiptInvoice.new",
        title: "New",
        route: "refundReceiptInvoice",
        mode: 0,
      },
      {
        id: "sales.refundReceiptInvoice.edit",
        title: "Edit",
        route: "refundReceiptInvoice",
        mode: 1,
      },
      {
        id: "sales.refundReceiptInvoice.history",
        title: "History",
        route: "refundReceiptInvoice",
        mode: 2,
      },
    ],
  },
};
export default refundReceiptInvoiceNav;
