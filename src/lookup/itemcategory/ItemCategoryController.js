import rootController from "@/root/RootController";
import itemCategoryModel from "./ItemCategoryModel";
import { onMounted } from "vue";
import { defineLookupStore } from "../LookupStore";
export default function itemCategoryController(){
    const controller =   rootController(itemCategoryModel);
    const lookupStore =  defineLookupStore();
    onMounted(()=>{
      lookupStore.getItemCategoryGroups();
    })

    return {...controller, lookupStore}
}
