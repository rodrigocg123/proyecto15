$(document).ready( function() {
    solicitudes  = ["Mensaje1", "Hola", "Adiós"];

    for(i = 0 ; i < solicitudes.length   ; i++) {
        $("#maestro").append(
            $("<li>").text(solicitudes[i])
        )
    }


});
let solicitudes = [solicitud,solicitud,solicitud];

for(i = 0; i < solicitud.length; i++) {
    $("#maestro").append(
        $("<li>").text(solicitudes[i].apellido)
    )
}

$("#id").val(solicitud.id);
$("#nombre").val(solicitud.nombre);
$("#apellido").val/(solicitud.apellido);

$("li").on("click", function(event){

    if( $("#detalle").is(':visible')) {
        $("#detalle").hide();
    } else {
        $("#detalle").show();

        let solicitud = event.target.val();

        $("#id").val(solicitud.id);
        $("#nombre").val(solicitud.nombre);
        $("#apellido").val(solicitud.apellido);
    }
});