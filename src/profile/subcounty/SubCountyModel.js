const subCountyModel = {
    subCounty: {
        country: { id: "" },
        district: { id: "" },
        county: { id: "" },
        subCountyName: "",
        hidden: false,

        clear() {
            this.country = { id: "" };
            this.district = { id: "" };
            this.county = { id: "" };
            this.subCountyName = "";
            this.hidden = false;
        }
    }
}

export default subCountyModel;
