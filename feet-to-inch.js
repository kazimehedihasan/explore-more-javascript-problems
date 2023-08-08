/*১. সিম্পল একটা ফাংশন লিখতে হবে। যেটার নাম হবে feetToInch এবং
 এই ফাংশন ইনপুট হিসেবে নিবে feet আর রিটার্ন করবে inch । অর্থাৎ এই 
 ফাংশনকে কোন একটা ফিট বলে দিলে সে রিটার্ন হিসেবে বলে দিবে কত ইঞ্চি হয়। */

function feetToInch(feets){
    const inchs = 50;
    const inch = feets * inchs;
    return inch;
}
const Feet = 20;
// const output = feetToInch(Feet);
// console.log('inchs', output);

// ----------------------------------------------------------------------
// centimeter  To  Meter
/*২. একদম ফাংশন এর নাম হুবহু centimeterToMeter নাম দিয়ে একটা ফাংশন লিখবে। 
এই ফাংশনে ইনপুট হিসাবে কেউ সেন্টিমিটার দিবে আর সেই সেন্টিমিটার কে মিটার
 এ কনভার্ট করে রেজাল্ট রিটার্ন করবে। */

function  centimeterToMeter(centimeter){
    let meter = centimeter / 100;
    return meter;
}
const centimeters = 150;
const output = centimeterToMeter(centimeters);
// console.log('meters', output);

// ---------------------------------------------------------------------------

/*৩. আরেকটা ফাংশন লিখবে যেটার নাম লিখবে। যেই ফাংশনের নাম হবে paperRequirements 
এই ফাংশনের প্যারামিটার হিসেবে তিনটা প্যারামিটার হবে। প্রথম প্যারামিটার হবে তুমি প্রথম বই কত কপি ছাপাতে চাও। 
সেকেন্ড প্যারামিটার হবে তুমি সেকেন্ড বই কত কপি ছাপাতে চাও। আর থার্ড প্যারামিটার হবে তুমি থার্ড বই কত কপি ছাপাতে চাও। অর্থাৎ কোন 
বই এর কত কপি ছাপানো হবে সেটাই প্যারামিটার হিসেবে নিবে। 

এইবার ভালো করে খেয়াল করো। 

প্রথম বই ছাপানোর জন্য পৃষ্ঠা লাগবে ১০০ টা 
সেকেন্ড বই ছাপানোর জন্য পৃষ্ঠা লাগবে ২০০ টা 
তৃতীয় বই ছাপানোর জন্য পৃষ্ঠা লাগবে ৩০০ টা 

এখন তোমার কাজ হচ্ছে paperRequirements নামক ফাংশন লিখে ফেলা যাতে। সেই ফাংশনকে
 কল করে কোন বই এর কত কপি লাগবে বলে দিবে প্যারামিটার হিসেবে। আর ফাংশন হিসাব করে বলে দিবে তোমার সর্বমোট কতপৃষ্ঠা কাগজ লাগবে। 

উত্তর হিসেবে সংখ্যা রিটার্ন করবে। */

function paperRequirements(Book1, Book2, Book3) {

    const pagesBook1 = 100 * Book1;
    const pagesBook2 = 200 * Book2;
    const pagesBook3 = 300 * Book3;
    const totalPages = pagesBook1 + pagesBook2 + pagesBook3;

    return totalPages;
}
const Book1 = 2;
const Book2 = 3;
const Book3 = 4;
const totalPagesNeeded = paperRequirements(Book1, Book2, Book3);

// console.log("total pages:", totalPagesNeeded);

// ---------------------------------------------------------------

/*৪. একটা ফাংশন লিখবে। এই ফাংশনের নাম হবে bestFriend তারপর সেই ফাংশনে ইনপুট
 প্যারামিটার হিসেবে একটা array নিবে। সেই array এর মধ্যে তোমার সব ফ্রেন্ডের নাম থাকবে। 
 এখন তোমার কাজ হচ্ছে যে ফ্রেন্ড এর নাম সবচেয়ে বড় সেই ফ্রেন্ড এর নাম রিটার্ন করে দেয়া।
  এই ক্ষেত্রে তুমি নামটা অর্থাৎ ফ্রেন্ডের নাম (স্ট্রিং) রিটার্ন করতে হবে। 

*/
function bestFriend(friendsArray) {
  if ((Array.isArray(friendsArray) !== friendsArray.length) === 0) {
    return "kno friends nai";
  }
  let bestFriendName = friendsArray[0];
  for (let i = 1; i < friendsArray.length; i++) {
    if (friendsArray[i].length > bestFriendName.length) {
      bestFriendName = friendsArray[i];
    }
  }
  return bestFriendName;
}
const friends = ["kuduisa", "sumon", "emon", "khokon", "shakib"];

const myBestFriend = bestFriend(friends);
// console.log("big friends:", myBestFriend);

//---------------------------------------------------------------------

/*৫. এইটা একটু ট্রিকি হতে পারে। একটা array এর মধ্যে অনেকগুলা সংখ্যা থাকবে। 
তোমার কাজ হচ্ছে সংখ্যা গুলা একটার পর একটা করে চেক করা। এবং সংখ্যা গুলা যদি পজিটিভ
 সংখ্যা হয়। অর্থাৎ শূন্য বা শূন্যের চাইতে বড় হয় তাহলে সেগুলাকে কোন একটা array এর মধ্যে 
 রাখবে। আর যদি নেগেটিভ সংখ্যা হয়। তাহলে লুপটা স্টপ করে দিবে। এবং লুপ বন্ধ করার আগ
  পর্যন্ত যতগুলা পজিটিভ সংখ্যা পাওয়া গেছে। সেগুলা রিটার্ন করে দিবে। */
function extractPositiveNumbers(arr) {
  const positiveNumbers = [];

  for (const num of arr) {
    if (num >= 0) {
      positiveNumbers.push(num);
    } else {
      break;
    }
  }
  return positiveNumbers;
}
const numbersArray = [4, 6, 9, 3, 8, 12, -2, 5, 7];

const positiveNumbers = extractPositiveNumbers(numbersArray);
// console.log("positive number:", positiveNumbers);

// -----------------------------------------------------

/*তোমাকে এমন একটা ফাংশন বানাতে হবে যেটা একটি সংখ্যা ইনপুট নিবে। 
function টির নাম হবেঃ isInteger()। আউটপুট হিসেবে একটি boolean রিটার্ন করবেঃ

সংখ্যাটি integer হলে true রিটার্ন করবে। 
অন্যথায় false রিটার্ন করবে।*/
function isInteger(number) {
  if (typeof number !== "number") {
    return "please provide a number";
  }

  if (number % 1 == 0) {
    return true;
  } 
  else {
    return false;
  }
}
// console.log(isInteger(2.32));


// -----------------------------------------------------------------
/*
ফাংশন নেম দিতে হবে isJavaScriptFile । এই ফাংশনে প্যারামিটার হিসেবে নিবে একটি স্ট্রিং
(String) যেটি হবে একটি ফাইল নেম (যেমনঃ ‘index.js’)। যদি এটি জাভাস্ক্রিপ্ট ফাইল হয়
 তোমাকে true রিটার্ন করতে হবে আর যদি না হয় তাহলে false রিটার্ন করতে হবে 
*/
// niyom ::  1  ---------------

function isJavaScriptFile(filename){
    if (typeof filename !== "string") {
        return "please provide me a valib file name (string.)"
    }
     else {
        return filename.toLowerCase().endsWith(".js");
// hoy uparer ta na hoy nicher ta 2 tai aki condition
    //  if(filename.toLowerCase().endsWith(".js") === true){
    //         return true  
    //      }else{             //
    //      return false
    //      }

    }
}
// console.log(isJavaScriptFile('helo.html'));



// niyom::: 2 ---------- ses ar file ta khojar niyom

// hello.world.bd.js,,  qursen
function isJavaScriptFile(filename){
    if (typeof filename !== "string" ) {
        return "please provide me a valib file name (string.)"
    } else {
  const arr = filename.split(".");
  const lastElement = arr.pop();
  return lastElement.toLowerCase() == "js";

//   if (lastElement.toLowerCase() == ".js") {
//     return true;
//   } 
//   else {
//     return false;
//   }      
    }
}
// console.log(isJavaScriptFile('hello.world.bd.js'));


//   3   -------------------------------------------
/*
তোমাকে একটা function দেওয়া হবে called mindGame(” যা ইনপুট হিসেবে একটা positive
number নিবে।")
এখন তোমার task : তোমাকে সেই নাম্বার এর সাথে 3 গুন করে, তারপর 10 যোগ করে,
 তারপর 2 দিয়ে ভাগ করে, তারপর 5 বিয়োগ করে, যা আউটপুট আসবে তা return করতে হবে
Sample Input & Output
Input: 5
Output: 7.5
*/
function mindGame(numbers){
    if(typeof numbers !== "number"){
        return "please provide a number";
    }
    else if( numbers <= 0 ){
return "please provide me a positive number";
    }
    else{
        const result = (((numbers * 3 ) + 10 ) / 2)-5
        return result;
    }
    // opsone 2
//     if(typeof x !== "number" || x <= 0){
//         return "please provide me a positive number"
//    }else{
//        const result = (((x*3)+10)/2)-5
//        return result;
//    }
}
// console.log(mindGame(5));


//      4 ---------------------------------------------------------
/*
তোমাকে একটা function দেওয়া হবে called “isLGSeven()”. এটা ইনপুট হিসেবে একটা number
 নিবে।  
এখন তোমার task: তোমাকে ইনপুট ভ্যালু এবং ৭ এর মধ্যে পার্থক্য বের করতে হবে। 
যদি এই পার্থক্য ৭ এর চেয়ে ছোট হয়, তখন তোমাকে return করতে হবে সেই বিয়োগফল।
 নাহলে তোমাকে return করতে হবে double of the input। মানে যে সংখ্যা ইনপুট হিসেবে 
 নিয়েছো সেটির দ্বিগুণ।
Input : 6
Output: -1
Input: -15
Output: -22
Input: 15
Output: 30
*/
function isLGSeven(esc){
    if (typeof esc !== "number") {
        return "please provide a number"
    }
    else{
        const differ = esc - 7;
        if (differ < 7) {
            return differ;
        }
        else{
            return esc * 2;
        }
    }
}
// console.log(isLGSeven(15));


//   5   --------------------------------------------------
/*
তোমাকে একটা function দেওয়া হবে called findingBadData(). এটা ইনপুট হিসেবে একটা 
array নিবে। array তে যেকোনো সংখ্যক কতগুলো number থাকবে। number গুলো negative 
number (less than zero) ও হতে পারে, আবার positive number (greater than or equal 
to zero) ও হতে পারে। কোনও number যদি negative হয় সেটাকে আমরা বলব “Bad Data”. 
কোনও number যদি positive হয় সেটাকে আমরা বলব “Good Data”. 
এখন তোমার task: array তে কতগুলো Bad data আছে সেটা খুঁজে বের করতে হবে এবং সেই 
নাম্বার টা return করতে হবে।
Sample Input & Output:-
Input: [ 1,2,5 ]
Output: 0
Input: [ 2, -5, -7, -13 ]
Output: 3
*/
function findingBadData(arr){
    if(!Array.isArray(arr)){
        return "please provide me an array of number"
    }else{
        let badData = 0;
        // for(let i = 0; i<arr.length; i++){
        //     if(typeof arr[i] !== "number"){
        //         return "please provide me an array of number"
        //     }else{
        //         if(arr[i] < 0){
        //             badData++;
        //         }
        //     }
        // }

        for(let item of arr){
            if(typeof item !== "number"){
                return "please provide me an array of number"
            }else{
                if(item < 0){
                    badData++; // badData = badData + 1;
                }
            }
        }
        return badData
    }
}
const x = [ 2, -5, -7, -13 ];
console.log(findingBadData(x))

//   6  -------------------------------------------------------------

/*
Problem 5: Convert your gems into diamond
তোমাকে একটা function দেওয়া হবে called gemsToDiamond(). এটা ইনপুট হিসেবে তিনটা 
number ( তোমাদের ৩ বন্ধুর gems এর সংখ্যা ) নিবে। 
১ম বন্ধুর প্রতি gems এর ক্ষমতা = 21
২য় বন্ধুর প্রতি gems এর ক্ষমতা = 32
৩য় বন্ধুর প্রতি gems এর ক্ষমতা = 43
[ gems এর ক্ষমতা বলতে একটা gems কে কয়টা diamond এ convert করা যাবে সেটা বুঝানো হচ্ছে। ]
এখন তোমার task: সব বন্ধুর gems মিলিয়ে total কতটি diamond পাবে সেটা বের করতে হবে।
 total diamond এর সংখ্যা যদি 1000 এর দিগুন এর উপর হয়ে যায় সেক্ষেত্রে total diamond 
 থেকে 2000 বাদ দিয়ে যতগুলো diamond অবশিষ্ট থাকবে, ততগুলো তোমরা পাবে।
Sample Input & Output:-
Input: 1, 1, 1
Output: 96
Input: 20, 200, 50
Output: 6970
Input: 100, 5, 1
Output: 303

*/
function gemsToDiamond(x,y,z){
    if(typeof x !== "number" || typeof y !== "number" || typeof z !== "number"){
        return "please provide me valid number input"
    }else if(x < 0 || y < 0 || z < 0){
        return "please provide me all positive numbers"
    }
    // else if(x%1 !== 0 || y%1 !== 0 || z%1 !== 0){
    //     return "please provide me all integer number"
    // }
    else{

        /*
১ম বন্ধুর প্রতি gems এর ক্ষমতা = 21
২য় বন্ধুর প্রতি gems এর ক্ষমতা = 32
৩য় বন্ধুর প্রতি gems এর ক্ষমতা = 43
        */
        const frnd1 = 21;
        const frnd2 = 32;
        const frnd3 = 43;

        const total = (x * frnd1) + (y * frnd2) + (z * frnd3);

        if(total > 2000){
            return total - 2000;
        }else{
            return total;
        }

    }

}

console.log(gemsToDiamond(100, 5, 1))