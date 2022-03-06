# Guardians-of-the-Code-Galaxy

---
## __07 Project 1: Interactive Front-End Application__
<img src="Landing page search 1.png">
<img src="Landing page search 2 .png">


---
---
### __Table of Contents__

- [Description](#description)
- [How to Use](#how-to-use)
- [Technologies](#technologies)
- [API References](#api-references)
- [Credits](#credits)
- [Project Status](#project-status)
- [Authors](#authors)
- [License](#license)

---
## __Description__

This project is a collaborative coding effort among  5 group members to create an application to assist casual movie-goers in preparing for optimal viewing  of the next Marvel film with friends, to add more context and background information about films and characters in the broader Marvel Cinematic Universe so that I can have an enjoyable experience and discussions.


We developed this application because we realized that the Marvel Cinematic Universe is broad and complex for casual viewers and movie-goers.  The movies are often box-office hits, with expansive story-lines, characters and plots.  We wanted to provide a resource that could be useful to add to the user's complete experience in a simple method to aid users in deciding the entertainment potential of viewing the films in theaters or streaming elsewhere.

---
### __Wireframe__
<img src="Wireframe 1.png">
<img src="Wireframe 2.png">
<img src="Wireframe 3.png">


---
## __How to Use__

Click on the landing page link below:


>[Landing Page](https://nsoroma.github.io/Guardians-of-the-Code-Galaxy/index.html)

<img src="start page.png">

1. **Select one of the choices by clicking on the button beside the name**
1. **An informational card will be displayed on the screen, with details about the selected film, characters and release date**
1. **The user can review the information for additional background details to help understand the film, and have the ability to discuss the topics with friends for a more enjoyable experience**

---
[Back to the Top](#Guardians-Of-The-Code-Galaxy)
### __Technologies__

- HTML
- CSS
- Javascript
- Markdown
- API's
- Postman
- jQuery
- Jira
- Figma



```Javascript
 $(document).ready(function(){
        $('.nav_btn').click(function(){
          $('.mobile_nav_items').toggleClass('active');
        });
      });
      
      $(document).ready(function(){
      //toggle sub-menus
      $(".sub-btn").click(function(){
        $(this).next(".sub-menu").slideToggle();
      });
    });

   
    
    //javascript for the responsive navigation menu
    
      </script>
      
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>


  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
  <script type='text/javascript' src='https://nsoroma.github.io/Guardians-of-the-Code-Galaxy/config.js'>console.log(config);</script>
```
```Javascript
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


```
---


### __API References__
>
[MDN-Web-APIs](https://developer.mozilla.org/en-US/docs/Web/API)

[MDN WEB Docs - Asynchronous JavaScript and XML](https://developer.mozilla.org/en-US/docs/Web/Guide/AJAX)

[jQuery API](https://api.jquery.com/)

[Marvel.com API](https://developer.marvel.com/)

[The Movie Database API](https://developers.themoviedb.org/3/getting-started/introduction)

[Wikipedia API](https://www.mediawiki.org/w/api.php)

---


---

### __Credits__
---
We relied on several resources to supplement the skills and concepts that we are continuing to learn during our full-stack web development course, and found a wealth of information available from developers that have generously provided to our community.  We cannot list them all, but we appreciate the availability of all developers that add knowledge to beginning developers.

- [Coder Foundry - How to Build an app with Marvel's API](https://www.youtube.com/watch?v=gar-ROuyIK0)

- [Traversy Media - Build a JavaScript & jQuery Movie Info App in 30 minutes](https://www.youtube.com/watch?v=YsPqjYGauns&amp;ab_channel=TraversyMedia)

- [Coding-Boot-Camp - API Resources](https://coding-boot-camp.github.io/full-stack/apis/api-resources)

- [Games Radar - How to watch marvel movies in order/release and chronological](https://www.gamesradar.com/how-to-watch-marvel-movies-in-order-mcu/)

- [W3Schools - How to Create a Flip Card with CSS](https://www.w3schools.com/howto/howto_css_flip_card.asp)

- [Figma to HTML, CSS, React & more!](https://www.figma.com/community/plugin/747985167520967365/Figma-to-HTML%2C-CSS%2C-React-%26-more)

- [Freshman - How to build a Wikipedia Search App with JavaScript](https://freshman.tech/wikipedia-javascript/)

- [Stack Overflow - Get userinput in JavaScript](https://stackoverflow.com/questions/22978243/get-userinput-in-javascript)

- [Stack Overflow - jQuery How to get string from the search box](https://stackoverflow.com/questions/11716126/jquery-how-to-get-string-from-the-search-box)

- [Web Dev Simplified](https://www.youtube.com/c/WebDevSimplified/videos)

- [Alessandro Castellani - How to Create Branches and push to GitHub](https://www.youtube.com/watch?v=pDmYNK68IEc)

- [Knowledge Base | Loop54 - What is faceted search and navigation?](https://www.loop54.com/knowledge-base/what-is-faceted-search-navigation)

- [Express.co.uk - Avengers film order: Iron Man to Endgame - The way to watch Marvel...](https://www.express.co.uk/entertainment/films/1119643/Avengers-film-order-movie-series-list-Endgame-Marvel-MCU-timeline)

---
#####

![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)

![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![Markdown](https://img.shields.io/badge/markdown-%23000000.svg?style=for-the-badge&logo=markdown&logoColor=white)
![jQuery](https://img.shields.io/badge/jquery-%230769AD.svg?style=for-the-badge&logo=jquery&logoColor=white)
![Figma](https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white)
![Wikipedia](https://img.shields.io/badge/Wikipedia-%23000000.svg?style=for-the-badge&logo=wikipedia&logoColor=white)
![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)
![Discord](https://img.shields.io/badge/%3CServer%3E-%237289DA.svg?style=for-the-badge&logo=discord&logoColor=white)
![Slack](https://img.shields.io/badge/Slack-4A154B?style=for-the-badge&logo=slack&logoColor=white)
![MDN Web Docs](https://img.shields.io/badge/MDN_Web_Docs-black?style=for-the-badge&logo=mdnwebdocs&logoColor=white)
![Dev.to blog](https://img.shields.io/badge/dev.to-0A0A0A?style=for-the-badge&logo=dev.to&logoColor=white)
![Medium](https://img.shields.io/badge/Medium-12100E?style=for-the-badge&logo=medium&logoColor=white)
![Postman](https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white)
---
---
### __Project Status__

* This application will continue to be developed with additional features that we were not able to complete by our set deliverable date.  We will add features to allow users to select more information for characters, films, series/collections, chronology by release date and by the Marvel Cinematic Universe timeline.   

* We will add additional search information to assist users in finding more information about the broader Marvel Universe, such as television series involving characters and story lines that supplement the films. This will require more practice to master API calls to Wikipedia and Marvel.

* We plan to add styling to polish the UI and add more dynamic effects for the user experience.


---


### __Authors__
[Dorothy Gilchrist](https://github.com/KiloWattDot)

[Silvia Trejo](https://github.com/sytrejo)

[Raquel Watson](https://github.com/nsoroma)

[Shadae Brown](https://github.com/Shadae96)

[Heather Cooper](https://github.com/cheribc)

---
### __License__


[MIT](https://opensource.org/licenses/MIT)
