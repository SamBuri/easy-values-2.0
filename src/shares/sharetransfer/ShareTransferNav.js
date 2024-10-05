import ShareTransfer from "./ShareTransfer.vue";
import ShareTransfers from "./ShareTransfers.vue";
const shareTransferNav = {
  routes: [
    {
      path: "/sharetransfer/:mode",
      name: "sharetransfer",
      component: ShareTransfer,
      meta: { auth: true },
    },
    {
      path: "/sharetransfers",
      name: "sharetransfers",
      component: ShareTransfers,
      meta: { auth: true },
    },
  ],
  menu: {
    id: "shares.sharetransfer",
    title: "Share Transfers",
    component: ShareTransfer,
    path: "sharetransfers",
    width: "1000px",

    editHeaders: [
      { title: "Transfer From", key: "transferFrom.id" },
      { title: "Transfer From Name", key: "transferFromName" },
      { title: "Transfer To", key: "transferTo.id" },
      { title: "Transfer To Name", key: "transferToName" },
      { title: "Transfer Date", key: "transferDate", isDate: true },
      { title: "Share Type", key: "shareType.id", isNumeric: true },
      { title: "Quantity", key: "quantity", isNumeric: true },
      { title: "Unit Price", key: "unitPrice", isNumeric: true },
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
      { title: "Transfer From", key: "transferFrom.id" },
      { title: "Transfer From Name", key: "transferFromName" },
      { title: "Transfer To", key: "transferTo.id" },
      { title: "Transfer To Name", key: "transferToName" },
      { title: "Transfer Date", key: "transferDate", isDate: true },
      { title: "Share Type", key: "shareType.id", isNumeric: true },
      { title: "Quantity", key: "quantity", isNumeric: true },
      { title: "Unit Price", key: "unitPrice", isNumeric: true },
      { title: "Amount", key: "amount", isNumeric: true },
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
        id: "shares.shareTransfer.view",
        title: "View",
        to: { name: "sharetransfers" },
      },
      {
        id: "shares.shareTransfer.new",
        title: "New",
        to: { name: "sharetransfer", params: { mode: 0 } },
      },
      {
        id: "shares.shareTransfer.edit",
        title: "Edit",
        to: { name: "sharetransfer", params: { mode: 1 } },
      },
      {
        id: "shares.shareTransfer.history",
        title: "History",
        to: { name: "sharetransfer", params: { mode: 2 } },
      },
    ],
  },
};
export default shareTransferNav;
