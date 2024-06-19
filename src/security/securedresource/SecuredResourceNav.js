import SecuredResource from './SecuredResource.vue'
 const securedResourceNav={ route: {
                path: '/securedResource/:mode',
                name: 'securedResource',
                component: SecuredResource
        },menu:{id: "security.securedresource",
        name: "SecuredResources",
        component: SecuredResource,
        path: "securedresources",
        width: "700px",
editHeaders: [{ text: "Resource Name", value: "resourceName" },
{ text: "Caption", value: "caption" },
{ text: "Resource Type", value: "resourceType" },
{text: "Actions", value: "actions"}],headers: [{
                text: "Id",
                align: "start",
                // sortable: false,
                value: "id",
            },
{ text: "Resource Name", value: "resourceName" },
{ text: "Caption", value: "caption" },
{ text: "Resource Type", value: "resourceType" },
],
children: [{ id: "security.securedResource.new", name: "New", route: "securedResource", mode: 0},
{ id: "security.securedResource.edit", name: "Edit", route: "securedResource", mode: 1},
{ id: "security.securedResource.history", name: "History", route: "securedResource", mode: 2},
]}
}
export default securedResourceNav;
