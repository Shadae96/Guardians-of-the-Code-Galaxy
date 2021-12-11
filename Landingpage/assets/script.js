const apiUrl_Tmdb='https://api.themoviedb.org/3/search/movie?api_key=d9a6cbae8bad26d7413b9b40f01cde38&query'

const api_key_Tmdb='d9a6cbae8bad26d7413b9b40f01cde38'

const apiToken_Tmdb='eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkOWE2Y2JhZThiYWQyNmQ3NDEzYjliNDBmMDFjZGUzOCIsInN1YiI6IjYxYWU4MDM4YTNlNGJhMDA2YzIzY2JhZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3OrJJiW0agE1NlUcMlIUB3MygFIKhPiqA-gI4hPyLbU'

function displayMovie(movie) {
    $(#search-input).attr('style')
    var movieName=document.getElementById('search-input').value

    let currentQueryUrl='https://api.themoviedb.org/3/search/movie?api_key=d9a6cbae8bad26d7413b9b40f01cde38&query='+ movieName;
      console.log('this worked!')
      .then(data => console.log(data))
      .catch(error => console.log('ERROR')) 
    //  $.ajax({
    //      url: currentQueryUrl,
    //      method: 'GET',
    //  }).then(function (displayMovie)) {
    //      let movie
    //  }
}



// fetch('https://reqres.in/api/users/', {
//     method: 'POST',
//         //pass headers thru for specific info you need to display
//         //MAKE SURE YOU SET HEADER TO CORRECT CONTENT TYPE
//     headers: {
//         'Content-Type': 'application/json'
//     },
//     //Pass info through body to post as JSON--Use STRINGIFY for object
//     body: JSON.stringify({ 
//         name: 'User 1'
//     })
// }).then(res => {
//     return res.json()
// })
.then(data => console.log(data))
.catch(error => console.log('ERROR'))     