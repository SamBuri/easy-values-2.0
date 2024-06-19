import TestList from "./TestList.vue";
const testListNav = {
  route: {
    path: "/testlist",
    name: "testlist",
    component: TestList,
    meta: { auth: true },
  },

  menu: {
    id: "interview.testlist",
    title: "Test List",
    route: "testlist",
    to: { name: "testlist" },
  },
};

export default testListNav;
