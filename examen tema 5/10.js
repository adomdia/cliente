document.addEventListener('DOMContentLoaded', () =>  {
    barras();
    document.getElementById('votar').addEventListener('click', añadir)

})



function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return false;
  }

  function barras() {
    let maxVotos = getCookie("maxVotos") ? parseInt(getCookie("maxVotos")): 0;
    if(!maxVotos)return false;
    let ios = getCookie("sol") ? parseInt(getCookie("sol")): 0,
        and = getCookie("milk") ? parseInt(getCookie("milk")): 0,
        win = getCookie("desc") ? parseInt(getCookie("desc")): 0
        oth = getCookie("hielo") ? parseInt(getCookie("hielo")): 0,
        por = "";
    if(maxVotos != (ios+and+win+oth)) return borrar();
    else{

    por = ((ios*100)/maxVotos).toFixed(2);
    document.getElementById("b_sol").value = por;
    document.getElementById("p_sol").innerHTML = por;

    por = ((and*100)/maxVotos).toFixed(2);
    document.getElementById("b_milk").value = por;
    document.getElementById("p_milk").innerHTML = por;

    por = ((win*100)/maxVotos).toFixed(2);
    document.getElementById("b_desc").value = por;
    document.getElementById("p_desc").innerHTML = por;

    por = ((oth*100)/maxVotos).toFixed(2);
    document.getElementById("b_hielo").value = por;
    document.getElementById("p_hielo").innerHTML = por;
    }
}

//Añadirá un voto a la cookie y otro al MaxVotos
function añadir() {
    let input = document.querySelector('input[type="radio"]:checked');
    if(!input) return alert("Por favor seleccione uno");
    let id = input.id,
        maxVotos = getCookie("maxVotos") ? getCookie("maxVotos") : 0,
        votos = getCookie(id) ? getCookie(id) : 0;
    document.cookie = "maxVotos = "+ (parseInt(maxVotos)+1);
    document.cookie = id + " = "+ (parseInt(votos)+1);
    document.location.reload();
}

//Borra las cookies si entiende que los votos son distintos

function borrar() {
    document.cookie = "maxVotos = 0";
    document.cookie = "sol = 0";
    document.cookie = "desc = 0";
    document.cookie = "milk = 0";
    document.cookie = "hielo = 0";
}


//10.4


//Iniciamos el servicio, la variable YOUR_PUBLIC_KEY sería el token del usuario en la API por el que se enviarían los correos
emailjs.init('YOUR_PUBLIC_KEY');


document.getElementById("enviar").addEventListener('click', () => {
  //Escribimos en el campo oculto el numero de votos totales
  document.getElementById("votos").value = getCookie("maxVotos") ? getCookie("maxVotos") : 0;
  /**
   * Luego se lo envíamos con el emailjs.sendForm, una función que se encarga de enviar un objeto formulario a un correo
   *
   * Explicamos sus parametros
   *  ID_SERVICE -> Servicio por el cual mandamos el email, por defecto podemos usar default_service
   *                y seleccionará el que tengamos por defecto en el dashboard de nuestra cuenta de emailjs
   *
   * ID_TEMPLATE -> Es una plantilla que definimos en la página personal de emailjs.com por el que enviaremos
   *                los datos, definiendo así un estilo
   *
   * querySelector('form')-> Es el formulario al que le añadimos anteriormente los votos y contiene además un campo
   *                          email oculto que la api reconoce para enviar el correo a ese contacto
  */
  emailjs.sendForm('ID_SERVICE','ID_TEMPLATE', document.querySelector('form'));
})
