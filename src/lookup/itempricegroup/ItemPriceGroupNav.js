import ItemPriceGroup from "./ItemPriceGroup.vue";
import ItemPriceGroups from "./ItemPriceGroups.vue";
const itemPriceGroupNav = {
  routes: [
    {
      path: "/itempricegroup/:mode",
      name: "itempricegroup",
      component: ItemPriceGroup,
      meta: { auth: true },
    },
    {
      path: "/itempricegroups",
      name: "itempricegroups",
      component: ItemPriceGroups,
      meta: { auth: true },
    },
  ],
  menu: {
    id: "lookup.itempricegroup",
    title: "ItemPriceGroups",
    component: ItemPriceGroup,
    path: "itempricegroups",
    width: "700px",
    editHeaders: [
      // { title: "Price Group Id", key: "priceGroupId" },
      { title: "Price Group", key: "priceGroup.lookupDataName" },
      { title: "Unit Price", key: "unitPrice", isNumeric: true },
      { title: "Discount", key: "discount", isNumeric: true },
      { title: "Actions", key: "actions" },
    ],
    headers: [
      {
        title: "Id",
        align: "start",
        // sortable: false,
        key: "id",
      },
      { title: "Item", key: "item" },
      { title: "Price Group", key: "priceGroupId" },
      { title: "Price Group", key: "priceGroup" },
      { title: "Unit Price", key: "unitPrice", isNumeric: true },
      { title: "Discount", key: "discount", isNumeric: true },
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
        id: "lookup.itemPriceGroup.view",
        title: "View",
        to: { name: "itempricegroups" },
      },
      {
        id: "lookup.itemPriceGroup.new",
        title: "New",
        to: { name: "itempricegroup", params: { mode: 0 } },
      },
      {
        id: "lookup.itemPriceGroup.edit",
        title: "Edit",
        to: { name: "itempricegroup", params: { mode: 1 } },
      },
      {
        id: "lookup.itemPriceGroup.history",
        title: "History",
        to: { name: "itempricegroup", params: { mode: 2 } },
      },
    ],
  },
};
export default itemPriceGroupNav;
