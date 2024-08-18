const measureGroupModel = {
 model: {
measureGroupName:"",
measureRelation:[],

clear(){
this.measureGroupName="";
this.measureRelation=[];
},
copy(obj){
  this.measureGroupName = obj.measureGroupName;
  this.measureRelation = obj.measureRelation;

  }
},
path:"measuregroups",
rules: {
measureGroupName:[(v) => !!v || "Measure Group Name is required",
(v) => v.length < 100 || "Measure Group Name length must be less or equal to 100", ],measureRelation:[(v) => !!v || "Measure Relation is required",
 ],

}
}

export default measureGroupModel;
