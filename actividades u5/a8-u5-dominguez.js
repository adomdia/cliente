let rojo = document.querySelector("#rojo")
let verde = document.querySelector("#verde")
let azul = document.querySelector("#azul")

rojo.addEventListener("click", (e) =>{
    console.log(e)
    document.body.style.backgroundColor = "red";
})

verde.addEventListener("click", (e) =>{
    console.log(e)
    document.body.style.backgroundColor = "green";

})

azul.addEventListener("click", (e) =>{
    console.log(e)
    document.body.style.backgroundColor = "blue";

})
