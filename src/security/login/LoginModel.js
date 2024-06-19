const loginModel = {
    login: {
        username: "",
        password: "",

        clear() {
            this.username = "";
            this.password = "";
        }
    },
    path: "logins"
}

export default loginModel;
