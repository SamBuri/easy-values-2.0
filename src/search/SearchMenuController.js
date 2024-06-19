import constants from "@/utils/constants";
import searchController from "./SearchController";
export default function searchMenuController(controller){
  // const {openEditDialog, openDeleteDialog} = searchController()
    const save = (contextMenuOption)=>{
    //  controller.setMode(0);
     contextMenuOption.setButtonLabel(constants.buttonTexts.save);
     contextMenuOption.openEdit();
    }
    const edit=(contextMenuOption)=>{
      console.log("The passed item is", contextMenuOption)
     console.log("Controller", controller)
      // controller.setMode(1);
      // controller.setButtonText(1);
      controller.setData(contextMenuOption.item)
      contextMenuOption.setButtonLabel(constants.buttonTexts.update);
      // contextMenuOption.setMode(1);
      contextMenuOption.openEdit();
    }

    const deleteItem=(contextMenuOption )=>{
      contextMenuOption.openDelete();

    }

    const republish = (contextMenuOption)=>controller.republish(contextMenuOption.item.id);

    return {save, edit, deleteItem, republish};
}
