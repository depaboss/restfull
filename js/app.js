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
       		var i = 0;
       		var n = response.Search.length;
       		if(response.Response == "False"){
       			alert(response.Error);
       		}
       		else{
       			var tr = "";
	       		for(i = 0; i < n ; i++){
	       			tr += "<tr>" +
	       			//aggiungere poster
	       			"<td>" + response.Search[i].Title + "</td>" +
	       			"<td>" + response.Search[i].Type + "</td>" +
	       			"<td>" + response.Search[i].Year + "</td>" +
	       			"</tr>";
	       		}
	       		$("#dati").html(tr);
	       	}
       	},
       	error: function(response){
       		console.log(response);
       	}
       });
   };
});
