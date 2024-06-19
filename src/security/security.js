import role from './role/role.js'
import securedresource from './securedresource/securedresource.js'
import permission from './/permission/permission.js'
import user from './user/user.js'
import login from './login/login.js'
export default {
    namespaced:true,
    state: {},
    mutations: {},
    actions: {},
    modules: {permission, role, securedresource, user, login} 

}