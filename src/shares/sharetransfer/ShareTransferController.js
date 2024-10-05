import rootController from "@/root/RootController";
import shareTransferModel from "./ShareTransferModel";
import { onMounted } from "vue";
import shareholderNav from "@/shares/shareholder/ShareholderNav.js"
import {defineShareholderStore} from "@/shares/shareholder/ShareholderStore.js"
import {defineShareTypeStore} from "@/shares/sharetype/ShareTypeStore.js"
export default function shareTransferController(){

  const controller = rootController(shareTransferModel);
const transferFromIdOk = (data) => {
    if (data) {
     
      controller.model.value.transferFromId= data.id;

    }
  };
controller.transferFromIdOk = transferFromIdOk;
const transferToIdOk = (data) => {
    if (data) {
     
      controller.model.value.transferToId= data.id;

    }
  };
controller.transferToIdOk = transferToIdOk;
const shareholderStore = defineShareholderStore();
controller.shareholderStore = shareholderStore;
const shareTypeStore = defineShareTypeStore();
controller.shareTypeStore = shareTypeStore;
controller.shareholderNav=shareholderNav;
onMounted(()=>{
shareholderStore.getMini();

shareTypeStore.getMini();


})
  return controller;

}

