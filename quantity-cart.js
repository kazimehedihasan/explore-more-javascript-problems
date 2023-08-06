const shoppingCart = [
    { name: 'shoe', price: 1200 , quantity: 2},
    { name: 'shirt', price: 2200 , quantity: 5},
    { name: 'pant', price: 1100 , quantity: 4},
    { name: 'belt', price: 700, quantity: 6},
    { name: 'ti-shirt', price: 900 , quantity: 8},
];

function totalCost(products){
    let sum = 0;
    for(let i = 0; i < products.length; i++){
        const product = products[i];
        const productTotal = product.price * product.quantity;
        sum = sum + productTotal;
        // console.log(product);
    }
    return sum;
}

const expense = totalCost(shoppingCart);
console.log('total expense today',expense);