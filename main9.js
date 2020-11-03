$(document).ready( function (){
  $('#monimage').hover(
     function(){ $(this).animate({ opacity : '.75' }); },
     function(){ $(this).animate({ opacity : '1' }); }
    );
});
