$(document).ready(function(){
  //This is to prevent any jQuery code
  //from running before the document is finished loading (is ready).
  //Task1 Savoir si un element est visible ou Hidden
  $("#btn_hide").click(function(){
    $("#triangle").hide();
  });
  //this code will keep checking the state of the triangle for each 3seconds
  setInterval(function(){
    if ($("#triangle").is(":visible")){alert ("l'element est visible");}
    if ($("#triangle").is(":hidden")){alert ("l'element est caché"); }
  },3000);
});
