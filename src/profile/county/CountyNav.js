import County from './County.vue'
import Counties from './Counties.vue'
import navUtils from '@/nav/NavUtils';
const countyNav = {
        // routes: [
        //         {
        //                 path: '/county/:mode',
        //                 name: 'county',
        //                 component: County,
        //                 meta: { auth: true },
        //         },
        //         {
        //                 path: '/counties',
        //                 name: 'counties',
        //                 component: Counties,
        //                 meta: { auth: true },
        //         },

        // ],
        routes: navUtils.allRoutes("county", County, "counties", Counties, true),
        menu: {
                id: "profile.county",
                title: "Counties",
                component: County,
                path: "counties",
                icon: "mdi-map-marker",
                requires: navUtils.allRoles("county"),
                width: "700px",
                editHeaders: [{ title: "District", key: "districtId" },
                { title: "County Name", key: "countyName" },
                { title: "Hidden", key: "hidden" },
                { title: "Actions", key: "actions" }], headers: [{
                        title: "Id",
                        align: "start",
                        // sortable: false,
                        key: "id",
                },
                { title: "District", key: "districtId" },
                { title: "County Name", key: "countyName" },
                { title: "Hidden", key: "hidden" },
                { title: "Branch", key: "branch", },
                { title: "Creation Date", key: "creationDate", label: "Creation Date", field: "creationDate", isDateTime: true },
                { title: "Last Modified Date", key: "lastModifiedDate", isDateTime: true },
                { title: "Created By", key: "createdBy", },
                { title: "Modified By", key: "modifiedBy", }],
                // children: [{ id: "profile.county.view", title: "View", to: { name: "counties", } },
                // { id: "profile.county.new", title: "New", to: { name: "county", params: { mode: 0 } } },
                // { id: "profile.county.edit", title: "Edit", to: { name: "county", params: { mode: 1 } } },
                // { id: "profile.county.history", title: "History", to: { name: "county", params: { mode: 2 } } },
                // ]
                children: navUtils.allChildren('profile', 'county', 'counties', false),
        }
}
export default countyNav;
