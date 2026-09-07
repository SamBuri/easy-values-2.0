import Company from "./Company.vue";
import Companies from "./Companies.vue";
import { navUtils } from 'saburi-vue-utils';
const companyNav = {
  // routes: [
  //   {
  //     path: "/company/:mode",
  //     name: "company",
  //     component: Company,
  //     meta: { auth: true },
  //   },
  //   {
  //     path: "/companies",
  //     name: "companies",
  //     component: Companies,
  //     meta: { auth: true },
  //   },
  // ],
  routes: navUtils.allRoutes("company", Company, "companies", Companies, true),
  menu: {
    id: "organisation.company",
    title: "Companies",
    component: Company,
    path: "companies",
    requires: navUtils.allRoles("companies"),
    icon: "mdi-domain",
    width: "1000px",
    editHeaders: [
      {
        title: "Company Name",
        key: "companyName",
        label: "Company Name",
        field: "companyName",
      },
      {
        title: "Business Type",
        key: "businessType",
        label: "Business Type",
        field: "businessType",
      },
      { title: "Address", key: "address", label: "Address", field: "address" },
      {
        title: "Phone No",
        key: "phoneNo",
        label: "Phone No",
        field: "phoneNo",
      },
      { title: "Email", key: "email", label: "Email", field: "email" },
      { title: "Website", key: "website", label: "Website", field: "website" },
      {
        title: "Tag Line",
        key: "tagLine",
        label: "Tag Line",
        field: "tagLine",
      },
      {
        title: "Dev Name",
        key: "devConfig?.devName",
        label: "Dev Name",
        field: "devName",
      },

      { title: "Actions", key: "actions" },
    ],
    headers: [
      {
        title: "Id",
        align: "start",
        // sortable: false,
        key: "id",
      },

      {
        title: "Company Name",
        key: "companyName",
        label: "Company Name",
        field: "companyName",
      },
      {
        title: "Business Type",
        key: "businessType",
        label: "Business Type",
        field: "businessType",
      },
      { title: "Address", key: "address", label: "Address", field: "address" },
      {
        title: "Phone No",
        key: "phoneNo",
        label: "Phone No",
        field: "phoneNo",
      },
      { title: "Email", key: "email", label: "Email", field: "email" },
      { title: "Website", key: "website", label: "Website", field: "website" },
      {
        title: "Tag Line",
        key: "tagLine",

      },
      {
        title: "Dev Name",
        key: "devConfig.devName",
      },

      {
        title: "Disabled",
        key: "disabled",
      },

      {
        title: "Creation Date",
        key: "creationDate",

        isDateTime: true,
      },
      {
        title: "Last Modified Date",
        key: "lastModifiedDate",
        isDateTime: true,
      },
      {
        title: "Created By",
        key: "createdBy",
        label: "Created By",
        field: "createdBy",
      },
      {
        title: "Modified By",
        key: "modifiedBy",
        label: "Modified By",
        field: "modifiedBy",
      },
    ],
    // children: [
    //   {
    //     id: "organisation.company.view",
    //     title: "View",
    //     to: { name: "companies" },
    //   },
    //   {
    //     id: "organisation.company.new",
    //     title: "New",
    //     to: { name: "company", params: { mode: 0 } },
    //   },
    //   {
    //     id: "organisation.company.edit",
    //     title: "Edit",
    //     to: { name: "company", params: { mode: 1 } },
    //   },
    //   {
    //     id: "organisation.company.history",
    //     title: "History",
    //     to: { name: "company", params: { mode: 2 } },
    //   },
    children: navUtils.allChildren("organisation", "companies", "companies", false, "company"),
  },
};
export default companyNav;
