<!-- <template></template> -->

<script>


import funcs from "./funcs";

export default {
  data() {
    return {
    }
  },

  computed: {

    loadCurrentBranchVue(){

        let hasNoBranches= false;
        let tenant = this.$store.state.security.user.tenant;
        if (tenant) {
          hasNoBranches= tenant.company.branches.length <1
        }

        let currentBranch = this.$store.state.security.user.currentBranch;
        if(currentBranch!==null){
           return true
        }
        else {return hasNoBranches}
      },


    hasBranches() {

        let tenant = this.$store.state.security.user.tenant;
        if (tenant) {
            return tenant.company.branches.length > 1
        }
        return false;
    },

    getCurrentBranch() {
        return this.$store.state.security.user.currentBranch;
    },

    getCurrentBranchCriterion() {
        return {
            operator: "AND",
            column: { title: "Branch", key: "branch" },
            operationObj: { text: "Equal", value: "EQUAL" },
            key: 'branch',
            operation: 'EQUAL',
            value: this.getCurrentBranch.branchName,
            value2: "",

        }
    },

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

        if(this.hasBranches){
            datesCriteria.push(this.getCurrentBranchCriterion());
        }

            // datesCriteria.push(this.getCurrentBranchCriterion());
            // datesCriteria.push(this.getCurrentBranchCriterion());
        return  datesCriteria;
    },

    currentUser() {
    let  tokenParsed = this.$store.state.security.user.keycloak.tokenParsed;
  return `${tokenParsed.given_name} ${tokenParsed.family_name}`;
  },

  },
  methods: {

  }
}

</script>
