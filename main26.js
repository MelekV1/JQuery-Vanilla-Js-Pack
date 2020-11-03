$("#mondiv").siblings('div').each(function(i){
             alert (i +' : '+$(this).html());
});
// affichera '0 : A' puis '1 : B'  puis '2 : D'
$("#mondiv").parent().children('div').each(function(i){
 alert (i +' : '+$(this).html());
});
