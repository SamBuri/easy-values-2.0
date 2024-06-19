import funcs from "../utils/funcs";
import searchModel from "./SearchModel";
import { ref, computed, watch, nextTick } from "vue";
import { defineSearchStore } from "./SearchStore";
import { defineBranchStore } from "@/organisation/branch/BranchStore";
import constants from "@/utils/constants";
export default function searchController(menu, menuItems) {
  const search = ref("");
  const mitems = ref([]);
  const menuX = ref(0);
  const menuY = ref(0);
  const showMenu = ref(false);
  const closeOnClick = ref(true);
  const selectedItem = ref({});

  const dialogDelete = ref(false);
  const defaultItem = ref({});
  const searchOperations = ref(searchModel.searchOperations);
  const searchOperators = ref(searchModel.searchOperators);
  const searchCriterion = ref(searchModel.searchCriterion);
  const searchOptions = ref(searchModel.searchOptions);
  const aggregates = ref(searchModel.aggreagtes);
  const numericHeader = ref("");
  const aggregate = ref("Sum");
  const aggregateValue = ref(0);
  const searchCriteriaDialog = ref(false);

  const searchStore = defineSearchStore();
  const title = computed(() => (menu ? menu.title : "Not Set"));
  const headers = computed(() => (menu ? menu.headers : []));
  const data = computed(() => searchStore.data);
  const width = computed(() => {
    if (menu) {
      return menu.width;
    }
    return "700px";
  });

  const toFormatHeaders = computed(() => {
    if (headers)
      return headers.value.filter(
        (h) =>
          h.isNumeric === true || h.isDate === true || h.isDateTime === true
      );
    return [];
  });

  const numericHeaders = computed(() =>
    headers.value.filter((h) => h.isNumeric === true)
  );

  const column = computed(() => searchCriterion.value.column);

  const operationObj = computed(() => searchCriterion.value.operationObj);

  const isBetween = computed(() => {
    if (!operationObj.value) return false;
    return (
      operationObj.value === "BETWEEN" ||
      operationObj.value === "BETWEEN_INCLUSIVE"
    );
  });

  const showAggregate = computed(() => {
    if (numericHeader.value) {
      return true;
    }
    return false;
  });

  const showAggregateValue = computed(
    () => showAggregate.value && aggregate.value
  );

  const hasNumericHeaders = computed(() => {
    if (!numericHeaders.value) return false;
    return numericHeaders.value.length > 0;
  });

  const additionalFilters = computed(() => {
    if (searchOptions.value) {
      let searchCriteria = searchOptions.value.searchCriteria;
      if (searchCriteria.length > 0) {
        return searchCriteria.length - 1;
      }
    }

    return 0;
  });


  const currentItem = ref(null);
  const onRowContextmenu = async (event, data) => {
    event.preventDefault();
    console.log("Data", data);
    if (data) {
      mitems.value = Object.entries(data).map(([key, value]) => {
        return {
          id: key,
          value: value,
        };
      });

      currentItem.value = data.item;

      showMenu.value = false;
      menuX.value = event.clientX;
      menuY.value = event.clientY;
      await nextTick();
      showMenu.value = true;
      console.log("Selected Item is ", mitems.value);
      console.log("Current Item", currentItem.value);
    }
  };

  const filterOnlyCapsText = (value, search, item) => {
    console.log("Search Item: ", item);
    return (
      value != null &&
      search != null &&
      typeof value === "string" &&
      value.toString().toLocaleUpperCase().indexOf(search) !== -1
    );
  };

  const formatTableData = (header, item, value) => {
    return funcs.formatTableData(header, item, value);
  };

  const numericValues = (fieldName) => {
    return data.value.map((a) => a[fieldName]).map(Number);
  };

  const sum = (fieldName) => {
    if (!data.value) return 0;

    return data.value
      .map((a) => a[fieldName])
      .map(Number)
      .reduce((a, b) => a + b, 0);
  };

  const avg = (fieldName) => {
    // let sumu = sum(fieldName);
    return Math.ceil(sum(fieldName) / data.value.length);
  };

  const max = (fieldName) => {
    return Math.max(...numericValues(fieldName));
  };

  const min = (fieldName) => {
    return Math.min(...numericValues(fieldName));
  };

  const setAggregateValue = () => {
    let amount = 0;
    if (numericHeader.value) {
      switch (aggregate.value) {
        case "Sum":
          amount = sum(numericHeader.value);
          break;

        case "Avg":
          amount = avg(numericHeader.value);
          break;

        case "Min":
          amount = min(numericHeader.value);
          break;

        case "Max":
          amount = max(numericHeader.value);
          break;
      }

      aggregateValue.value = funcs.formatNumber(amount);
    }
  };

  const openSearchCriteriaDialog = () => {
    searchCriteriaDialog.value = true;
  };

  const closeSearchCriteriaDialog = () => {
    searchCriteriaDialog.value = false;
  };

  const searchCriteriaDialogDone = (searchOptions) => {
    // searchOptions.value = searchOptions;
    closeSearchCriteriaDialog();
    setSearchCriterion();
    searchData();
  };

  const setSearchCriterion = () => {
    let searchCriteria = searchOptions.value.searchCriteria;
    if (searchCriteria.length > 0) {
      searchCriterion.value = searchCriteria[0];
    } else {
      searchCriterion.value.column = null;
      searchCriterion.value.operationObj = null;
      searchCriterion.value.value = "";
      searchCriterion.value.value2 = "";
    }
  };

  const branchStore = defineBranchStore();

  const setBranchCriterion = () => {
    searchOptions.searchCriteria = [];
    let currentBranchCriterion = branchStore.getCurrentBranchCriterion;
    if (currentBranchCriterion) {
      searchOptions.value.searchCriteria.push(currentBranchCriterion);
    }
  };

  const searchData = () => {
    let searchCriteria = searchOptions.value.searchCriteria;

    if (
      searchCriterion.value.column &&
      searchCriterion.value &&
      searchCriteria.length === 0
    ) {
      console.log("Search Criterion", searchCriterion.value);
      searchCriteria.push(searchCriterion.value);
    }
    searchOptions.searchCriteria = searchCriteria;

    searchStore.selected = {
      path: menu.path,
      options: searchOptions.value,
    };
    searchStore.getSearchData({
      path: menu.path,
      options: searchOptions.value,
    });
  };

  const page = ref("");
  watch(page, (nv, ov) => {
    searchOptions.value.page = nv > 0 ? nv - 1 : 0;
    searchData();
  });

  watch(column, (newValue) => {
    if (newValue) {
      searchCriterion.value.key = newValue.key;
    }
  });

  watch(operationObj, (val) => {
    if (val) {
      searchCriterion.value.operation = val.value;
    }
  });

  // watch(selectedItem, (nv) => {
  //   console.log("New Value", nv);
  //   alert("Yes");
  //   emit("itemSelected", selectedItem, mitems);
  // });

  watch(aggregate, () => {
    setAggregateValue();
  });

  watch(numericHeader, () => {
    setAggregateValue();
  });

  watch(data, () => {
    setAggregateValue();
  });

  const editDialog = ref(false);
  const openEditDialog = () => {
  editDialog.value = true;

  };

  const closeEditDialog = () => editDialog.value = false;

  const getMenuClickOptions = (item) => {
    return { item: item, dialog: saveDialog.value, deleteDialog: true };
  };

  const deleteDialog = ref(false);

  const openDeleteDialog = () => {
    deleteDialog.value = true;
  };

  const deleteItemConfirm = () => deleteDialog.value = false;


  const closeDelete = () => {
    dialogDelete.value = false;
  };

  const mode = ref(0);
  const setMode = (v)=>{

    mode.value=v;}

    const buttonLabel = ref(constants.buttonTexts.save)
    const setButtonLabel = (text)=>buttonLabel.value = text;
  const contextMenuOption =  computed(()=>{
     return {
      item: currentItem.value,
      openEdit: openEditDialog,
      openDelete:openDeleteDialog,
      setMode: setMode,
      setButtonLabel:setButtonLabel

     }
  })



  const mounted = () => {
    setBranchCriterion();
    searchData();
    setSearchCriterion();
  };

  return {
    headers,
    data,
    title,
    width,
    page,
    isBetween,
    searchCriterion,
    onRowContextmenu,
    showMenu,
    menuX,
    menuY,
    formatTableData,
    aggregates,
    showAggregateValue,
    aggregateValue,
    searchCriteriaDialog,
    openSearchCriteriaDialog,
    closeSearchCriteriaDialog,
    searchCriteriaDialogDone,
    mounted,
    dialogDelete,
    deleteItemConfirm,
    closeDelete,
    searchData,
    toFormatHeaders,
    searchOptions,
    searchStore,
    searchOperations,
    searchOperators,
    search,
    column,
    additionalFilters,
    hasNumericHeaders,
    editDialog,openEditDialog, closeEditDialog,
    openDeleteDialog,
    contextMenuOption,
    currentItem,
    mode,
    setMode,
    buttonLabel
  };
}
