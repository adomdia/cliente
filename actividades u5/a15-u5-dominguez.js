let msjvisitas = document.querySelector("#msj")

window.addEventListener('load', (e) => {
    let visitas = document.cookie = 1
    if (visitas < 1){
    } else {
        visitas += 1
    }
})

msjvisitas.innerHTML = visitas
