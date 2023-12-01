const coding = ['js', 'cpp', 'rb', 'swift'];

coding.forEach( (i) => {
    // console.log(i);
});

//2nd
function printMe (item){
    // console.log(item);
}

coding.forEach(printMe);

coding.forEach( (item, index, arr) => {
    // console.log(item, index, arr);
})


const myCoding = [
    {
        languageName:'JavaScript',
        languageType:'Scripting Language'
    },
    {
        languageName:'Java',
        languageType:'Programming Language'
    },
    {
        languageName:'Python',
        languageType:'Programming Language'
    }
]

myCoding.forEach( (item) => {
    console.log(item.languageName, 'is', item.languageType)
})