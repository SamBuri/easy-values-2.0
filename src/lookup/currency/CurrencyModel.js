const currencyModel = {
 model: {
currency:"",
buying:"",
selling:"",
isDefault:false,

clear(){
this.currency="";
this.buying="";
this.selling="";
this.isDefault=false;
},
copy(obj){
this.id=obj.id;
this.currency = obj.currency;
this.buying = obj.buying;
this.selling = obj.selling;
this.isDefault = obj.isDefault;

},
printOptions(){let data = [];
data.push({ text: "Currency", value: this.currency.currency });
data.push({ text: "Buying", value: this.currency.buying });
data.push({ text: "Selling", value: this.currency.selling });

 return {
        data: data,
        startXPos: 10,
        startYPos: 25,
        lineBreak: 4,
        hSpace: 50,
        vSpace: 10,
        title: "Currency"

      };
},

},
path:"currencies",
rules: {
currency:[(v) => !!v || "Currency is required",
(v) => v.length < 100 || "Currency length must be less or equal to 100", ],buying:[(v) => !!v || "Buying is required",
 ],selling:[(v) => !!v || "Selling is required",
 ],

}
}

export default currencyModel;
