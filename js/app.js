$(document).ready(function() {
    $("#search").submit(function(event){
    	event.preventDefault();
       cerca();
   });

   function cerca(){
       // cerca per titolo
       var titolo = $("#title").val();
       $.ajax({
       	url: "http://www.omdbapi.com/?s=" + titolo,
       	method: "GET",
       	success: function(response){
       		console.log(response);
       		var i=0;
       		var n=response.totalResults;
       		for(i=0;i<n;i++){
       			// console.log(response.Search[i]); //ok
       			
       		}
       	},
       	error: function(response){
       		console.log(response);
       	}
       });
   };
});
