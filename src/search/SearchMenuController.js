import constants from "@/utils/constants";
export default function searchMenuController(controller) {
 const save = (contextMenuOption) => {

    contextMenuOption.setButtonLabel(constants.buttonTexts.save);
    contextMenuOption.openEdit();
  };
  const edit = (contextMenuOption) => {
    controller.setData(contextMenuOption.item);
    contextMenuOption.setButtonLabel(constants.buttonTexts.update);
    contextMenuOption.openEdit();
  };

  const deleteItem = (contextMenuOption) => {
    contextMenuOption.openDelete();
  };

  const republish = (contextMenuOption) =>
    controller.republish(contextMenuOption.item.id);

  return { save, edit, deleteItem, republish };
}
