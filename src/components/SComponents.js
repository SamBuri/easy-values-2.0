

import SFileInput from './SFileInput.vue'
import SDatePicker from './SDatePicker'
import SNumberInput from './SNumberInput'
import CrudForm from "./CrudForm.vue";
import CrudTable from "./CrudTable.vue";
import SActionInput from './SActionInput'
import SearchMini from './search/SearchMini'
import ExportExcel from './ExportExcel'
import SConfirmDialog from './SConfirmDialog'
import SDashboardCard from '../dashboard/SDashboardCard'
import SCountDashboardCard from '../dashboard/SCountDashboardCard'
import SDataTable from './SDataTable';
import SPeriodicReport from './SPeriodicReport';
import SLedger from './SLedger';
import SStatement from './SStatement';
import SMap from './SMap.vue';
import SSelectField from './SSelectField.vue';
import Search from '../search/Search.vue';
import SCurrencyField from './SCurrencyField.vue';


export default function register(Vue){
  Vue.component('CrudForm', CrudForm);
  Vue.component('CrudTable', CrudTable);
  Vue.component('SFileInput', SFileInput);
  Vue.component('SDatePicker', SDatePicker);
  Vue.component('SNumberInput', SNumberInput);
  Vue.component('SActionInput', SActionInput);
  Vue.component('SearchMini', SearchMini);
  Vue.component('SConfirmDialog', SConfirmDialog);
  Vue.component('SDashboardCard', SDashboardCard);
  Vue.component('SCountDashboardCard', SCountDashboardCard);
  Vue.component('SDataTable', SDataTable);
  Vue.component('SPeriodicReport', SPeriodicReport);
  Vue.component('SLedger', SLedger);
  Vue.component('SStatement', SStatement);
  Vue.component('SMap', SMap);
  Vue.component('ExportExcel', ExportExcel);
  Vue.component('Search', Search);
  Vue.component('SSelectField', SSelectField);
  Vue.component('SCurrencyField', SCurrencyField);

}















