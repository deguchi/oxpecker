# oxplaymml
oxplaymml adds play mml button on Mastodon with bookmarklet.

## demo

copy following code and paste on location of your browser.
```
javascript:(function(){document.body.appendChild(document.createElement('script')).src='https://rawgit.com/deguchi/oxplaymml/master/bookmarklet.js';})();
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
