import EngagementPreview from './EngagementPreview.vue'
import navUtils from '@/nav/NavUtils';
const engagementPreviewNav = {
        route: navUtils.viewRoute('engagementpreview', EngagementPreview, true),
        // route: {
        //         path: '/engagementpreview',
        //         name: 'engagementpreview',
        //         component: EngagementPreview,
        //         meta: { auth: true },
        // }, 
        menu: {
                id: "customer.engagementpreview",
                title: "Cus. Engagements",
                component: EngagementPreview,
                path: "engagementpreviews",
                requires: navUtils.viewRoles("engagement"),
                to:{ name: "engagementpreview"},
                icon: "mdi-message-text",
                width: "1000px",
                route: "engagementpreview",
                mode: 0,

        }
}
export default engagementPreviewNav;
