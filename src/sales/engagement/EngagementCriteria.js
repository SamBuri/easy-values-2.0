
import { defineBranchStore } from "@/organisation/branch/BranchStore";

 const engagementCriteria = {

    getDueCriteria() {
        var currentDate = new Date();
        var todayDate = currentDate.toISOString().slice(0, 10)
        var nextEngagementDateGreaterThanOrEqualToDay = {
            key: 'nextEngagementDate',
            operation: 'LESS_THAN_OR_EQUAL',
            value: todayDate,
            value2: "",

        }

        var statusEqualOpen = {

            key: 'status',
            operation: 'EQUAL',
            value: 'Open',
            value2: "",

        }

        let datesCriteria = [
            nextEngagementDateGreaterThanOrEqualToDay,
            statusEqualOpen
        ]

        const branchStore = defineBranchStore();

        if (branchStore.currentBranch) {
            datesCriteria.push(branchStore.getCurrentBranchCriterion);
        }

        return datesCriteria;
    },

    getPeriodicCustomerEngagementCriteria(ledger) {

        var customerIdEqual = {
            key: 'customer.id',
            operation: 'EQUAL',
            value: ledger.customerId,
            value2: "",

        }

        var engagementDateGreaterThanOrEqualToStartDate = {
            key: 'engagementDate',
            operation: 'GREATER_THAN_OR_EQUAL',
            value: ledger.startDate,
            value2: "",

        }

        var engagementDatLessThanOrEqualToEndDate = {
            key: 'engagementDate',
            operation: 'LESS_THAN_OR_EQUAL',
            value: ledger.endDate,
            value2: "",

        }



        let criteria = [
            customerIdEqual,
            engagementDateGreaterThanOrEqualToStartDate,
            engagementDatLessThanOrEqualToEndDate
        ]


        return criteria;
    }

}

export default engagementCriteria;
