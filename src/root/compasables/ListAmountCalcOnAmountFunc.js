import funcs from "@/utils/funcs";


export default function defineListAmountCalOnAmount(model, list, after){



     list = list||[];

    let totalAmount = 0;

    for (let lpc of list) {

      let amount = Math.ceil(lpc.amount);

      totalAmount += amount;
    }

    model.amount = Number(totalAmount);
    model.totalAmount = Number(totalAmount);
    model.amountWords = funcs.toWords(totalAmount);
    if(after) after(model);




  }

