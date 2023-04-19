var canciones = [
	{
	  "titulo": "Bohemian Rhapsody",
	  "artista": "Queen",
	  "duracion": "5:55"
	},
	{
	  "titulo": "Stairway to Heaven",
	  "artista": "Led Zeppelin",
	  "duracion": "8:02"
	},
	{
	  "titulo": "Hotel California",
	  "artista": "The Eagles",
	  "duracion": "6:30"
	}
  ];
  
  $.each(canciones, function(index, cancion) {
	console.log("Canción " + (index+1) + ":");
	console.log("Título: " + cancion.titulo);
	console.log("Artista: " + cancion.artista);
	console.log("Duración: " + cancion.duracion);
  });
