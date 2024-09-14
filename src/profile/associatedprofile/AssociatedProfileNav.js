import AssociatedProfile from './AssociatedProfile.vue'
 import AssociatedProfiles from './AssociatedProfiles.vue'
 const associatedProfileNav={ routes:[
        {
                path: '/associatedprofile/:mode',
                name: 'associatedprofile',
                component: AssociatedProfile,
                meta: { auth: true },
         },
         {
                path: '/associatedprofiles',
                name: 'associatedprofiles',
                component: AssociatedProfiles,
                meta: { auth: true },
         },
        
        ],
menu:{id: "profile.associatedprofile",
        title: "Associated Profiles",
        component: AssociatedProfile,
        path: "associatedprofiles",
        width: "700px",
editHeaders: [{ title: "Profile", key: "profileId"    },
{ title: "Associated Profile", key: "associatedProfileId"    },
{ title: "Position", key: "position"    },
{ title: "Main", key: "main"    },
{title: "Actions", key: "actions"}],headers: [{
                title: "Id",
                align: "start",
                // sortable: false,
                key: "id",
            },
{ title: "Profile", key: "profileId"    },
{ title: "Associated Profile", key: "associatedProfileId"    },
{ title: "Position", key: "position"    },
{ title: "Main", key: "main"    },
 { title: "Branch", key: "branch",},
{ title: "Creation Date", key: "creationDate",  label: "Creation Date", field: "creationDate", isDateTime: true },
                { title: "Last Modified Date", key: "lastModifiedDate", isDateTime: true},
                { title: "Created By", key: "createdBy", },
                { title: "Modified By", key: "modifiedBy", }],
children: [{ id: "profile.associatedProfile.view", title: "View",  to:{ name: "associatedprofiles", }},
{ id: "profile.associatedProfile.new", title: "New",  to:{ name: "associatedprofile", params: {mode:0}}},
{ id: "profile.associatedProfile.edit", title: "Edit",  to:{ name: "associatedprofile", params: {mode:1}}},
{ id: "profile.associatedProfile.history", title: "History",  to:{ name: "associatedprofile", params: {mode:2}}},
]}
}
export default associatedProfileNav;
