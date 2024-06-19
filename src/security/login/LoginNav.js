import Login from './Login.vue'
const loginNav = {
        route: {
                path: '/login',
                name: 'login',
                component: Login
        }, menu: {
                id: "login.login",
                name: "Logins",
                component: Login,
                path: "logins",
                width: "700px",
                editHeaders: [{ text: "Username", value: "username" },
                { text: "Password", value: "password" },
                { text: "Actions", value: "actions" }], headers: [{
                        text: "Id",
                        align: "start",
                        // sortable: false,
                        value: "id",
                },
                { text: "Username", value: "username" },
                { text: "Password", value: "password" },
                ],
                children: [{ id: "login.login.new", name: "New", route: "login", mode: 0 },
                { id: "login.login.edit", name: "Edit", route: "login", mode: 1 },
                { id: "login.login.history", name: "History", route: "login", mode: 2 },
                ]
        }
}
export default loginNav;
