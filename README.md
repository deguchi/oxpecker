# oxplaymml
oxplaymml adds play mml button on Mastodon with bookmarklet.

## demo

copy following code and paste on location of your browser.
```
javascript:(function(){(function(c){var%20b={};function%20a(e){if(b[e]){return%20b[e].exports}var%20d=b[e]={i:e,l:false,exports:{}};c[e].call(d.exports,d,d.exports,a);d.l=true;return%20d.exports}a.m=c;a.c=b;a.i=function(a){return%20a};a.d=function(b,c,d){if(!a.o(b,c)){Object.defineProperty(b,c,{configurable:false,enumerable:true,get:d})}};a.n=function(b){var%20c=b%26%26b.__esModule%3Ffunction%20a(){return%20b['default']}:function%20a(){return%20b};a.d(c,'a',c);return%20c};a.o=function(a,b){return%20Object.prototype.hasOwnProperty.call(a,b)};a.p='';return%20a(a.s=1)}([function(a,b){a.exports=function(){var%20a=document.createElement('A');a.innerHTML='play';a.style.cssText='background-color:%23606984;color:%23ffffff;font-weight:bold;cursor:pointer;line-height:1.25em;padding:0.3em;border-radius:0.5em;margin-left:%2018px;%20float:%20right;%20position:%20relative;%20top:%20-24px;font-size:0.75em';return%20a}},function(m,n,l){const%20j=document.querySelectorAll('.status__content:not(.ox-playflagged):not(.muted)');const%20f=l(0);const%20g=f();j.forEach(targetContent=%3E{const%20e=targetContent.textContent;const%20d=g.cloneNode(true);const%20c=document.createElement('DIV');c.id='playmml_'+Math.round(Math.random()*1e3);const%20k=c.id;targetContent.appendChild(c);targetContent.classList.add('ox-playflagged');const%20b=e.match(/MML%40(.*%3F);/);if(b){targetContent.parentNode.appendChild(d);d.addEventListener('click',e=%3E{const%20a=document.createElement('textarea');targetContent.appendChild(a);console.log('played');console.log(b[0]);a.value=b[0];a.select();try{var%20h=document.execCommand('cut');var%20i=h%3F'successful':'unsuccessful';console.log('Cutting%20text%20command%20was%20'+i)}catch(a){console.log('Oops,%20unable%20to%20cut')}targetContent.removeChild(a)},false)}})}]))}())
```

## Build

```
$ webpack && bookmarkletter bookmark.js
```

 and copy output on your browser.

## Requirement
- Webpack https://www.npmjs.com/package/webpack
- bookmarkletter https://www.npmjs.com/package/bookmarkletter

## known issues
<<<<<<< HEAD
- copy mml to clipboard only
=======
oxpecker lacks many feature, current code is just only for working confirmation.
Developer is going to implement following features.
- language switcher and keeping settings
- auto adding translation button
- supporting another translation API (Bing and Yandex)
- develop easy implemantation on Mastodon instance without bookmarklet.

## License
oxpecker are made available under the terms of the GNU Affero General Public License (GNU AGPLv3) with respecting Mastodon , since 17:00 JST 16th,May 2017.
>>>>>>> ttrace/master
