import ProfilePicture from './ProfilePicture.vue'
const profilePictureNav = {
        route: {
                path: '/profilePicture/:mode',
                name: 'profilePicture',
                component: ProfilePicture,
                meta: { auth: true },
        }, menu: {
                id: "profile.profilepicture",
                name: "Profile Pictures",
                component: ProfilePicture,
                path: "profilepictures",
                width: "700px",
                editHeaders: [{ text: "Profile", value: "profile" },
                { text: "Name", value: "name" },
                { text: "Image Type", value: "imageType" },
                { text: "Photo", value: "photo" },
                { text: "Caption", value: "caption" },
                { text: "Actions", value: "actions" }], headers: [{
                        text: "Id",
                        align: "start",
                        // sortable: false,
                        value: "id",
                },
                { text: "Profile", value: "profile" },
                { text: "Name", value: "name" },
                { text: "Image Type", value: "imageType" },
                { text: "Photo", value: "photo" },
                { text: "Caption", value: "caption" },
                { text: "Branch", value: "branch", label: "Branch", field: "branch" },
                { text: "Creation Date", value: "creationDate", label: "Creation Date", field: "creationDate", isDateTime: true },
                { text: "Last Modified Date", value: "lastModifiedDate", isDateTime: true },
                { text: "Created By", value: "createdBy", label: "Created By", field: "createdBy" },
                { text: "Modified By", value: "modifiedBy", label: "Modified By", field: "modifiedBy" }],
                children: [{ id: "profile.profilePicture.new", name: "New", route: "profilePicture", mode: 0 },
                { id: "profile.profilePicture.edit", name: "Edit", route: "profilePicture", mode: 1 },
                { id: "profile.profilePicture.history", name: "History", route: "profilePicture", mode: 2 },
                ]
        }
}
export default profilePictureNav;
