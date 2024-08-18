const bankAccountModel = {
  model: {
    bankAccountName: "",
    bankAccountType: "",
    accountNo: "",
    bankName: "",
    branchName: "",
    currencyId: "",
    glAccountId: "",
    chargesGlAccountId: "",
    phoneNo: "",
    email: "",
    address: "",
    isDefault: false,
    hidden: false,
    balance: "",

    clear() {
      this.bankAccountName = "";
      this.bankAccountType = "";
      this.accountNo = "";
      this.bankName = "";
      this.branchName = "";
      this.currencyId = "";
      this.glAccountId = "";
      this.chargesGlAccountId = "";
      this.phoneNo = "";
      this.email = "";
      this.address = "";
      this.isDefault = false;
      this.hidden = false;
      this.balance = "";
    },
    copy(obj) {
      this.id = obj.id;
      this.bankAccountName = obj.bankAccountName;
      this.bankAccountType = obj.bankAccountType;
      this.accountNo = obj.accountNo;
      this.bankName = obj.bankName;
      this.branchName = obj.branchName;
      this.currencyId = obj.currencyId;
      this.glAccountId = obj.glAccountId;
      this.chargesGlAccountId = obj.chargesGlAccountId;
      this.phoneNo = obj.phoneNo;
      this.email = obj.email;
      this.address = obj.address;
      this.isDefault = obj.isDefault;
      this.hidden = obj.hidden;
      this.balance = obj.balance;
    },
    printOptions() {
      let data = [];
      data.push({
        text: "Bank Account Name",
        value: this.bankAccount.bankAccountName,
      });
      data.push({
        text: "Bank Account Type",
        value: this.bankAccount.bankAccountType,
      });
      data.push({ text: "Account No", value: this.bankAccount.accountNo });
      data.push({ text: "Bank Name", value: this.bankAccount.bankName });
      data.push({ text: "Branch Name", value: this.bankAccount.branchName });
      data.push({ text: "Currency", value: this.bankAccount.currencyId });
      data.push({ text: "Gl Account Id", value: this.bankAccount.glAccountId });
      data.push({
        text: "Charges Gl Account Id",
        value: this.bankAccount.chargesGlAccountId,
      });
      data.push({ text: "Phone No", value: this.bankAccount.phoneNo });
      data.push({ text: "Email", value: this.bankAccount.email });
      data.push({ text: "Address", value: this.bankAccount.address });
      data.push({ text: "Balance", value: this.bankAccount.balance });

      return {
        data: data,
        startXPos: 10,
        startYPos: 25,
        lineBreak: 4,
        hSpace: 50,
        vSpace: 10,
        title: "Bank Account",
      };
    },
  },
  path: "bankaccounts",
  rules: {
    bankAccountName: [
      (v) => !!v || "Bank Account Name is required",
      (v) =>
        v.length < 100 ||
        "Bank Account Name length must be less or equal to 100",
    ],
    bankAccountType: [(v) => !!v || "Bank Account Type is required"],
    accountNo: [
      (v) => v.length < 100 || "Account No length must be less or equal to 100",
    ],
    bankName: [
      (v) => v.length < 100 || "Bank Name length must be less or equal to 100",
    ],
    branchName: [(v) =>
        v.length < 100 || "Branch Name length must be less or equal to 100",
    ],
    currencyId: [(v) => !!v || "Currency is required"],
    glAccountId: [(v) => !!v || "Gl Account Id is required"],
    chargesGlAccountId: [(v) => !!v || "Charges Gl Account Id is required"],
    phoneNo: [(v) => v.length < 100 || "Phone No length must be less or equal to 100",
    ],
    email: [
      (v) => v.length < 100 || "Email length must be less or equal to 100",
    ],
    address: [
      (v) => v.length < 200 || "Address length must be less or equal to 200",
    ],
    balance: [],
  },
};

export default bankAccountModel;
