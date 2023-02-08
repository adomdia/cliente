document.onmousemove = (e) => {
    click(e);
};
document.onmouseup = (e) => {
    e.preventDefault();
}

function click(e) {
    if(e.buttons){
        link.style.setProperty('background-image', 'url(toad.png)');
        link.style.setProperty('top', e.clientY + 'px');
        link.style.setProperty('left', e.clientX + 'px');
    }
    else{
        link.style.setProperty('background-image', 'url(link.png)');
    }
}

document.addEventListener('keydown', (e) => {
    switch(e.key){
        case "a":
        case "A":
            document.body.style.backgroundColor=  "yellow";
            break;
        case "r":
        case "R":
            document.body.style.backgroundColor=  "red";
            break;
        case "n":
        case "N":
            document.body.style.backgroundColor=  "black";
            break;
        case "v":
        case "V":
            document.body.style.backgroundColor=  "green";
            break;
    }
})
document.addEventListener('keyup', () => {
    document.body.style.backgroundColor = "white";
})
