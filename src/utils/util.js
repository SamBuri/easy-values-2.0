export const groupBySum = (items, groupByProp, sumProp) => {
    var groups = new Map();
    for (const item of items) {
      if (item[groupByProp] && item[sumProp]) {
        const groupBy = item[groupByProp];
        if (groups.has(groupBy)) {
          const currentValue = groups.get(groupBy);
          groups.set(groupBy, currentValue + item[sumProp]);
        } else {
          groups.set(groupBy, item[sumProp]);
        }
      }
    }
    const sums = [];
    for (const [key, value] of groups) {
      sums.push({
        [groupByProp]: key,
        [sumProp]: value
      });
    }
    return sums;
  };

export const withCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const columnMappings = {
    "First Name": "firtName",
    "Last Name": "lastName",
    "Phone No": "phoneNo",
    "Guarantor": "guarantor",
   
}

const objectToArray = (dataObject) => {
    return Object.keys(dataObject).map(idx => dataObject[idx]);
}

const extractColumns = (columnsObject) => {
    const columns = objectToArray(columnsObject);
    const columnNames = columns.map(obj => columnMappings[obj.value]);
    return columnNames;
}

// export const extractSheetData = (excelData) => {
//     const rawData = JSON.parse(JSON.stringify(excelData));
//     const sheet = rawData.sheets[Object.keys(rawData.sheets)[rawData.activeSheetIndex]];
//     const data = objectToArray(sheet.data.dataTable);
//     // since we're expecting column names as a frozen first row, let's extract them
//     // and map them back to our data property names so we'll be able to reflect the new
//     // data back to the Vuex store.
//     //console.dir(columnObject);
//     const columnNames = extractColumns(data.shift());
//     const newSheetData = [];

//     for (const row of data) {
//         const rowData = {};
//         const rowArray = objectToArray(row);
//         rowArray.forEach((val, idx) => {
//             rowData[columnNames[idx]] = val.value;
//         });
//         newSheetData.push(rowData);
//     }

//     return newSheetData;
// }


export const extractSheetData = (data) => {
  // const rawData = JSON.parse(JSON.stringify(excelData));
  // const sheet = rawData.sheets[Object.keys(rawData.sheets)[rawData.activeSheetIndex]];
  // const data = objectToArray(sheet.data.dataTable);
  // since we're expecting column names as a frozen first row, let's extract them
  // and map them back to our data property names so we'll be able to reflect the new
  // data back to the Vuex store.
  //console.dir(columnObject);
  //  jdata = JSON.parse(JSON.stringify(jdata));
  // const sheet = jdata.sheets[Object.keys(jdata.sheets)[jdata.activeSheetIndex]];
  // const data = objectToArray(sheet.data.dataTable);
  const columnNames = extractColumns(data[0]);
  const newSheetData = [];

  for (const row of data) {
      const rowData = {};
      const rowArray = objectToArray(row);
      rowArray.forEach((val, idx) => {
          rowData[columnNames[idx]] = val.value;
      });
      newSheetData.push(rowData);
  }

  return newSheetData;
}