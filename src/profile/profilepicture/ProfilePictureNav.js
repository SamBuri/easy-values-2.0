import ProfilePicture from './ProfilePicture.vue'
import ProfilePictures from './ProfilePictures.vue'
import { navUtils } from 'saburi-vue-utils';

const profilePictureNav = {
  routes: navUtils.allRoutes("profile-picture", ProfilePicture, "profile-pictures", ProfilePictures, true, "profilepicture"),
  menu: {
    id: "profile.profilepicture",
    title: "Profile Pictures",
    component: ProfilePicture,
    path: "profile-pictures",
    requires: navUtils.allRoles("profile-pictures"),
    width: "700px",
    editHeaders: [
      { title: "Profile", key: "profileId" },
      { title: "Name", key: "name" },
      { title: "Image Type", key: "imageType" },
      { title: "Photo", key: "photo" },
      { title: "Caption", key: "caption" },
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
      { title: "Name", key: "name" },
      { title: "Image Type", key: "imageType" },
      { title: "Photo", key: "photo" },
      { title: "Caption", key: "caption" },
      { title: "Branch", key: "branch" },
      { title: "Creation Date", key: "creationDate", label: "Creation Date", field: "creationDate", isDateTime: true },
      { title: "Last Modified Date", key: "lastModifiedDate", isDateTime: true },
      { title: "Created By", key: "createdBy" },
      { title: "Modified By", key: "modifiedBy" }
    ],
    children: navUtils.allChildren("profile", "profile-pictures", "profile-pictures", false, "profilepicture")
  }
};
export default profilePictureNav;
