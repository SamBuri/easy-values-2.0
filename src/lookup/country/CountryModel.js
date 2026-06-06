const countryModel = {
  model: {
    countryName: "",
    countryCode: "",
    diallingCode: "",
    currencyId: null,
    isDefault: false,
    hidden: false,

    clear() {
      this.countryName = "";
      this.countryCode = "";
      this.diallingCode = "";
      this.currencyId = null;
      this.isDefault = false;
      this.hidden = false;
    },
    copy(obj) {
      this.id = obj.id;
      this.countryName = obj.countryName;
      this.countryCode = obj.countryCode;
      this.diallingCode = obj.diallingCode;
      this.currencyId = obj.currencyId;
      this.isDefault = obj.default;
      this.hidden = obj.hidden;
    },
    printOptions() {
      let data = [];
      data.push({ text: "Country Name", value: this.countryName });
      data.push({ text: "Country Code", value: this.countryCode });
      data.push({ text: "Dialling Code", value: this.diallingCode });

      return {
        data: data,
        startXPos: 10,
        startYPos: 25,
        lineBreak: 4,
        hSpace: 50,
        vSpace: 10,
        title: "Country"
};
    }
},
  path: "countries",
  rules: {
    countryName: [
      (v) => !!v || "Country Name is required",
      (v) => v.length <= 100 || "Country Name length must be less or equal to 100",
    ],
    countryCode: [
      (v) => !!v || "Country Code is required",
      (v) => v.length <= 3 || "Country Code length must be less or equal to 3",
    ]
}
};

export default countryModel;
