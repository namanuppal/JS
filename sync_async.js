// JS is single threaded language, but..........
// async - non-blocking code
console.log('1');
console.log('2');

setTimeout(function() {
    console.log('3');
    }, 2000);

console.log('4');