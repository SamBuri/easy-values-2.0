import { ref } from "vue";
import { defineBranchStore } from "@/organisation/branch/BranchStore";
export default function ledgerController(rawModel){
  const model = ref(rawModel.model);
const branchStore = defineBranchStore();
  const setBranch=()=>{
    model.value.branches = [];
    model.value.branches=  branches.push(branchStore.currentBranch.id);
  }
  return model;

}
