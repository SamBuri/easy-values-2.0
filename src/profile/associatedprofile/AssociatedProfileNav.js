import AssociatedProfile from './AssociatedProfile.vue'
import AssociatedProfiles from './AssociatedProfiles.vue'
import { navUtils } from 'saburi-vue-utils';

const associatedProfileNav = {
  routes: navUtils.allRoutes("associated-profile", AssociatedProfile, "associated-profiles", AssociatedProfiles, true, "associatedprofile"),
  menu: {
    id: "profile.associatedprofile",
    title: "Associated Profiles",
    component: AssociatedProfile,
    path: "associated-profiles",
    requires: navUtils.allRoles("associated-profiles"),
    width: "700px",
    editHeaders: [
      { title: "Profile", key: "profileId" },
      { title: "Associated Profile", key: "associatedProfileId" },
      { title: "Position", key: "position" },
      { title: "Main", key: "main" },
      { title: "Actions", key: "actions" }
    ],
    headers: [
      {
        title: "Id",
        align: "start",
        // sortable: false,
        key: "id",
      },
      { title: "Profile", key: "profileId" },
      { title: "Associated Profile", key: "associatedProfileId" },
      { title: "Position", key: "position" },
      { title: "Main", key: "main" },
      { title: "Branch", key: "branch" },
      { title: "Creation Date", key: "creationDate", label: "Creation Date", field: "creationDate", isDateTime: true },
      { title: "Last Modified Date", key: "lastModifiedDate", isDateTime: true },
      { title: "Created By", key: "createdBy" },
      { title: "Modified By", key: "modifiedBy" }
    ],
    children: navUtils.allChildren("profile", "associated-profiles", "associated-profiles", false, "associatedprofile")
  }
};
export default associatedProfileNav;
