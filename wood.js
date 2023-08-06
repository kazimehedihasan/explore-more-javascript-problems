/*
*1. chair ---> 3 cft
*2. table ---> 10 cft
*3.bed ---> 50 cft
*
*vary : quantity
*
*/ 



function woodCalculator(chairQuantity, tableQuantity, bedQuantity){
    const perChairWood = 3;
    const perTableWood = 10;
    const perBedWood = 50;

    const chairWood = chairQuantity * perChairWood;
    const tableWood = tableQuantity * perTableWood;
    const bedWood = bedQuantity * perBedWood;

    const totalWood = chairWood + tableWood + bedWood;
    return totalWood;
}
const totalWood = woodCalculator(1, 0, 0);
console.log('total wood required:', totalWood);







// * 1. chal 4 kg
// * 2. muri 5 kg
// * 3. dal 60 kg
// * chini 10 kg 
// function woodCalculator(chalQuantity, muriQuantity, dalQuantity, chiniQuantity){
//     const perChalWood = 3;
//     const perMuriWood = 4;
//     const perDalWood = 60;
//     const perChiniWood = 10;

//     const chalWood = chalQuantity * perChalWood;
//      const muriWood = muriQuantity * perMuriWood;
//      const dalWood = dalQuantity * perDalWood;
//      const chiniWood = chiniQuantity * perChiniWood;

//      const totalWood = chalWood + muriWood + dalWood + chiniWood;
//      return totalWood; 
// }
// const totalWood = woodCalculator(0, 0, 0, 1);
// console.log('total :', totalWood);