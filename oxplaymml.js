const targetContentsList = document.querySelectorAll('.status__content:not(.ox-playflagged):not(.muted)');

// import sionicjs from 'Sionic.js';
const createButton = require('./play-button.js');
const playmmlButtonTemplate = createButton();

targetContentsList.forEach((targetContent) => {
  const sourceText = targetContent.textContent;
  const playmmlButton = playmmlButtonTemplate.cloneNode(true);

  const playmmlAnchor = document.createElement("DIV");
  playmmlAnchor.id = "playmml_" + Math.round(Math.random() * 1000);
  const targetId = playmmlAnchor.id;
  targetContent.appendChild(playmmlAnchor);
  targetContent.classList.add("ox-playflagged");

  const mml = sourceText.match(/MML@(.*?);/);
  if (mml) {
  targetContent.parentNode.appendChild(playmmlButton);
    playmmlButton.addEventListener('click', (e) => {
        const textarea = document.createElement("textarea")
        targetContent.appendChild(textarea);

        console.log('played');
        console.log(mml[0]);

        textarea.value = mml[0]
        textarea.select();

        try {
          var successful = document.execCommand('cut');
          var msg = successful ? 'successful' : 'unsuccessful';
          console.log('Cutting text command was ' + msg);
        } catch(err) {
          console.log('Oops, unable to cut');
        }

        targetContent.removeChild(textarea);
        // https://developer.mozilla.org/ja/docs/Web/API/Fetch_API/Using_Fetch
        // fetch(url).then(function(response) {
        //   return response.json();
        // }).then(function(json) {
        // });
      }
      , false);
  }
});
