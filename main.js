const button = document.getElementById('toggle');
const menu = document.getElementById('mobile-menu');
const darkregion = document.getElementById('dark');
const closing = document.getElementById('icon-menu-close');

function hiddenmenu(){
        menu.style.display = 'block';
        darkregion.style.display = 'block';
}
function reveal(){
        menu.style.display = 'none';
        darkregion.style.display = 'none';
    }

button.addEventListener('click', hiddenmenu);
closing.addEventListener('click', reveal);