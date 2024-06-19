import RoleDetails from './RoleDetails.vue'
const roleDetailsNav = {
        route: {
                path: '/roleDetails/:mode',
                name: 'roleDetails',
                component: RoleDetails
        }, menu: {
                id: "security.roledetails",
                name: "RoleDetailss",
                component: RoleDetails,
                path: "roledetailss",
                width: "700px",
                editHeaders: [
                { text: "Secured Resource", value: "securedResource.displayKey" },
                { text: "Permission", value: "permission" },
                { text: "Actions", value: "actions" }], headers: [{
                        text: "Id",
                        align: "start",
                        // sortable: false,
                        value: "id",
                },
                { text: "Role", value: "role.displayKey" },
                { text: "Secured Resource", value: "securedResource.displayKey" },
                { text: "Permission", value: "permission" },
                ],
                children: [{ id: "security.roleDetails.new", name: "New", route: "roleDetails", mode: 0 },
                { id: "security.roleDetails.edit", name: "Edit", route: "roleDetails", mode: 1 },
                { id: "security.roleDetails.history", name: "History", route: "roleDetails", mode: 2 },
                ]
        }
}
export default roleDetailsNav;
