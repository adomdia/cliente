document.forms[0].addEventListener('submit', () => {
    document.querySelectorAll('input').forEach(input => {
        if(input.value ==  "Guardar") return;
        document.cookie = input.name+" = "+input.value;
    });
})

document.getElementById("cookie").addEventListener('click', () => {
    alert(document.cookie);
})
