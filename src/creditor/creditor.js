import creditor from './creditor/creditor.js'
import bill from './bill/bill'
import billitem from './billitem/billitem'
export default {
    namespaced:true,
    state: {
        path: "creditor/enums/",
    },
    mutations: {},
    actions: {
       
    },
    modules: { creditor, bill, billitem} 

}