import funcs from "@/utils/funcs";


export default function defineListAmountCalOnAmount(model, list, listCol, sumCol, after){



     list = list||[];

    let totalAmount = 0;

    for (let lpc of list) {

      let amount = Math.ceil(lpc[listCol]);

      totalAmount += amount;
    }

    // model.amount = Number(totalAmount);
    model[sumCol] = Number(totalAmount);
    // model.amountWords = funcs.toWords(totalAmount);
    if(after) after(model);




  }

