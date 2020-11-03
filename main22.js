var new_element = jQuery('<div id="new_elt">Created and added to the DOM </div>');
// On ajoute du style avec la fonction .css()
new_element.css({
    background: 'gray',
    width     : '100%',
    height    : '50px',
    padding   : '3px'
});
$('#place').append(new_element);
$("#new_elt").click (function () { alert ('cette alerte ne sera jamais déclenchée...'); });
$("#place").live("click", function(){
        alert ('hourra, j\'ai cliqué sur new_element');
});
$("#monBtn").live("click", function(){
  $("#new_elt").slideToggle();
});
