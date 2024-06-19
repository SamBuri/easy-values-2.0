import httmMethods from '../../utils/HttpMethods'
// import constants from '../../utils/constants';

import funcs from "../../utils/funcs";
import * as XLSX from 'xlsx/xlsx.mjs';
export default {
    namespaced: true, state: {
        data: [],
        loading: false,
        saving: false,


    }, mutations: {

        data(state, data) {
            state.data = data;
        },

        loading(state, loading) {
            state.loading = loading;
        },

        saving(state, saving) {
            state.saving = saving;
        },



    },
    actions: {
        getData(context, sheetData) {
            console.log("Loading file data");
            context.commit("data", [])
            context.commit("loading", true)
            try {
                let file = sheetData.file;
                if (file) {
                    const reader = new FileReader();
                    reader.onload = (re) => {
                        /* Parse data */
                        const bstr = re.target.result;
                        const wb = XLSX.read(bstr, { type: "binary" });
                        const ws = wb.Sheets[sheetData.sheetName];
                        /* Convert array of arrays */
                        let data = XLSX.utils.sheet_to_json(ws, { header: sheetData.header, raw: false, dateNF: 'yyyy-mm-dd' });

                        let tranId = 0;
                        let bill= "Bill";
                        let interest= "Interest";
                        let body = data.map((row) => {
                            return {
                                tranId: (tranId += 1),
                                profileId: row.profileId,
                                tranDate: funcs.formatDate(row.tranDate),
                                tranType: funcs.replaceIfStartsWith(row.tranType, bill),
                                itemName: funcs.replaceIfStartsWith(row.itemName, interest),
                                amount: row.amount
                            };
                        });
                        context.commit("data", body)
                    };
                    reader.readAsBinaryString(file);
                }
            } catch (error) {
                console.log("Error Loading file: " + error)
            }
            finally {
                context.commit("loading", false)
            }
        },

        post(context, request) {
            console.log("Request", request);
            context.commit("results", null, { root: true });
            context.commit("loading", true, { root: true });
            // setTimeout(() => {
            // }, 2000)

            httmMethods.post(request.path, request.body)
                .then((response) => {
                    var data = response.data;

                    console.log('Response', response)

                    context.commit("data", data.failedTrans)
                    context.commit("results", { success: true, message: data.summary, show: true }, { root: true });
                    // context.commit("loading", false, { root: true });


                })
                .catch((error) => {

                    console.log("There was an error!", error);
                    // context.commit("loading", false, { root: true });
                    console.log("Loading", context.state.loading);
                    context.commit("results", { success: false, message: error, show: true }, { root: true });
                }).finally(() => {
                    context.commit("loading", false),  { root: true };
                });

        },






    },
}
