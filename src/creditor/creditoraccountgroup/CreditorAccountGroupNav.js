import CreditorAccountGroup from './CreditorAccountGroup.vue'
 import CreditorAccountGroups from './CreditorAccountGroups.vue'
 const creditorAccountGroupNav={ routes:[
        {
                path: '/creditoraccountgroup/:mode',
                name: 'creditoraccountgroup',
                component: CreditorAccountGroup,
                meta: { auth: true },
         },
         {
                path: '/creditoraccountgroups',
                name: 'creditoraccountgroups',
                component: CreditorAccountGroups,
                meta: { auth: true },
         },
        
        ],
menu:{id: "creditor.creditoraccountgroup",
        title: "Creditor Account Groups",
        component: CreditorAccountGroup,
        path: "creditoraccountgroups",
        width: "700px",
editHeaders: [{ title: "Business Section", key: "businessSectionId"    },
{ title: "Credit Account", key: "creditAccountId"    },
{ title: "Discount Account", key: "discountAccountId"    },
{ title: "Debt Waiver Account", key: "debtWaiverAccountId"    },
{ title: "Withholding Tax Account", key: "withholdingTaxAccountId"    },
{title: "Actions", key: "actions"}],headers: [{
                title: "Id",
                align: "start",
                // sortable: false,
                key: "id",
            },
{ title: "Business Section", key: "businessSectionId"    },
{ title: "Credit Account", key: "creditAccountId"    },
{ title: "Discount Account", key: "discountAccountId"    },
{ title: "Debt Waiver Account", key: "debtWaiverAccountId"    },
{ title: "Withholding Tax Account", key: "withholdingTaxAccountId"    },
 { title: "Branch", key: "branch",},
{ title: "Creation Date", key: "creationDate",  label: "Creation Date", field: "creationDate", isDateTime: true },
                { title: "Last Modified Date", key: "lastModifiedDate", isDateTime: true},
                { title: "Created By", key: "createdBy", },
                { title: "Modified By", key: "modifiedBy", }],
children: [{ id: "creditor.creditorAccountGroup.view", title: "View",  to:{ name: "creditoraccountgroups", }},
{ id: "creditor.creditorAccountGroup.new", title: "New",  to:{ name: "creditoraccountgroup", params: {mode:0}}},
{ id: "creditor.creditorAccountGroup.edit", title: "Edit",  to:{ name: "creditoraccountgroup", params: {mode:1}}},
{ id: "creditor.creditorAccountGroup.history", title: "History",  to:{ name: "creditoraccountgroup", params: {mode:2}}},
]}
}
export default creditorAccountGroupNav;
