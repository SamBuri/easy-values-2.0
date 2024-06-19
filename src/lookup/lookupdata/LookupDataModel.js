const lookupDataModel = {
  model: {
    id: "",
    lookupObject: null,
    lookupDataName: "",
    readOnly: false,
    hidden: false,
    isDefault: false,

    clear() {
      this.id = "";
      this.lookupDataName = "";
      this.lookupObject = null;
      this.readOnly = false;
      this.hidden = false;
      this.isDefault = false;
    },
    copy(obj) {
      this.id = obj.id;
      this.lookupDataName = obj.lookupDataName;
      this.lookupObject = obj.lookupObject;
      this.hidden = obj.hidden;
      this.isDefault = obj.isDefault;
    },
  },
  rules: {
    lookupObject: [(v) => !!v || "Lookup Object is required"],
    lookupDataName: [
      (v) => !!v || "Lookup Data Name is required",
      (v) =>
        v.length < 100 ||
        "Lookup Data Name length must be less or equal to 100",
    ],
  },
  path: "lookupdata"
};

export default lookupDataModel;
