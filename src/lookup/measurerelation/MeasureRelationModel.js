const measureRelationModel = {
  model: {

    measureName: "",
    measureSize: "",
    basic: false,
    defaultUsage: null,

    clear() {

      this.measureName = "";
      this.measureSize = "";
      this.basic = false;
      this.defaultUsage = null;
    },
    copy(obj) {
       this.measureName = obj.measureName;
      this.measureSize = obj.measureSize;
      this.basic = obj.basic;
      this.defaultUsage = obj.defaultUsage;
    },
  },
  path: "measurerelations",

  rules: {
    measureGroup: [(v) => !!v || "Measure Group is required"],
    measureName: [
      (v) => !!v || "Measure Name is required",
      (v) =>
        v.length < 100 || "Measure Name length must be less or equal to 100",
    ],
    measureSize: [(v) => !!v || "Measure Size is required"],
    defaultUsage: [],
  },
};

export default measureRelationModel;
