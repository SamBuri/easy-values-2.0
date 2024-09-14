import EngagementPreview from './EngagementPreview.vue'
const engagementPreviewNav = {
        route: {
                path: '/engagementpreview',
                name: 'engagementpreview',
                component: EngagementPreview,
                meta: { auth: true },
        }, menu: {
                id: "customer.engagementpreview",
                title: "Cus. Engagements",
                component: EngagementPreview,
                path: "engagementpreviews",
                to:{ name: "engagementpreview"},
                width: "1000px",
                route: "engagementpreview",
                mode: 0,

        }
}
export default engagementPreviewNav;
