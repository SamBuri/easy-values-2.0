import { ref, computed, watch, onMounted } from "vue";
import { defineRootStore } from "./RootStore";
import { useAuthStore } from "@/store/authstore";
import { defineTenantStore } from "@/organisation/tenant/TenantStore";
import printPDF from "@/utils/PrintPDF";
import { useRoute } from "vue-router";
import constants from "@/utils/constants";
import rootOptions from "./RootOptions";


export default function rootController(rawModel, rawOptions = rootOptions, hooks = {}) {
  const path = rawModel.path;
  const rules = rawModel.rules;

  const model = ref(rawModel.model);
  const rootStore = defineRootStore();
  const authStore = useAuthStore();
  const tenantStore = defineTenantStore();
  const props = ref(null)

  const httpStrategy = async () => {
    let strategy = rawModel.httpStrategy;
    if (!strategy) return null;
    return await strategy();
  }


  const rootState = ref({
    id: "",
    valid: false,
    idValid: false,
    idRules: [(v) => !!v || "Please enter the Id"],
    buttonText: constants.buttonTexts.save,
    confirmEdit: false,
    showSearch: false,
    confirmDelete: false,
    printData: false,
  });

  const options = ref(rawOptions || rootOptions);

  const setProps = (props) => {
      props.value = props;
  }


  const clear = () => {console.log("Clearing");model.value.clear();}

  const setButtonText = (text) => {
    rootState.value.buttonText = text;
  };

  const route = useRoute();
  watch(
    () => route.params,
    (params) => {
     

      rootState.value.showSearch = params.mode == 1 || params.mode == 2;
      const mode = params.mode;
      let text = mode == 1
        ? constants.buttonTexts.update
        : mode == 2
          ? constants.buttonTexts.print
          : mode == 3
            ? constants.buttonTexts.done
            : constants.buttonTexts.save;
      setButtonText(text);
      // if(text===constants.buttonTexts.save && !props.value?.retain) {
      //   alert("Clearing at Setting Button Text")
      //   console.log(text, constants.buttonTexts.save);
      // clear()
      // }

    },
    { immediate: true }
  );

  const print = async () => printPDF(model.value.printOptions());

  const body = () => {
    if (model.value.getFormData) return model.value.getFormData();
    return model.value;
  }

  const afterSave = async (res) => {
    if (hooks.afterSave) {
      hooks.afterSave(res);
    }
    return true;
  };

  const save = async () => {

    if (!rootState.value.valid) return;

    if( hooks.save) {
      hooks.save(model.value);
      return;
    }

    console.log("Strategy", await httpStrategy())

    console.log("Model ", model.value)
    if (model.value.modify) model.value.modify();
    let res = await rootStore.post({ path: path, body: body(), httpStrategy: await httpStrategy(), });
    await afterSave(res);
    if (res.success) {
      if (rootState.value.printData) await print();
      clear();
    }
  };


  const afterUpdate = (res, model) => { 
    if( hooks.afterUpdate) {
      hooks.afterUpdate(res, model);
    }
  };

  const update = async () => {
    if (hooks.update) {
      hooks.update();
      return;
    }
    if (!rootState.value.valid) return;
    if (model.value.modify) model.value.modify();
    if (model.value.modifyToUpdate) model.value.modifyToUpdate();
    if(hooks.preUpdate) hooks.preUpdate(model.value);
    let res = await rootStore.put({
      path: `${path}/${model.value.id}`,
      body: body(),
      httpStrategy: await httpStrategy(),
    });
    afterUpdate(res, model.value);
  };

  const setData = (data) => model.value.copy(data);
  // const setData = (data) => rawModel.model.copy(data);

  const getData = async (id) => {
    if (!id) return null;
    return rootStore.get(`${path}/${id}`, await httpStrategy());
  }

  const setSearchedData = async () => {
    console.log("Path", `${path}/${rootState.value.id}`);
    // let data = await getData(`${rootState.value.id}`, await httpStrategy());
    let data = await getData(`${rootState.value.id}`);
    console.log("Returned data", data);
    if (data) setData(data);
  };

  const search = async (e) => {
    if (e.preventDefault) {
      console.log("Preventing default");
      e.preventDefault();
    }
    if (!rootState.value.idValid) return;
    setSearchedData();

  };

  const republish = async (id) => {
    rootStore.republish(path, id);
  }

  const deleteData = async () => {
    let res = await rootStore.delete(`${path}/${rootState.value.id}`, await httpStrategy());
    if (res.success) {
      rootState.value.id = "";
      clear();
    }

    rootState.value.confirmDelete = false;
  };

  const isSave = computed(
    () => rootState.value.buttonText === constants.buttonTexts.save
  );

  const isUpdate = computed(
    () => rootState.value.buttonText === constants.buttonTexts.update
  );
  const isPreview = computed(
    () => rootState.value.buttonText === constants.buttonTexts.preview
  );

  const showPrintCheck = computed(
    () => isPreview.value || options.value.showPrintPrompt
  );

  const editClicked = () => {
    if (!rootState.value.valid) return;

    if (rootState.value.buttonText === constants.buttonTexts.done) {
      return;
      // clear();
    } else if (rootState.value.buttonText === constants.buttonTexts.print) {
      print();
    } else {
      rootState.value.confirmEdit = true;
    }
  };

  const showEditConfirm = () => {
    rootState.value.confirmEdit = true;
  };

  const editConfirmOk = () => {
    if (rootState.value.buttonText === constants.buttonTexts.update) {
      update();
    } else {
      save();
    }
    rootState.value.confirmEdit = false;
  };

  const cancelEdit = () => {
    rootState.value.confirmEdit = false;
  };

  const deleteOk = () => {
    deleteData();
    rootState.confirmDelete.value = false;
  };

  const cancelDelete = () => {
    rootState.confirmDelete = false;
  };


  return {
    path,
    rules,
    model,
    authStore,
    tenantStore,
    rawModel,
    save,
    afterSave,
    update,
    afterUpdate,
    setData,
    republish,
    print,
    clear,
    setSearchedData,
    getData,
    search,
    showEditConfirm,
    cancelEdit,
    editClicked,
    editConfirmOk,
    rawOptions,
    options,
    rootState,
    cancelDelete,
    deleteOk,
    deleteData,
    isSave,
    isUpdate,
    isPreview,
    setButtonText,
    setProps,
  };
}
