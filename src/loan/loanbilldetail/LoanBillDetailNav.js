import LoanBillDetail from './LoanBillDetail.vue'
import LoanBillDetails from './LoanBillDetails.vue'
const loanBillDetailNav = {
        routes: [

                {
                        path: '/loanbilldetail/:mode',
                        name: 'loanbilldetail',
                        component: LoanBillDetail,
                        meta: { auth: true },
                },
                {
                        path: '/loanbilldetails',
                        name: 'loanbilldetails',

                        component: LoanBillDetails,
                        meta: { auth: true },
                },

        ],
        menu: {
                id: "loan.loanbilldetail",
                title: "Loan Bill Details",
                component: LoanBillDetail,
                path: "loanbilldetails",
                to: {name: 'loanbilldetails'},
                width: "1000px",
                editHeaders: [
                { title: "Item", key: "itemId" },
                { title: "Item Name", key: "itemName" },
                { title: "Charge", key: "charge", isNumeric: true },
                { title: "Determining Method", key: "determiningMethod" },
                { title: "Quantity", key: "quantity", isNumeric: true },
                { title: "Unit Cost", key: "unitCost", isNumeric: true },
                { title: "Unit Price", key: "unitPrice", isNumeric: true },
                { title: "Amount", key: "amount", isNumeric: true },
                { title: "Actions", key: "actions" }],
                headers: [

                { title: "Profile Id", key: "loanBill.loan.loanApplication.applicantId" },
                { title: "Name", key: "loanBill.loan.loanApplication.name" },
                { title: "Loan Id", key: "loanBill.loan.id" },
                { title: "Loan Bill Id", key: "loanBill.id" },
                { title: "Bill Date", key: "loanBill.billDate", isDate: true },
                { title: "ItemCategory", key: "itemCategory" },
                { title: "Item Name", key: "itemName" },
                { title: "Charge", key: "charge", isNumeric: true },
                { title: "Determining Method", key: "determiningMethod" },
                { title: "Quantity", key: "quantity", isNumeric: true },
                { title: "Unit Cost", key: "unitCost", isNumeric: true },
                { title: "Unit Price", key: "unitPrice", isNumeric: true },
                { title: "Amount", key: "amount", isNumeric: true },
                { title: "Branch", key: "branch", label: "Branch", field: "branch" },
                { title: "Creation Date", key: "creationDate", label: "Creation Date", field: "creationDate", isDateTime: true },
                { title: "Last Modified Date", key: "lastModifiedDate", isDateTime: true },
                { title: "Created By", key: "createdBy", label: "Created By", field: "createdBy" },
                { title: "Modified By", key: "modifiedBy", label: "Modified By", field: "modifiedBy" }],

        }
}
export default loanBillDetailNav;
