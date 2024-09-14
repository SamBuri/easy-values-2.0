import ProfilePicture from './ProfilePicture.vue'
 import ProfilePictures from './ProfilePictures.vue'
 const profilePictureNav={ routes:[
        {
                path: '/profilepicture/:mode',
                name: 'profilepicture',
                component: ProfilePicture,
                meta: { auth: true },
         },
         {
                path: '/profilepictures',
                name: 'profilepictures',
                component: ProfilePictures,
                meta: { auth: true },
         },
        
        ],
menu:{id: "profile.profilepicture",
        title: "Profile Pictures",
        component: ProfilePicture,
        path: "profilepictures",
        width: "700px",
editHeaders: [{ title: "Profile", key: "profileId"    },
{ title: "Name", key: "name"    },
{ title: "Image Type", key: "imageType"    },
{ title: "Photo", key: "photo"    },
{ title: "Caption", key: "caption"    },
{title: "Actions", key: "actions"}],headers: [{
                title: "Id",
                align: "start",
                // sortable: false,
                key: "id",
            },
{ title: "Profile", key: "profileId"    },
{ title: "Name", key: "name"    },
{ title: "Image Type", key: "imageType"    },
{ title: "Photo", key: "photo"    },
{ title: "Caption", key: "caption"    },
 { title: "Branch", key: "branch",},
{ title: "Creation Date", key: "creationDate",  label: "Creation Date", field: "creationDate", isDateTime: true },
                { title: "Last Modified Date", key: "lastModifiedDate", isDateTime: true},
                { title: "Created By", key: "createdBy", },
                { title: "Modified By", key: "modifiedBy", }],
children: [{ id: "profile.profilePicture.view", title: "View",  to:{ name: "profilepictures", }},
{ id: "profile.profilePicture.new", title: "New",  to:{ name: "profilepicture", params: {mode:0}}},
{ id: "profile.profilePicture.edit", title: "Edit",  to:{ name: "profilepicture", params: {mode:1}}},
{ id: "profile.profilePicture.history", title: "History",  to:{ name: "profilepicture", params: {mode:2}}},
]}
}
export default profilePictureNav;
