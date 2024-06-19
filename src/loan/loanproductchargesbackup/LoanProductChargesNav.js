import LoanProductCharges from './LoanProductCharges.vue'
const loanProductChargesNav = {
        route: {
                path: '/loanProductCharges/:mode',
                name: 'loanProductCharges',
                component: LoanProductCharges
        }, menu: {
                id: "loan.loanproductcharges",
                name: "Loan Product Chargess",
                component: LoanProductCharges,
                path: "loanproductchargess",
                width: "700px",
                editHeaders: [
                { text: "Item Id", value: "itemId" },
                { text: "ItemName", value: "itemName" },
                { text: "Determining Method", value: "determiningMethod" },
                { text: "Charge", value: "charge" ,isNumeric:true},
                { text: "Recurrent", value: "recurrent" },
                { text: "Actions", value: "actions" }], headers: [{
                        text: "Id",
                        align: "start",
                        // sortable: false,
                        value: "id",
                },
                { text: "Loan Product", value: "loanProduct.displayKey" },
                { text: "tem Id", value: "itemId.displayKey" },
                { text: "ItemName", value: "itemName" },
                { text: "Determining Method", value: "determiningMethod" },
                { text: "Charge", value: "charge" ,isNumeric:true},
                { text: "Recurrent", value: "recurrent" },
                ],
                children: [{ id: "loan.loanProductCharges.new", name: "New", route: "loanProductCharges", mode: 0 },
                { id: "loan.loanProductCharges.edit", name: "Edit", route: "loanProductCharges", mode: 1 },
                { id: "loan.loanProductCharges.history", name: "History", route: "loanProductCharges", mode: 2 },
                ]
        }
}
export default loanProductChargesNav;
