import rootController from "@/root/RootController";
import billModel from "./BillModel";
import { onMounted } from "vue";
import creditorNav from "@/creditor/creditor/CreditorNav.js";
import { defineCreditorStore } from "@/creditor/creditor/CreditorStore.js";
import billItemNav from "@/creditor/billitem/BillItemNav.js";
import billItemController from "@/creditor/billitem/BillItemController.js";
import { defineBillItemStore } from "@/creditor/billitem/BillItemStore.js";
import defineListAmountCalOnAmount from "@/root/compasables/ListAmountCalcOnAmountFunc";
export default function billController() {
  const controller = rootController(billModel);
  const creditorIdOk = (data) => {
    if (data) {
      controller.model.value.creditorId = data.id;
      controller.model.value.name = data.name;
    }
  };
  controller.creditorIdOk = creditorIdOk;
  const creditorStore = defineCreditorStore();
  controller.creditorStore = creditorStore;
  const billItemStore = defineBillItemStore();
  controller.billItemStore = billItemStore;
  const { setData: setBillItemData } = billItemController();
  controller.setBillItemData = setBillItemData;
  controller.creditorNav = creditorNav;
  controller.billItemNav = billItemNav;
  onMounted(() => {
    creditorStore.getMini();

    billItemStore.getMini();
  });

  const model=controller.model.value;

  const billDetailsChanged = (items) => {
    defineListAmountCalOnAmount(model, items);
  };

  controller.billDetailsChanged = billDetailsChanged;
  return controller;
}
