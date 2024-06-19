import ItemCategory from './ItemCategory.vue'
const itemCategoryNav = {
        route: {
                path: '/itemCategory/:mode',
                name: 'itemCategory',
                component: ItemCategory,
                meta: {auth: true}
        }, menu: {
                id: "items.itemcategory",
                name: "Item Categories",
                component: ItemCategory,
                path: "itemcategories",
                width: "700px",
                editHeaders: [{ text: "Item Category", value: "itemCategory" },
                { text: "Item Group", value: "itemGroup" },
                ], headers: [{
                        text: "Id",
                        align: "start",
                        // sortable: false,
                        value: "id",
                },
                { text: "Item Category", value: "itemCategory" },
                { text: "Item Group", value: "itemGroup" },
                ], children: [{ id: "items.itemCategory.new", name: "New", route: "itemCategory", mode: 0 },
                { id: "items.itemCategory.edit", name: "Edit", route: "itemCategory", mode: 1 },
                { id: "items.itemCategory.history", name: "History", route: "itemCategory", mode: 2 },
                ]
        }
}
export default itemCategoryNav;
