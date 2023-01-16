let navLinks=document.getElementById('navLinks');

function hideMenu() {
    // @ts-ignore
    navLinks.style.right='-200px';
}

function showMenu() {
    // @ts-ignore
    navLinks.style.right='0';
}