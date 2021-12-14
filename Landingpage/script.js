function filteredSearch(){
  //determine the movie filter
  var movieOptions = document.getElementById("movieOptionsDiv").children
  var movie = null
  for (let i = 0; i < movieOptions.length; i++) {
    if (movieOptions[i].nodeName == "INPUT" && movieOptions[i].checked) {
      movie = movieOptions[i].getAttribute("value")
    } 
  }
  console.log("Movie Selection: " + movie)

  //hide search page and show movie detail page
  $(function () {
    if (movie != null) {
      $('#movieDetailPage').removeClass('hidden');
      $('#searchPage').addClass('hidden');
      $('#searchBar').addClass('hidden');
    }
});

// if they did not select a character, alert them
if (movie == null) {
    alert("You must select a movie")
  } else {
    // query TMDB for movies about the selected character
    var titleSearchUrl = "https://api.themoviedb.org/3/search/movie/?api_key=14b587754129323445d3c36cc6619d43&query=" + movie
    $.get(titleSearchUrl, function(data) {
      var movieResults = data.results
      var movieId = null
      for (let i = 0; i < movieResults.length; i++) {
        if (movieResults[i].original_title == movie){
          movieId = movieResults[i].id
        }
      }
      if (movieId == null && movie != null) {
        alert("Sorry, we couldn't find any details for that movie. Please try another.")
      } else if (movieId != null) {
        console.log("MOVIE ID: " + movieId)
        getMovieDetails(movieId)
      }
    })
  }
}

function getMovieDetails(movieId){
    var movieDetailUrl = "https://api.themoviedb.org/3/movie/" + movieId + "?api_key=" + "14b587754129323445d3c36cc6619d43"
    $.get(movieDetailUrl, function(data) {
      console.log("MOVIE DETAILS FROM API REQUEST")
      console.log(data)
  
      // set movie name in movie detail page
      var movieNameCell = document.getElementById('movieName');
      movieNameCell.appendChild(document.createTextNode(data.original_title));
  
      // set release date in movie detail page
      var releaseDateCell = document.getElementById('releaseDate');
      releaseDateCell.appendChild(document.createTextNode(data.release_date));

      //set movie revenue in movie detail page
      var revenueCell = document.getElementById('revenue');
      revenueCell.appendChild(document.createTextNode(data.revenue));
      
      //set movie Vote Average in movie detail page
      var voteAverageCell = document.getElementById('voteAverage');
      voteAverageCell.appendChild(document.createTextNode(data.vote_average));

     //set movie runtime in movie detail page
     var runTimeCell = document.getElementById('runTime');
     runTimeCell.appendChild(document.createTextNode(data.runtime));


    })
  }

function movieSearch (){
    var movieInput = document.getElementById("searchText").value;
    for (let i = 0; i < movieInput; i++) {
          movie = movieOptions[i].getAttribute("value")
        } 
      console.log("Movie Selection: " + movieInput)
      $(function () {
        if (movieInput != null) {
          $('#movieDetailPage').removeClass('hidden');
          $('#searchPage').addClass('hidden');
          $('#searchBar').addClass('hidden');
        }
    }); 
    
    var titleSearchUrl = "https://api.themoviedb.org/3/search/movie/?api_key=14b587754129323445d3c36cc6619d43&query=" + movieInput
    $.get(titleSearchUrl, function(data) {
      var movieResults = data.results
      var movieId = null
      for (let i = 0; i < movieResults.length; i++) {
          movieId = movieResults[i].id
        } if (movieId != null) {
        console.log("MOVIE ID: " + movieId)
        getMovieDetails(movieId)
      }
    })
  }

function getSearchedMovieDetails(movieId){
    var movieDetailUrl = "https://api.themoviedb.org/3/movie/" + movieId + "?api_key=" + "14b587754129323445d3c36cc6619d43"
    $.get(movieDetailUrl, function(data) {
      console.log("MOVIE DETAILS FROM API REQUEST")
      console.log(data)
  
      // set movie name in movie detail page
      var movieNameCell = document.getElementById('movieName');
      movieNameCell.appendChild(document.createTextNode(data.original_title));
  
      // set release date in movie detail page
      var releaseDateCell = document.getElementById('releaseDate');
      releaseDateCell.appendChild(document.createTextNode(data.release_date));

      //set movie revenue in movie detail page
      var revenueCell = document.getElementById('revenue');
      revenueCell.appendChild(document.createTextNode(data.revenue));
      
      //set movie Vote Average in movie detail page
      var voteAverageCell = document.getElementById('voteAverage');
      voteAverageCell.appendChild(document.createTextNode(data.vote_average));

     //set movie runtime in movie detail page
     var runTimeCell = document.getElementById('runTime');
     runTimeCell.appendChild(document.createTextNode(data.runtime));


    })
  }