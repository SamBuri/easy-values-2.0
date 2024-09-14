import { watch } from "vue";
import { defineItemStore } from "@/lookup/item/ItemStore";
export default function itemSelected(model, callBack){
  const itemStore = defineItemStore();

  const defaultFunction=(item)=>{
    model.item =null;
    model.itemName= '';
    model.itemCategory='';
    model.quantity=0;
    model.unitPrice=0
    model.unitCost=0
    model.editQuantity= false;
    model.editUnitCost= false;
    model.editUnitPrice= false;
    if (item) {
      model.item = item
      model.itemName = item.itemName;
      model.quantity=0;
      model.unitPrice=item.unitPrice
      model.unitCost=item.unitCost
      model.editQuantity= item.editQuantity;
      model.editUnitCost= item.editUnitCost;
      model.editUnitPrice= item.editUnitPrice;
      model.itemCategory = item.itemCategory.itemCategory
      if(!item.editQuantity) model.quantity=1;
    }

  }
  watch(
    () => model.itemId,
    async (newValue) => {
      let item = await itemStore.getItem(newValue);
      if(callBack) callBack(item);
      else defaultFunction(item)
      model.item = item;

    }
  );

  return model;

}
