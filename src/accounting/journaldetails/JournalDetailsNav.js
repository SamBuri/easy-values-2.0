import JournalDetails from './JournalDetails.vue'
import JournalDetailses from './JournalDetailses.vue'
import { navUtils } from 'saburi-vue-utils'

const journalDetailsNav = {
  routes: navUtils.allRoutes("journal-detail", JournalDetails, "journal-details", JournalDetailses, true, "journaldetails"),
  menu: {
    id: "accounting.journaldetails",
    title: "Journal Details",
    component: JournalDetails,
    path: "journal-details",
    requires: navUtils.allRoles("journal-details"),
    width: "700px",
    editHeaders: [{title: "Journal", key: "journal"},
      {title: "Account Id", key: "accountId"},
      {title: "Account Name", key: "accountName"},
      {title: "Account Type", key: "accountType"},
      {title: "Account Action", key: "accountAction"},
      {title: "Base Amount", key: "baseAmount", isNumeric: true},
      {title: "Amount", key: "amount", isNumeric: true},
      {title: "Notes", key: "notes"},
      {title: "Actions", key: "actions"}], headers: [{
      title: "Id",
      align: "start",
      // sortable: false,
      key: "id",
    },
      {title: "Journal", key: "journal"},
      {title: "Account Id", key: "accountId"},
      {title: "Account Name", key: "accountName"},
      {title: "Account Type", key: "accountType"},
      {title: "Account Action", key: "accountAction"},
      {title: "Base Amount", key: "baseAmount", isNumeric: true},
      {title: "Amount", key: "amount", isNumeric: true},
      {title: "Notes", key: "notes"},
      {title: "Branch", key: "branch",},
      {title: "Creation Date", key: "creationDate", label: "Creation Date", field: "creationDate", isDateTime: true},
      {title: "Last Modified Date", key: "lastModifiedDate", isDateTime: true},
      {title: "Created By", key: "createdBy",},
      {title: "Modified By", key: "modifiedBy",}],
    children: navUtils.allChildren("accounting", "journal-details", "journal-details", false, "journaldetails")
  }
}
export default journalDetailsNav;
