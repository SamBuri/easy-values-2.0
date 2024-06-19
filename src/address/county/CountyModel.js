const countyModel = {
    county: {
        country: { id: "" },
        district: { id: "" },
        countyName: "",
        isDefault: false,
        hidden: false,

        clear() {
            this.country = { id: "" };
            this.district = { id: "" };
            this.countyName = "";
            this.isDefault = false;
            this.hidden = false;
        }


    },

    


}
export default countyModel;