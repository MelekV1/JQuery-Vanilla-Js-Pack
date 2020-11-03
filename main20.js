$('#titre').keyup(function(e) {
   if(e.keyCode == 13) { // KeyCode de la touche entrée
          alert('Hey ! Tu as appuyé sur la touche entrée !!');
          $('#result').html($("#titre").val());
 }
});
