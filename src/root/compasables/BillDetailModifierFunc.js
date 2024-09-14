import funcs from "@/utils/funcs";

export default function defineBillDetailsModifierFunc(model, list,baseAmount, after){


     baseAmount =baseAmount||0;
     list = list||[];

    let totalAmount = 0;

    const percentageMethod = "Percentage";
    for (let lpc of list) {
       let unitPrice = 0;

      let charge = Number(lpc.charge);
      if (lpc.determiningMethod === percentageMethod) {
        unitPrice = Math.ceil(charge * (baseAmount * 0.01));

      } else {
        unitPrice = charge;
      }

      lpc.unitPrice = unitPrice;
      let quantity = Number(lpc.quantity);
      let amount = Math.ceil(unitPrice * quantity);
      lpc.amount = amount;
      totalAmount += amount;
    }

    model.amount = Number(totalAmount);
    model.totalAmount = Number(totalAmount);
    model.amountWords = funcs.toWords(totalAmount);
    if(after) after(model);




  }

