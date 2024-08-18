import rootController from "@/root/RootController";
import journalModel from "./JournalModel";
import { onMounted } from "vue";
import { defineCurrencyStore } from "@/lookup/currency/CurrencyStore.js";
import journalDetailsNav from "@/accounting/journaldetails/JournalDetailsNav.js";
import journalDetailsController from "@/accounting/journaldetails/JournalDetailsController.js";
import { defineJournalDetailsStore } from "@/accounting/journaldetails/JournalDetailsStore.js";
export default function journalController() {
  const controller = rootController(journalModel);
  const currencyStore = defineCurrencyStore();
  controller.currencyStore = currencyStore;
  const journalDetailsStore = defineJournalDetailsStore();
  controller.journalDetailsStore = journalDetailsStore;
  const { setData: setJournalDetailsData } = journalDetailsController();
  controller.setJournalDetailsData = setJournalDetailsData;
  controller.journalDetailsNav = journalDetailsNav;
  onMounted(() => {
    currencyStore.getMini();

    journalDetailsStore.getMini();
  });
  return controller;
}
