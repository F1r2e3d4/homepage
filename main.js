const button = document.getElementById('toggle');
const menu = document.getElementById('mobile-menu');
const darkregion = document.getElementById('dark');
const closing = document.getElementById('icon-menu-close');

function hiddenmenu(){
    if (menu.style.display === 'none'){
        menu.style.display = 'block';
        darkregion.style.display = 'block';
    } else {
        menu.style.display = 'none';
        darkregion.style.display = 'none';
    }
}
function reveal(){
    if(menu.style.display == 'block' &&   darkregion.style.display == 'block'){
        menu.style.display = 'none';
        darkregion.style.display = 'none';
    }
}

button.addEventListener('click', hiddenmenu);
closing.addEventListener('click', reveal);