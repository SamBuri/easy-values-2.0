import Permsission from './Permsission.vue'
import Permsissions from './Permsissions.vue'
const permsissionNav = {
        routes: [
                {
                        path: '/permsission/:mode',
                        name: 'permsission',
                        component: Permsission,
                        meta: { auth: true },
                },
                {
                        path: '/permsissions',
                        name: 'permsissions',
                        component: Permsissions,
                        meta: { auth: true },
                },

        ],
        menu: {
                id: "security.permsission",
                title: "Permissions",
                component: Permsission,
                path: "permsissions",
                width: "700px",
                editHeaders: [{ title: "Name", key: "name" },
                { title: "Composite", key: "composite" },
                { title: "Client Role", key: "clientRole" },
                { title: "Actions", key: "actions" }], 

                miniHeaders: [{ title: "Name", key: "name" },
                        { title: "Description", key: "description" },
                        { title: "Composite", key: "composite" },
                        { title: "Client Role", key: "clientRole" },
                       ], 
                headers: [{
                        title: "Id",
                        align: "start",
                        // sortable: false,
                        key: "id",
                },
                { title: "Name", key: "name" },
                { title: "Composite", key: "composite" },
                { title: "Client Role", key: "clientRole" },
                { title: "Branch", key: "branch", },
                { title: "Creation Date", key: "creationDate", label: "Creation Date", field: "creationDate", isDateTime: true },
                { title: "Last Modified Date", key: "lastModifiedDate", isDateTime: true },
                { title: "Created By", key: "createdBy", },
                { title: "Modified By", key: "modifiedBy", }],
                children: [{ id: "security.permsission.view", title: "View", icon: "mdi-table", to: { name: "permsissions", } },
                { id: "security.permsission.new", title: "New", icon: "mdi-plus-circle", to: { name: "permsission", params: { mode: 0 } } },
                { id: "security.permsission.edit", title: "Edit", icon: "mdi-pencil", to: { name: "permsission", params: { mode: 1 } } },
                { id: "security.permsission.history", title: "History", icon: "mdi-history", to: { name: "permsission", params: { mode: 2 } } },
                ]
        }
}
export default permsissionNav;
