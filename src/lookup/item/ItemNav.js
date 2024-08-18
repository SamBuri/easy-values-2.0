import Item from "./Item.vue";
import Items from "./Items.vue";
const itemNav = {
  routes: [
    {
      path: "/item/:mode",
      name: "item",
      component: Item,
      meta: { auth: true },
    },
    {
      path: "/items",
      name: "items",
      component: Items,
      meta: { auth: true },
    },
  ],
  menu: {
    id: "lookup.item",
    title: "Items",
    component: Item,
    path: "items",
    width: "1000px",
    editHeaders: [
      { title: "Item Category", key: "itemCategory.itemCategory"},
      { title: "Item Name", key: "itemName" },
      { title: "Unit Cost", key: "unitCost", isNumeric: true },
      { title: "Unit Price", key: "unitPrice", isNumeric: true },
      { title: "Measure Group", key: "measureGroup.measureGroupName" },
      { title: "Edit Unit Cost", key: "editUnitCost" },
      { title: "Edit Unit Price", key: "editUnitPrice" },
      { title: "Edit Quantity", key: "editQuantity" },
      { title: "Hidden", key: "hidden" },
      { title: "Actions", key: "actions" },
    ],
    headers: [
      {
        title: "Id",
        align: "start",
        // sortable: false,
        key: "id",
      },
      { title: "Item Category", key: "itemCategory.itemCategory" },
      { title: "Item Name", key: "itemName" },
      { title: "Unit Cost", key: "unitCost", isNumeric: true },
      { title: "Unit Price", key: "unitPrice", isNumeric: true },
      { title: "Measure Group", key: "measureGroup.measureGroupName" },
      { title: "Edit Unit Cost", key: "editUnitCost" },
      { title: "Edit Unit Price", key: "editUnitPrice" },
      { title: "Edit Quantity", key: "editQuantity" },
      { title: "Hidden", key: "hidden" },
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
      { id: "lookup.item.view", title: "View", to: { name: "items" } },
      {
        id: "lookup.item.new",
        title: "New",
        to: { name: "item", params: { mode: 0 } },
      },
      {
        id: "lookup.item.edit",
        title: "Edit",
        to: { name: "item", params: { mode: 1 } },
      },
      {
        id: "lookup.item.history",
        title: "History",
        to: { name: "item", params: { mode: 2 } },
      },
    ],
  },
};
export default itemNav;
