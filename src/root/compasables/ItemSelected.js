import { watch } from "vue";
import { defineItemStore } from "@/lookup/item/ItemStore";
export default function itemSelected(model, callBack) {
  const itemStore = defineItemStore();

  const defaultFunction = (item) => {
    console.log("Selected Item", item)
    model.item = null;
    model.itemName = '';
    model.itemCategoryId = '';
    model.itemCategory = '';
    model.quantity = 0;
    model.unitPrice = 0
    model.unitCost = 0
    model.editQuantity = false;
    model.editUnitCost = false;
    model.editUnitPrice = false;
    model.measureGroup = null;
    model.measureRelations = [];
    model.defaultMeasureRelation = null;
      model.measureRelation = null;
      model.unitMeasure =""

    if (item) {
      model.item = item
      model.itemName = item.itemName;
      model.quantity = 0;
      model.unitPrice = item.unitPrice
      model.unitCost = item.unitCost
      model.editQuantity = item.editQuantity;
      model.editUnitCost = item.editUnitCost;
      model.editUnitPrice = item.editUnitPrice;
      model.itemCategory = item.itemCategory.itemCategory
      model.itemCategoryId = item.itemCategory.id
      model.measureGroup = item.measureGroup;
      model.measureRelations = item.measureGroup ? item.measureGroup.measureRelation : [];
      if (!item.editQuantity) model.quantity = 1;

      model.measureRelations = item.measureGroup ? item.measureGroup.measureRelation : [];
   

      let basicUnitMeasure = model.measureRelations.filter(itm => itm.basic === true || itm.measureSize === 1);
      let measureRelation = basicUnitMeasure.length > 0 ? basicUnitMeasure[0] : null;
      model.defaultMeasureRelation = measureRelation;
      model.measureRelation = measureRelation;
      model.unitMeasure = measureRelation ? measureRelation.measureName : "NA";


    }

  }
  watch(
    () => model.itemId,
    async (newValue) => {
      let item = await itemStore.getItem(newValue);
      defaultFunction(item)
      if(callBack)callBack();
      model.item = item;

    }
  );

  return model;

}
