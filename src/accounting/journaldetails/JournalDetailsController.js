import rootController from "@/root/RootController";
import journalDetailsModel from "./JournalDetailsModel";
import { onMounted } from "vue";
import { defineJournalStore } from "@/accounting/journal/JournalStore.js";
import accountNav from "@/accounting/account/AccountNav.js";
import { defineAccountStore } from "@/accounting/account/AccountStore.js";
import { defineLookupStore } from "@/lookup/LookupStore.js";
export default function journalDetailsController() {
  const controller = rootController(journalDetailsModel);
  const accountIdOk = (data) => {
    if (data) {
      controller.model.value.accountId = data.id;
    }
  };
  controller.accountIdOk = accountIdOk;
  const journalStore = defineJournalStore();
  controller.journalStore = journalStore;
  const accountStore = defineAccountStore();
  controller.accountStore = accountStore;
  const lookupStore = defineLookupStore();
  controller.lookupStore = lookupStore;
  controller.accountNav = accountNav;
  onMounted(() => {
    journalStore.getMini();

    accountStore.getMini();

    lookupStore.getAccountTypes();

    lookupStore.getAccountActions();
  });
  return controller;
}
