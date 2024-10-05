import ShareType from './ShareType.vue'
 import ShareTypes from './ShareTypes.vue'
 const shareTypeNav={ routes:[
        {
                path: '/sharetype/:mode',
                name: 'sharetype',
                component: ShareType,
                meta: { auth: true },
         },
         {
                path: '/sharetypes',
                name: 'sharetypes',
                component: ShareTypes,
                meta: { auth: true },
         },
        
        ],
menu:{id: "shares.sharetype",
        title: "Share Types",
        component: ShareType,
        path: "sharetypes",
        width: "700px",
editHeaders: [{ title: "Name", key: "name"    },
{ title: "Unit Price", key: "unitPrice" ,isNumeric: true   },
{ title: "Dividend Percent", key: "dividendPercent" ,isNumeric: true   },
{ title: "Hidden", key: "hidden"    },
{title: "Actions", key: "actions"}],headers: [{
                title: "Id",
                align: "start",
                // sortable: false,
                key: "id",
            },
{ title: "Name", key: "name"    },
{ title: "Unit Price", key: "unitPrice" ,isNumeric: true   },
{ title: "Dividend Percent", key: "dividendPercent" ,isNumeric: true   },
{ title: "Hidden", key: "hidden"    },
 { title: "Branch", key: "branch",},
{ title: "Creation Date", key: "creationDate",  label: "Creation Date", field: "creationDate", isDateTime: true },
                { title: "Last Modified Date", key: "lastModifiedDate", isDateTime: true},
                { title: "Created By", key: "createdBy", },
                { title: "Modified By", key: "modifiedBy", }],
children: [{ id: "shares.shareType.view", title: "View",  to:{ name: "sharetypes", }},
{ id: "shares.shareType.new", title: "New",  to:{ name: "sharetype", params: {mode:0}}},
{ id: "shares.shareType.edit", title: "Edit",  to:{ name: "sharetype", params: {mode:1}}},
{ id: "shares.shareType.history", title: "History",  to:{ name: "sharetype", params: {mode:2}}},
]}
}
export default shareTypeNav;
