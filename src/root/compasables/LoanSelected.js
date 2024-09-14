import { watch } from "vue";
import loanController from "@/loan/loan/LoanController";
export default function loanSelected(prop, model, after, callBack){



  const defaultFunction=(loan)=>{

        model.profileId = "";
        model.name = "";
        model.fullName = "";
        model.balance = "";
        model.loanStatus = "";
        model.loanApplication = null;



        if (loan) {


          model.balance = loan.balance;
          model.loanStatus =loan.loanStatus;
          let loanApp = loan.loanApplication
          if(loanApp){
          model.name = loanApp.name;
          model.fullName = loanApp.name;
          model.profileId = loanApp.applicantId;
          }
          if(after) after(model);
        }
      }


    const lController =  loanController();
  watch(prop,
    async (newValue) => {
      const loan = await lController.getData(newValue);
      if(callBack) callBack(loan);
      else defaultFunction(loan)
      model.loan = loan;

    }
  );

  return model;

}
