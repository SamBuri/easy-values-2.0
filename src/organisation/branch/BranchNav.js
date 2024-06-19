import Branch from './Branch.vue'
import CurrentBranch from './CurrentBranch.vue'
import Branchs from './Branchs.vue'
const branchNav = {
        routes: [
                {
                        path: '/branch/:mode',
                        name: 'branch',
                        component: Branch,
                        meta: { auth: true },
                },
                {
                        path: '/branches',
                        name: 'branches',
                        component: Branchs,
                        meta: { auth: true },
                },
                {
                        path: '/currentbranch',
                        name: 'currentbranch',
                        component: CurrentBranch,
                        meta: { auth: true },
                },

        ],



        menu: {
                id: "organisation.branch",
                title: "Branches",
                component: Branch,
                path: "branches",
                width: "700px",
                editHeaders: [
                        { title: "Branch Name", key: "branchName", label: "Branch Name", field: "branchName" },
                        { title: "Address", key: "address", label: "Address", field: "address" },
                        { title: "Phone No", key: "phoneNo", label: "Phone No", field: "phoneNo" },
                        { title: "Email", key: "email", label: "Email", field: "email" },
                        { title: "Actions", key: "actions" }], headers: [{
                                title: "Id",
                                align: "start",
                                // sortable: false,
                                key: "id",
                        },
                        { title: "Company", key: "company.display", label: "Company", field: "company.display" },
                        { title: "Branch Name", key: "branchName", label: "Branch Name", field: "branchName" },
                        { title: "Address", key: "address", label: "Address", field: "address" },
                        { title: "Phone No", key: "phoneNo", label: "Phone No", field: "phoneNo" },
                        { title: "Email", key: "email", label: "Email", field: "email" },
                        { title: "Branch", key: "branch", label: "branch", field: "Branch" },
                        { title: "Creation Date", key: "creationDate", label: "Creation Date", field: "creationDate", isDateTime: true },
                        { title: "Last Modified Date", key: "lastModifiedDate", isDateTime: true },
                        { title: "Created By", key: "createdBy", label: "Created By", field: "createdBy" },
                        { title: "Modified By", key: "modifiedBy", label: "Modified By", field: "modifiedBy" }],
                children: [{ id: "organisation.branch.new", title: "New", route: "branch", mode: 0 },
                { id: "organisation.branch.edit", title: "Edit", route: "branch", mode: 1 },
                { id: "organisation.branch.history", title: "History", route: "branch", mode: 2 },
                ]
        }
}
export default branchNav;
