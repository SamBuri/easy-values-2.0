const itemPriceGroupModel = {
    itemPriceGroup: {
        item: { id: "" },
        priceGroupObj:{},
        priceGroupId: "",
        unitPrice: "",
        discount: "",

        clear() {
            this.item = { id: "" };
            this.priceGroupObj={};
            this.priceGroupId = "";
            this.unitPrice = "";
            this.discount = "";
        }
    },
    path: "itempricegroups"
}

export default itemPriceGroupModel;
