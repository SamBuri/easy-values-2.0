import ItemPriceGroup from "./ItemPriceGroup.vue";
import ItemPriceGroups from "./ItemPriceGroups.vue";
import { navUtils } from "saburi-vue-utils";

const itemPriceGroupNav = {
  routes: navUtils.allRoutes("item-price-group", ItemPriceGroup, "item-price-groups", ItemPriceGroups, true, "itempricegroup"),
  menu: {
    id: "lookup.itempricegroup",
    title: "Item Price Groups",
    component: ItemPriceGroup,
    path: "item-price-groups",
    requires: navUtils.allRoles("item-price-groups"),
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
    children: navUtils.allChildren("lookup", "item-price-groups", "item-price-groups", false, "itempricegroup"),
  },
};
export default itemPriceGroupNav;
