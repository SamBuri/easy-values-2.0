import Role from './Role.vue'
const roleNav = {
        route: {
                path: '/role/:mode',
                name: 'role',
                component: Role,
                meta: {auth: true}
        }, menu: {
                id: "security.role",
                name: "Roles",
                component: Role,
                path: "roles",
                width: "700px",
                editHeaders: [{ text: "Role Name", value: "roleName" },
                { text: "Description", value: "description" },
                { text: "Permissions", value: "permissions.displayKey" },
                { text: "Actions", value: "actions" }], headers: [{
                        text: "Id",
                        align: "start",
                        // sortable: false,
                        value: "id",
                },
                { text: "Role Name", value: "roleName" },
                { text: "Description", value: "description" },
                { text: "Permissions", value: "permissions.displayKey" },
                ],
                children: [{ id: "security.role.new", name: "New", route: "role", mode: 0 },
                { id: "security.role.edit", name: "Edit", route: "role", mode: 1 },
                { id: "security.role.history", name: "History", route: "role", mode: 2 },
                ]
        }
}
export default roleNav;
