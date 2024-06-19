const loanApplicationPhotoModel = {
 loanApplicationPhoto: {
loanApplication:{id: ""},
imageDescription:"",
image:null,

clear(){
this.loanApplication={id: ""};
this.imageDescription="";
this.image=null;
}
},
path:"loanapplicationphotos"}

export default loanApplicationPhotoModel;
