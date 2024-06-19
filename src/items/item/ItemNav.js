import Item from './Item.vue'
const itemNav = {
        route: {
                path: '/item/:mode',
                name: 'item',
                component: Item,
                meta: { auth: true }
        }, menu: {
                id: "items.item",
                name: "Items",
                component: Item,
                path: "items",
                width: "700px",
                editHeaders: [{ text: "Item Category", value: "itemCategory.itemCategory" },
                { text: "Item Name", value: "itemName" },
                { text: "Unit Cost", value: "unitCost" ,isNumeric:true},
                { text: "Unit Price", value: "unitPrice" ,isNumeric:true},
                { text: "Item Group", value: "itemGroupId" },
                { text: "Item Group", value: "itemGroup" },
                { text: "VAT Item Group", value: "vatItemGroupId.displayKey" },
                { text: "VAT Item Group", value: "vatItemGroup" },
                { text: "Inventory Group", value: "inventoryGroupId.displayKey" },
                { text: "Inventory Group", value: "inventoryGroup" },
                { text: "Measure Group", value: "measureGroup.displayKey" },
              
                ], headers: [{
                        text: "Id",
                        align: "start",
                        // sortable: false,
                        value: "id",
                },
                { text: "Item Category", value: "itemCategory.itemCategory" },
                { text: "Item Name", value: "itemName" },
                { text: "Unit Cost", value: "unitCost" ,isNumeric:true},
                { text: "Unit Price", value: "unitPrice" ,isNumeric:true},
                { text: "Item Group", value: "itemGroupId" },
                { text: "Item Group", value: "itemGroup" },
                { text: "VAT Item Group", value: "vatItemGroupId" },
                { text: "VAT Item Group", value: "vatItemGroup" },
                { text: "Inventory Group", value: "inventoryGroupId" },
                { text: "Inventory Group", value: "inventoryGroup" },
                { text: "Measure Group", value: "measureGroup.displayKey" },
                ], children: [{ id: "items.item.new", name: "New", route: "item", mode: 0 },
                { id: "items.item.edit", name: "Edit", route: "item", mode: 1 },
                { id: "items.item.history", name: "History", route: "item", mode: 2 },
                ]
        }
}
export default itemNav;
