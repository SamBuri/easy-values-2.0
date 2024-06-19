import AccountCategory from './AccountCategory.vue'
import AccountCategories from './AccountCategories.vue'
const accountCategoryNav = {
        routes: [{
                path: '/accountcategory/:mode',
                name: 'accountcategory',
                component: AccountCategory,
                meta: { auth: true },
         },
         {
                path: '/accountcategories',
                name: 'accountcategories',
                component: AccountCategories,
                meta: { auth: true },
         },

        ], menu: {
                id: "accounting.accountcategory",
                title: "Account Categories",
                component: AccountCategory,
                path: "accountcategories",
                width: "700px",
                editHeaders: [{ title: "Account Type", key: "accountType", label: "Account Type", field: "accountType" },
                { title: "Parent Category Id", key: "parentCategoryId", label: "Parent Category Id", field: "parentCategoryId" },
                { title: "Parent Category", key: "parentCategory", label: "Parent Category", field: "parentCategory" },
                { title: "Category Name", key: "categoryName", label: "Category Name", field: "categoryName" },
                { title: "Read Only", key: "readOnly", label: "Read Only", field: "readOnly" },
                { title: "Hidden", key: "hidden", label: "Hidden", field: "hidden" },
                { title: "Actions", key: "actions" }], headers: [{
                        title: "Id",
                        align: "start",
                        // sortable: false,
                        key: "id",
                },
                { title: "Account Type", key: "accountType", label: "Account Type", field: "accountType" },
                { title: "Parent Category Id", key: "parentCategoryId", label: "Parent Category Id", field: "parentCategoryId" },
                { title: "Parent Category", key: "parentCategory", label: "Parent Category", field: "parentCategory" },
                { title: "Category Name", key: "categoryName", label: "Category Name", field: "categoryName" },
                { title: "Read Only", key: "readOnly", label: "Read Only", field: "readOnly" },
                { title: "Hidden", key: "hidden", label: "Hidden", field: "hidden" },
                { title: "Branch", key: "branch", label: "Branch", field: "branch" },
                { title: "Creation Date", key: "creationDate", label: "Creation Date", field: "creationDate", isDateTime: true },
                { title: "Last Modified Date", key: "lastModifiedDate", isDateTime: true },
                { title: "Created By", key: "createdBy", label: "Created By", field: "createdBy" },
                { title: "Modified By", key: "modifiedBy", label: "Modified By", field: "modifiedBy" }],
                children: [
                  { id: "accounting.accountCategory.view", title: "View", to: { name: "accountcategories"} },
                  { id: "accounting.accountCategory.new", title: "New", to: { name: "accountcategory", mode: 0} },
                { id: "accounting.accountCategory.edit", title: "Edit", to: { name: "accountcategory", mode: 1} },
                { id: "accounting.accountCategory.history", title: "History", to: { name: "accountcategory", mode: 2}},
                ]
        }
}
export default accountCategoryNav;
