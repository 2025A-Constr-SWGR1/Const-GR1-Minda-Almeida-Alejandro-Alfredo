$(document).ready(function() {

  var bolaMagica = {};
  var imagenBolaParaPregunta = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballQuestion.png";
  var imagenBolaParaRespuesta = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballAnswer.png";
  var tiempoRecargaDeImagen = 500;
  bolaMagica.listaDeRespuestas = ["NO", "SI", "Me parece que no", "Por supuesto", "Sin duda", "Vuelve a preguntar"];

  $("#answer").hide();

  bolaMagica.hacerPregunta = function(pregunta) {
    $("#8ball").effect("shake");

    $("#8ball").attr("src", imagenBolaParaRespuesta);

    $("#answer").fadeIn(4000);

    var numeroRandom = Math.random();

    var numeroRandomParalistaDeRespuestas = numeroRandom * this.listaDeRespuestas.length;

    var indiceRandom = Math.floor(numeroRandomParalistaDeRespuestas);

    var respuesta = this.listaDeRespuestas[indiceRandom];

    $("#answer").text(respuesta);

    console.log(pregunta);
    console.log(respuesta);
  };

  var onClick = function() {

    $("#answer").hide();

    $("#8ball").attr("src", imagenBolaParaPregunta);


    setTimeout(function(){
      var pregunta = prompt("Escribe tu pregunta");
      bolaMagica.hacerPregunta(pregunta);
    }, tiempoRecargaDeImagen);


  };

  $("#questionButton").click(onClick);

});
