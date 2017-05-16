# oxplaymml
oxplaymml adds play mml button on Mastodon with bookmarklet.

## demo

copy following code and paste on location of your browser.
```
javascript:(function(){const%20targetContentsList=document.querySelectorAll('.status__content:not(.ox-playflagged):not(.muted)');const%20createButton=require('./play-button.js');const%20playmmlButtonTemplate=createButton();targetContentsList.each(i=%3E{const%20targetContent=targetContentsList[i];const%20sourceText=targetContent.textContent;const%20playmmlButton=playmmlButtonTemplate.cloneNode(true);const%20playmmlAnchor=document.createElement('DIV');playmmlAnchor.id='playmml_'+Math.round(Math.random()*1e3);const%20targetId=playmmlAnchor.id;targetContent.appendChild(playmmlAnchor);targetContent.classList.add('ox-playflagged');targetContent.parentNode.appendChild(playmml_button);playmmlButton.addEventListener('click',function(){console.log('played')},false)})}())
```

## Build

```
$ webpack && bookmarkletter bookmark.js
```

 and copy output on your browser.

## Requirement
- Webpack https://www.npmjs.com/package/webpack
- Google Translation API Key
to run this bookmarklet, you need Google Translation API key.
https://cloud.google.com/translate/
- bookmarkletter https://www.npmjs.com/package/bookmarkletter

## known issues
oxpecker lacks many feature, current code is just only for working confirmation.
Developer is going to implement following features.
- language switcher and keeping settings
- auto adding translation button
- supporting another translation API (Bing and Yandex)
- develop easy implemantation on Mastodon instance without bookmarklet.
