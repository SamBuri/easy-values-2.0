import LoanBillDetails from './LoanBillDetails.vue'
const loanBillDetailsNav = {
        route: {
                path: '/loanBillDetails/:mode',
                name: 'loanBillDetails',
                component: LoanBillDetails,
                meta: { auth: true },
        }, menu: {
                id: "loan.loanbilldetails",
                name: "Loan Bill Detailss",
                component: LoanBillDetails,
                path: "loanbilldetailss",
                width: "700px",
                editHeaders: [
                { text: "Item", value: "item.id" },
                { text: "Item Name", value: "item.itemName" },
                { text: "Charge", value: "charge" ,isNumeric:true},
                { text: "Determining Method", value: "determiningMethod" },
                { text: "Amount", value: "amount" ,isNumeric:true},
                { text: "Actions", value: "actions" }], 
               
                readOnlyHeaders: [
                { text: "Item", value: "itemId" },
                { text: "Item Name", value: "itemName" },
                { text: "Charge", value: "charge" ,isNumeric:true},
                { text: "Determining Method", value: "determiningMethod" },
                { text: "Amount", value: "amount" ,isNumeric:true},
                ],
                headers: [{
                        text: "Id",
                        align: "start",
                        // sortable: false,
                        value: "id",
                },
               { text: "Item", value: "itemId" },
                { text: "Item Name", value: "itemName" },
                { text: "Charge", value: "charge" ,isNumeric:true},
                { text: "Determining Method", value: "determiningMethod" },
                { text: "Amount", value: "amount" ,isNumeric:true},
                { text: "Branch", value: "branch", label: "Branch", field: "branch" },
                ],
                children: [{ id: "loan.loanBillDetails.new", name: "New", route: "loanBillDetails", mode: 0 },
                { id: "loan.loanBillDetails.edit", name: "Edit", route: "loanBillDetails", mode: 1 },
                { id: "loan.loanBillDetails.history", name: "History", route: "loanBillDetails", mode: 2 },
                ]
        }
}
export default loanBillDetailsNav;
