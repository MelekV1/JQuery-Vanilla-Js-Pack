var verif=(string)=>{
  control = false;
  return (string !=="")
}
var verifAdress=(string)=>{
  control = false;
  return (string !=="")
}
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
  $("#NiveauCheck1").prop("checked",true);
  $('body').on('keyup','#CIN',function(){
    if(!$(this).val().match(/^[0-9]*$/i))
      supprimer_dernier_caractere(this);
  });
  $("#submit").click(function(){
    var n = $("#Adresse").val().includes("@")&& $("#FullName").val()!=""&&  $("#CIN").val()!="";

    n?alert("Inscription achevée !!"):alert("Verifier");
  })
})
