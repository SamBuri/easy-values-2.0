import User from './User.vue'
import Users from './Users.vue'
import { navUtils } from 'saburi-vue-utils';
import {defineBranchStore} from "@/organisation/branch/BranchStore";

function getBranchName(branchId) {
        const branchStore = defineBranchStore();
        return branchStore.getUserBranchName(branchId);
}



const userNav = {


        routes: navUtils.allRoutes('user', User, 'users', Users, true),

        menu: {
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
                                title: "Default Branch", key: "attributes.default_branch",
                                value: (item) => {
                                        if (!item.attributes?.default_branch || !item.attributes?.default_branch?.length) return '';
                                        return item.attributes.default_branch.map(b => getBranchName(b)).join(', ');
                                }
                        },

                        {
                                title: "Other Branches", key: "attributes.other_branches",
                                value: (item) => {
                                        if (!item.attributes?.other_branches || !item.attributes?.other_branches?.length) return '';
                                        return item.attributes.other_branches.filter(b => !!b).map(b => getBranchName(b)).join(', ');
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
