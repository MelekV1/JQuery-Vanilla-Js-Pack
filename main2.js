//Task2 :Ajouter ou Deplacer dynamiquement un element dans le dom
$(document).ready(function(){
  $("#insertAfter").click(function(){
    //INSERTAFTER : INSÉRER DU CODE APRÈS UN AUTRE ÉLÉMENT
    $("<p>Je suis inseré aprés la Reference!</p>").insertAfter('.ma_classe');
  });

  $("#DeplacerDom").click(function(){
    //INSERTAFTER() : DÉPLACER UN ÉLÉMENT DANS LE DOM
    $("span").insertAfter('#mon_div');
  });
  $("#DeplacerDom2").click(function(){
    //INSERTBEFORE() : DEPLACER/AJOUTER UN ÉLÉMENT JUSTE AVANT UN AUTRE ÉLÉMENT
    $("<p>Un petit texte à insérer dans le DOM juste avant mon_div</p>").insertBefore('#mon_div');
  });
  $("#Append").click(function(){
    //APPEND() : INSÉRER UN ÉLÉMENT À L’INTÉRIEUR D’UN AUTRE ÉLÉMENT (À LA FIN DE CE DERNIER)
    $( "#mon_div" ).append( "<p>** Je mets ça en fin de DIV **</p>" );
  });
  $("#preAppend").click(function(){
    //PREPEND() : INSÉRER UN ÉLÉMENT À L’INTÉRIEUR D’UN AUTRE ÉLÉMENT (AU DÉBUT DE CE DERNIER)
    $( "#mon_div" ).prepend( "<p>++ Tiens je rajoute ça en début de div ++</p>" );
  });

});
