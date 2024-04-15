function HoraInicio(){
    var hoy = new Date();
    var hora = hoy.getHours();
    var minuto = hoy.getMinutes();
    var segundo = hoy.getSeconds();

    var ap =(hora < 12) ? "<span>AM</span>": "<span>PM</span>";
    hora = (hora == 0 ) ? 12: hora;
    hora = (hora > 12) ? hora-12:hora;


    

    hora = RevisionHora(hora);
    minuto = RevisionHora(minuto);
    segundo = RevisionHora(segundo);

    document.getElementById("Reloj").innerHTML= hora +":"+ minuto +":"+"<strong>"+segundo+"</strong>"+" "+ap;
    
;
    var tiempo = setTimeout(function(){
        HoraInicio();


    }, 500);



}

function RevisionHora(i){
    if (i<10){
        i = "0"+i;

    }
    return i;
}