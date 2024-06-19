import SFileInput from "./SFileInput.vue";
import SDatePicker from "./SDatePicker";
import SNumberInput from "./SNumberInput";
import CrudForm from "./CrudForm.vue";
import CrudTable from "./CrudTable.vue";
import SActionInput from "./SActionInput";
import SearchMini from "@/search/SearchMini";
// import VueExcelXlsx from "vue-excel-xlsx";
import ExportExcel from "./ExportExcel";
import SConfirmDialog from "./SConfirmDialog";
import SDashboardCard from "@/dashboard/SDashboardCard";
import SCountDashboardCard from "@/dashboard/SCountDashboardCard";
import SDataDashboard from "@/dashboard/SDataDashboard";
import SDataTable from "./SDataTable";
import SPeriodicReport from "./SPeriodicReport";
import SLedger from "./SLedger";
import SStatement from "./SStatement";
// import SMap from './SMap';
import Search from "@/search/Search.vue";
import printMixin from "@/utils/printMixin.vue";
import currentBranchMixin from "@/utils/currentBranchMixin";
import searchMixin from "@/utils/searchMixin";
// import VueApexCharts from "vue-apexcharts";
// import SDataChart from "./SDataChart";
import SImage from "./SImage.vue";
import SSaveForm from "./SSaveForm.vue";

export default function registerComponents(app) {
  // Vue.filter('formattedNum', function (value) {
  //   return Number(value).toLocaleString()
  // });
  app.component("CrudForm", CrudForm);
  app.component("CrudTable", CrudTable);
  app.component("SFileInput", SFileInput);
  app.component("SDatePicker", SDatePicker);
  app.component("SNumberInput", SNumberInput);
  app.component("SActionInput", SActionInput);
  app.component("SearchMini", SearchMini);
  app.component("SConfirmDialog", SConfirmDialog);
  app.component("SDashboardCard", SDashboardCard);
  app.component("SCountDashboardCard", SCountDashboardCard);
  app.component("SDataDashboard", SDataDashboard);
  app.component("SDataTable", SDataTable);
  app.component("SPeriodicReport", SPeriodicReport);
  app.component("SLedger", SLedger);
  app.component("SStatement", SStatement);
  // app.component('SMap', SMap);
  app.component("ExportExcel", ExportExcel);
  app.component("Search", Search);
  // app.componentuse("SDataChart", SDataChart);
  app.component("SImage", SImage);
  app.component("SSaveForm", SSaveForm);

  app.mixin(currentBranchMixin);
  app.mixin(searchMixin);
  app.mixin(printMixin);
  // app.component(VueApexCharts);
  // app.component("apexchart", VueApexCharts);
}

