const fs = require("fs");
const path = require("path");
const csv = require("csv-parser");
const { normalizeRow } = require("./normalizeRow");

let SALES = [];

/**
 * Loads the CSV dataset into memory and normalizes each row.
 * Adjust header names in normalizeRow.js if your CSV differs.
 */
function loadCSV() {
  return new Promise((resolve, reject) => {
    const filePath = "/Users/mallika/truestate-data/sales.csv";

    const temp = [];

    fs.createReadStream(filePath)
      .pipe(csv())
      .on("data", (rawRow) => {
        const row = normalizeRow(rawRow);
        temp.push(row);
      })
      .on("end", () => {
        SALES = temp;
        console.log(`📊 Loaded ${SALES.length} sales records`);
        resolve(SALES);
      })
      .on("error", (err) => {
        reject(err);
      });
  });
}

module.exports = {
  loadCSV,
  getSalesData: () => SALES
};
