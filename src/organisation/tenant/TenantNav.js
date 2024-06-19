import Tenant from './Tenant.vue'
import Tenants from './Tenants.vue'
const tenantNav = {
        routes: [
                {
                        path: '/tenant/:mode',
                        name: 'tenant',
                        component: Tenant,
                        meta: { auth: true },
                },
                {
                        path: '/tenants',
                        name: 'tenants',
                        component: Tenants,
                        meta: { auth: true },
                },

        ], menu: {
                id: "organisation.tenant",
                title: "Tenants",
                component: Tenant,
                path: "tenants",
                width: "700px",
                editHeaders: [{ title: "Tenant Type", key: "tenantType", label: "Tenant Type", field: "tenantType" },
                { title: "Company Id", key: "company.id", label: "Company", field: "company.id" },
                { title: "Company", key: "company.companyName", label: "Company", field: "company.companyName" },
                { title: "Source Id", key: "sourceId", label: "Source Id", field: "sourceId" },
                { title: "Source Name", key: "sourceName", label: "Source Name", field: "sourceName" },
                { title: "Host", key: "host", label: "Host", field: "host" },
                { title: "Auth Url", key: "authUrl", label: "Auth Url", field: "authUrl" },
                { title: "Realm", key: "realm", label: "Realm", field: "realm" },
                { title: "Actions", key: "actions" }], headers: [{
                        title: "Id",
                        align: "start",
                        // sortable: false,
                        key: "id",
                },
                { title: "Tenant Type", key: "tenantType", label: "Tenant Type", field: "tenantType" },
                { title: "CompanyId", key: "company.id", label: "Company", field: "company.id" },
                { title: "Company", key: "company.companyName", label: "Company", field: "company.companyName" },
                { title: "Source Id", key: "sourceId", label: "Source Id", field: "sourceId" },
                { title: "Source Name", key: "sourceName", label: "Source Name", field: "sourceName" },
                { title: "Host", key: "host", label: "Host", field: "host" },
                { title: "Auth Url", key: "authUrl", label: "Auth Url", field: "authUrl" },
                { title: "Realm", key: "realm", label: "Realm", field: "realm" },
                { title: "Issuer Url", key: "issuerUrl", label: "Issuer Url", field: "issuerUrl" },
                { title: "Jwk Set Url", key: "jwkSetUrl", label: "Jwk Set Url", field: "jwkSetUrl" },
                { title: "Creation Date", key: "creationDate", label: "Creation Date", field: "creationDate", isDateTime: true },
                { title: "Last Modified Date", key: "lastModifiedDate", isDateTime: true },
                { title: "Created By", key: "createdBy", label: "Created By", field: "createdBy" },
                { title: "Modified By", key: "modifiedBy", label: "Modified By", field: "modifiedBy" }],
                children: [{ id: "organisation.tenant.new", title: "New", route: "tenant", mode: 0 },
                { id: "organisation.tenant.edit", title: "Edit", route: "tenant", mode: 1 },
                { id: "organisation.tenant.history", title: "History", route: "tenant", mode: 2 },
                ]
        }
}
export default tenantNav;
