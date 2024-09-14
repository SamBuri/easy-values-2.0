import rootController from "@/root/RootController";
import loanTransitionModel from "./LoanTransitionModel";
import { onMounted, computed } from "vue";
import loanNav from "@/loan/loan/LoanNav.js";
import { defineLoanStore } from "@/loan/loan/LoanStore.js";
import { defineLoanStore as rootLoanStore } from "@/loan/LoanStore.js";
import loanSelected from "@/root/compasables/LoanSelected";
export default function loanTransitionController() {
  const controller = rootController(loanTransitionModel);
  const loanIdOk = (data) => {
    if (data) {
      controller.model.value.loanId = data.id;
    }
  };
  controller.loanIdOk = loanIdOk;
  const loanStore = defineLoanStore();
  controller.loanStore = loanStore;
  controller.loanNav = loanNav;
  const rootlStore = rootLoanStore();
  controller.rootlStore = rootlStore;
  onMounted(() => {
    loanStore.getMini();

    rootlStore.getLoanStatuses();
  });

  const model = controller.model.value;
  loanSelected(()=>model.loanId, model, (v)=>model.fromStatus=v.loanStatus);
  const completedStatus = 'Completed';
  const statuses =  computed(() =>{
    return  rootlStore.loanStatuses ||[]}
  )
  controller.statuses=statuses;
  const fromStatuses = computed(() =>
    rootlStore.loanStatuses.filter((s) => s !== completedStatus)
      .filter((s) => s !== model.toStatus)
  )
  const toStatuses = computed(() =>
    rootlStore.loanStatuses.filter((s) => s !== completedStatus)
      .filter((s) => s !== model.fromStatus)
  )
  controller.fromStatuses = fromStatuses
  controller.toStatuses = toStatuses;

  return controller;
}
