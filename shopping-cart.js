const shoppingCart = [
    { name: 'shoe', price: 1200 },
    { name: 'shirt', price: 2000 },
    { name: 'pant', price: 1100 },
    { name: 'belt', price: 700},
    { name: 'ti-shirt', price: 900 }
];

function totalCost(products){
    let sum = 0;
    for(let i = 0; i < products.length; i++){
        const product = products[i];
        sum = sum + product.price;
        // console.log(product);
    }
    return sum;
}

const expense = totalCost(shoppingCart);
console.log('total expense today',expense);