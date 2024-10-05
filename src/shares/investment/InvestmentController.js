import rootController from "@/root/RootController";
import investmentModel from "./InvestmentModel";
import { onMounted } from "vue";
import shareholderNav from "@/shares/shareholder/ShareholderNav.js"
import {defineShareholderStore} from "@/shares/shareholder/ShareholderStore.js"
import {defineShareTypeStore} from "@/shares/sharetype/ShareTypeStore.js"
import {defineSharesStore} from "@/shares/SharesStore.js"
import {defineBankAccountStore} from "@/banking/bankaccount/BankAccountStore.js"
export default function investmentController(){

  const controller = rootController(investmentModel);
const shareholderIdOk = (data) => {
    if (data) {
     
      controller.model.value.shareholderId= data.id;

    }
  };
controller.shareholderIdOk = shareholderIdOk;
const shareholderStore = defineShareholderStore();
controller.shareholderStore = shareholderStore;
const shareTypeStore = defineShareTypeStore();
controller.shareTypeStore = shareTypeStore;
const sharesStore = defineSharesStore();
controller.sharesStore = sharesStore;
const bankAccountStore = defineBankAccountStore();
controller.bankAccountStore = bankAccountStore;
controller.shareholderNav=shareholderNav;
onMounted(()=>{
shareholderStore.getMini();

shareTypeStore.getMini();

sharesStore.getShareActions();

bankAccountStore.getMini();


})
  return controller;

}

