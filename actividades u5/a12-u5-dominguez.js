let dni = document.querySelector("#dni")
let nombre = document.querySelector("#nombre")
let fnac = document.querySelector("#fnac")
let correo = document.querySelector("#correo")
let web = document.querySelector("#web")
let psswd = document.querySelector("#psswd")
let psswd2 = document.querySelector("#psswd2")
let errDni = document.querySelector("#err-dni")
let errNombre = document.querySelector("#err-nombre")
let errFnac = document.querySelector("#err-fnac")
let errCorreo = document.querySelector("#err-correo")
let errWeb = document.querySelector("#err-web")
let errPsswd = document.querySelector("#err-psswd")
let errPsswd2 = document.querySelector("#err-psswd2")
let btnguardar = document.querySelector("#btn-guardar")
let btnver = document.querySelector("#btn-ver")


btnguardar.addEventListener("click", comprobar)

function comprobar(){

}

function comprobarDni(){
    let patron = new RegExp(/^[0-9]{8}-[A-Z]/)
    let texto = dni.value

    if(patron.test(texto)){
        document.cookie = "Dni = "+ texto
        return true
    } else {
        errDni.innerHTML = "El DNI no sigue el patrón fijado"
    }
}

function comprobarNombre(){
    let patron = new RegExp(/(^[A-Z]{1}[a-z]$){1,4}/)
    let texto = nombre.value

    if(patron.test(texto)){
        document.cookie = "Nombre = "+ texto
        return true
    } else {
        errNombre.innerHTML = "El nombre no sigue el patrón fijado"
    }
}

function comprobarFnac(){
    let patron = new RegExp(/^(?:3[01]|[12][0-9]|0?[1-9])([\-/.])(0?[1-9]|1[1-2])\1\d{4}$/)
    let texto = fnac.value

    if(patron.test(texto)){
        document.cookie = "Fnac = "+ texto
        return true
    } else {
        errFnac.innerHTML = "La fecha de nacimiento no sigue el patrón fijado"
    }
}


function comprobarCorreo(){
    let patron = new RegExp(/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/)
    let texto = correo.value

    if(patron.test(texto)){
        document.cookie = "Correo = "+ texto
        return true
    } else {
        errCorreo.innerHTML = "El correo no sigue el patrón fijado"
    }
}

function comprobarWeb(){
    let patron = new RegExp(/^http?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/)
    let texto = web.value

    if(patron.test(texto)){
        document.cookie = "Web = "+ texto
        return true
    } else {
        errWeb.innerHTML = "La dirección web no sigue el patrón fijado"
    }
}

function comprobarPsswd(){
    let patron = new RegExp(/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,10}$/)
    let texto = psswd.value

    if(patron.test(texto)){
        document.cookie = "Psswd = "+ texto
        return true
    } else {
        errPsswd.innerHTML = "La contraseña no sigue el patrón fijado"
    }
}

function comprobarPsswd2(){
    let patron = new RegExp(/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,10}$/)
    let texto = psswd2.value

    if(patron.test(texto)){
        document.cookie = "Psswd2 = "+ texto
        return true
    } else {
        errPsswd2.innerHTML = "La contraseña no sigue el patrón fijado"
    }
}
