window.addEventListener('click', (e) => {
    if (e.target.classList.contains('hamburger-menu')) showMenu(e);
});

function showMenu(e) {
    if (!e.target.nextElementSibling.classList.contains('show')) {
        e.target.nextElementSibling.classList.add('show');
        e.target.nextElementSibling.classList.remove('hidden');
        document.querySelector('.container').addEventListener('click', hideMenu);
    }
    else e.target.nextElementSibling.classList.remove('show');
}

function hideMenu() {
    const list = document.querySelector('.list');
    list.classList.add('hidden');
    list.classList.remove('show');
}