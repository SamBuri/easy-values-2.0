import ItemPriceGroup from './ItemPriceGroup.vue'
const itemPriceGroupNav = {
        route: {
                path: '/itemPriceGroup/:mode',
                name: 'itemPriceGroup',
                component: ItemPriceGroup
        }, menu: {
                id: "items.itempricegroup",
                name: "Item Price Groups",
                component: ItemPriceGroup,
                path: "itempricegroups",
                width: "700px",
                editHeaders: [
                { text: "Price Group", value: "priceGroupObj.id" },
                { text: "Price Group", value: "priceGroupObj.lookupDataName" },
                { text: "Unit Price", value: "unitPrice" },
                { text: "Discount", value: "discount" },
                { text: "Actions", value: "actions" },
                ], headers: [{
                        text: "Id",
                        align: "start",
                        // sortable: false,
                        value: "id",
                },
                { text: "Item", value: "item.displayKey" },
                { text: "Price Group", value: "priceGroupId.displayKey" },
                { text: "Price Group", value: "priceGroup" },
                { text: "Unit Price", value: "unitPrice" },
                { text: "Discount", value: "discount" },
                ], children: [{ id: "items.itemPriceGroup.new", name: "New", route: "itemPriceGroup", mode: 0 },
                { id: "items.itemPriceGroup.edit", name: "Edit", route: "itemPriceGroup", mode: 1 },
                { id: "items.itemPriceGroup.history", name: "History", route: "itemPriceGroup", mode: 2 },
                ]
        }
}
export default itemPriceGroupNav;
