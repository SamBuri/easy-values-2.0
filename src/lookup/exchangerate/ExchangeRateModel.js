import { defineCurrencyStore } from "../currency/CurrencyStore";

const exchangeRateModel = {
  model: {
    currencyId: null,
    buying: "",
    selling: "",
    rateDate: new Date().toISOString().substr(0, 10),
    baseCurrency: false,

    clear() {
      this.currencyId = null;
      this.buying = "";
      this.selling = "";
      this.rateDate = new Date().toISOString().substr(0, 10);
      this.baseCurrency = false;
    },
    copy(obj) {
      this.id = obj.id;
      this.currencyId = obj.currencyId;
      this.buying = obj.buying;
      this.selling = obj.selling;
      this.rateDate = obj.rateDate;
      this.baseCurrency = obj.baseCurrency;
    },
    printOptions() {
      const currencyStore = defineCurrencyStore();
      const currency = currencyStore.mini.find((c) => c.id === this.currencyId);
      let data = [];
      data.push({ text: "Currency", value: currency ? currency.currencyCode : "" });
      data.push({ text: "Buying", value: this.buying });
      data.push({ text: "Selling", value: this.selling });
      data.push({ text: "Rate Date", value: this.rateDate });
      data.push({ text: "Base Currency", value: this.baseCurrency });

      return {
        data: data,
        startXPos: 10,
        startYPos: 25,
        lineBreak: 4,
        hSpace: 50,
        vSpace: 10,
        title: "Exchange Rate"
};
    }
},
  path: "exchangerates",
  rules: {
    currencyId: [(v) => !!v || "Currency is required"],
    buying: [(v) => !!v || "Buying is required"],
    selling: [(v) => !!v || "Selling is required"],
    rateDate: [(v) => !!v || "Rate Date is required"]
}
};

export default exchangeRateModel;
