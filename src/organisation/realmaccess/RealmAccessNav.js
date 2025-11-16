import RealmAccess from './RealmAccess.vue'
 import RealmAccesses from './RealmAccesses.vue'
import navUtils from "@/nav/NavUtils";
 const realmAccessNav={routes: navUtils.allRoutes("realmaccess", RealmAccess, "realmaccesses", RealmAccesses, true),
menu:{id: "organisation.realmaccess",
        title: "Realm Accesses",
        component: RealmAccess,
        path: "realmaccesses",
        requires: navUtils.allRoles("realmaccess"),
        width: "700px",
editHeaders: [{ title: "Url", key: "url"    },
{ title: "Auth Url", key: "authUrl"    },
{ title: "Realm", key: "realm"    },
{ title: "Issuer Url", key: "issuerUrl"    },
{ title: "Jwk Url", key: "jwkUrl"    },
{ title: "Implicit Client Id", key: "implicitClientId"    },
{ title: "Implicit Client Secret", key: "implicitClientSecret"    },
{ title: "Disabled", key: "disabled"    },
{title: "Actions", key: "actions"}],headers: [{
                title: "Id",
                align: "start",
                // sortable: false,
                key: "id",
            },
{ title: "Url", key: "url"    },
{ title: "Auth Url", key: "authUrl"    },
{ title: "Realm", key: "realm"    },
{ title: "Issuer Url", key: "issuerUrl"    },
{ title: "Jwk Url", key: "jwkUrl"    },
{ title: "Implicit Client Id", key: "implicitClientId"    },
{ title: "Implicit Client Secret", key: "implicitClientSecret"    },
{ title: "Disabled", key: "disabled"    },
 { title: "Branch", key: "branch",},
{ title: "Creation Date", key: "creationDate",  label: "Creation Date", field: "creationDate", isDateTime: true },
                { title: "Last Modified Date", key: "lastModifiedDate", isDateTime: true},
                { title: "Created By", key: "createdBy", },
                { title: "Modified By", key: "modifiedBy", }],
 children: navUtils.allChildren(
      "organisation",
      "realmaccess",
      "realmaccesses",
      false
    ),}
}
export default realmAccessNav;
