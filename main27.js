$('#element option[value="Marseille"]').attr("selected", "selected");
/*
// Première façon : utilisation de la propriété attr (attribut)
alert ($('#checkBox').attr('checked'));

// Deuxième façon : utilisation du sélecteur :checked
alert($('#checkBox').is(':checked'));
*/
$("input[type='checkbox']:checked").each(
          function() {
           console.log($(this).attr('id'));
        });

$("form input:radio[0]").attr("checked","checked");
alert($('input[type=radio][name=gender]:checked').attr('value'))
