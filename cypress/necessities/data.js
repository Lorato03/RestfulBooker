//import data from csv file
import { readFileSync, writeFileSync } from "fs";
import { parse } from "papaparse";

try {
  const csvFile = readFileSync("./cypress/restBooker.csv", "utf8");
  const csvResults = parse(csvFile, {
    header: true,
    complete: csvData => csvData.data
  }).data;
  writeFileSync(
    "./cypress/fixtures/restBookerFromCSV.json",
    JSON.stringify(csvResults, null, 4),
    "utf-8"
  );
} catch (e) {
  throw Error(e);
}


  
//C:\Users\Lerato\Documents\GitHub\RestfulBooker\cypress\restBooker.csv
