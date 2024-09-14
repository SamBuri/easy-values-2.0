import funcs from "@/utils/funcs";
import { watch } from "vue";
import defineBillDetailsModifierFunc from "./BillDetailModifierFunc";

export default function defineBillDetailsModifier(prop,model, passedList, passedColumn, after){

  const defaultFunction = (model, passedList, passedColumn)=>{
    let list = model[passedList];
    let baseAmount =  model[passedColumn];

   defineBillDetailsModifierFunc(model, list, baseAmount, after)

  }

watch(prop, (newValue)=>{
  console.log("Passed List", newValue);
  console.log("The entire Model", model);
  newValue = newValue||[];
  defaultFunction(newValue, passedList, passedColumn, model)
},{ deep: true })



}
