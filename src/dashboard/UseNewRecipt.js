// composables/useReceiptDiscount.js
import { ref, computed, onMounted } from 'vue'
import { defineReceiptStore } from '@/sales/receipt/ReceiptStore'
import receiptNav from '../sales/receipt/ReceiptNav'

export function useNewReceipts(predicate) {
  const receiptStore = defineReceiptStore()
 const headers = ref(receiptNav.menu.miniHeaders)

  onMounted(() => {
    receiptStore.getNewReceipts();
  });

  const receipts = computed(() => receiptStore.newReceipts.filter(r=>predicate(r))||[]);



  return {
    headers,
    receipts
    
  }
}