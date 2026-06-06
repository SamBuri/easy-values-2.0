import { navUtils } from 'saburi-vue-utils';
import Branch from './Branch.vue'
import Branches from './Branches.vue'
const branchNav = {
        routes: navUtils.allRoutes('branch', Branch, 'branches', Branches, true),
        menu: {
                id: "organisation.branch",
                title: "Branches",
                component: Branch,
                icon: "mdi-warehouse",
                path: "branches",
                requires: navUtils.allRoles("branch"),
                width: "700px",
                editHeaders: [
                { title: "Branch Name", key: "branchName" },
                { title: "Address", key: "address" },
                { title: "Phone No", key: "phoneNo" },
                { title: "Email", key: "email" },
                { title: "Actions", key: "actions" }], headers: [{
                        title: "Id",
                        align: "start",
                        // sortable: false,
                        key: "id",
                },
                { title: "Company", key: "company.companyName" },
                { title: "Branch Name", key: "branchName" },
                { title: "Address", key: "address" },
                { title: "Phone No", key: "phoneNo" },
                { title: "Email", key: "email" },
                { title: "Branch", key: "branch", },
                { title: "Creation Date", key: "creationDate", label: "Creation Date", field: "creationDate", isDateTime: true },
                { title: "Last Modified Date", key: "lastModifiedDate", isDateTime: true },
                { title: "Created By", key: "createdBy", },
                { title: "Modified By", key: "modifiedBy", }],
                // children: [{ id: "organisation.branch.view", title: "View", icon: "mdi-table", to: { name: "branches", } },
                // { id: "organisation.branch.new", title: "New", icon: "mdi-plus-circle", to: { name: "branch", params: { mode: 0 } } },
                // { id: "organisation.branch.edit", title: "Edit", icon: "mdi-pencil", to: { name: "branch", params: { mode: 1 } } },
                // { id: "organisation.branch.history", title: "History", icon: "mdi-history", to: { name: "branch", params: { mode: 2 } } },
                // ]
                children: navUtils.allChildren('organisation', 'branch', 'branches', false),
        }
}
export default branchNav;
