// The `movies` array from the file `src/data.js`.
console.log('movies: ', movies);

// Iteration 1: All directors? - Get the array of all directors.

function getAllDirectors(moviesParameter) {
  let directors = moviesParameter.map( (eachMovie) => {
    return eachMovie.director;
  })
  return directors;
}
console.log(getAllDirectors(movies));

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesParameter) {
  let dramaSpielbergFilter = moviesParameter.filter( (eachMovie) => {
    return (eachMovie.director === 'Steven Spielberg') && (eachMovie.genre.includes("Drama"));
  });
  return dramaSpielbergFilter;
}

console.log(howManyMovies(movies));

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesParameter) {
  let allScores = moviesParameter.reduce( (accumulator, getMovie) => {
    if (getMovie.score === undefined) {
      return accumulator;
    } else {
      return accumulator + getMovie.score;
    }
  }, 0);
  let averageOperation = allScores / moviesParameter.length;
  let roundScore = averageOperation.toFixed(2);
  let twoDigitScore = parseFloat(roundScore);
  return twoDigitScore;
}

console.log(scoresAverage(movies));

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesParameter) {
  let filteredDrama = moviesParameter.filter( (eachMovie) => {
    return eachMovie.genre.includes("Drama");
  });
  let averageDramaMovies = filteredDrama.reduce( (accumulator, getMovie) => {
    if (getMovie.score === undefined) {
      return accumulator;
    } else {
      return accumulator + getMovie.score;
    }
  }, 0);
  let averageDramaScore = averageDramaMovies / filteredDrama.length;
  return averageDramaScore;
}

console.log(dramaMoviesScore(movies));

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesParameter) {
  let movieArrayClone = JSON.parse(JSON.stringify(moviesParameter));
  movieArrayClone.sort( (elemento1, elemento2) => {
    if (elemento1.year > elemento2.year) {
      return 1;
    } else if (elemento1.year < elemento2.year) {
      return -1;
    } else {
      if (elemento1.year === elemento2.year) {
        if (elemento1.title[0] > elemento2.title[0] ) {
          return 1;
        } else if (elemento1.title[0] < elemento2.title[0] ) {
          return -1;
        } else {
          return 0;
        }
      }
    }
  });
  return movieArrayClone;
}

console.log(orderByYear(movies));

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesParameter) {
  let movieArrayClone = JSON.parse(JSON.stringify(moviesParameter));
  movieArrayClone.sort( (elemento1, elemento2) => {
    if (elemento1.title > elemento2.title) {
      return 1;
    } else {
      return -1;
    }
  });
  return movieArrayClone.slice(0,20);
}

console.log(orderAlphabetically(movies));

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes() {}

console.log()

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {}

console.log()



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg,
  };
}
