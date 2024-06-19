import funcs from "../../utils/funcs";

const loanTransitionModel = {
    loanTransition: {
        loanId: "",
        profileId: "",
        fullName: "",
        tranDate: funcs.today(),
        fromStatus: "",
        toStatus: "",
        notes: "",
        entryMode: "Manual",

        clear() {
            this.loanId = "";
            this.profileId = "";
            this.fullName = "";
            this.tranDate =funcs.today();
            this.fromStatus = "";
            this.toStatus = "";
            this.notes = "";
        }
    },
    path: "loantransitions"
}

export default loanTransitionModel;
