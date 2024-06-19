
const writeOffModel = {
 writeOff: {
writeOffDate:"",
customerId:"",
writeOffType:"",
amountTendered:"",
currencyObj: {},
currencyId:"",
exchangeRate:"",
changeGiven:"",
amount:"",
amountWords:"",
writeOffInvoices:[],

clear(){
this.writeOffDate="";
this.customerId="";
this.writeOffType="";
this.amountTendered="";
this.currencyObj= {};
this.currencyId="";
this.exchangeRate="";
this.changeGiven="";
this.amount="";
this.amountWords="";
this.writeOffInvoices=[];
}
},
path:"writeoffs"}

export default writeOffModel;
