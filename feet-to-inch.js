
/*১. সিম্পল একটা ফাংশন লিখতে হবে। যেটার নাম হবে feetToInch এবং
 এই ফাংশন ইনপুট হিসেবে নিবে feet আর রিটার্ন করবে inch । অর্থাৎ এই 
 ফাংশনকে কোন একটা ফিট বলে দিলে সে রিটার্ন হিসেবে বলে দিবে কত ইঞ্চি হয়। */ 

// function feetToInch(feets){
//     const inchs = 50;
//     const inch = feets * inchs;
//     return inch;
// }
// const Feet = 20;
// const output = feetToInch(Feet);
// console.log('inchs', output);


// ----------------------------------------------------------------------
// centimeter  To  Meter
/*২. একদম ফাংশন এর নাম হুবহু centimeterToMeter নাম দিয়ে একটা ফাংশন লিখবে। 
এই ফাংশনে ইনপুট হিসাবে কেউ সেন্টিমিটার দিবে আর সেই সেন্টিমিটার কে মিটার
 এ কনভার্ট করে রেজাল্ট রিটার্ন করবে। */ 

// function  centimeterToMeter(centimeter){
//     let meter = centimeter / 100;
//     return meter;
// }
// const centimeters = 150;
// const output = centimeterToMeter(centimeters);
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

// function paperRequirements(Book1, Book2, Book3) {
   
//     const pagesBook1 = 100 * Book1;
//     const pagesBook2 = 200 * Book2;
//     const pagesBook3 = 300 * Book3;
//     const totalPages = pagesBook1 + pagesBook2 + pagesBook3;

//     return totalPages;
// }
// const Book1 = 2;
// const Book2 = 3;
// const Book3 = 4;
// const totalPagesNeeded = paperRequirements(Book1, Book2, Book3);

// console.log("total pages:", totalPagesNeeded);


// ---------------------------------------------------------------

/*৪. একটা ফাংশন লিখবে। এই ফাংশনের নাম হবে bestFriend তারপর সেই ফাংশনে ইনপুট
 প্যারামিটার হিসেবে একটা array নিবে। সেই array এর মধ্যে তোমার সব ফ্রেন্ডের নাম থাকবে। 
 এখন তোমার কাজ হচ্ছে যে ফ্রেন্ড এর নাম সবচেয়ে বড় সেই ফ্রেন্ড এর নাম রিটার্ন করে দেয়া।
  এই ক্ষেত্রে তুমি নামটা অর্থাৎ ফ্রেন্ডের নাম (স্ট্রিং) রিটার্ন করতে হবে। 

*/ 
function bestFriend(friendsArray) {
    if (Array.isArray(friendsArray) !== friendsArray.length === 0) {
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
console.log("big friends:", myBestFriend);





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

