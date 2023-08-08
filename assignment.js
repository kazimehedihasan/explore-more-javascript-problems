function cubeNumber(number) {
  if (typeof number !== "number") {
    return "please provide a number";
  } else {
    const name = number * number * number;
    return name;
  }
}

function matchFinder(string1, string2) {
  if (typeof string1 !== "string" || typeof string2 !== "string") {
    return "please provide a (string)";
  } else {
    const names = string1.includes(string2);
    return names;
  }
}

function sortMaker(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== "number") {
      return "Invalid Input";
    }
  }
  if (arr[0] === arr[1]) {
    return "equal";
  } else {
    const maker = arr.slice().sort((a, b) => a - b);
    return maker;
  }
}


function findAddress(obj) {
  if (Object.keys(obj).length === 0) {
    return "";
  }
  let fine = "";
  for (const kye in obj) {
    const value = obj[kye] || "---";
    fine += value;
  }
  const addres = fine.slice(0, -1);
  return addres;
}


function canPay(changeArray, totalDue) {
  if (!Array.isArray(changeArray || changeArray.length === 0)) {
    return "this is a array";
  }
  let total = 0;
  for (const due of changeArray) {
    if (typeof due !== "number") {
      return false;
    } else {
      total += due;
    }
  }
  const can = total >= totalDue;
  return can;
}

