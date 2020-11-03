  function supprimer_dernier_caractere(elm) {
    var val = $(elm).val();
    var cursorPos = elm.selectionStart;
    $(elm).val(
       val.substr(0,cursorPos-1) + // before cursor - 1
       val.substr(cursorPos,val.length) // after cursor
    )
    elm.selectionStart = cursorPos-1; // replace the cursor at the right place
    elm.selectionEnd = cursorPos-1;
  }

  $(document).ready( function (){
    // Supprime le dernier caractère s'il n'est pas alphanumérique sur evt keyup
    $('body').delegate('input.only_alpha_num','keyup',function(){
      if(!$(this).val().match(/^[0-9a-z]*$/i)) // a-z et 0-9 uniquement
        supprimer_dernier_caractere(this);
    });


  // Annulation du "coller" dans l'input texte auquel on a affecté l'identifiant "no_paste"
  document.getElementById('no_paste').addEventListener('keydown',
    function (foo){
      if (foo.keyCode == 86)
      {
         // alert('Vous avez copié du texte');
         foo.preventDefault();
      }
   });
  })
