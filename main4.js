$(document).ready(function(){
  //Task3 : Empecher de coller du texte dans un champs input de type text
  document.getElementById('no_paste').addEventListener('keydown',
  function (foo){
      if (foo.keyCode == 86) // Code clé du copier/coller
      {
        alert("Le collage de texte n\'est pas autorisé !");
        foo.preventDefault();//
      }
   })
});
