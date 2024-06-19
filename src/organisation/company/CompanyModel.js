const companyModel = {
 company: {
logo:null,
companyName:"",
businessType:"",
address:"",
phoneNo:"",
email:"",
website:"",
tagLine:"",
devName:"",
dbType:"",
dbUsername:"",
dbPassword:"",
dbPort:"",
dbHost:"",
dbDriverClassName:"",
dbInitialize:false,

clear(){
this.logo=null;
this.companyName="";
this.businessType="";
this.address="";
this.phoneNo="";
this.email="";
this.website="";
this.tagLine="";
this.devName="";
this.dbType="";
this.dbUsername="";
this.dbPassword="";
this.dbPort="";
this.dbHost="";
this.dbDriverClassName="";
this.dbInitialize=false;
}
},
path:"companies"}

export default companyModel;
