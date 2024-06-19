import ShareTransfer from './ShareTransfer.vue'
import ShareTransfers from './ShareTransfers.vue'
const shareTransferNav = {
        routes:[
                {
                        path: '/sharetransfer/:mode',
                        name: 'sharetransfer',
                        component: ShareTransfer,
                        meta: { auth: true },
                 },
                 {
                        path: '/sharetransfers',
                        name: 'sharetransfers',
                        component: ShareTransfers,
                        meta: { auth: true },
                 },

                ], menu: {
                id: "shares.sharetransfer",
                title: "Share Transfers",
                component: ShareTransfer,
                path: "sharetransfers",
                width: "700px",
                editHeaders: [{ title: "Transfer From", key: "transferFrom.name" },
                { title: "Transfer To", key: "transferTo.name" },
                { title: "Transfer Date", key: "transferDate", isDate: true },
                { title: "Share Type", key: "shareType.name", isNumeric: true },
                { title: "Quantity", key: "quantity", isNumeric: true },
                { title: "Unit Price", key: "unitPrice", isNumeric: true },
                { title: "Amount", key: "amount", isNumeric: true },
                { title: "Actions", key: "actions" }], headers: [{
                        title: "Id",
                        align: "start",
                        // sortable: false,
                        key: "id",
                },
                { title: "Transfer From", key: "transferFrom.name" },
                { title: "Transfer To", key: "transferTo.name" },
                { title: "Transfer Date", key: "transferDate", isDate: true },
                { title: "Share Type", key: "shareType.name"},
                { title: "Quantity", key: "quantity", isNumeric: true },
                { title: "Unit Price", key: "unitPrice", isNumeric: true },
                { title: "Amount", key: "amount", isNumeric: true },
                { title: "Branch", key: "branch", label: "Branch", field: "branch" },
                { title: "Creation Date", key: "creationDate", label: "Creation Date", field: "creationDate", isDateTime: true },
                { title: "Last Modified Date", key: "lastModifiedDate", isDateTime: true },
                { title: "Created By", key: "createdBy", label: "Created By", field: "createdBy" },
                { title: "Modified By", key: "modifiedBy", label: "Modified By", field: "modifiedBy" }],
                children: [
                  { id: "shares.shareTransfer.view", title: "View", to: {name:"sharetransfers", } },
                { id: "shares.shareTransfer.new", title: "New", to: {name:"sharetransfer", params:{mode: 0}} },
                { id: "shares.shareTransfer.edit", title: "Edit", to: {name:"sharetransfer", params:{mode: 1}} },
                { id: "shares.shareTransfer.history", title: "History", to: {name:"sharetransfer", params:{mode: 2}} },
                ]
        }
}
export default shareTransferNav;
