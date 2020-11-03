$(document).ready( function () {
   $('#redirection').click(function() {
     $('html,body').animate({scrollTop: $("#monancre").offset().top}, 'slow' );
   });
   $('#monancre').click(function() {
     $('html,body').animate({scrollTop: $("#redirection").offset().top}, 'slow' );
   });
})
