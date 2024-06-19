const shareTypeModel = {
 shareType: {
name:"",
unitPrice:"",
dividendPercent:"",
hidden:false,

clear(){
this.name="";
this.unitPrice="";
this.dividendPercent="";
this.hidden=false;
}
},
path:"sharetypes"}

export default shareTypeModel;
