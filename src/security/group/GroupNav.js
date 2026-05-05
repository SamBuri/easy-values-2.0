import Group from './Group.vue'
import Groups from './Groups.vue'
import navUtils from '@/nav/NavUtils';

const groupNav = {
        // routes: [
        //         {
        //                 path: '/group/:mode',
        //                 name: 'group',
        //                 component: Group,
        //                 meta: { auth: true },
        //         },
        //         {
        //                 path: '/groups',
        //                 name: 'groups',
        //                 component: Groups,
        //                 meta: { auth: true },
        //         },

        // ],
        routes: navUtils.allRoutes('group', Group, 'groups', Groups, true),
        menu: {
                id: "security.group",
                title: "Groups",
                icon: "mdi-account-group",
                component: Group,
                requires: navUtils.allRoles("group"),
                path: "groups",
                width: "700px",
                miniHeaders: [{ title: "Name", key: "name" },],
                editHeaders: [{ title: "Name", key: "name" },
                { title: "Actions", key: "actions" }],


                headers: [{
                        title: "Id",
                        align: "start",
                        // sortable: false,
                        key: "id",
                },
                { title: "Name", key: "name" },
                { title: "Branch", key: "branch", },
                // { title: "Creation Date", key: "creationDate", label: "Creation Date", field: "creationDate", isDateTime: true },
                // { title: "Last Modified Date", key: "lastModifiedDate", isDateTime: true },
                // { title: "Created By", key: "createdBy", },
                // { title: "Modified By", key: "modifiedBy", }
        ],
                // children: [{ id: "security.group.view", title: "View", icon: "mdi-table", to: { name: "groups", } },
                // { id: "security.group.new", title: "New", icon: "mdi-plus-circle", to: { name: "group", params: { mode: 0 } } },
                // { id: "security.group.edit", title: "Edit", icon: "mdi-pencil", to: { name: "group", params: { mode: 1 } } },
                // { id: "security.group.history", title: "History", icon: "mdi-history", to: { name: "group", params: { mode: 2 } } },
               
                // ]
        children: navUtils.allChildren('security', 'group', 'groups',false),
        }
}
export default groupNav;
