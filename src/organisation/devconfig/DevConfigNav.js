import DevConfig from './DevConfig.vue'
import DevConfigs from './DevConfigs.vue'
import { navUtils } from 'saburi-vue-utils';
const devConfigNav = {
        routes: navUtils.allRoutes("devconfig", DevConfig, "devconfigs", DevConfigs, true),
        menu: {
                id: "organisation.devconfig",
                title: "Dev Configs",
                component: DevConfig,
                path: "devconfigs",
                requires: navUtils.allRoles("devconfig"),
                width: "700px",
                editHeaders: [{ title: "Dev Name", key: "devName" },
                { title: "Db Type", key: "dbType" },
                { title: "Db Username", key: "dbUsername" },
                { title: "Db Password", key: "dbPassword" },
                { title: "Db Port", key: "dbPort", isNumeric: true },
                { title: "Db Host", key: "dbHost" },
                { title: "Db Driver Class Name", key: "dbDriverClassName" },
                { title: "Disabled", key: "disabled" },
                { title: "Actions", key: "actions" }], headers: [{
                        title: "Id",
                        align: "start",
                        // sortable: false,
                        key: "id",
                },
                { title: "Dev Name", key: "devName" },
                { title: "Db Type", key: "dbType" },
                { title: "Db Username", key: "dbUsername" },
                { title: "Db Password", key: "dbPassword" },
                { title: "Db Port", key: "dbPort", isNumeric: true },
                { title: "Db Host", key: "dbHost" },
                { title: "Db Driver Class Name", key: "dbDriverClassName" },
                { title: "Disabled", key: "disabled" },
                { title: "Branch", key: "branch", },
                { title: "Creation Date", key: "creationDate", label: "Creation Date", field: "creationDate", isDateTime: true },
                { title: "Last Modified Date", key: "lastModifiedDate", isDateTime: true },
                { title: "Created By", key: "createdBy", },
                { title: "Modified By", key: "modifiedBy", }],
                

                children: navUtils.allChildren(
                        "organisation",
                        "devconfig",
                        "devconfigs",
                        false
                ),
        }
}
export default devConfigNav;
