import InvoiceDetail from './InvoiceDetail.vue'
import InvoiceDetails from './InvoiceDetails.vue'
import { navUtils } from 'saburi-vue-utils';
const invoiceDetailNav = {
        // routes: [
        //         {
        //                 path: '/invoicedetail/:mode',
        //                 name: 'invoicedetail',
        //                 component: InvoiceDetail,
        //                 meta: { auth: true },
        //         },
        //         {
        //                 path: '/invoicedetails',
        //                 name: 'invoicedetails',
        //                 component: InvoiceDetails,
        //                 meta: { auth: true },
        //         },

        // ],
        routes: [navUtils.viewRoute("invoicedetails", InvoiceDetails, true)],
        menu: {
                id: "sales.invoicedetail",
                title: "Invoice Details",
                component: InvoiceDetail,
                path: "invoicedetails",
                width: "1000px",
                to: { name: "invoicedetails", },
                icon: "mdi-table",
                requires: navUtils.viewRoles("invoice"),
                editHeaders: [
                        { title: "Item Name", key: "itemName" },
                        { title: "Measure", key: "measure" },
                        { title: "Measure Quantity", key: "measureQuantity", isNumeric: true },
                        { title: "Measure Size", key: "measureSize", isNumeric: true },
                        { title: "Unit Measure", key: "unitMeasure" },
                        { title: "Quantity", key: "quantity", isNumeric: true },
                        { title: "UnitCost", key: "unitCost", isNumeric: true },
                        { title: "UnitPrice", key: "unitPrice", isNumeric: true },
                        { title: "Discount", key: "discount", isNumeric: true },
                        { title: "Amount", key: "amount" },
                        { title: "Actions", key: "actions" }], 
                        headers: [
                        { title: "Invoice", key: "invoice.id" },
                       { title: "Item Name", key: "itemName" },
                        { title: "Measure", key: "measure" },
                        { title: "Measure Quantity", key: "measureQuantity", isNumeric: true },
                        { title: "Measure Size", key: "measureSize", isNumeric: true },
                        { title: "Unit Measure", key: "unitMeasure" },
                        { title: "Quantity", key: "quantity", isNumeric: true },
                        { title: "UnitCost", key: "unitCost", isNumeric: true },
                        { title: "UnitPrice", key: "unitPrice", isNumeric: true },
                        { title: "Discount", key: "discount", isNumeric: true },
                        { title: "Amount", key: "amount" },
                        { title: "Branch", key: "branch", },
                        { title: "Creation Date", key: "creationDate", label: "Creation Date", field: "creationDate", isDateTime: true },
                        { title: "Last Modified Date", key: "lastModifiedDate", isDateTime: true },
                        { title: "Created By", key: "createdBy", },
                        { title: "Modified By", key: "modifiedBy", }],

        }
}
export default invoiceDetailNav;
