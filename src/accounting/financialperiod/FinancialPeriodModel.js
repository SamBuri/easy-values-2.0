const financialPeriodModel = {
 financialPeriod: {
name:"",
startDate:"",
endDate:"",
active:true,

clear(){
this.name="";
this.startDate="";
this.endDate="";
this.active=true;
}
},
path:"financialperiods"}

export default financialPeriodModel;
