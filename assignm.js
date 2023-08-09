function cubeNumber(number) {
  if (typeof number !== "number") {
    return "provide a number";
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
  if (arr[0] === arr[1]) {
    return "equal";
  } else {
    if (arr[0] > 0 && arr[1] > 0) {
      if (arr[1] > arr[0]) {
        make = arr[0];
        arr[0] = arr[1];
        arr[1] = make;
      }
      return arr;
    } else {
      return "Invalid Input";
    }
  }
}

function findAddress(obj) {
  let adds = "";
  if ("street" in obj) {
    adds += obj.street;
  } else {
    adds += "__";
  }
  adds += ",";
  if ("house" in obj) {
    adds += obj.house;
  } else {
    adds += "__";
  }
  adds += ",";
  if ("society" in obj) {
    adds += obj.society;
  } else {
    adds += "__";
  }
  return adds;
}

function canPay(changeArray, totalDue) {
  if (!Array.isArray(changeArray || changeArray.length === 0)) {
    return true;
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
