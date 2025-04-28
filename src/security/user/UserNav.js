import User from './User.vue'
import Users from './Users.vue'
const userNav = {
        routes: [
                {
                        path: '/user/:mode',
                        name: 'user',
                        component: User,
                        meta: { auth: true },
                },
                {
                        path: '/users',
                        name: 'users',
                        component: Users,
                        meta: { auth: true },
                },

        ],
        menu: {
                id: "security.user",
                title: "Users",
                component: User,
                path: "users",
                width: "1000px",
                editHeaders: [{ title: "First Name", key: "firstName" },
                { title: "Last Name", key: "lastName" },
                { title: "Username", key: "username" },
                { title: "Password", key: "password" },
                { title: "Email", key: "email" },
                { title: "Default Branch", key: "defaultBranch.id" },
                { title: "Enabled", key: "enabled" },
                { title: "Actions", key: "actions" }], headers: [{
                        title: "Id",
                        align: "start",
                        // sortable: false,
                        key: "id",
                },
                { title: "First Name", key: "firstName" },
                { title: "Last Name", key: "lastName" },
                { title: "Username", key: "username" },
                { title: "Password", key: "password" },
                { title: "Email", key: "email" },
                { title: "Default Branch", key: "defaultBranch.id" },
                { title: "Enabled", key: "enabled" },
                { title: "Branch", key: "branch", },
                { title: "Creation Date", key: "creationDate", label: "Creation Date", field: "creationDate", isDateTime: true },
                { title: "Last Modified Date", key: "lastModifiedDate", isDateTime: true },
                { title: "Created By", key: "createdBy", },
                { title: "Modified By", key: "modifiedBy", }],
                children: [{ id: "security.user.view", title: "View", icon: "mdi-table", to: { name: "users", } },
                { id: "security.user.new", title: "New", icon: "mdi-plus-circle", to: { name: "user", params: { mode: 0 } } },
                { id: "security.user.edit", title: "Edit", icon: "mdi-pencil", to: { name: "user", params: { mode: 1 } } },
                { id: "security.user.history", title: "History", icon: "mdi-history", to: { name: "user", params: { mode: 2 } } },
                ]
        }
}
export default userNav;
