function cubeNumber(number) {
  if (typeof number !== "number") {
    return "please provide a number";
  } else {
    return number * number * number;
  }
}
// console.log(cubeNumber(3));

// -----------------------
function matchFinder(string1, string2) {
  if (typeof string1 !== "string" || typeof string2 !== "string") {
    return "please provide a (string)";
  } else {
    return string1.includes(string2);
  }
}
// console.log(matchFinder('peter parker', 'pet'))

function sortMaker(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== "numbers") {
      return "Invalid Input";
    }
  }

  if (arr[0] === arr[1]) {
    return "equal";
  } 
  else {
    const maker = arr.sort((a, b) => a - b);
    return maker;
  }
}
console.log(sortMaker([4, -2]));

// else{
//     const result = (((numbers * 3 ) + 10 ) / 2)-5
//     return result;
// }
