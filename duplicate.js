// kno akta array ar vitore jodi akadik name thake taile , 
// akta akta kore nite hoy kemon kore: seta dekhano holo;

const names = ['abul', 'babul', 'cabul', 'dabul', 'evul', 'babul',
 'abul', 'kabul', 'gabul', 'cabul', 'babul', 'abul', 'abul'];

 function removeDuplicate (names){
const unique = [];
    for(let i = 0; i < names.length; i++){
        const name = names[i];
        console.log(names);
        if(unique.includes(name) === false){
            unique.push(name)
        }
    }
    return unique;
 }

 const uniqueNames = removeDuplicate(names);
 console.log(uniqueNames);



 

//  const names = ['abul', 'babul', 'cabul', 'dabul', 'evul', 'babul',
//  'abul', 'kabul', 'gabul', 'cabul', 'babul', 'abul', 'abul'];

//  function removeDuplicate(names){
//     const unique = []; 
//     for(let i = 0; i < names.length; i++){
//         const name = names[i];
//         if(unique.includes(name) === false){
//             unique.push(name);
//         }
//     }
//     return unique;
//  }
//  const uniqueNames = removeDuplicate(names);
//  console.log(uniqueNames);