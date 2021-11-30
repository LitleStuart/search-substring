const { bruteforce } = require("./bruteforce");

function sumHashes(inStr, findStr) {
  const result = { collision: 0, index: [] };
  let findHash = 0;
  let currentHash = 0;
  for (let i = 0; i < findStr.length; i++) {
    findHash += findStr.charCodeAt(i);
    currentHash += inStr.charCodeAt(i);
  }
  if (findHash === currentHash) {
    result.collision++;
    let temp = bruteforce(inStr.substr(0, findStr.length), findStr);
    if (temp[0] == 0) {
      result.index.push(0);
    }
  }
  for (let i = 1; i <= inStr.length - findStr.length; i++) {
    currentHash +=
      inStr.charCodeAt(i + findStr.length - 1) - inStr.charCodeAt(i - 1);
    if (findHash === currentHash) {
      result.collision++;
      let temp = bruteforce(inStr.substr(i, findStr.length), findStr);
      if (temp[0] == 0) {
        result.index.push(i);
      }
    }
  }
  return result;
}

exports.sumHashes = sumHashes;
