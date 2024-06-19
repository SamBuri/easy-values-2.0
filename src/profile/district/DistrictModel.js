const districtModel = {
    district: {
        country: { id: "" },
        districtName: "",
        isDefault: false,
        hidden: false,
        clear(){
            this.country= { id: "" };
            this.districtName="";
            this.isDefault= false;
            this.hidden = false;
        
         }
    },

    
}
export default districtModel;