function alerta1(){
    var texto;
    var numero = prompt("ingrese un Numero");

    if(numero < 0 ){
        texto = ("El numero es negativo")
    }
    else 
    {
        texto=("El numero es Positivo")
    }

    document.getElementById("respuesta1").innerHTML = texto

}
function verificarTransporte() {
    var seleccion = document.querySelector('input[name="transporte"]:checked');
    var recordatorio = document.getElementById('respuesta2');
  
    if (seleccion) {
      if (seleccion.value === 'tren' || seleccion.value === 'autobus') {
        recordatorio.textContent = "¡No olvide llevar dinero para su transporte!";
      } else {
        recordatorio.textContent = "";
      }
    } else {
      recordatorio.textContent = "Por favor seleccione un medio de transporte.";
    }
  }

  function respuesta3() {
    var nombre = document.getElementById("nombre").value;
    var edad = parseInt(document.getElementById("edad").value);
    var pais = document.getElementById("pais").value;
  
    console.log("Nombre:", nombre);
    console.log("Edad:", edad);
    console.log("País:", pais);
  
    if (edad >= 18) {
      console.log("Es mayor de edad.");
    } else {
      console.log("Es menor de edad.");
    }
  }

  function Macertado(){
    var numero = prompt("Ingrese el Numero de se Eleccion")

    if (numero == 2){
      document.getElementById("respuesta").innerHTML = ("Felicitaciones has Acertado");
    }
    else
    {
      document.getElementById("respuesta").innerHTML = ("Te has Equivocado, Vuelve a intentarlo");
    }

  }
  function SeleecionarPedido(){
    var texto = prompt("Que desea Pedir? (cerveza, vino, refresco, agua)");
    texto = texto.toLowerCase();
    if (texto== 'cerveza' || texto=='vino'){
      alert('Por favor, dirijase a la barra de Bebidas')
    }
    else 
    {
      alert('Por favor dirijase a la tienda');
    }
  }
function Ctemperatura(){
  var temperatura = prompt("Ingrese la Temperatura, (Solo Grados/Numeros)");
  if (temperatura>=30){
    document.getElementById("respuesta").innerHTML = ("Hace Calor, Te recomendamos la ropa mas ligera que tengas")
  }
  else if (temperatura >= 15 && temperatura < 30 ){
    document.getElementById("respuesta").innerHTML = ("La temperatura es agradable, podrias usar cualquier ropa de tu eleccion")
  }
  else{
    document.getElementById("respuesta").innerHTML = ("El clima es demasiado frio, te recomendamos abrigarte bien y preferiblemente quedarte en casa.")
  }

}
function Colores() {
  var color = prompt("Escribe el color que deseas");
  color= color.toLowerCase();
  if (color == "morado" || color == "rojo" || color == "anaranjado" || color == "amarillo" || color == "verde"|| color == "celeste"||color == "azul"){
   document.getElementById("respuesta").innerHTML = ("El color es uno de los colores disponibles: " + color);

  } else
  {
    document.getElementById("respuesta").innerHTML = ("El color ingresado no coincide con ninguno de los colores disponibles")
  }

}
function Smenu(){

  var seleccion = document.querySelector('input[name="menu"]:checked').value;
  event.preventDefault ();
  
  

  switch (seleccion) {
    case "carne":
      document.getElementById("respuesta").innerHTML = "Como Bebeida obtendra una Copa de Vino Tinto"
      break;
      case "pescado":
      document.getElementById("respuesta").innerHTML = "Como Bebida obtendra una Copa de Vino Blanco"
      break;
      case "verdura":
      document.getElementById("respuesta").innerHTML = "Como Bebida obtendra un Vaso de Agua Pura"
      break;
  
    default:
      document.getElementById("respuesta").innerHTML = "Por Favor Seleccion una Opcion Del Menu"
      break;
  }
}

function CalcularDescuento(event){
  var monto = parseFloat(document.getElementById("monto").value);
  event.preventDefault();

  var descuento =0;
  switch(true){
    case (monto >= 100 && monto < 300): descuento = 5; 
    break;
    case (monto >= 300 && monto < 600): descuento = 10; 
    break;
    case (monto >= 600): descuento = 15; 
    break;
    default: descuento = 0; 
    break;
  }
  var MontoTotal = monto -(monto*(descuento/100));
  document.getElementById("respuesta").innerHTML = "Monto de la Compra: "+monto+" Euros "+ "Descuento aplicado: "+descuento+" Monto Total a Cancelar: "+ MontoTotal.toFixed(2)+" euros";
}


function Determinarestacion(){

  var fecha = new Date(document.getElementById("Fecha").value);
  var mes = fecha.getMonth()+1;
  var estacion = "";

  switch(mes){

    case 12:
        case 1:
        case 2:
            estacion = "Invierno";
            break;
        case 3:
        case 4:
        case 5:
            estacion = "Primavera";
            break;
        case 6:
        case 7:
        case 8:
            estacion = "Verano";
            break;
        case 9:
        case 10:
        case 11:
            estacion = "Otoño";
            break;
        default:
            estacion = "Mes inválido";
            break;
  
  }
  document.getElementById("respuesta").innerHTML = "En base a la Fecha Ingresada, La estacion es: "+ estacion;
}

function SeguirPrograma(){

  var confirmar = prompt("Desea continuar con el programa?");

  while (confirmar == "SÍ") {

    confirmar = prompt("Desea continuar con el programa?");
    
  }
alert("Programa Terminado.");
}

function TerminarPrograma(){

  var terminar = prompt("Desea terminar el programa?"); 
  
  while (terminar !== "SI") {

   terminar= prompt("Desea terminar con el programa?")    
  }

  alert("Programa Terminado con Exito")

}
function ConfirmarPassword(){

  var contra= prompt("Ingrese el Password");
  const Password = "iomar99";

  while (contra !== Password) {
    contra= prompt("Ingrese el Password");
  }

  alert("Bienvenido Ilmer Aldana");
}

function Npares(){

  var i =0;
  var NumerosPares = "";
  
  while (i <= 100) {
  
    NumerosPares += i + "<br>";
    i = i+2;

  }
  document.getElementById("respuesta").innerHTML = NumerosPares;

}

function PrimerosNumeros() {
  var i =50;
  var PrimerosNumeros="";

  while (i>0) {

   PrimerosNumeros += i + "<br>";
           i=i-1;

  }
  document.getElementById("respuesta").innerHTML = PrimerosNumeros;

}