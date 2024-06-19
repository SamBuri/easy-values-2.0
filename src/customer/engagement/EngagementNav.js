import Engagement from './Engagement.vue'
import Engagements from './Engagements.vue'
const engagementNav = {
        routes: [
                {
                        path: '/engagement/:mode',
                        name: 'engagement',
                        component: Engagement,
                        meta: { auth: true },
                },
                {
                        path: '/engagements',
                        name: 'engagements',
                        component: Engagements,
                        meta: { auth: true },
                },

        ], menu: {
                id: "customer.engagement",
                title: "Engagements",
                component: Engagement,
                path: "engagements",
                width: "1000px",
                editHeaders: [{ title: "Customer", key: "customer.customerName", label: "Customer", field: "customer.customerName" },
                { title: "Engagement Date", key: "engagementDate", label: "Engagement Date", field: "engagementDate", isDate: true },
                { title: "Engagement Reason", key: "engagementReason", label: "Engagement Reason", field: "engagementReason" },
                { title: "Engagement Mode", key: "engagementMode", label: "Engagement Mode", field: "engagementMode" },
                { title: "Title", key: "title", label: "Title", field: "title" },
                { title: "Description", key: "description", label: "Description", field: "description" },
                { title: "Attending Personnel", key: "attendingPersonnel", label: "Attending Personnel", field: "attendingPersonnel" },
                { title: "Status", key: "status", label: "Status", field: "status" },
                { title: "Next Engagement Date", key: "nextEngagementDate", label: "Next Engagement Date", field: "nextEngagementDate", isDate: true },
                { title: "Expected Next Engagement Mode", key: "expectedNextEngagementMode", label: "Expected Next Engagement Mode", field: "expectedNextEngagementMode" },
                { title: "Actions", key: "actions" }],

                midHeaders: [
                        { title: "Engagement Date", key: "engagementDate", label: "Engagement Date", field: "engagementDate", isDate: true },
                        { title: "Engagement Reason", key: "engagementReason", label: "Engagement Reason", field: "engagementReason" },
                        { title: "Engagement Mode", key: "engagementMode", label: "Engagement Mode", field: "engagementMode" },
                        { title: "Title", key: "title", label: "Title", field: "title" },
                        { title: "Description", key: "description", label: "Description", field: "description" },
                        { title: "Attending Personnel", key: "attendingPersonnel", label: "Attending Personnel", field: "attendingPersonnel" },
                        { title: "Status", key: "status", label: "Status", field: "status" },
                        { title: "Next Engagement Date", key: "nextEngagementDate", label: "Next Engagement Date", field: "nextEngagementDate", isDate: true },
                        { title: "Expected Next Engagement Mode", key: "expectedNextEngagementMode", label: "Expected Next Engagement Mode", field: "expectedNextEngagementMode" },
                        { title: "Creation Date", key: "creationDate", label: "Creation Date", field: "creationDate", isDateTime: true },
                        { title: "Last Modified Date", key: "lastModifiedDate", isDateTime: true },
                        { title: "Created By", key: "createdBy", label: "Created By", field: "createdBy" },
                        { title: "Modified By", key: "modifiedBy", label: "Modified By", field: "modifiedBy" }],

                headers: [{
                        title: "Id",
                        align: "start",
                        // sortable: false,
                        key: "id",
                },
                { title: "Customer", key: "customer.customerName", label: "Customer", field: "customer.customerName" },
                { title: "Engagement Date", key: "engagementDate", label: "Engagement Date", field: "engagementDate", isDate: true },
                { title: "Engagement Reason", key: "engagementReason", label: "Engagement Reason", field: "engagementReason" },
                { title: "Engagement Mode", key: "engagementMode", label: "Engagement Mode", field: "engagementMode" },
                { title: "Title", key: "title", label: "Title", field: "title" },
                { title: "Description", key: "description", label: "Description", field: "description" },
                { title: "Attending Personnel", key: "attendingPersonnel", label: "Attending Personnel", field: "attendingPersonnel" },
                { title: "Status", key: "status", label: "Status", field: "status" },
                { title: "Next Engagement Date", key: "nextEngagementDate", label: "Next Engagement Date", field: "nextEngagementDate", isDate: true },
                { title: "Expected Next Engagement Mode", key: "expectedNextEngagementMode", label: "Expected Next Engagement Mode", field: "expectedNextEngagementMode" },
                { title: "Branch", key: "branch", label: "Branch", field: "branch" },
                { title: "Creation Date", key: "creationDate", label: "Creation Date", field: "creationDate", isDateTime: true },
                { title: "Last Modified Date", key: "lastModifiedDate", isDateTime: true },
                { title: "Created By", key: "createdBy", label: "Created By", field: "createdBy" },
                { title: "Modified By", key: "modifiedBy", label: "Modified By", field: "modifiedBy" }],
                children: [{ id: "customer.engagement.new", title: "New", route: "engagement", mode: 0 },
                { id: "customer.engagement.edit", title: "Edit", route: "engagement", mode: 1 },
                { id: "customer.engagement.history", title: "History", route: "engagement", mode: 2 },
                ]
        }
}
export default engagementNav;
