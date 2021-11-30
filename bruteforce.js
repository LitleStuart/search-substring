function bruteforce(inStr, findStr) {
  const result = [];

  for (let i = 0; i <= inStr.length - findStr.length; i++) {
    let exist = true;
    for (let j = 0; j < findStr.length; j++) {
      if (inStr[i + j] != findStr[j]) {
        exist = false;
        break;
      }
    }
    if (exist) result.push(i);
  }

  return result;
}

exports.bruteforce = bruteforce;
