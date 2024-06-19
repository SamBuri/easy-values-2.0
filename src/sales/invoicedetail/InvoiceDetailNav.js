import InvoiceDetail from './InvoiceDetail.vue'
 import InvoiceDetails from './InvoiceDetails.vue'
 const invoiceDetailNav={ routes:[
        {
                path: '/invoicedetail/:mode',
                name: 'invoicedetail',
                component: InvoiceDetail,
                meta: { auth: true },
         },
         {
                path: '/invoicedetails',
                name: 'invoicedetails',
                component: InvoiceDetails,
                meta: { auth: true },
         },

        ], menu: {
                id: "invoices.invoicedetail",
                title: "Invoice Details",
                component: InvoiceDetail,
                path: "invoicedetails",
                to: {name: "invoicedetails"},
                width: "700px",
                editHeaders: [
                { title: "Item", key: "itemId" },
                { title: "Item Name", key: "itemName" },
                { title: "Measure", key: "measure" },
                { title: "Measure Quantity", key: "measureQuantity" },
                { title: "Measure Size", key: "measureSize" },
                { title: "Unit Measure", key: "unitMeasure" },
                { title: "Quantity", key: "quantity" ,isNumeric:true},
                { title: "UnitCost", key: "unitCost" ,isNumeric:true},
                { title: "UnitPrice", key: "unitPrice", isNumeric:true },
                { title: "Discount", key: "discount" ,isNumeric:true},
                { title: "Amount", key: "amount" ,isNumeric:true},
                // { title: "Location", key: "location" },
                { title: "Actions", key: "actions" },
                ], headers: [

                { title: "Invoice", key: "invoice.id" },

                { title: "Invoice Date", key: "invoice.invoiceDate", isDate: true },
                { title: "Customer Id", key: "invoice.sellToId",  },
                { title: "Customer Name", key: "invoice.sellToName", },
                { title: "Item Category", key: "itemCategory" },
                { title: "Item Name", key: "itemName" },
                { title: "Measure", key: "measure" },
                { title: "Measure Quantity", key: "measureQuantity" },
                { title: "Measure Size", key: "measureSize" },
                { title: "Unit Measure", key: "unitMeasure" },
                { title: "Quantity", key: "quantity" ,isNumeric:true},
                { title: "UnitCost", key: "unitCost" ,isNumeric:true},
                { title: "UnitPrice", key: "unitPrice" ,isNumeric:true},
                { title: "Discount", key: "discount" ,isNumeric:true},
                { title: "Amount", key: "amount" ,isNumeric:true},
                { title: "Branch", key: "branch", label: "Branch", field: "branch" },
                { title: "Creation Date", key: "creationDate", label: "Creation Date", field: "creationDate", isDateTime: true },
                { title: "Last Modified Date", key: "lastModifiedDate", isDateTime: true },
                { title: "Created By", key: "createdBy", label: "Created By", field: "createdBy" },
                { title: "Modified By", key: "modifiedBy", label: "Modified By", field: "modifiedBy" }

                ],
        }
}
export default invoiceDetailNav;
