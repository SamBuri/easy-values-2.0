const realmAccessModel = {
 model: {
url:"",
authUrl:"",
realm:"",
issuerUrl:"",
jwkUrl:"",
implicitClientId:"",
implicitClientSecret:"",
disabled:false,

clear(){
this.url="";
this.authUrl="";
this.realm="";
this.issuerUrl="";
this.jwkUrl="";
this.implicitClientId="";
this.implicitClientSecret="";
this.disabled=false;
},
copy(obj){
this.id=obj.id;
this.url = obj.url;
this.authUrl = obj.authUrl;
this.realm = obj.realm;
this.issuerUrl = obj.issuerUrl;
this.jwkUrl = obj.jwkUrl;
this.implicitClientId = obj.implicitClientId;
this.implicitClientSecret = obj.implicitClientSecret;
this.disabled = obj.disabled;

},
printOptions(){let data = [];
data.push({ text: "Url", value: this.realmAccess.url });
data.push({ text: "Auth Url", value: this.realmAccess.authUrl });
data.push({ text: "Realm", value: this.realmAccess.realm });
data.push({ text: "Issuer Url", value: this.realmAccess.issuerUrl });
data.push({ text: "Jwk Url", value: this.realmAccess.jwkUrl });
data.push({ text: "Implicit Client Id", value: this.realmAccess.implicitClientId });
data.push({ text: "Implicit Client Secret", value: this.realmAccess.implicitClientSecret });

 return {
        data: data,
        startXPos: 10,
        startYPos: 25,
        lineBreak: 4,
        hSpace: 50,
        vSpace: 10,
        title: "Realm Access"

      };
},


},
path:"realmaccesses",
rules: {
url:[(v) => !!v || "Url is required",
(v) => v.length < 50 || "Url length must be less or equal to 50", ],authUrl:[(v) => !!v || "Auth Url is required",
(v) => v.length < 50 || "Auth Url length must be less or equal to 50", ],realm:[(v) => !!v || "Realm is required",
(v) => v.length < 50 || "Realm length must be less or equal to 50", ],issuerUrl:[(v) => !!v || "Issuer Url is required",
(v) => v.length < 100 || "Issuer Url length must be less or equal to 100", ],jwkUrl:[(v) => !!v || "Jwk Url is required",
(v) => v.length < 100 || "Jwk Url length must be less or equal to 100", ],implicitClientId:[(v) => !!v || "Implicit Client Id is required",
(v) => v.length < 100 || "Implicit Client Id length must be less or equal to 100", ],implicitClientSecret:[(v) => !!v || "Implicit Client Secret is required",
(v) => v.length < 200 || "Implicit Client Secret length must be less or equal to 200", ],

}
}

export default realmAccessModel;
