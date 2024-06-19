import ConfirmDialog from "../views/ConfirmDialog";
import Sample from "../views/Sample";
import Country from "../address/country/Country.vue";
import District from "../address/district/District.vue";
import County from '../address/county/County.vue'
import SubCounty from '../address/subcounty/SubCounty.vue'
import Parish from '../address/parish/Parish.vue'
import LookupData from '../lookup/lookupdata/LookupData.vue'
import CustomerGroup from '../customer/customergroup/CustomerGroup.vue'
import Customer from '../customer/customer/Customer.vue'
import Company from "../organisation/company/Company.vue";

import AccountCategory from '../accounts/accountcategory/AccountCategory.vue'
import Account from '../accounts/account/Account.vue'
// import FinancialPeriod from "../posting/financialperiod/FinancialPeriod.vue";
const components = { ConfirmDialog, Sample , 
    Country, District, County, SubCounty, Parish,
    AccountCategory, Account,
    LookupData,
    CustomerGroup, Customer,
    Company,
    // FinancialPeriod

}

export default components;