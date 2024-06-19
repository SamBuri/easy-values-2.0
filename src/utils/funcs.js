// var XLSX = require("xlsx");
import * as XLSX from 'xlsx/xlsx.mjs';
const funcs = {
    wordify(n) {
        var string = n.toString(), units, tens, scales, start, end, chunks, chunksLen, chunk, ints, i, word, words, and = '';

        /* Remove spaces and commas */
        string = string.replace(/[, ]/g, "");

        // if (n != parseFloat(string)) return 'not a number';

        /* Is number zero? */
        if (parseInt(string) === 0) {
            return 'zero';
        }

        /* Array of units as words */
        units = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve',
            'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

        /* Array of tens as words */
        tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

        /* Array of scales as words */
        scales = ['', 'thousand', 'million', 'billion', 'trillion', 'quadrillion', 'quintillion', 'sextillion',
            'septillion', 'octillion', 'nonillion', 'decillion', 'undecillion', 'duodecillion', 'tredecillion',
            'quatttuor-decillion', 'quindecillion', 'sexdecillion', 'septen-decillion', 'octodecillion', 'novemdecillion',
            'vigintillion', 'centillion'];

        /* Split user argument into 3 digit chunks from right to left */
        start = string.length;
        chunks = [];
        while (start > 0) {
            end = start;
            chunks.push(string.slice((start = Math.max(0, start - 3)), end));
        }
        /* Check if function has enough scale words to be able to stringify the user argument */
        chunksLen = chunks.length;
        if (chunksLen > scales.length) {
            return '';
        }
        /* Stringify each integer in each chunk */
        words = [];
        for (i = 0; i < chunksLen; i++) {

            chunk = parseInt(chunks[i]);

            if (chunk) {

                /* Split chunk into array of individual integers */
                ints = chunks[i].split('').reverse().map(parseFloat);

                /* If tens integer is 1, i.e. 10, then add 10 to units integer */
                if (ints[1] === 1) {
                    ints[0] += 10;
                }

                /* Add scale word if chunk is not zero and array item exists */
                if ((word = scales[i])) {
                    words.push(word);
                }

                /* Add unit word if array item exists */
                if ((word = units[ints[0]])) {
                    words.push(word);
                }

                /* Add tens word if array item exists */
                if ((word = tens[ints[1]])) {
                    words.push(word);
                }

                /* Add 'and' string after units or tens integer if: */
                if (ints[0] || ints[1]) {

                    /* Chunk has a hundreds integer or chunk is the first of multiple chunks */
                    if (ints[2] || !i && chunksLen) {
                        words.push(and);
                    }

                }

                /* Add hundreds word if array item exists */
                if ((word = units[ints[2]])) {
                    words.push(word + ' hundred');
                }

            }

        }

        return words.reverse().join(' ');

    },

    sum(data, fieldName) {
        if (!data) return 0;

        return parseFloat(data
            .filter(a => !a.isTotal)
            .map((a) => a[fieldName])
            .map(Number)
            .reduce((a, b) => a + b, 0).toFixed(2));

            // parseFloat(sum.toFixed(2))


    },

    getTotalRow(headers, data) {
        if (data.length < 1) { return null }
        let obj = { isTotal: true };


        for (let i = 0; i < headers.length; i++) {
            let h = headers[i];
            obj[h.value] = this.getTotalValue(h, data, i)
        }


        return obj
    },

    getTotalValue(h, data, index) {


        if (h.isNumeric) {
            return this.sum(data, h.value)
        }
        else {
            if (index === 0) {
                return "Total";

            } else {
                return "";
            }
        }

    },



    wordifyDecimals(n) {
        let y = n.split('');
        let words = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
        let str = '';

        for (let n in y) {
            str += words[y[n]] + " ";
        }
        // for (var i = x + 1; i < y; i++) str += words[i] + ' ';
        return str.trim();

    },

    toWords(n) {
        var nums = n.toString().split('.')
        var whole = this.wordify(nums[0])
        if (nums.length == 2) {
            var fraction = this.wordifyDecimals(nums[1])
            return whole + ' point ' + fraction;
        } else {
            return whole;
        }
    },

    addDays(date, days) {
        var result = new Date(date);
        result.setDate(result.getDate() + days);
        return result;
    },

    formatDate(date) {
        date = new Date(date);
        let year = date.getFullYear();
        let month = (1 + date.getMonth()).toString().padStart(2, '0');
        let day = date.getDate().toString().padStart(2, '0');

        return year + '-' + month + '-' + day;
    },

    hasTheSameDate(date, date1) {
        date = new Date(date);
        date1 = new Date(date1);

        let day = date.getDate();


        let day1 = date1.getDate();

        return day === day1

    },

    formatData(header, value) {
        let isNumeric = header.isNumeric
        let isDate = header.isDate
        let isDateTime = header.isDateTime

        if (isNumeric) {
            return this.formatNumber(value);
        }
        else if (isDate) {
            return this.formatDateToString(value);
        } else if (isDateTime) {
            return this.formatDateTimeToString(value);
        }

        else {
            return value;
        }
    },

    formatTableData(header, object, value) {
        return this.formatData(header, this.getValueFromObjectKey(object, value))

    },

    today() {
        return this.formatDate(new Date());
    },

    formatDateTimeToString(date) {
        if (!date) return date;
        if (date === '' || date === 'Total' || date === 'TOTAL') {
            return date;
        }
        var options = { weekday: 'short', year: 'numeric', month: 'long', day: 'numeric', hour: "numeric", minute: "numeric", second: "numeric" };
        return new Date(date).toLocaleString("en-US", options)
    },
    formatDateToString(date) {
        if (!date) return date;

        if (date === '' || date === 'Total' || date === 'TOTAL') {
            return date;
        }
        var options = { weekday: 'short', year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(date).toLocaleString("en-US", options)
    },

    formatNumber(x) {
        if(x===0) return 0;
        if (x){
            return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
        }
        else return x;
    },



    defortNumber(x) {
        x.toString().replaceAll(",", "");
    },

    // formatNumber(num){
    //     Number(num).toLocaleString()
    // },

    async createFileFromBytes(fileData) {

        if (fileData) {
            let fileUrl = "data:image/png;base64," + fileData;
            const getUrlExtension = (url) => {
                return url.split(/[#?]/)[0].split(".").pop().trim();
            };
            var imgExt = getUrlExtension(fileUrl);

            const response = await fetch(fileUrl);
            const blob = await response.blob();
            const file = new File([blob], "img." + imgExt, {
                type: blob.type,
            });
            console.log("File: ", file);
            return file;

        } else {
            return null;
        }
    },

    createPngFileFromBytes(fileData) {

        if (fileData) {
            // let fileUrl = "data:image/png;base64," + fileData;
            // const getUrlExtension = (url) => {
            //     return url.split(/[#?]/)[0].split(".").pop().trim();
            // };
            // var imgExt = getUrlExtension(fileUrl);

            var blob = new Blob([fileData], { type: "image/png" });

            // const response = await fetch(fileUrl);
            // const blob = await response.blob();
            const file = new File([blob], "img." + 'png', {
                type: blob.type,
            });
            console.log("File: ", file);
            return file;

        } else {
            return null;
        }
    },

    getRowsColsFromRows(rows) {
        let cols = [];

        for (let row of rows) {
            const keys = Object.keys(row);

            if (keys.length > cols.length) {
                cols = keys.map((key) => {
                    return {
                        text: key,
                        value: key,

                        // label:  XLSX.utils.encode_col(+key),
                        // display: display(key),
                    };
                });
            }
        }

        return { rows: rows, cols: cols };
    },

    getFileData(sheetData) {
        let data = [];
        let file = sheetData.file;
        if (file) {
            const reader = new FileReader();

            reader.onload = (re) => {
                /* Parse data */
                const bstr = re.target.result;
                const wb = XLSX.read(bstr, { type: "binary" });
                const ws = wb.Sheets[sheetData.sheetName];
                /* Convert array of arrays */

                let data1 = XLSX.utils.sheet_to_json(ws, { header: sheetData.header });
                data1.forEach(dt => data.push(dt))

            };


            reader.readAsBinaryString(file);
        }
        console.log("The populated data: ", data)

        return data;
    },

    replaceIfStartsWith(toReplace, replaceWith) {
        if (toReplace) {
            if (toReplace.toString().toLowerCase().startsWith(replaceWith.toString().toLowerCase())) {
                return replaceWith;
            }
        }
        return toReplace;
    },

    replaceCondition(condition, toReplace, replaceWith) {
        if (condition) {
            return replaceWith;
        }
        return toReplace;
    },

    exportExcel(options) {
        let columns = options.columns;
        let data = options.data;
        let passedFileName = options.fileName;
        let fileType = options.fileType;
        let sheetName = options.sheetName;
        let createXLSLFormatObj = [];
        let newXlsHeader = [];
        // let vm = this;
        if (columns.length === 0) {
            console.log("Add columns!");
            return;
        }
        if (data.length === 0) {
            console.log("Add data!");
            return;
        }

        columns.map(column => {

            newXlsHeader.push(column.title);
        });

        createXLSLFormatObj.push(newXlsHeader);
        data.map(value => {
            let innerRowData = [];
            columns.map(val => {
                let fieldValue = value[val.key];

                fieldValue = this.getValueFromObjectKey(value, val.key);


                innerRowData.push(this.formatData(val, fieldValue))
            });
            createXLSLFormatObj.push(innerRowData);
        });

        let fileName = passedFileName + "." + fileType;

        let ws_name = sheetName;

        let wb = XLSX.utils.book_new(),
            ws = XLSX.utils.aoa_to_sheet(createXLSLFormatObj);
        XLSX.utils.book_append_sheet(wb, ws, ws_name);
        XLSX.writeFile(wb, fileName);
    },



    getValueFromObjectKey(object, string) {
        let a = string.split('.');
        let length = a.length
        if (length === 1) {
            return object[string]
        }
        else if (length === 2) {
            let step0 = a[0];
            let step0Obj = object[step0];
           if (step0Obj == null) {
                return "";
            }
            let step1 = a[1]
             let step1Obj = step0Obj[step1];
             return step1Obj
        }

        else if (length === 3) {
            let step0 = a[0];
            let step0Obj = object[step0];
           if (step0Obj == null) {
                return "";
            }
            let step1 = a[1]

            let step1Obj = step0Obj[step1];
            if (step1Obj == null) {
                return "";
            }
            let step2 = a[2]
           let step2Obj = step1Obj[step2];
            return step2Obj
        }

        else if (length === 4) {
            let step0 = a[0];
            let step0Obj = object[step0];
            if (step0Obj == null) {
                return "";
            }
            let step1 = a[1]

            let step1Obj = step0Obj[step1];
            if (step1Obj == null) {
                return "";
            }
            let step2 = a[2]
            let step2Obj = step1Obj[step2];

            if (step2Obj == null) {
                return "";
            }
            let step3 = a[3]
            let step3Obj = step2Obj[step3];
            return step3Obj
        }

        else if (length === 5) {
            let step0 = a[0];
            let step0Obj = object[step0];
            if (step0Obj == null) {
                return "";
            }
            let step1 = a[1]
            let step1Obj = step0Obj[step1];

            if (step1Obj == null) {
                return "";
            }
            let step2 = a[2]
            let step2Obj = step1Obj[step2];

           if (step2Obj == null) {
                return "";
            }
            let step3 = a[3]
            let step3Obj = step2Obj[step3];


            if (step3Obj == null) {
                return "";
            }
            let step4 = a[4]
            let step4Obj = step3Obj[step4];
            return step4Obj
        }



        return "";


    },



}


export default funcs;
