import { ref, computed,watch } from "vue";
import { defineRootStore } from "./RootStore";
import { useRoute } from "vue-router";
import constants from "@/utils/constants";
import rootOptions from "./RootOptions";


export default function rootController(  rawModel, options = rootOptions ) {

  const path = rawModel.path;
  const rules = rawModel.rules;
  const model = ref(rawModel.model);
  const rootStore = defineRootStore();

  const rootState = ref({
    id: '',
    valid: false,
    idValid: false,
    idRules: [(v) => !!v || "Please enter the Id"],
    buttonText: constants.buttonTexts.save,
    confirmEdit: false,
    showSearch: false,
    confirmDelete: false,
  });

  const props = (props)=>props;



  const clear = () => model.value.clear();

  const mode = ref(0);
  const setMode = (v)=>  mode.value=v;

  const setButtonText = (mode) => {
   if(props.buttonLable) { rootState.value.buttonLabel =props.buttonLabel; return;}
    rootState.value.buttonText =
      mode == 1
        ? constants.buttonTexts.update
        : mode == 2
        ? constants.buttonTexts.print
        : mode == 3
        ? constants.buttonTexts.done
        : constants.buttonTexts.save;
  };

  const route = useRoute();
  watch(
    () => route.params,
    (params) => {
      // mode.value = params.mode;
      rootState.value.showSearch = params.mode == 1;
      setButtonText(params.mode);
    },
    { immediate: true }
  );

  // watch(mode, (v)=>{
  //   if(v){setButtonText(v);
  //    };
  // }, {immediate:true})

  // const buttonText = computed(()=>{
  //     return  mode.value == 1
  //     ? constants.buttonTexts.update
  //     : mode.value == 2
  //     ? constants.buttonTexts.print
  //     : mode.value == 3
  //     ? constants.buttonTexts.done
  //     : constants.buttonTexts.save;
  // })

  // watch(mode, (value)=>setButtonText(value))



  const save = async () => {
    if(!rootState.value.valid) return;
    let res = await rootStore.post({ path: path, body: model.value });
    //  await nextTick();
    if (res.success) clear();
  };

  const update = async () => {
    if(!(rootState.value.valid && rootState.value.idValid)) return;
    await rootStore.put({
      path: `${path}/${model.value.id}`,
      body: model.value,
    });
  };

  const setData = (data) => model.value.copy(data);

  const search = async (e) => {
    e.preventDefault();
    if (!rootState.value.idValid) return;
    console.log("Path", `${path}/${rootState.value.id}`)
    let data = await rootStore.get(`${path}/${rootState.value.id}`);
    console.log("Returned data", data);
    if (data) setData(data);
  };

  const deleteData = async () => {
    let res = await rootStore.delete(`${path}/${rootState.value.id}`);
    if (res.success) {
      rootState.value.id = "";
      clear();
    }

    rootState.value.confirmDelete = false;
  };



  const isUpdate = computed(
    () => rootState.value.buttonText === constants.buttonTexts.update
  );
  const isPreview = computed(
    () => rootState.value.buttonText === constants.buttonTexts.preview
  );

  const showPrintCheck = computed(
    () => isPreview.value || options.showPrintPrompt
  );

  const editClicked = () => {
    if (!rootState.value.valid) return;

    if (rootState.value.buttonText === constants.buttonTexts.done) {
      emit("done");
      clear();
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
    props,
    path,
    rules,
    model,
    save,
    update,
    setData,
    clear,
    search,
    showEditConfirm,
    cancelEdit,
    editClicked,
    editConfirmOk,
    options,
    rootState,
    cancelDelete,
    deleteOk,
    deleteData,
    isUpdate,
    isPreview,
    setMode,
    setButtonText,

  };
}
