function avg(data) {
    let totalPrice = 0;
    for ( let i = 0; i < data.products.length; i++ ) {  // summarize all the price
        let price = data.products[i].price
        totalPrice+= price;
    }
    let avgPrice = totalPrice/(data.size);     // average the price
    return avgPrice;
}


console.log(
    avg({
        size: 3,
        products: [
        {
            name: 'Product 1',
            price: 100,
        },
        {
            name: 'Product 2',
            price: 700,
        },
        {
            name: 'Product 3',
            price: 250,
        }, 
        ],
    })
); // should print the average price of all products