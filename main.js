const { performance } = require("perf_hooks");

const { bruteforce } = require("./bruteforce");
const { sumHashes } = require("./sumHashes");
const { sumSqrHashes } = require("./sumSqrHashes");
const { rabinKarp } = require("./rabinKarp");

const fs = require("fs");
const countArgs = process.argv.length;
const searchMode = process.argv[countArgs - 3];
const inStr = fs.readFileSync(process.argv[countArgs - 2], "utf-8");
const findStr = fs.readFileSync(process.argv[countArgs - 1], "utf-8");

function searchSubstring(arg) {
  if (arg === "b")
    return { collision: undefined, index: bruteforce(inStr, findStr) };
  if (arg === "h1") return sumHashes(inStr, findStr);
  if (arg === "h2") return sumSqrHashes(inStr, findStr);
  if (arg === "h3") return rabinKarp(inStr, findStr);
}

const t0 = performance.now();
const result = searchSubstring(searchMode);
const t1 = performance.now();

let maxPos = result.index.length;
for (const key of process.argv) {
  if (key === "-n") {
    maxPos = process.argv[process.argv.indexOf("-n") + 1];
  }
}

console.log(`Подстрока была найдена на индексах:`);
for (let i = 0; i < maxPos; i++) {
  process.stdout.write(`${result.index[i]}, `);
}
console.log();

for (let i = 2; i < countArgs - 3; i++) {
  const arg = process.argv[i];
  switch (arg) {
    case "-c":
      console.log(`Число коллизий: ${result.collision - result.index.length}`);
      break;
    case "-t":
      console.log(`Время работы: ${t1 - t0} мс`);
      break;
  }
}
