'use strict';
const excelToJson = require('convert-excel-to-json');
 
const result = excelToJson({
    sourceFile: 'excel.xlsx',
    header:{
        rows: 1
    },
    sheets: ['Plan1'],
    columnToKey: {
        '*': '{{columnHeader}}'
    }
});

module.exports = result