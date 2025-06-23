import BillItem from "./BillItem.vue";
import BillItems from "./BillItems.vue";
import navUtils from "@/nav/NavUtils";
const billItemNav = {
  // routes: [
  //   {
  //     path: "/billitem/:mode",
  //     name: "billitem",
  //     component: BillItem,
  //     meta: { auth: true },
  //   },
  //   {
  //     path: "/billitems",
  //     name: "billitems",
  //     component: BillItems,
  //     meta: { auth: true },
  //   },
  // ],
  routes: navUtils.allRoutes(
    "billitem",
    BillItem,
    "billitems",
    BillItems,
    true
  ),
  menu: {
    id: "creditor.billitem",
    title: "Bill Items",
    component: BillItem,
    path: "billitems",
    to: { name: "billitems" },
    requires: navUtils.allRoles("bill"),
    icon: "mdi-file-document-edit-outline",
    width: "700px",
    editHeaders: [
      { title: "Item Id", key: "itemId" },
      { title: "Item Name", key: "itemName" },
      { title: "Item Category", key: "itemCategory" },
      { title: "Quantity", key: "quantity", isNumeric: true },
      { title: "Unit Cost", key: "unitCost", isNumeric: true },
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
      { title: "Item Id", key: "itemId" },
      { title: "Item Name", key: "itemName" },
      { title: "Item Category", key: "itemCategory" },
      { title: "Quantity", key: "quantity", isNumeric: true },
      { title: "Unit Cost", key: "unitCost", isNumeric: true },
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

  },
};
export default billItemNav;
