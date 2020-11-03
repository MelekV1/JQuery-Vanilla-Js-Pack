$(document).ready( function (){
  $("#mon_image").hover(
     function () {
        $(this).attr('src','media/Valhalla.png');
     },
      function () {
        $(this).attr('src','media/Origins.png');
    },
  );
});
