const countryModel = {
  country: {
    countryCode: "",
    countryName: "",
    isDefault: false,
    hidden: false,
    clear(){
      this.countryCode = "";
    this.countryName = "";
    this.isDefault= false;
    this.hidden = false;
    }
  }
}

export default countryModel;