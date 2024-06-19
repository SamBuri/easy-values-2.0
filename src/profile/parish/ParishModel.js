const parishModel = {
    parish: {
        country: { id: "" },
        district: { id: "" },
        county: { id: "" },
        subCounty: { id: "" },
        parishName: "",
        hidden: false,

        clear() {
            this.country = { id: "" };
            this.district = { id: "" };
            this.county = { id: "" };
            this.subCounty = { id: "" };
            this.parishName = "";
            this.hidden = false;
        }
    }
}

export default parishModel;
