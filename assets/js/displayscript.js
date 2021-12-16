var TMDB_KEY = config.SECRET_TMDB_KEY;

const BASE_URL = 'https://api.themoviedb.org/3';

//const API_URL = BASE_URL + '/search/movie?' + TMDB_KEY + '&query=Spider+Man';
//const API_URL = BASE_URL + '/search/movie?' + TMDB_KEY + movie;

const BASE_IMG_URL = 'https://image.tmdb.org/t/p/w500';




// *********************************************************************************** //

const movieCards = document.querySelector("#container");

function createCard({title, release_date, poster_path, overview}) {
    var imageSource = BASE_IMG_URL + poster_path;

    let code = `
    <div class="movie-card">
        <div class="movie-header" style="background-image: url('${imageSource}');" ></div>
        <div class="movie-content">
            <div class="movie-content-header">
                <a href="#">
                    <h3 class="movie-title">${title}</h3>
                </a>
                <div class="tmdb_logo">
                </div>
            </div>
            <div class="movie-info">
                <div class="info-section">
                    <label>Overview</label>
                    <span>${overview}</span>
                </div>
            </div>
            <div class="movie-info">
                <div class="info-section">
                    <label>Release Date</label>
                    <span>${release_date}</span>
                </div>
                
            </div>

        </div>
    </div>
    `;
    
    movieCards.innerHTML += code;
//    console.log(movieCards);
}

// *********************************************************************************** //
// ***************************Using JavaScript**************************************** //

document.getElementById('submit').onclick = function() {
    var radios = document.getElementsByName('movie');
    var movie;
    for (var radio of radios)
    {
        if (radio.checked) {
            var movie=(radio.value);
        }
    }
    

    console.log(movie);
    const API_URL = BASE_URL + '/search/movie?' + TMDB_KEY + '&query=' + movie;
    fetchMovies(API_URL);

}
// *********************************************************************************** //
// *********************************************************************************** //


    function fetchMovies(url) {
        movieCards.innerHTML = "";

        fetch(url).then(res => res.json()).then(data => {
            console.log(data.results);

            data.results.forEach(movieItem => {
            createCard(movieItem);
            }); 
        
        })
    }
