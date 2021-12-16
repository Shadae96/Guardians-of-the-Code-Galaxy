const searchUrl = `https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8[%E2%80%A6]on&origin=*&srlimit=1&srsearch=`;
const startButton = document.getElementById("button");
const inputValue = document.querySelector('.js-search-input').value
let url= searchUrl+inputValue;
let readMe = document.querySelector(".wiki-article")
const form = document.querySelector('.js-search-form');


// -----------------------------------------------------------------------------------------

startButton.addEventListener("click",goWiki);

console.log(inputValue);
console.log(url)

function goWiki(){
    fetch(url)
      .then((res) => res.json()).then((data) => {
        console.log(data.results);
      })
      .catch(err => {
        console.log(err);
      });

    // const results= Response.json();
    // return results;
};



function displayResults(data) {
  data.forEach(Article => {
      displayArticle()
}); 



function displayArticle(){}




// function displayResults(results) {
//     // Get a reference to the `.js-search-results` element
//     const searchResults = document.querySelector('.js-search-results');
  
//     // Iterate over the `search` array. Each nested object in the array can be
//     // accessed through the `result` parameter
//     results.query.search.forEach(result => {
//       const url = `https://en.wikipedia.org/?curid=${result.pageid}`;
  
//       // Append the search result to the DOM
//       searchResults.insertAdjacentHTML(
//         'beforeend',
//         `<div class="result-item">
//           <h3 class="result-title">
//             <a href="${url}" target="_blank" rel="noopener">${result.title}</a>
//           </h3>
//           <a href="${url}" class="result-link" target="_blank" rel="noopener">${url}</a>
//           <span class="result-snippet">${result.snippet}</span><br>
//         </div>`
//       );
//     });
//   }


//   console.log(url)

};
