import Permission from './Permission.vue'
 const permissionNav={ route: {
                path: '/permission/:mode',
                name: 'permission',
                component: Permission
        },menu:{id: "security.permission",
        name: "Permissions",
        component: Permission,
        path: "permissions",
        width: "700px",
editHeaders: [{ text: "Permission Name", value: "permissionName" },
{text: "Actions", value: "actions"}],headers: [{
                text: "Id",
                align: "start",
                // sortable: false,
                value: "id",
            },
{ text: "Permission Name", value: "permissionName" },
],
children: [{ id: "security.permission.new", name: "New", route: "permission", mode: 0},
{ id: "security.permission.edit", name: "Edit", route: "permission", mode: 1},
{ id: "security.permission.history", name: "History", route: "permission", mode: 2},
]}
}
export default permissionNav;
