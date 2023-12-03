const myNums = [1, 2, 3];

const newNums = myNums.reduce((acc, currval) => {
    console.log(`acc:${acc} and currval: ${currval}`);
    return acc + currval;
}, 0);

console.log(newNums);

const shoppingCart = [
    {
        itemName: 'js course',
        price: 2999
    },
    {
        itemName: 'py course',
        price: 999
    },
    {
        itemName: 'mobile dev course',
        price: 5999
    },
    {
        itemName: 'data sc course',
        price: 12999
    },
];

const total = shoppingCart.reduce((acc, currval) => {
    return acc + currval.price;
}, 0);

console.log(total);