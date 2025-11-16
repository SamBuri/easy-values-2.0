import Investment from './Investment.vue'
import Investments from './Investments.vue'
import navUtils from '@/nav/NavUtils'
const investmentNav = {
        // routes:[
        //         {
        //                 path: '/investment/:mode',
        //                 name: 'investment',
        //                 component: Investment,
        //                 meta: { auth: true },
        //          },
        //          {
        //                 path: '/investments',
        //                 name: 'investments',
        //                 component: Investments,
        //                 meta: { auth: true },
        //          },

        //         ],
        routes: navUtils.allRoutes("investment", Investment, "investments", Investments, true),
        menu: {
                id: "shares.investment",
                title: "Investments",
                component: Investment,
                path: "investments",
                requires: navUtils.allRoles("investment"),
                icon: "mdi-cash-multiple",
                width: "700px",
                editHeaders: [{ title: "Shareholder", key: "shareholder.id" },
                { title: "Tran Date", key: "tranDate", isDate: true },
                { title: "Share Type", key: "shareType.name", isNumeric: true },
                { title: "Share Action", key: "shareAction" },
                { title: "Bank Account", key: "bankAccountId", isNumeric: true },
                { title: "Quantity", key: "quantity", isNumeric: true },
                { title: "Unit Price", key: "unitPrice", isNumeric: true },
                { title: "Amount", key: "amount", isNumeric: true },
                { title: "Actions", key: "actions" }], headers: [{
                        title: "Id",
                        align: "start",
                        // sortable: false,
                        key: "id",
                },
                { title: "Shareholder", key: "shareholder.id" },
                { title: "Tran Date", key: "tranDate", isDate: true },
                { title: "Share Type", key: "shareType.name", isNumeric: true },
                { title: "Share Action", key: "shareAction" },
                { title: "Bank Account", key: "bankAccount" },
                { title: "Quantity", key: "quantity", isNumeric: true },
                { title: "Unit Price", key: "unitPrice", isNumeric: true },
                { title: "Amount", key: "amount", isNumeric: true },
                { title: "Branch", key: "branch", },
                { title: "Creation Date", key: "creationDate", label: "Creation Date", field: "creationDate", isDateTime: true },
                { title: "Last Modified Date", key: "lastModifiedDate", isDateTime: true },
                { title: "Created By", key: "createdBy", },
                { title: "Modified By", key: "modifiedBy", },
                { title: "BL Posted", key: "blPosted", },
                { title: "GL Posted", key: "glPosted", }
        ],
              
                children: navUtils.createViewChildren("shares", "investment", "investments", true),
        }
}
export default investmentNav;
