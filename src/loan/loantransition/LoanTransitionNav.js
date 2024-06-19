import LoanTransition from './LoanTransition.vue'
import LoanTransitions from './LoanTransitions.vue'
const loanTransitionNav = {
        routes:[
                {
                        path: '/loantransition/:mode',
                        name: 'loantransition',
                        component: LoanTransition,
                        meta: { auth: true },
                 },
                 {
                        path: '/loantransitions',
                        name: 'loantransitions',
                        component: LoanTransitions,
                        meta: { auth: true },
                 },

                ], menu: {
                id: "loan.loantransition",
                title: "Loan Transitions",
                component: LoanTransition,
                path: "loantransitions",
                width: "700px",
                editHeaders: [{ title: "Loan Id", key: "loanId", label: "Loan Id", field: "loanId" },
                { title: "Profile Id", key: "profileId", label: "Profile Id", field: "profileId" },
                { title: "Full Name", key: "fullName", label: "Full Name", field: "fullName" },
                { title: "Tran Date", key: "tranDate", label: "Tran Date", field: "tranDate", isDate: true },
                { title: "From Status", key: "fromStatus", label: "From Status", field: "fromStatus" },
                { title: "To Status", key: "toStatus", label: "To Status", field: "toStatus" },
                { title: "Notes", key: "notes", label: "Notes", field: "notes" },
                { title: "Entry Mode", key: "entryMode", label: "Entry Mode", field: "entryMode" },
                { title: "Actions", key: "actions" }], headers: [{
                        title: "Id",
                        align: "start",
                        // sortable: false,
                        key: "id",
                },
                { title: "Loan Id", key: "loanId", label: "Loan Id", field: "loanId" },
                { title: "Profile Id", key: "profileId", label: "Profile Id", field: "profileId" },
                { title: "Full Name", key: "fullName", label: "Full Name", field: "fullName" },
                { title: "Tran Date", key: "tranDate", label: "Tran Date", field: "tranDate", isDate: true },
                { title: "From Status", key: "fromStatus", label: "From Status", field: "fromStatus" },
                { title: "To Status", key: "toStatus", label: "To Status", field: "toStatus" },
                { title: "Notes", key: "notes", label: "Notes", field: "notes" },
                { title: "Entry Mode", key: "entryMode", label: "Entry Mode", field: "entryMode" },
                { title: "Branch", key: "branch", label: "Branch", field: "branch" },
                { title: "Creation Date", key: "creationDate", label: "Creation Date", field: "creationDate", isDateTime: true },
                { title: "Last Modified Date", key: "lastModifiedDate", isDateTime: true },
                { title: "Created By", key: "createdBy", label: "Created By", field: "createdBy" },
                { title: "Modified By", key: "modifiedBy", label: "Modified By", field: "modifiedBy" }],
                children: [
                  { id: "loan.loanTransition.view", title: "View",to: {name: 'loantransitions'} },
                  { id: "loan.loanTransition.new", title: "New", to: {name: 'loantransition', params: {mode:0}} },
                { id: "loan.loanTransition.edit", title: "Edit", to: {name: 'loantransition', params: {mode:1}} },
                { id: "loan.loanTransition.history", title: "History",  to: {name: 'loantransition', params: {mode:2}} },
                ]
        }
}
export default loanTransitionNav;
