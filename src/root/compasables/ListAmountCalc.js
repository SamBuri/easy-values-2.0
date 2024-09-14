import funcs from "@/utils/funcs";

export default function defineListAmountCalc(model, list,col, after){



     list = list||[];

    let totalAmount = 0;

    for (let lpc of list) {


      lpc.unitCol = lpc[col];
      let quantity = Number(lpc.quantity);
      let amount = Math.ceil(unitCol * quantity);
      lpc.amount = amount;
      totalAmount += amount;
    }

    model.amount = Number(totalAmount);
    model.totalAmount = Number(totalAmount);
    model.amountWords = funcs.toWords(totalAmount);
    if(after) after(model);




  }

