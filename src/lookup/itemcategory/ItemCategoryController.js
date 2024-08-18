import rootController from "@/root/RootController";
import itemCategoryModel from "./ItemCategoryModel";
import { onMounted } from "vue";
import { defineLookupStore } from "@/lookup/LookupStore";
export default function itemCategoryController(){
    const controller =   rootController(itemCategoryModel);
    const lookupStore =  defineLookupStore();
    controller.lookupStore = lookupStore;
    onMounted(()=>{
      lookupStore.getItemCategoryGroups();
    })



    return controller
}
