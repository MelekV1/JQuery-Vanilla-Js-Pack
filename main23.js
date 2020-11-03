/*
$("#div_pere").click (
     function (){
       alert ('click pere!');
        $(this).children('div:first').click();
     }
   );
*/
   $(".div_fils").click (
    function (event){
      alert ('click fils!');
     //mettre ici l'évenement sur le fils
     event.stopPropagation();
     //l'événement click n'est plus transmis au père
    }
   );
