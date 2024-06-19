import County from './County.vue'
 const countyNav={ route: {
                path: '/county/:mode',
                name: 'county',
                component: County,
                meta: {auth: true}
        },menu:{id: "address.county",
        name: "Counties",
        component: County,
        path: "counties",
        width: "700px",
editHeaders: [{ text: "District", value: "district.displayKey" },
{ text: "County Name", value: "countyName" },
{ text: "Hidden", value: "hidden" },
{text: "Actions", value: "actions"}],headers: [{
                text: "Id",
                align: "start",
                // sortable: false,
                value: "id",
            },
{ text: "District", value: "district.displayKey" },
{ text: "County Name", value: "countyName" },
{ text: "Hidden", value: "hidden" },
],
children: [{ id: "address.county.new", name: "New", route: "county", mode: 0},
{ id: "address.county.edit", name: "Edit", route: "county", mode: 1},
{ id: "address.county.history", name: "History", route: "county", mode: 2},
]}
}
export default countyNav;
