import funcs from "../../utils/funcs";
const loanApprovalModel = {
    loanApproval: {
        loanApplication: { id: "" },
        approvalDate: funcs.today(),
        approvedBy: "",
        approvalNotes: "",
        approvalStatus: "",
        amount: "",
        collateralCategory: "",
        collateralDesc: "",
        estimatedCollateralValue: "",
        loanProductName: "",

        clear() {
            this.loanApplication = { id: "" };
            this.approvalDate = funcs.today();
            this.approvedBy = "";
            this.approvalNotes = "";
            this.approvalStatus = "";
            this.amount = "";
            this.collateralCategory = "";
            this.collateralDesc = "";
            this.estimatedCollateralValue = "";
            this.loanProductName = "";
        }
    },
    path: "loanapprovals"
}

export default loanApprovalModel;
