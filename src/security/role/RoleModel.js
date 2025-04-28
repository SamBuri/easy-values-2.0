const roleModel = {
 model: {
name:"",
composite:false,
clientRole:false,

clear(){
this.name="";
this.composite=false;
this.clientRole=false;
},
copy(obj){
this.id=obj.id;
this.name = obj.name;
this.composite = obj.composite;
this.clientRole = obj.clientRole;

},
printOptions(){let data = [];
data.push({ text: "Name", value: this.role.name });

 return {
        data: data,
        startXPos: 10,
        startYPos: 25,
        lineBreak: 4,
        hSpace: 50,
        vSpace: 10,
        title: "Permission"

      };
},


},
path:"roles",
rules: {
name:[(v) => !!v || "Name is required",
(v) => v.length < 40 || "Name length must be less or equal to 40", ],

}
}

export default roleModel;
