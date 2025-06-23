
import Engagement from './Engagement.vue'
import Engagements from './Engagements.vue'
import navUtils from '@/nav/NavUtils'
const engagementNav = {
        // routes: [
        //         {
        //                 path: '/engagement/:mode',
        //                 name: 'engagement',
        //                 component: Engagement,
        //                 meta: { auth: true },
        //         },
        //         {
        //                 path: '/engagements',
        //                 name: 'engagements',
        //                 component: Engagements,
        //                 meta: { auth: true },
        //         },

        // ],
        routes: navUtils.allRoutes("engagement", Engagement, "engagements", Engagements, true),
        menu: {
                id: "sales.engagement",
                title: "Engagements",
                component: Engagement,
                path: "engagements",
                icon: "mdi-call-splitter",
                requires: navUtils.allRoles("engagement"),
                width: "1000px",
                editHeaders: [{ title: "Customer", key: "customer.id" },
                        { title: "Customer Name", key: "customer.customerName" },
                        { title: "Customer Phone", key: "customer.phoneNo" },
                { title: "Engagement Date", key: "engagementDate", isDate: true },
                { title: "Engagement Reason", key: "engagementReason" },
                { title: "Engagement Mode", key: "engagementMode" },
                { title: "Title", key: "title" },
                { title: "Description", key: "description" },
                { title: "Attending Personnel", key: "attendingPersonnel" },
                { title: "Status", key: "status" },
                { title: "Next Engagement Date", key: "nextEngagementDate", isDate: true },
                { title: "Expected Next Engagement Mode", key: "expectedNextEngagementMode" },
                { title: "Parent Engagement", key: "parentEngagement.id" },
                { title: "Actions", key: "actions" }],

                miniHeaders: [{ title: "Customer Id", key: "customer.id" },
                { title: "Customer Name", key: "customer.customerName" },
                { title: "Customer Phone", key: "customer.phoneNo" },
                { title: "Description", key: "description" },
                { title: "Engagement Date", key: "engagementDate", isDate: true },
                { title: "Title", key: "title" },
                ],

                midHeaders: [
               
               { title: "Engagement Date", key: "engagementDate", isDate: true },
                { title: "Engagement Reason", key: "engagementReason" },
                { title: "Engagement Mode", key: "engagementMode" },
                { title: "Title", key: "title" },
                { title: "Description", key: "description" },
                { title: "Attending Personnel", key: "attendingPersonnel" },
                { title: "Status", key: "status" },
                { title: "Next Engagement Date", key: "nextEngagementDate", isDate: true },
                { title: "Expected Next Engagement Mode", key: "expectedNextEngagementMode" },
                { title: "Parent Engagement", key: "parentEngagement.title" },
                ],

                headers: [{
                        title: "Id",
                        align: "start",
                        // sortable: false,
                        key: "id",
                },
                { title: "Customer", key: "customer.id" },
                { title: "Customer Name", key: "customer.customerName" },
                { title: "Customer Phone", key: "customer.phoneNo" },
                { title: "Engagement Date", key: "engagementDate", isDate: true },
                { title: "Engagement Reason", key: "engagementReason" },
                { title: "Engagement Mode", key: "engagementMode" },
                { title: "Title", key: "title" },
                { title: "Description", key: "description" },
                { title: "Attending Personnel", key: "attendingPersonnel" },
                { title: "Status", key: "status" },
                { title: "Next Engagement Date", key: "nextEngagementDate", isDate: true },
                { title: "Expected Next Engagement Mode", key: "expectedNextEngagementMode" },
                { title: "Parent Engagement", key: "parentEngagement.id" },
                { title: "Branch", key: "branch", },
                { title: "Creation Date", key: "creationDate", label: "Creation Date", field: "creationDate", isDateTime: true },
                { title: "Last Modified Date", key: "lastModifiedDate", isDateTime: true },
                { title: "Created By", key: "createdBy", },
                { title: "Modified By", key: "modifiedBy", }],
                // children: [{ id: "sales.engagement.view", title: "View", icon: "mdi-table", to: { name: "engagements", } },
                // { id: "sales.engagement.new", title: "New", icon: "mdi-plus-circle", to: { name: "engagement", params: { mode: 0 } } },
                // { id: "sales.engagement.edit", title: "Edit", icon: "mdi-pencil", to: { name: "engagement", params: { mode: 1 } } },
                // { id: "sales.engagement.history", title: "History", icon: "mdi-history", to: { name: "engagement", params: { mode: 2 } } },
                // ]
                children: navUtils.allChildren('sales', 'engagement', 'engagements', false),
        }
}
export default engagementNav;
