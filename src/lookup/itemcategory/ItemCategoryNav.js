import ItemCategory from './ItemCategory.vue'
 import ItemCategories from './ItemCategories.vue'
 const itemCategoryNav={ routes:[
        {
                path: '/itemcategory/:mode',
                name: 'itemcategory',
                component: ItemCategory,
                meta: { auth: true },
         },
         {
                path: '/itemcategories',
                name: 'itemcategories',
                component: ItemCategories,
                meta: { auth: true },
         },

        ], menu: {
                id: "lookup.itemcategory",
                title: "Item Categories",
                component: ItemCategory,
                path: "itemcategories",
                width: "700px",
                editHeaders: [{ title: "Item Category", key: "itemCategory", label: "Item Category", field: "itemCategory" },
                { title: "Item Group", key: "itemGroup", label: "Item Group", field: "itemGroup" },
                { title: "Billable", key: "billable", label: "Billable", field: "billable" },
                { title: "Expensable", key: "expensable", label: "Expensable", field: "expensable" },
                { title: "Hidden", key: "hidden", label: "Hidden", field: "hidden" },
                { title: "Actions", key: "actions" }], headers: [{
                        title: "Id",
                        align: "start",
                        // sortable: false,
                        key: "id",
                },
                { title: "Item Category", key: "itemCategory", label: "Item Category", field: "itemCategory" },
                { title: "Item Group", key: "itemGroup", label: "Item Group", field: "itemGroup" },
                { title: "Billable", key: "billable", label: "Billable", field: "billable" },
                { title: "Expensable", key: "expensable", label: "Expensable", field: "expensable" },
                { title: "Hidden", key: "hidden", label: "Hidden", field: "hidden" },
                { title: "Branch", key: "branch", label: "Branch", field: "branch" },
                { title: "Creation Date", key: "creationDate", label: "Creation Date", field: "creationDate", isDateTime: true },
                { title: "Last Modified Date", key: "lastModifiedDate", isDateTime: true },
                { title: "Created By", key: "createdBy", label: "Created By", field: "createdBy" },
                { title: "Modified By", key: "modifiedBy", label: "Modified By", field: "modifiedBy" }],
                children: [
                  { id: "lookup.itemCategory.view", title: "View", to:{ name: "itemcategories"} },
                  { id: "lookup.itemCategory.new", title: "New", to:{ name: "itemcategory", params: {mode:0}} },
                { id: "lookup.itemCategory.edit", title: "Edit", to:{ name: "itemcategory", params: {mode:1}} },
                { id: "lookup.itemCategory.history", title: "History", to:{ name: "itemcategory", params: {mode:2}}},
                ]
        }
}
export default itemCategoryNav;
