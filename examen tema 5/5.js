document.getElementById("ver").addEventListener('click', (e) => {
    e.preventDefault();
    dni()
})


var x = false;

function dni() {
    if(!x){
        document.getElementById("dni").type="password";
        x=true;
    }
    else{
        document.getElementById("dni").type="text";
        x=false;
    }
}

document.forms[0].addEventListener('submit', comprobar)

function comprobar() {
    let inputs = document.querySelectorAll('input');
    inputs.forEach(input => {
        if(input.value == '')alert("El campo "+input.name+" no puede estar vacío");
        if(!input.checkValidity())alert("El patrón de "+input.name+" no es el correcto")
    });
}
