import AssociatedProfile from './AssociatedProfile.vue'
const associatedProfileNav = {
        route: {
                path: '/associatedProfile/:mode',
                name: 'associatedProfile',
                component: AssociatedProfile,
                meta: { auth: true },
        }, menu: {
                id: "profile.associatedprofile",
                name: "Associated Profiles",
                component: AssociatedProfile,
                path: "associatedprofiles",
                width: "700px",
                editHeaders: [{ text: "Profile", value: "profile" },
                { text: "Associated Profile", value: "associatedProfile" },
                { text: "Name", value: "associatedProfile.name" },
                { text: "Position", value: "position" },
                { text: "Main", value: "main" },
                { text: "Actions", value: "actions" }], headers: [{
                        text: "Id",
                        align: "start",
                        // sortable: false,
                        value: "id",
                },
                { text: "Profile", value: "profile" },
                { text: "Associated Profile", value: "associatedProfile" },
                { text: "Position", value: "position" },
                { text: "Main", value: "main" },
                { text: "Branch", value: "branch", label: "Branch", field: "branch" },
                { text: "Creation Date", value: "creationDate", label: "Creation Date", field: "creationDate", isDateTime: true },
                { text: "Last Modified Date", value: "lastModifiedDate", isDateTime: true },
                { text: "Created By", value: "createdBy", label: "Created By", field: "createdBy" },
                { text: "Modified By", value: "modifiedBy", label: "Modified By", field: "modifiedBy" }],
                children: [{ id: "profile.associatedProfile.new", name: "New", route: "associatedProfile", mode: 0 },
                { id: "profile.associatedProfile.edit", name: "Edit", route: "associatedProfile", mode: 1 },
                { id: "profile.associatedProfile.history", name: "History", route: "associatedProfile", mode: 2 },
                ]
        }
}
export default associatedProfileNav;
