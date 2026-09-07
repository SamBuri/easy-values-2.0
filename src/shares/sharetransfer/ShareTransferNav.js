import ShareTransfer from "./ShareTransfer.vue";
import ShareTransfers from "./ShareTransfers.vue";
import { navUtils } from 'saburi-vue-utils';
const shareTransferNav = {
  // routes: [
  //   {
  //     path: "/sharetransfer/:mode",
  //     name: "sharetransfer",
  //     component: ShareTransfer,
  //     meta: { auth: true },
  //   },
  //   {
  //     path: "/sharetransfers",
  //     name: "sharetransfers",
  //     component: ShareTransfers,
  //     meta: { auth: true },
  //   },
  // ],
  routes: navUtils.allRoutes(
    "share-transfer",
    ShareTransfer,
    "share-transfers",
    ShareTransfers,
    true,
    "sharetransfer"
  ),
  menu: {
    id: "shares.sharetransfer",
    title: "Share Transfers",
    component: ShareTransfer,
    path: "share-transfers",
    requires: navUtils.allRoles("share-transfers"),
    icon: "mdi-account-multiple",
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
    children: navUtils.allChildren("shares", "share-transfers", "share-transfers", false, "sharetransfer"),
  },
};
export default shareTransferNav;
