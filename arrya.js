// astep 1 ----------------------------
const country = 'Bangladesh';
const age = 22;
const isIndependent = true;
const student ={id: 121, class: 11, name:'mehedi'};
const friends = [13, 14, 11, 17, 21, 16, 15, 20]
function add(num1, num2){
    return num1 + num2;
}
console.log(typeof country);
console.log(typeof age);
console.log(typeof isIndependent);
console.log(typeof student);
console.log(Array.isArray(friends));  // check array using array . isArray ,,,array ki na seta dekhar jonno ata bebehor kora hoy.
console.log(typeof add);
// kno number ba string array ar vitore ache ki na seta dekhar jonno 
console.log(friends.includes(19));   //array ar vitore ai number ta nai tai ..output asche -false

console.log(friends.includes(21)); // array ar vitore acce tai .. true

// astep 2  -------------------------------------
// puran kisur sathe notun kisu add korar niyom
const friends1 = [13, 14, 11, 17, 21, 16, 15, 20]
// concat : diya kora jay notun ar puran gula ke add korar jonno
const newFriendsAge = [12, 13, 11, 13];
const allFriends = newFriendsAge.concat(friends1);
console.log(allFriends);
