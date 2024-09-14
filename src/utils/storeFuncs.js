import { defineBranchStore } from "@/organisation/branch/BranchStore";
import funcs from "./funcs";
const storeFuncs = {


    getCreatedTodayCriteria() {
        var currentDate = new Date();
        var todayDate = currentDate.toISOString().slice(0, 10)

        var tomorrow = funcs.addDays(new Date(todayDate), 1);




        var greaterThanOrEqualToDay= {
            key: 'creationDate',
            operation: 'GREATER_THAN_OR_EQUAL',
            value: todayDate,
            value2: "",

        }

        var lessThanTomorrow= {

            key: 'creationDate',
            operation: 'LESS',
            value: tomorrow,
            value2: "",

        }

        let datesCriteria =   [
            greaterThanOrEqualToDay,
            lessThanTomorrow
        ]

        const branchStore = defineBranchStore();

        if(branchStore.currentBranch){
            datesCriteria.push(branchStore.getCurrentBranchCriterion);
        }


        return  datesCriteria;
    },




}


export default storeFuncs;
