import { watch } from "vue";
import loanApplicationController from "@/loan/loanapplication/LoanApplicationController";
export default function loanApplicationSelected(prop, model, after, callBack){



  const defaultFunction=(loanApp)=>{

        model.loanProductName = "";
        model.amount = "";
        model.collateralCategory = "";
        model.collateralDesc = "";
        model.estimatedCollateralValue = "";
        model.loanProduct = null;
        model.loanProductName = "";
        model.appliedForAmount="";
        model. approvedAmount = "";


        if (loanApp) {

          model.amount = loanApp.amount;
          model.collateralCategory = loanApp.collateralCategory;
          model.collateralDesc = loanApp.collateralDesc;
          model.estimatedCollateralValue = loanApp.estimatedCollateralValue
          model. loanProduct = loanApp.loanProduct;
          model.loanProductName = loanApp.loanProduct.productName;
          model.appliedForAmount = loanApp.amount;
          model.approvedAmount = loanApp.approvedAmount;
          if(after) after(model);
        }
      }


    const lapplicationController =  loanApplicationController();
  watch(prop,
    async (newValue) => {
      const loanApp = await lapplicationController.getData(newValue);
      if(callBack) callBack(loanApp);
      else defaultFunction(loanApp)
      model.loanApp = loanApp;

    }
  );

  return model;

}
