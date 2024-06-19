const villageModel = {
 village: {
country:{id: ""},
district:{id: ""},
county:{id: ""},
subCounty:{id: ""},
parish:{id: ""},
villageName:"",
hidden:false,

clear(){
this.country={id: ""};
this.district={id: ""};
this.county={id: ""};
this.subCounty={id: ""};
this.parish={id: ""};
this.villageName="";
this.hidden=false;
}
}
}

export default villageModel;
