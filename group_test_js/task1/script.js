const numbers = [5, 2, 15, -3, 6, -8, -2];

const matrix = [
  [1, 0, 3],
  [0, 2, 0],
  [4, 5, 6],
  [0, 0, 0],
]

const searchResults = {
  "Search": [
    {
      "Title": "The Hobbit: An Unexpected Journey",
      "Year": "2012",
      "imdbID": "tt0903624",
      "Type": "movie"
    },
    {
      "Title": "The Hobbit: The Desolation of Smaug",
      "Year": "2013",
      "imdbID": "tt1170358",
      "Type": "movie"
    },
    {
      "Title": "The Hobbit: The Battle of the Five Armies",
      "Year": "2014",
      "imdbID": "tt2310332",
      "Type": "movie"
    },
    {
      "Title": "The Hobbit",
      "Year": "1977",
      "imdbID": "tt0077687",
      "Type": "movie"
    },
    {
      "Title": "Lego the Hobbit: The Video Game",
      "Year": "2014",
      "imdbID": "tt3584562",
      "Type": "game"
    },
    {
      "Title": "The Hobbit",
      "Year": "1966",
      "imdbID": "tt1686804",
      "Type": "movie"
    },
    {
      "Title": "The Hobbit",
      "Year": "2003",
      "imdbID": "tt0395578",
      "Type": "game"
    },
    {
      "Title": "A Day in the Life of a Hobbit",
      "Year": "2002",
      "imdbID": "tt0473467",
      "Type": "movie"
    },
    {
      "Title": "The Hobbit: An Unexpected Journey - The Company of Thorin",
      "Year": "2013",
      "imdbID": "tt3345514",
      "Type": "movie"
    },
    {
      "Title": "The Hobbit: The Swedolation of Smaug",
      "Year": "2014",
      "imdbID": "tt4171362",
      "Type": "movie"
    }
  ],
  "totalResults": "51",
  "Response": "True"
}

//task1
let numbers2 = numbers.map( n => n*n)

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers2[i])
    
}

//task2
const sorted_numbers = numbers.sort((a,b) => a-b)
const smallest_num = sorted_numbers[0]
console.log(`smallest number in list is ${smallest_num}`)


//task3
let flag = false
const matrix_row_values = matrix.map(sl => sl.reduce((sum, num) => sum + num, 0))
for (let i = 0; i < matrix_row_values.length; i++) {
    if(matrix_row_values[i] === 0){
        flag = true
        console.log(`The index of matrix with sum of zero is : ${i}`)
    }
}
if(!flag){
    console.log(-1)
}


//task4
const t4list = searchResults.Search.filter(movie => movie.Year > "2010" && movie.Type.toLowerCase() === 'movie');

for (let i = 0; i < t4list.length; i++) {
    console.log(t4list[i].imdbID);
}