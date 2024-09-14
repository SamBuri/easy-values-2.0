import constants from "@/utils/constants";
import { Exception } from "sass";
export default function searchMenuController(controller) {
  const save = (contextMenuOption) => {
    try {
      contextMenuOption.setButtonLabel(constants.buttonTexts.save);
      contextMenuOption.openEdit();
    } catch (e) {
      console.log("Error ", e);
    }
  };
  const edit = (contextMenuOption) => {
    try {
      controller.setData(contextMenuOption.item);
      contextMenuOption.setButtonLabel(constants.buttonTexts.update);
      contextMenuOption.openEdit();
    } catch (e) {
      console.log("Error ", e);
    }
  };

  const deleteItem = (contextMenuOption) => {
    contextMenuOption.openDelete();
  };

  const republish = (contextMenuOption) =>
    controller.republish(contextMenuOption.item.id);

  return { save, edit, deleteItem, republish };
}
