$(document).ready(function() {
    $("#search").submit(function(event){
    	event.preventDefault();
       cerca();
   });

   function cerca(){
       // cerca per titolo
       var title = $("#title").text();
       $.ajax({
       	url: "http://www.omdbapi.com/?s=" + title,
       	method: "GET",

       });
   };
});
