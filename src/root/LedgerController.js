import { ref } from "vue";
import { useAuthStore } from "@/store/authstore";

export default function ledgerController(rawModel) {
  const model = ref(rawModel.model);
  const authStore = useAuthStore();
  const setBranch = () => {
    model.value.branches = [];
    if (authStore.currentBranch?.id) {
      model.value.branches.push(authStore.currentBranch.id);
    }
  };
  return model;
}
