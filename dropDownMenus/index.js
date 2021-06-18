window.addEventListener('click', (e) => {
    if (e.target.classList.contains('drop-down')) showMenu(e);
});

function showMenu(e) {
    if (!e.target.nextElementSibling.classList.contains('visible')) e.target.nextElementSibling.classList.add('visible');
    else e.target.nextElementSibling.classList.remove('visible');
}