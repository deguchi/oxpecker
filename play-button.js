module.exports = function () {
  var playmmlButtonTemplate = document.createElement("A");
  playmmlButtonTemplate.innerHTML = "copy";
  playmmlButtonTemplate.style.cssText = "background-color:#606984;color:#ffffff;font-weight:bold;cursor:pointer;line-height:1.25em;padding:0.3em;border-radius:0.5em;margin-left: 18px; float: right; position: relative; top: -24px;font-size:0.75em";
  return playmmlButtonTemplate;
}
