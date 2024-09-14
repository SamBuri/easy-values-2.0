const constants = {
    buttonTexts: { save: "Save", update: "Update", done: "Done", print:"Print" },
    endPoints: {
        lookupdata: "lookupdata", lookupobjects: "lookupobjects",
        countries: "countries", districts: "districts", counties: "counties",
        subcounties: "subcounties", parishes: "parishes", villages: "villages",
        accountcategories: "accountcategories", accounts: "accounts",
        accountTypes: "accounttypes", accountActions: "accountactions",
        accountReports: "accountreports",
        customergroups: "customergroups", customers: "customers",
        organisation: "organisation", companies: "companies", currencies:"currencies",
    },

    approvalStatuses: ["Rejected", "Approved"],
    ENTRY_MODES: {MANUAL: "Manual", SYSTEM: "System"},
    LOCAL_STORAGE_KEYS: {USERNAME: "USERNAME", VUE_TOKEN: "VUE_TOKEN"},
    BILL_DETERMING_METHODS: {value:"Value",
      percentage: "Percentage"}


}

export default constants;
