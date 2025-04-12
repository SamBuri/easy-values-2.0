
import { computed, onMounted } from 'vue'
import { defineBankTransactionStore } from '@/banking/banktransaction/BankTransactionStore'
import bankTransactionNav from '@/banking/banktransaction/BankTransactionNav'

export function useNewBankTransactios(predicate) {
  const bankTransactionStore = defineBankTransactionStore()
 const headers = bankTransactionNav.menu.miniHeaders


  onMounted(() => {
    bankTransactionStore.getNewAccountTransactions();
  });

  const bankTransactions = computed(() => bankTransactionStore.newAccountTransactions.filter(r=>predicate(r))||[]);



  return {
    headers,
    bankTransactions
    
  }
}