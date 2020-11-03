$(function() {
    var today = new Date();
    console.log(today);
    var ladate=Date.parse(today);
    console.log(ladate);
    var lannee = today.getFullYear();
    console.log(lannee)
    var dateprintemps  =Date.parse(new Date(lannee, 2, 21));
    var dateete        =Date.parse(new Date(lannee, 5, 21));
    var dateautomne    =Date.parse(new Date(lannee, 8, 21));
    var datehiver      =Date.parse(new Date(lannee, 11, 21));
    if(ladate>=dateprintemps && ladate<dateete){
      $("#monimage").css({backgroundImage: "url('media/Fond-Printemps.png')"}); }
    else if(ladate>=dateete && ladate<dateautomne){
      $("#monimage").css({backgroundImage: "url('media/Fond-Ete.png')"});  }
    else if(ladate>=dateautomne && ladate<datehiver){
      $("#monimage").css({backgroundImage: "url('media/Fond-Automne.png')"});  }
    else if(ladate>=datehiver || ladate<dateprintemps){
      $("#monimage").css({backgroundImage: "url('media/Fond-Hiver.png')"});  }
});
