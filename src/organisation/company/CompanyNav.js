import Company from './Company.vue'
 import Companies from './Companies.vue'
 const companyNav={ routes:[
        {
                path: '/company/:mode',
                name: 'company',
                component: Company,
                meta: { auth: true },
         },
         {
                path: '/companies',
                name: 'companies',
                component: Companies,
                meta: { auth: true },
         },

        ], menu: {
                id: "organisation.company",
                title: "Companies",
                component: Company,
                path: "companies",
                width: "1000px",
                editHeaders:[
                { title: "Company Name", key: "companyName", label: "Company Name", field: "companyName" },
                { title: "Business Type", key: "businessType", label: "Business Type", field: "businessType" },
                { title: "Address", key: "address", label: "Address", field: "address" },
                { title: "Phone No", key: "phoneNo", label: "Phone No", field: "phoneNo" },
                { title: "Email", key: "email", label: "Email", field: "email" },
                { title: "Website", key: "website", label: "Website", field: "website" },
                { title: "Tag Line", key: "tagLine", label: "Tag Line", field: "tagLine" },
                { title: "Dev Name", key: "devName", label: "Dev Name", field: "devName" },
                { title: "Db Type", key: "dbType", label: "Db Type", field: "dbType" },
                { title: "Db Username", key: "dbUsername", label: "Db Username", field: "dbUsername" },
                { title: "Db Password", key: "dbPassword", label: "Db Password", field: "dbPassword" },
                { title: "Db Port", key: "dbPort", label: "Db Port", field: "dbPort", isNumeric: true },
                { title: "Db Host", key: "dbHost", label: "Db Host", field: "dbHost" },
                { title: "Db Driver Class Name", key: "dbDriverClassName", label: "Db Driver Class Name", field: "dbDriverClassName" },
                { title: "Db Initialize", key: "dbInitialize", label: "Db Initialize", field: "dbInitialize" },
                { title: "Actions", key: "actions" }], headers: [{
                        title: "Id",
                        align: "start",
                        // sortable: false,
                        key: "id",
                },

                { title: "Company Name", key: "companyName", label: "Company Name", field: "companyName" },
                { title: "Business Type", key: "businessType", label: "Business Type", field: "businessType" },
                { title: "Address", key: "address", label: "Address", field: "address" },
                { title: "Phone No", key: "phoneNo", label: "Phone No", field: "phoneNo" },
                { title: "Email", key: "email", label: "Email", field: "email" },
                { title: "Website", key: "website", label: "Website", field: "website" },
                { title: "Tag Line", key: "tagLine", label: "Tag Line", field: "tagLine" },
                { title: "Dev Name", key: "devName", label: "Dev Name", field: "devName" },
                { title: "Db Type", key: "dbType", label: "Db Type", field: "dbType" },
                { title: "Db Username", key: "dbUsername", label: "Db Username", field: "dbUsername" },
                { title: "Db Password", key: "dbPassword", label: "Db Password", field: "dbPassword" },
                { title: "Db Port", key: "dbPort", label: "Db Port", field: "dbPort", isNumeric: true },
                { title: "Db Host", key: "dbHost", label: "Db Host", field: "dbHost" },
                { title: "Db Driver Class Name", key: "dbDriverClassName", label: "Db Driver Class Name", field: "dbDriverClassName" },
                { title: "Db Initialize", key: "dbInitialize", label: "Db Initialize", field: "dbInitialize" },
                { title: "Creation Date", key: "creationDate", label: "Creation Date", field: "creationDate", isDateTime: true },
                { title: "Last Modified Date", key: "lastModifiedDate", isDateTime: true },
                { title: "Created By", key: "createdBy", label: "Created By", field: "createdBy" },
                { title: "Modified By", key: "modifiedBy", label: "Modified By", field: "modifiedBy" }],
                children: [{ id: "organisation.company.new", title: "New", route: "company", mode: 0 },
                { id: "organisation.company.edit", title: "Edit", route: "company", mode: 1 },
                { id: "organisation.company.history", title: "History", route: "company", mode: 2 },
                ]
        }
}
export default companyNav;
