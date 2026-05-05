import Role from './Role.vue'
import Roles from './Roles.vue'
import navUtils from '@/nav/NavUtils';
const roleNav = {
        routes: navUtils.allRoutes('role', Role, 'roles', Roles, true),
        menu: {
                id: "security.role",
                title: "ROLES",
                component: Role,
                path: "roles",
                to: { name: "roles", },
                requires: ["role_view"],
                icon: "mdi-shield-account",
                width: "700px",
                editHeaders: [
                      
                        { title: "Description", key: "description" },
                        ], 
                        headers: [{
                                title: "Id",
                                align: "start",
                                // sortable: false,
                                key: "id",
                        },
                        { title: "Name", key: "name" },
                         { title: "Description", key: "description" },
                        { title: "Composite", key: "composite" },
                        { title: "Client Role", key: "clientRole" },
                        // { title: "Branch", key: "branch", },
                        // { title: "Creation Date", key: "creationDate", label: "Creation Date", field: "creationDate", isDateTime: true },
                        // { title: "Last Modified Date", key: "lastModifiedDate", isDateTime: true },
                        // { title: "Created By", key: "createdBy", },
                        // { title: "Modified By", key: "modifiedBy", }
                ],
               
        }
}
export default roleNav;
