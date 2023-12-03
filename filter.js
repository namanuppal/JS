// Array using filter
const coding = ['js', 'cpp', 'rb', 'swift'];

console.log(coding.filter((lang) => lang)); // ['js', 'cpp', 'rb', 'swift']

// Object using filter
const Programming = [
    {
        name: 'JavaScript',
        type: 'Scripting Language'
    },
    {
        name: 'Java',
        type: 'Programming Language'
    }
]

Programming.filter((lang) => {
    console.log(lang.name, 'is', lang.type)
});

/** +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newNums = myNums.filter((num) => { // the value should be in some variable
    return num > 4;
})

console.log(newNums);


// Take an exapmle of some books ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const books = [    
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },    
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014},
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 }];

const newBooks = books.filter((book) => {
    return book.genre === 'History' && book.publish >= 1995;
});

console.log(newBooks);