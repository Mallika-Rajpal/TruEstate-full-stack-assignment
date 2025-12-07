const axios = require("axios");
const csv = require("csv-parser");
const { Readable } = require("stream");

let salesData = [];

const CSV_URL =
  "https://github.com/Mallika-Rajpal/TruEstate-full-stack-assignment/releases/download/v1/sales.csv";

async function loadCSV() {
  console.log("📥 CSV Source:", CSV_URL);

  const response = await axios({
    url: CSV_URL,
    method: "GET",
    responseType: "stream",
  });

  console.log("⬇️ Streaming CSV from:", CSV_URL);

  return new Promise((resolve, reject) => {
    response.data
      .pipe(csv())
      .on("data", (row) => {
        salesData.push(row); // pushes ONE row at a time — memory safe
      })
      .on("end", () => {
        console.log(`✅ Loaded ${salesData.length} rows successfully`);
        resolve();
      })
      .on("error", (err) => {
        console.error("❌ CSV Streaming Error:", err);
        reject(err);
      });
  });
}

module.exports = { salesData, loadCSV };
