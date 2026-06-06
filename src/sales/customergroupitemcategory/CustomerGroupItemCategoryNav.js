import CustomerGroupItemCategory from './CustomerGroupItemCategory.vue'
import CustomerGroupItemCategories from './CustomerGroupItemCategories.vue'
import { navUtils } from 'saburi-vue-utils';
const customerGroupItemCategoryNav = {
        // routes: [
        //         {
        //                 path: '/customergroupitemcategory/:mode',
        //                 name: 'customergroupitemcategory',
        //                 component: CustomerGroupItemCategory,
        //                 meta: { auth: true },
        //         },
        //         {
        //                 path: '/customergroupitemcategories',
        //                 name: 'customergroupitemcategories',
        //                 component: CustomerGroupItemCategories,
        //                 meta: { auth: true },
        //         },

        // ],
        routes: navUtils.allRoutes("customergroupitemcategory", CustomerGroupItemCategory, "customergroupitemcategories", CustomerGroupItemCategories, true),
        menu: {
                id: "sales.customergroupitemcategory",
                title: "Customer Group Item Categories",
                component: CustomerGroupItemCategory,
                path: "customergroupitemcategories",
                width: "700px",
                icon: "mdi-format-list-group",
                requires: navUtils.allRoles("customergroup"),
                editHeaders: [{ title: "Name", key: "name" },
                { title: "Customer Group", key: "customerGroup.id" },
                { title: "Item Category", key: "itemCategory", isNumeric: true },
                { title: "Sales Account", key: "salesAccount" },
                { title: "Expense Account", key: "expenseAccount" },
                { title: "Actions", key: "actions" }], headers: [{
                        title: "Id",
                        align: "start",
                        // sortable: false,
                        key: "id",
                },
                { title: "Name", key: "name" },
                { title: "Customer Group", key: "customerGroup.customerGroup" },
                { title: "Item Category", key: "itemCategory", isNumeric: true },
                { title: "Sales Account", key: "salesAccount" },
                { title: "Expense Account", key: "expenseAccount" },
                { title: "Branch", key: "branch", },
                { title: "Creation Date", key: "creationDate", label: "Creation Date", field: "creationDate", isDateTime: true },
                { title: "Last Modified Date", key: "lastModifiedDate", isDateTime: true },
                { title: "Created By", key: "createdBy", },
                { title: "Modified By", key: "modifiedBy", }],
                // children: [{ id: "sales.customerGroupItemCategory.view", title: "View", to: { name: "customergroupitemcategories", }, icon: "mdi-table" },
                // { id: "sales.customerGroupItemCategory.new", title: "New", to: { name: "customergroupitemcategory", params: { mode: 0 } }, icon: "mdi-plus-circle" },
                // { id: "sales.customerGroupItemCategory.edit", title: "Edit", to: { name: "customergroupitemcategory", params: { mode: 1 } }, icon: "mdi-pencil" },
                // { id: "sales.customerGroupItemCategory.history", title: "History", to: { name: "customergroupitemcategory", params: { mode: 2 } }, icon: "mdi-history" },
                // ]
                children: navUtils.allChildren('sales', 'customergroupitemcategory', 'customergroupitemcategories', false),
        }
}
export default customerGroupItemCategoryNav;
