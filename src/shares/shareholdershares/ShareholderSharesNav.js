import ShareholderShares from './ShareholderShares.vue'
const shareholderSharesNav = {
        routes:[

                 {
                        path: '/shareholdershares',
                        name: 'shareholdershares',
                        component: ShareholderShares,
                        meta: { auth: true },
                 },

                ], menu: {
                id: "shares.shareholdershares",
                title: "Shareholder Shares",
                component: ShareholderShares,
                path: "shareholdershares",
                to:{name:"shareholdershares"},
                width: "700px",
                editHeaders: [{ title: "Shareholder", key: "shareholder" },
                { title: "Share Type", key: "shareType.name", isNumeric: true },
                { title: "Qty Balance", key: "qtyBalance", isNumeric: true },
                { title: "Balance", key: "balance", isNumeric: true },
                { title: "Actions", key: "actions" }], headers: [{
                        title: "Id",
                        align: "start",
                        // sortable: false,
                        key: "id",
                },
                { title: "Shareholder Id", key: "shareholder.id" },
                { title: "Shareholder", key: "shareholder.name" },
                { title: "Share Type", key: "shareType.name" },
                { title: "Qty Balance", key: "qtyBalance", isNumeric: true },
                { title: "Balance", key: "balance", isNumeric: true },
                { title: "Branch", key: "branch", label: "Branch", field: "branch" },
                { title: "Creation Date", key: "creationDate", label: "Creation Date", field: "creationDate", isDateTime: true },
                { title: "Last Modified Date", key: "lastModifiedDate", isDateTime: true },
                { title: "Created By", key: "createdBy", label: "Created By", field: "createdBy" },
                { title: "Modified By", key: "modifiedBy", label: "Modified By", field: "modifiedBy" }],
                // children: [{ id: "shares.shareholderShares.new", name: "New", route: "shareholderShares", mode: 0 },
                // { id: "shares.shareholderShares.edit", name: "Edit", route: "shareholderShares", mode: 1 },
                // { id: "shares.shareholderShares.history", name: "History", route: "shareholderShares", mode: 2 },
                // ]
        }
}
export default shareholderSharesNav;
