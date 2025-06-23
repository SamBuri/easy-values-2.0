import User from './User.vue'
import Users from './Users.vue'
import keycloakService from '@/keycloak/keycloakService.js'
import { defineTenantStore } from '@/organisation/tenant/TenantStore'
import navUtils from '@/nav/NavUtils'

function getBranchName(branchId) {
        const tenantStore = defineTenantStore();
        return tenantStore.getBranchName(branchId);
}



const userNav = {


        routes: navUtils.allRoutes('user', User, 'users', Users, true),

        menu: {
                httpStrategy: async () => keycloakService.getHttpStrategy(),
                id: "security.user",
                title: "Users",
                component: User,
                path: "users",
                icon: "mdi-account-multiple",
                requires: navUtils.allRoles("user"),
                width: "1000px",

                miniHeaders: [{ title: "First Name", key: "firstName" },
                { title: "Last Name", key: "lastName" },
                { title: "Username", key: "username" },
                { title: "Email", key: "email" },
                { title: "Enabled", key: "enabled" },
                ],
                headers: [
                        {
                                title: "Id",
                                align: "start",
                                // sortable: false,
                                key: "id",
                        },
                        { title: "First Name", key: "firstName" },
                        { title: "Last Name", key: "lastName" },
                        { title: "Username", key: "username" },
                        { title: "Email", key: "email" },
                        {
                                title: "Default Branch", key: "attributes.defaultBranch",
                                value: (item) => {
                                        if (!item.attributes?.defaultBranch || !item.attributes?.defaultBranch?.length) return '';
                                        return item.attributes.defaultBranch.map(b => getBranchName(b)).join(', ');
                                }
                        },

                        {
                                title: "Other Branches", key: "attributes.otherBranches",
                                value: (item) => {
                                        if (!item.attributes?.otherBranches || !item.attributes?.otherBranches?.length) return '';
                                        return item.attributes.otherBranches.filter(b => !!b).map(b => getBranchName(b)).join(', ');
                                }
                        },
                        {
                                title: "Required Action", key: "requiredActions", value: (item) => {
                                        if (!item?.requiredActions || !item?.requiredActions?.length) return '';
                                        return item.requiredActions.join(', ');
                                }
                        },
                        { title: "Email Verified", key: "emailVerified" },
                        { title: "Creation Date", key: "createdTimestamp", isDateTime: true },
                        { title: "Enabled", key: "enabled" },
                ],

                editHeaders: [{ title: "First Name", key: "firstName" },
                { title: "Last Name", key: "lastName" },
                { title: "Username", key: "username" },
                { title: "Email", key: "email" },

                { title: "Enabled", key: "enabled" },
                { title: "Actions", key: "actions" }],

                children: navUtils.allChildren("security", "user", "users", false)



        }
}
export default userNav;
