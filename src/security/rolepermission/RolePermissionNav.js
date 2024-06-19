import RolePermission from './RolePermission.vue'
 const rolePermissionNav={ route: {
                path: '/rolePermission/:mode',
                name: 'rolePermission',
                component: RolePermission
        },menu:{id: "security.rolepermission",
        name: "Role Permissions",
        component: RolePermission,
        path: "rolepermissions",
        width: "700px",
editHeaders: [{ text: "Role", value: "role.displayKey" },
{ text: "Permission", value: "permission.displayKey" },
{text: "Actions", value: "actions"}],headers: [{
                text: "Id",
                align: "start",
                // sortable: false,
                value: "id",
            },
{ text: "Role", value: "role.displayKey" },
{ text: "Permission", value: "permission.displayKey" },
],
children: [{ id: "security.rolePermission.new", name: "New", route: "rolePermission", mode: 0},
{ id: "security.rolePermission.edit", name: "Edit", route: "rolePermission", mode: 1},
{ id: "security.rolePermission.history", name: "History", route: "rolePermission", mode: 2},
]}
}
export default rolePermissionNav;
