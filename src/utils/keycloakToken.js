import store from '../store/index'
const keycloakToken = {
    async updateToken () {
      let keycloak =   await store.state.security.user.keycloak.updateToken(70);
        console.log("Keycloak",keycloak);
        store.commit("security/user/keycloak", keycloak);
        return keycloak.token
    }
}

export default keycloakToken;