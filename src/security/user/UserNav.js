import User from './User.vue'
const userNav = {
        route: {
                path: '/user/:mode',
                name: 'user',
                component: User,
                meta: {auth: true}
        }, menu: {
                id: "security.user",
                name: "Users",
                component: User,
                path: "users",
                width: "700px",
                editHeaders: [{ text: "First Name", value: "firstName" },
                { text: "Last Name", value: "lastName" },
                { text: "Staff No", value: "staffNo" },
                { text: "Username", value: "username" },
                { text: "Role", value: "role.displayKey" },
                { text: "Locked", value: "locked" },
                { text: "Actions", value: "actions" }], headers: [{
                        text: "Id",
                        align: "start",
                        // sortable: false,
                        value: "id",
                },
                { text: "First Name", value: "firstName" },
                { text: "Last Name", value: "lastName" },
                { text: "Staff No", value: "staffNo" },
                { text: "Username", value: "username" },
                { text: "Role", value: "role.displayKey" },
                { text: "Locked", value: "locked" },
                ],
                children: [{ id: "security.user.new", name: "New", route: "user", mode: 0 },
                { id: "security.user.edit", name: "Edit", route: "user", mode: 1 },
                { id: "security.user.history", name: "History", route: "user", mode: 2 },
                ]
        }
}
export default userNav;
