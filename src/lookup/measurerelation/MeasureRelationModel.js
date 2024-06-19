const measureRelationModel = {
    measureRelation: {
        measureGroup: { id: "" },
        measureName: "",
        measureSize: "",
        basic: false,
        defaultUsage: null,

        clear() {
            this.measureGroup = { id: "" };
            this.measureName = "";
            this.measureSize = "";
            this.basic = false
            this.defaultUsage = null;
        }
    },
    path: "measurerelations"
}

export default measureRelationModel;
