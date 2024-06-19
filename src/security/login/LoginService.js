const CURRENT_USER = "CurrentUser";
let storedUser = localStorage.getItem(CURRENT_USER);
const loginService = {
    setCurrentUser(loginData) {
        localStorage.setItem(CURRENT_USER, loginData);
    },

    getCurrentUser() {
        return JSON.stringify(storedUser);
    },

    isLoggedIn() {
        
        return storedUser !== null;
    },

    logout() {
        localStorage.removeItem(CURRENT_USER);
    },
}

export default loginService;