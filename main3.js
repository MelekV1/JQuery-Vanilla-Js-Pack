$(document).ready(function(){
  //Task3 :Récuperer le contenu ou afficher du texte dans un textarea
  $(".btn_show").click(function(){
      alert ("Le texte contenu dans le textarea est : \n" +
      $("#TxtArea").val());
  });

  $(".btn_Add").click(function(){
    alert ("Le texte contenu dans le textarea est : \n" +
    $("#TxtArea").val()+
    "\n mais je vais lui rajouter une série de XXXXXXXX en fin de texte!");

    $("#TxtArea").val($("#TxtArea").val()+'XXXXXXXX')
  });

});
