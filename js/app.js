$(document).ready(function() {

	$("#cerca").show();
	$("#mostra").hide();

    $("#search").submit(function(event){
    	event.preventDefault();
       	cerca();
   });

   function cerca(){
       // cerca per titolo
       var titolo = $("#title").val();
       var genere = $("#genere").val();

       $.ajax({
       	url: "http://www.omdbapi.com/?s=" + titolo + "&type=" + genere,
       	method: "GET",
       	success: function(response){
       		var i = 0;
       		var n = 0;
       		if(response.Search.length != null) {n = response.Search.length;}
       		if(response.Response == "False"){
       			alert(response.Error);
       		}
       		else{
       			var tr = "";
	       		for(i = 0; i < n ; i++){
	       			tr += "<tr class='riga' title='" + response.Search[i].Title + "'>" +
	       			stampaPoster(response.Search[i].Poster) +
	       			"<td>" + response.Search[i].Title + "</td>" +
	       			"<td>" + response.Search[i].Type + "</td>" +
	       			"<td>" + response.Search[i].Year + "</td>" +
	       			"</tr>";
	       		}
	       		$("#dati").html(tr);
	       		$("#mostra").show();
	       	}
       	},
       	error: function(response){
       		console.log(response);
       	}
       });
   };

   function stampaPoster(url){
	   	var txt = "";
	   	if(url == "N/A"){
	   		txt = "<td><img src='img/download.png'></td>";
	   	}
	   	else{
	   		txt = "<td><img src='" + url + "' > </td>";
	   	}
   		return txt;
   };

   $("tbody").on("click", "tr", function(){

   		var title = $(this).attr("title");
   		
   		$.ajax({
   			url: "http://www.omdbapi.com/?t=" + title,
   			method: "GET",
   			success: function(response){

   				var poster = response.Poster;

   				var actors = response.Actors;
   				var director = response.Director;
   				var genre = response.Genre;
   				var language = response.Language;
   				var metascore = response.Metascore;
   				var plot = response.Plot;
   				var released = response.Released;
   				var writer = response.Writer;
   				var year = response.Year;

   				var listalbl = ["Title: ", "Released: ", "Year: ", "Actors: ", "Director: ", "Genre: ", "Language: ", "Metascore: ", "Plot: ", "Writer: "]
   				var lista = [title, released, year, actors, director, genre, language, metascore, plot, writer];
   				var n = lista.length;
   				var i = 0;

   				var tr = "";

   				tr += "<img src=" + poster + ">";

   				for(i = 0; i < n; i++){
   					//prepara stampa
   					tr += "<tr>" +
   					"<td>" + listalbl[i] + "</td>" +
   					"<td>" + lista[i] + "</td>" +
   					"</tr>";
   				}
   				$("#testata").hide();
   				$("#dati").html(tr);
   			},
   			error: function(response){
   				console.log(response);
   			}
   		});

   });

});
