import ItemPriceGroup from './ItemPriceGroup.vue'
const itemPriceGroupNav = {
        route: [
          {
            path: '/itempricegroup/:mode',
            name: 'itempricegroup',
            component: ItemPriceGroup
    },
    {
      path: '/itempriceproups',
      name: 'itempricegroup',
      component: ItemPriceGroup
}
        ], menu: {
                id: "items.itempricegroup",
                name: "Item Price Groups",
                component: ItemPriceGroup,
                path: "itempricegroups",
                width: "700px",
                editHeaders: [
                { title: "Price Group", key: "priceGroupObj.id" },
                { title: "Price Group", key: "priceGroupObj.lookupDataName" },
                { title: "Unit Price", key: "unitPrice" },
                { title: "Discount", key: "discount" },
                { title: "Actions", key: "actions" },
                ], headers: [{
                        title: "Id",
                        align: "start",
                        // sortable: false,
                        key: "id",
                },
                { title: "Item", key: "item.displayKey" },
                { title: "Price Group", key: "priceGroupId.displayKey" },
                { title: "Price Group", key: "priceGroup" },
                { title: "Unit Price", key: "unitPrice" },
                { title: "Discount", key: "discount" },
                ], children: [
                  { id: "items.itemPriceGroup.view", title: "View", to:{name:"itempricegroups"} },
                  { id: "items.itemPriceGroup.new", title: "New", to:{name:"itempricegroup", params: {mode:0}} },
                { id: "items.itemPriceGroup.edit", title: "Edit", to:{name:"itempricegroup", params: {mode:1}} },
                { id: "items.itemPriceGroup.history", title: "History", to:{name:"itempricegroup", params: {mode:2}} },
                ]
        }
}
export default itemPriceGroupNav;
