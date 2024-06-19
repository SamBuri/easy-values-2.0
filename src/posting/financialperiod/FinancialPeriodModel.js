const financialPeriodModel = {
    financialPeriod: {
        description: "",
        startDate: "",
        endDate: "",
        active: false,

        clear() {
            this.description = "";
            this.startDate = "";
            this.endDate = "";
            this.active = false;
        }
    },
    path: "financialperiods"
}

export default financialPeriodModel;
