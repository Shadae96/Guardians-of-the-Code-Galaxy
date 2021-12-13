var TMDB_KEY = config.SECRET_TMDB_KEY;

const BASE_URL = 'https://api.themoviedb.org/3';

const API_URL = BASE_URL + '/search/movie?' + TMDB_KEY + '&query=Spider+Man';

const BASE_IMG_URL = 'https://image.tmdb.org/t/p/w500';

// *********************************************************************************** //
//                                         
const movieCards = document.querySelector(".movie-card");

function createCard([title, release_date, poster_path, overview]) {
    let code = `
    <img src = "${poster_path}" alt="">
    <div class="movie-card">
    <div class="movie-header">
        <div class="header-icon-container">
            <a href="#">
                <i class="material-icons header-icon"></i>
            </a>
        </div>
    </div><!--movie-header-->
    <div class="movie-content">
        <div class="movie-content-header">
            <a href="#">
                <h3 class="movie-title">${title}</h3>
            </a>
            <div class="mcu-logo"></div>
        </div>
        <div class="movie-info">
            <div class="info-section">
                <label>Date & Time</label>
                <span>${release_date}</span>
            </div><!--date,time-->
        </div>
        <div class="movie-info">
        <div class="info-section">
            <label>Overview</label>
            <span>${overview}</span>
        </div><!--date,time-->
    </div>

    </div><!--movie-content-->
</div><!--movie-card-->
    `;
    movieCards.innerHTML += code;
    console.log(movieCards)
}

//const main = document.getElementById('main');


fetchMovies(API_URL);

function fetchMovies(url) {
    fetch(url).then(res => res.json()).then(data => {
        console.log(data.results);
        createCard(data.results);
 //       displayMovies(data.results);
    })
}


function displayMovies(data) {
//    main.innerHTML = '';

    data.forEach(movieItem => {
        createCard()
        console.log(release_date);
        }); 
//        <img src="${BASE_IMG_URL+ poster_path}" alt="${title}">

    }
/*
let movie1 = [
   "Spider-Man", "2002-05-01", "https://image.tmdb.org/t/p/w500/gSZyYEK5AfZuOFFjnVPUCLvdOD6.jpg", "overview"
   ]
   createCard(movie1); */
    