const currencyModel = {
  model: {
    currencyCode: "",
    currencyName: "",
    symbol: "",

    clear() {
      this.currencyCode = "";
      this.currencyName = "";
      this.symbol = "";
    },
    copy(obj) {
      this.id = obj.id;
      this.currencyCode = obj.currencyCode;
      this.currencyName = obj.currencyName;
      this.symbol = obj.symbol;
    },
    printOptions() {
      let data = [];
      data.push({ text: "Currency Code", value: this.currencyCode });
      data.push({ text: "Currency Name", value: this.currencyName });
      data.push({ text: "Symbol", value: this.symbol });

      return {
        data: data,
        startXPos: 10,
        startYPos: 25,
        lineBreak: 4,
        hSpace: 50,
        vSpace: 10,
        title: "Currency",
      };
    },
  },
  path: "currencies",
  rules: {
    currencyCode: [
      (v) => !!v || "Currency Code is required",
      (v) => v.length <= 3 || "Currency Code length must be less or equal to 3",
    ],
    currencyName: [
      (v) => !!v || "Currency Name is required",
      (v) => v.length <= 100 || "Currency Name length must be less or equal to 100",
    ],
  },
};

export default currencyModel;
