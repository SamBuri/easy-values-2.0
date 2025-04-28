import Role from './Role.vue'
import Roles from './Roles.vue'
const roleNav = {
        routes: [
                {
                        path: '/role/:mode',
                        name: 'role',
                        component: Role,
                        meta: { auth: true },
                },
                {
                        path: '/roles',
                        name: 'roles',
                        component: Roles,
                        meta: { auth: true },
                },

        ],
        menu: {
                id: "security.role",
                title: "Permissions",
                component: Role,
                path: "roles",
                width: "700px",
                editHeaders: [
                        { title: "Name", key: "name" },
                        { title: "Description", key: "description" },
                        { title: "Composite", key: "composite" },
                        { title: "Client Role", key: "clientRole" },
                        { title: "Actions", key: "actions" }], headers: [{
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
                children: [{ id: "security.role.view", title: "View", icon: "mdi-table", to: { name: "roles", } },
                { id: "security.role.new", title: "New", icon: "mdi-plus-circle", to: { name: "role", params: { mode: 0 } } },
                { id: "security.role.edit", title: "Edit", icon: "mdi-pencil", to: { name: "role", params: { mode: 1 } } },
                { id: "security.role.history", title: "History", icon: "mdi-history", to: { name: "role", params: { mode: 2 } } },
                ]
        }
}
export default roleNav;
