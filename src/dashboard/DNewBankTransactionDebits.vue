<script setup>
import { useNewBankTransactios } from './UseNewAccountTransactions';
const {headers, bankTransactions} = useNewBankTransactios((r)=>r.accountAction=="Debit");
const toSumField = "amount";
</script><template>
    <s-count-dashboard-card title="New Debits"  :items="bankTransactions" :toSumField="toSumField" :headers="headers"
    >
    </s-count-dashboard-card>
</template>
<!-- 
<script>
import bankTransactionNav from '../banking/banktransaction/BankTransactionNav'
export default {
  name: 'DNewBankTransactionDebits',
  props: ["title"],
  data: ()=>({
    toSumField: "amount",
    headers: bankTransactionNav.menu.headers,
    dialog: false

  }),

  created(){
    
      this.$store.dispatch("banking/banktransaction/getNewDebits");
  },

  computed: {
       
       dashboardList(){
         return this.$store.state.banking.banktransaction.newDebits;
       },

     
  },
  methods: {
    open() {
      this.dialog = true;
    },
    close() {
      this.dialog = false;
    }
  }
};
</script> -->