import LoanApplication from './LoanApplication.vue'
import LoanApplications from './LoanApplications.vue'
const loanApplicationNav = {
        routes: [
                {
                        path: '/loanapplication/:mode',
                        name: 'loanapplication',
                        component: LoanApplication,
                        meta: { auth: true },
                },
                {
                        path: '/loanapplications',
                        name: 'loanapplications',
                        component: LoanApplications,
                        meta: { auth: true },
                },

        ], menu: {
                id: "loan.loanapplication",
                title: "Loan Applications",
                component: LoanApplication,
                path: "loanapplications",
                width: "1000px",
                editHeaders: [{ title: "Applicant", key: "name" },
                { title: "Collateral Category", key: "collateralCategoryId" },
                { title: "CollateralCategory", key: "collateralCategory" },
                { title: "Collateral Description", key: "collateralDesc" },
                { title: "Estimated Collateral key", key: "estimatedCollateralkey", isNumeric: true },
                { title: "Application Date", key: "applicationDate", isDate: true },
                { title: "Application Status", key: "applicationStatus" },
                { title: "Loan Product", key: "loanProduct.productName" },
                { title: "Amount", key: "amount", isNumeric: true },
                { title: "Actions", key: "actions" }], headers: [{
                        title: "Id",
                        align: "start",
                        // sortable: false,
                        key: "id",
                },
                { title: "Applicant Id", key: "applicantId" },
                { title: "Applicant", key: "name" },
                { title: "Collateral Category", key: "collateralCategory" },
                { title: "Collateral Description", key: "collateralDesc" },
                { title: "Estimated Collateral key", key: "estimatedCollateralkey", isNumeric: true },
                { title: "Application Date", key: "applicationDate", isDate: true },
                { title: "Application Status", key: "applicationStatus" },
                { title: "Loan Product", key: "loanProduct.productName" },
                { title: "Amount", key: "amount", isNumeric: true },
                { title: "Approved Amount", key: "approvedAmount", isNumeric: true },
                { title: "Creation Date", key: "creationDate", label: "Creation Date", field: "creationDate", isDateTime: true },
                { title: "Last Modified Date", key: "lastModifiedDate", isDateTime: true },
                { title: "Created By", key: "createdBy", label: "Created By", field: "createdBy" },
                { title: "Modified By", key: "modifiedBy", label: "Modified By", field: "modifiedBy" }

                ],
                children: [
                  { id: "loan.loanApplication.view", title: "View", to: { name: "loanapplications" }, },
                  { id: "loan.loanApplication.new", title: "New", route: "loanapplication", to: { name: "loanapplication", params: { mode: 0 } }, },
                { id: "loan.loanApplication.edit", title: "Edit", route: "loanapplication", to: { name: "loanapplication", params: { mode: 1 } }, },
                { id: "loan.loanApplication.history", title: "History", route: "loanapplication", to: { name: "loanapplication", params: { mode: 2 } }, },
                ]
        }
}
export default loanApplicationNav;
