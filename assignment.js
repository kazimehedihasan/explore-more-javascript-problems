// // function cubeNumber(number) {
// //   if (typeof number !== "number") {
// //     return "provide a number";
// //   } else {
// //     const name = number * number * number;
// //     return name;
// //   }
// // }
// // // console.log(cubeNumber(3))

// // function matchFinder(string1, string2) {
// //   if (typeof string1 !== "string" || typeof string2 !== "string") {
// //     return "please provide a (string)";
// //   } else {
// //     const names = string1.includes(string2);
// //     return names;
// //   }
// // }
// // // console.log(matchFinder('Peter Parker','Pen'))

// // function sortMaker(arr) {
// //     if(arr[0] === arr [1]){
// //         return "equal";
// //     }
// //     else{
// //         if(arr[0] > 0 && arr[1] > 0){
// //             if(arr[1] > arr[0]){
// //                 make = arr[0];
// //                 arr[0] = arr[1];
// //                 arr[1] = make;
// //             }
// //             return arr;
// //         }
// //         else{
// //             return "Invalid Input";
// //         }
// //     }
// // }
// // console.log(sortMaker([1,2]));

// // function findAddress(obj) {
// //   if (Object.keys(obj).length === 0) {
// //     return "";
// //   }
// //   let fine = "";
// //   for (const kye in obj) {
// //     const value = obj[kye] || "--";
// //     fine += value;
// //   }
// //   const addres = fine.slice(0, -1);
// //   return addres;
// // }
// // console.log(findAddress({street:10,house:'15A',society:'Earth Perfect'}))

// // function canPay(changeArray, totalDue) {
// //   if (!Array.isArray(changeArray || changeArray.length === 0)) {
// //     return true;
// //   }
// //   let total = 0;
// //   for (const due of changeArray) {
// //     if (typeof due !== "number") {
// //       return false;
// //     } else {
// //       total += due;
// //     }
// //   }
// //   const can = total >= totalDue;
// //   return can;
// // }

// function findAddress(obj) {
//     const outputParts = [];

//     if (obj.hasOwnProperty("street")) {
//         outputParts.push(obj.street);
//     } else {
//         outputParts.push("__");
//     }

//     if (obj.hasOwnProperty("house")) {
//         outputParts.push(obj.house);
//     } else {
//         outputParts.push("__");
//     }

//     if (obj.hasOwnProperty("society")) {
//         outputParts.push(obj.society);
//     } else {
//         outputParts.push("__");
//     }

//     const output = outputParts.join(",");
//     return output;
// }

// // const input1 = { street: 10, house: "15A", society: "Earth Perfect" };
// // const output1 = findAddress(input1);
// // console.log(output1);

// // const input2 = { street: 10, society: "Earth Perfect" };
// // const output2 = findAddress(input2);
// // console.log(output2);

// // const input3 = { street: 10 };
// // const output3 = findAddress(input3);
// // console.log(output3);

// // function findAddress(obj) {
// //     const add = [];
// //     if()
// // }

// function findAddress(obj) {
//     const outputParts = [];
//     for (let obj = 0; obj < array.length; obj++) {
//         const findAddress = array[obj];

//     }
//     outputParts.push(obj.street || "__");
//     outputParts.push(obj.house || "__");
//     outputParts.push(obj.society || "__");

//     const output = outputParts.join(",");
//     return output;

// }
// const input3 = { street: 10 };
// const output3 = findAddress(input3);
// // console.log(output3);

// function findAddress(inputArray) {
//     const outputArray = [];

//     for (let i = 0; i < inputArray.length; i++) {
//         const obj = inputArray[i];
//         const outputParts = [];

//         outputParts.push(obj.street || "__");
//         outputParts.push(obj.house || "__");
//         outputParts.push(obj.society || "__");

//         const output = outputParts.join(",");
//         outputArray.push(output);
//     }

//     return outputArray;
// }

// const inputs = [
//     { street: 10 },
//     { street: 10, society: "Earth Perfect" },
//     { street: 10, house: "15A", society: "Earth Perfect" }
// ];

// const outputs = findAddress(inputs);
// for (let i = 0; i < outputs.length; i++) {

// }
// console.log(outputs[i]);

// function printDetails(person){
//     if(typeof person !== "object"){
//         return "please provide me a valid object"
//     }else{
//         const name = person.name || "nai";
//         const age = person.age || "nai";
//         const email = person.email || "nai";
//         const bou = person.bou || "nai";
//         return "amar nam "+name+". amar boyos "+age+". amar email "+email+". amr bou "+bou;
//     }

// }

// const obj = {
//     name: "mehedy",
//     age:26,
//     email:"abc@gmail.com"
// }

// console.log(printDetails(obj))

// function findAddress(Obj) {
//   let adds = "";
//   if ("street" in Obj) {
//     adds += Obj.street;
//   } else {
//     adds += "__";
//   }
//   adds += ",";
//   if ("house" in Obj) {
//     adds += Obj.house;
//   } else {
//     adds += "__";
//   }
//   adds += ",";
//   if ("society" in Obj) {
//     adds += Obj.society;
//   } else {
//     adds += "__";
//   }
//   return adds;
// }

function findAddress(obj) {
    let adds = "";
    if("street" in obj){
        adds += obj.street;
    }else{
        adds += "__";
    }
    adds += ",";
    if("house" in obj){
        adds += obj.house;
    }else{
        adds += "__";
    }
    adds += ",";
    if("society" in obj ){
        adds += obj.society;
    }else{
        adds += "__";
    }
    return adds;
}




// Test cases
const address1 = { street: 10, house: "15A", society: "Earth Perfect" };
const address2 = { street: 10, society: "Earth Perfect" };
const address3 = { street: 10 };

console.log(findAddress(address1)); // Output: "10,15A,Earth Perfect"
console.log(findAddress(address2)); // Output: "10,__,Earth Perfect"
console.log(findAddress(address3)); // Output: "10,__,__"
