import navUtils from '@/nav/NavUtils';
import ResetPassword from './ResetPassword.vue'
const resetPasswordNav = {
        routes: [
                navUtils.viewRoute('resetpassword', ResetPassword, true),
        ],
        menu: {
                id: "security.resetpassword",
                title: "Reset Passwords",
                component: ResetPassword,
                path: "resetpasswords",
                to: { name: "resetpassword" },
                icon: "mdi-lock-reset",
                requires: ['reset_password'],
                width: "700px",
                editHeaders: [{ title: "Type", key: "type" },
                { title: "Password", key: "value" },
                { title: "Temporary", key: "temporary" },
                { title: "Actions", key: "actions" }], headers: [{
                        title: "Id",
                        align: "start",
                        // sortable: false,
                        key: "id",
                },
                { title: "Type", key: "type" },
                { title: "Password", key: "value" },
                { title: "Temporary", key: "temporary" },
                { title: "Branch", key: "branch", },
                { title: "Creation Date", key: "creationDate", label: "Creation Date", field: "creationDate", isDateTime: true },
                { title: "Last Modified Date", key: "lastModifiedDate", isDateTime: true },
                { title: "Created By", key: "createdBy", },
                { title: "Modified By", key: "modifiedBy", }],
                
        }
}
export default resetPasswordNav;
