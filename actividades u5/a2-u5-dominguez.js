let box = document.querySelector('.box');
window.addEventListener('load', () => {
    box.style.position = 'absolute';
    box.style.left = 0;
    box.style.top = 0;
});
window.addEventListener('keydown', (e) => {
    switch (e.key) {
        case 'ArrowLeft':
            box.style.left = parseInt(box.style.left) - 10 + 'px';
            break;
        case 'ArrowRight':
            box.style.left = parseInt(box.style.left) + 10 + 'px';
            break;
        case 'ArrowUp':
            box.style.top = parseInt(box.style.top) - 10 + 'px';
            break;
        case 'ArrowDown':
            box.style.top = parseInt(box.style.top) + 10 + 'px';
            break;
    }
    switch (e.key) {
        case '4':
            box.style.left = parseInt(box.style.left) - 10 + 'px';
            break;
        case '6':
            box.style.left = parseInt(box.style.left) + 10 + 'px';
            break;
        case '8':
            box.style.top = parseInt(box.style.top) - 10 + 'px';
            break;
        case '2':
            box.style.top = parseInt(box.style.top) + 10 + 'px';
            break;
    }
});
