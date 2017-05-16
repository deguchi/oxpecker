var ox_target_contents_list = document.querySelectorAll('.status__content:not(.ox-flagged):not(.muted)');

var create_button = require('./play-button.js');
var ox_playmml_button_template = create_button();

ox_target_contents_list.each(function(i){
     var ox_target_content = ox_target_contents_list[i]
     var mysource = ox_target_content.textContent;
     var ox_playmml_button = ox_playmml_button_template.cloneNode(true);

     var playmml_anchor = document.createElement("DIV");
          playmml_anchor.id = "playmml_" + Math.round( Math.random()*1000 );
     var target_id = playmml_anchor.id;
     ox_target_content.appendChild(playmml_anchor);
     ox_target_content.classList.add("ox-flagged");

     ox_target_content.parentNode.appendChild( ox_playmml_button );
     ox_playmml_button.addEventListener('click', function(){
          console.log('started');
     }
     , false);
})
