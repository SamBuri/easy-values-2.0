const loanProductModel = {
  model: {
    productName: "",
    interestRate: "",
    interestMethod: "",
    leastSecurityScale: "",
    interestPeriodId: "",
    paymentPeriodId: "",
    maxPeriods: "",
    minAmount: "",
    maxAmount: "",
    preRemainder: "",
    fineDays: "",
    redFlagAfter: "",
    hidden: false,
    loanProductCharges: [],

    clear() {
      this.productName = "";
      this.interestRate = "";
      this.interestMethod = "";
      this.leastSecurityScale = "";
      this.interestPeriodId = "";
      this.paymentPeriodId = "";
      this.maxPeriods = "";
      this.minAmount = "";
      this.maxAmount = "";
      this.preRemainder = "";
      this.fineDays = "";
      this.redFlagAfter = "";
      this.hidden = false;
      this.loanProductCharges = [];
    },
    copy(obj) {
      this.id = obj.id;
      this.productName = obj.productName;
      this.interestRate = obj.interestRate;
      this.interestMethod = obj.interestMethod;
      this.leastSecurityScale = obj.leastSecurityScale;
      this.interestPeriodId = obj.interestPeriod.id;
      this.paymentPeriodId = obj.paymentPeriod.id;
      this.maxPeriods = obj.maxPeriods;
      this.minAmount = obj.minAmount;
      this.maxAmount = obj.maxAmount;
      this.preRemainder = obj.preRemainder;
      this.fineDays = obj.fineDays;
      this.redFlagAfter = obj.redFlagAfter;
      this.hidden = obj.hidden;
      this.loanProductCharges = obj.loanProductCharges;
    },
    printOptions() {
      let data = [];
      data.push({ text: "Product Name", value: this.loanProduct.productName });
      data.push({
        text: "Interest Rate",
        value: this.loanProduct.interestRate,
      });
      data.push({
        text: "Interest Method",
        value: this.loanProduct.interestMethod.displayKey,
      });
      data.push({
        text: "Least Security Scale",
        value: this.loanProduct.leastSecurityScale,
      });
      data.push({
        text: "Interest Period",
        value: this.loanProduct.interestPeriod.displayKey,
      });
      data.push({
        text: "Payment Period",
        value: this.loanProduct.paymentPeriod.displayKey,
      });
      data.push({ text: "Max Periods", value: this.loanProduct.maxPeriods });
      data.push({ text: "Min Amount", value: this.loanProduct.minAmount });
      data.push({ text: "Max Amount", value: this.loanProduct.maxAmount });
      data.push({
        text: "Pre Remainder",
        value: this.loanProduct.preRemainder,
      });
      data.push({ text: "Fine Days", value: this.loanProduct.fineDays });
      data.push({
        text: "Red Flag After",
        value: this.loanProduct.redFlagAfter,
      });
      data.push({
        text: "Loan Product Charges",
        value: this.loanProduct.loanProductCharges.displayKey,
      });

      return {
        data: data,
        startXPos: 10,
        startYPos: 25,
        lineBreak: 4,
        hSpace: 50,
        vSpace: 10,
        title: "Loan Product",
      };
    },
  },
  path: "loanproducts",
  rules: {
    productName: [
      (v) => !!v || "Product Name is required",
      (v) => v.length < 40 || "Product Name length must be less or equal to 40",
    ],
    interestRate: [(v) => !!v || "Interest Rate is required"],
    interestMethod: [(v) => !!v || "Interest Method is required"],
    leastSecurityScale: [(v) => !!v || "Least Security Scale is required"],
    interestPeriodId: [(v) => !!v || "Interest Period is required"],
    paymentPeriodId: [(v) => !!v || "Payment Period is required"],
    maxPeriods: [(v) => !!v || "Max Periods is required"],
    minAmount: [(v) => !!v || "Min Amount is required"],
    maxAmount: [(v) => !!v || "Max Amount is required"],
    preRemainder: [],
    fineDays: [],
    redFlagAfter: [],
    loanProductCharges: [(v) => !!v || "Loan Product Charges is required"],
  },
};

export default loanProductModel;
