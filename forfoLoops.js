<<<<<<< HEAD
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (const i of arr) {
    // console.log(i);
}

const greetings = 'HELLO WORLD';
for (const greet of greetings) {
    // console.log(greet);

}


// maps

const map = new Map();
map.set('IN', 'India');
map.set('USA', 'United States of America');
map.set('FR', 'France');

// console.log(map);

for (const [key, value] of map) {
    // console.log(key, ':-', value);
    
}

//for obj

const myObj = {
    game1: 'NFS',
    Game2: 'GTA',
}

for (const game of Object.keys(myObj)) {
    for (const games of Object.values(myObj)) {
        console.log(games);
    }
    console.log(game);
    
}
=======
console.log('hi')
>>>>>>> 8b4a1b8a780aaf97b6d73938445666265dd761b9
