import accountcategory from "./accountcategory/accountcategory";
import account from "./account/account";
import financialperiod from "./financialperiod/financialperiod"
import journal from "./journal/journal";
import journaldetails from "./journaldetails/journaldetails";

export default{
    namespaced:true,
    state:{},
    mutations:{},
    actions:{},
    modules: {financialperiod,accountcategory, account, journal, journaldetails}
}