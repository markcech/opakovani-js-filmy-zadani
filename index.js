'use strict';

/* tady bude tvůj kód */
console.log('JavaScript ve stránce funguje');

const Movie = ({posterUrl, url, title, year, genres}) => {
    return  `
        <div class="movie">
            <img class="movie__img" 
                src= ${posterUrl} 
                alt= ${title}>
            <h2 class = "movie___title"> <a href="${url}"> ${title} </a></h2>
            <p class="movie__year"> ${year} </p>
            <p class="movie__genre"> ${genres} </p>
        </div>
    `;
};

const showMovies = (movieLibrary) => {
document.querySelector('#movies').innerHTML = movieLibrary.map((film) => { 
    return Movie(film);
}).join('');
}

let movieLibrary;
fetch ('https://apps.kodim.cz/daweb/trening-api/apis/movie-api/movies') 
        .then( (response) => response.json() )
        .then(data => {
            movieLibrary = data;                                                         
            showMovies(movieLibrary);
        }) 

