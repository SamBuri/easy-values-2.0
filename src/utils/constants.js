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
    BILL_DETERMING_METHODS: {value:"Value",  percentage: "Percentage"},
    PASSWORD_RULES: [

   (v) => !!v || 'Password is required',
    // Minimum length: 8
    (v) => (v && v.length >= 8) || 'Password must be at least 8 characters',
    // At least 1 uppercase letter
    (v) => /[A-Z]/.test(v) || 'Must contain at least 1 uppercase letter',
    // At least 1 lowercase letter
    (v) => /[a-z]/.test(v) || 'Must contain at least 1 lowercase letter',
    // At least 1 digit
    (v) => /\d/.test(v) || 'Must contain at least 1 number',
    // At least 1 special character
    (v) => /[!@#$%^&*(),.?":{}|<>]/.test(v) || 'Must contain at least 1 special character',
  ]


}

export default constants;
