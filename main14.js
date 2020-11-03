$(document).ready( function (){
  mavaleur =parseInt($("#monDiv1").css('height')) - parseInt($("#monDiv2").css('marginTop'));
  alert(`The difference in height = ${mavaleur}px`);
});
