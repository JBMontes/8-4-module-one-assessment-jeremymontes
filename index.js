/*
  Do not change the line below. If you'd like to run code from this file, you may use the `exampleMovies` variable below to gain access to an array of movies.

  Keep in mind that your functions must still have and use a parameter for accepting all movies.
*/
const movies = require("./movies");
const exampleMovies = require("./movies");
// Do not change the line above.

/**
 * getAllMovieTitles()
 * -----------------------------
 * Returns all of titles from an array of movies. If the inputted `movies` array is empty, return `[]`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {string[]} An array of strings, which are movie titles.
 *
 * EXAMPLE:
 *  getAllMovieTitles(movies);
 *  //> [
      "Toy Story 4",
      "Inside Out",
      "Coco",
      "Incredibles 2",
      "Moana",
      "How to Train Your Dragon",
      "Paddington",
      "The Lion King",
      "Fantasia",
      "James and the Giant Peach",
    ];
 */
// return an array of strings that represents all movie titles
//step 1 : create empty array
//step 2 : set up a for loop 
//step 3 : as we iterate through movies.title, we push into empty array
function getAllMovieTitles(movies = []) {
  let arr = [];
  for (let i = 0; i < movies.length; i++) {
    arr.push(movies[i].title)
  }
  return arr
}

getAllMovieTitles(movies)


/**
 * getHighestMetascore()
 * -----------------------------
 * Returns the highest `metascore` among all movies. If the inputted `movies` array is empty, return `0`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {number} The highest `metascore` of all movies.
 *
 * EXAMPLE:
 *  getHighestMetascore(movies);
 *  //> 96
 */

// Loop through the movies and find the highest metascore
// step 1: set variable equal to zero
// step 2: (for/ for of)loop through movies array
// step 3: get a handle on metascore (get a hold of that value)
// step 3.5: convert string to number - number constructor (Number())
// step 4: condition - compare value and metascore
// step 5: if metascore is bigger than value, set value equal to metascore
// step 6: return highestSoFar

function getHighestMetascore(movies) {
  let highestSoFar = 0;
  for (let movie of movies) {
    let num = Number(movie.metascore)
    if (num > highestSoFar) {
      highestSoFar = num
    }
  }
  return highestSoFar
}



/**
 * getAverageIMDBRating()
 * -----------------------------
 * Averages all of the IMDB ratings from all movies and returns it, as a number. If the inputted `movies` array is empty, return `0`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {number} The average IMDB rating across all movies.
 *
 * EXAMPLE:
 *  getAverageIMDBRating(movies);
 *  //> 7.76
 */
// add up each of the inmdb ratings and divide by length of array
// step 1: declare a variable that's equal to zero 
// step 2: loop through movies
// step 3: get a handle of imbdRatings
// step 3.5 : convert string to Number()
// step 4: once we get that value, we add it to default value
// step 5:  divide total by length of the array

function getAverageIMDBRating(movies) {
  let imdbTotal = 0;
  if (movies.length < 1) {
    return 0;
  }
  for (let movie of movies) {
    imdbTotal += Number(movie.imdbRating)
  }
  imdbTotal /= movies.length
  return imdbTotal
}

/**
 * countByRating()
 * -----------------------------
 * Returns an object where the keys are movie ratings and the values are the number of movies in the array with that rating. If the inputted `movies` array is empty, return `{}`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {Object} An object where keys are movie ratings (e.g. "PG") and the values are how many movies in the array have that rating (e.g. 7).
 *
 * EXAMPLE:
 *  countByRating(movies);
 *  //> { G: 3, PG: 7 }
 */
//returning an object with {movie rating: number of movies in the array with that rating}
// step 1: create an empty object to store the return
// step 2: Iterate through the movies array 
//step 3: get a handle of rated
//step 4: create a condition that will push the movies' rate into the object
// step 5: use a counter method 
function countByRating(movies) {
  let movieRateStat = {};
  for (let movie of movies) {
    rates = movie.rated
    if (!movieRateStat[rates]) {
      movieRateStat[rates] = 1
    } else {
      movieRateStat[rates] += 1
    }
  }
  return movieRateStat
}
countByRating(movies)
/**
 * findById()
 * -----------------------------
 * Returns a movie object from an array of objects based on the ID. If the inputted `movies` array is empty or the ID does not match any movie, return `null`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @param {string} id - A unique `imdbID`.
 * @returns {Object|null} The movie object with the matching `imdbID`.
 *
 * EXAMPLE:
 *  findById(movies, "tt1979376");
 *  //> {
      // Toy Story 4
    };
 */
//returns movie {}
function findById(movies, id) {
  if (movies.length < 1) {
    return null;
  }
  let movieObj = {}
  for (let movie of movies) {
    let name = movie.title
    let post = movie.poster
    if (movie.imdbID === id) {
      return movie
    }
  }
  return null
}

/**
 * filterByGenre()
 * -----------------------------
 * Returns all movie objects with a matching genre. Case-insensitive. If the inputted `movies` array is empty or no movies match the inputted `genre`, return `[]`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @param {string} genre - The genre of a movie. (e.g. "Fantasy")
 * @returns {Object[]} An array of movies where at least one of the genres matches the `genre` inputted.
 *
 * EXAMPLE:
 *  filterByGenre(movies, "Mystery");
 *  //> [
      {
        // Coco
      }
    ]
 *
 * EXAMPLE:
 *  filterByGenre(movies, "Horror")
 *  //> []
 */
// not enough time
function filterByGenre(moives, genra) {

}

/**
 * getAllMoviesReleasedAtOrBeforeYear()
 * -----------------------------
 * Returns all movie objects with a `released` year equal to or less than the given year.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @param {number} year - A year as a number. (e.g. 2000)
 * @returns {Object[]} An array of movies where the `released` year is equal to or less than the inputted year.
 *
 * EXAMPLE:
 *  getAllMoviesReleasedAtOrBeforeYear(movies, 2000);
 *  //> [
      {
        // The Lion King
      },
      {
        // Fantasia
      },
      {
        // James and the Giant Peach
      }
    ];
 */
function getAllMoviesReleasedAtOrBeforeYear(movies, year) {

}

/**
 * getBiggestBoxOfficeMovie()
 * -----------------------------
 * Returns the name of the movie with the highest `boxOffice` amount.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {string} The name of the movie that made the most money at the box office.
 *
 * EXAMPLE:
 *  getBiggestBoxOfficeMovie(movies);
 *  //> "Incredibles 2"
 */
function getBiggestBoxOfficeMovie() { }

// Do not change anything below this line.
module.exports = {
  getAllMovieTitles,
  getHighestMetascore,
  getAverageIMDBRating,
  countByRating,
  findById,
  filterByGenre,
  getAllMoviesReleasedAtOrBeforeYear,
  getBiggestBoxOfficeMovie,
};
