$(document).ready( function (){
  $('html').click(function(event){
       if(event.target.id == 'monimage') {
         alert ("j'ai cliqué sur l'image");
       } else {
         alert ("j'ai cliqué à exterieur de l'image");
       }
  });
});
