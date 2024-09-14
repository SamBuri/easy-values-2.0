import District from "./District.vue";
import Districts from "./Districts.vue";
const districtNav = {
  routes: [
    {
      path: "/district/:mode",
      name: "district",
      component: District,
      meta: { auth: true },
    },
    {
      path: "/districts",
      name: "districts",
      component: Districts,
      meta: { auth: true },
    },
  ],
  menu: {
    id: "profile.district",
    title: "Districts",
    component: District,
    path: "districts",
    width: "700px",
    editHeaders: [
      { title: "Country", key: "country.country" },
      { title: "District Name", key: "districtName" },
      { title: "Default", key: "isDefault" },
      { title: "Hidden", key: "hidden" },
      { title: "Actions", key: "actions" },
    ],
    headers: [
      {
        title: "Id",
        align: "start",
        // sortable: false,
        key: "id",
      },
      { title: "Country", key: "country.country" },
      { title: "District Name", key: "districtName" },
      { title: "Default", key: "isDefault" },
      { title: "Hidden", key: "hidden" },
      { title: "Branch", key: "branch" },
      {
        title: "Creation Date",
        key: "creationDate",
        label: "Creation Date",
        field: "creationDate",
        isDateTime: true,
      },
      {
        title: "Last Modified Date",
        key: "lastModifiedDate",
        isDateTime: true,
      },
      { title: "Created By", key: "createdBy" },
      { title: "Modified By", key: "modifiedBy" },
    ],
    children: [
      { id: "profile.district.view", title: "View", to: { name: "districts" } },
      {
        id: "profile.district.new",
        title: "New",
        to: { name: "district", params: { mode: 0 } },
      },
      {
        id: "profile.district.edit",
        title: "Edit",
        to: { name: "district", params: { mode: 1 } },
      },
      {
        id: "profile.district.history",
        title: "History",
        to: { name: "district", params: { mode: 2 } },
      },
    ],
  },
};
export default districtNav;
