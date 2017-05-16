const targetContentsList = document.querySelectorAll('.status__content:not(.ox-playflagged):not(.muted)');

const createButton = require('./play-button.js');
const playmmlButtonTemplate = createButton();

targetContentsList.each((i) => {
     const targetContent = targetContentsList[i];
     const sourceText = targetContent.textContent;
     const playmmlButton = playmmlButtonTemplate.cloneNode(true);

     const playmmlAnchor = document.createElement("DIV");
          playmmlAnchor.id = "playmml_" + Math.round( Math.random()*1000 );
     const targetId = playmmlAnchor.id;
     targetContent.appendChild(playmmlAnchor);
     targetContent.classList.add("ox-playflagged");

     targetContent.parentNode.appendChild( playmml_button );
     playmmlButton.addEventListener('click', function(){
          console.log('played');
          // https://developer.mozilla.org/ja/docs/Web/API/Fetch_API/Using_Fetch
          // fetch(url).then(function(response) {
          //   return response.json();
          // }).then(function(json) {
          // });
     }
     , false);
});
