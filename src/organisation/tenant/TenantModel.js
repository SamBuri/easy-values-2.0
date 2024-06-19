const tenantModel = {
    tenant: {
   tenantType:"",
   company:{id: ""},
   branch:{id: ""},
   sourceId:"",
   url:"",
   authUrl:"",
   realm:"",
   issuerUrl:"",
   jwkSetUrl:"",
   
   clear(){
   this.tenantType="";
   this.company={id: ""};
   this.branch={id: ""};
   this.sourceId="";
   this.url="";
   this.authUrl="";
   this.realm="";
   this.issuerUrl="";
   this.jwkSetUrl="";
   }
   },
   path:"tenants"}
   
   export default tenantModel;