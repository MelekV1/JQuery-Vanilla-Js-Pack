$(document).ready( function (){
  $("#monimage").hover(
    function(){
     // La souris passe sur l'élément
     $("#temp").remove()
     $(this).append("<div id='temp'></div>"); // Création d'un div temporaire qui va héberger l'image en surimpression
     bgimg = "url(media/wallpaperCyberpunck.png)";
     $(this).find("#temp").css({
       position:"absolute",
       background:"transparent "+bgimg+" left top no-repeat",
       opacity:0,
       "background-size":"cover",
       height:"90%",
       width:"98%",
     });

     $(this).find("#temp").stop().animate({opacity:1},500);  },
  function(){
     // La souris sort de l'élément
       $(this).find("#temp").stop().animate({opacity:0},500,function(){$(this).remove()});
    }
  );
})
