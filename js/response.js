let Nav = document.getElementById('navbar');
let headers = document.getElementsByTagName('header')[0];
window.onscroll = function () {
    if ( window.scrollY > 50 ) {
        headers.style.display = 'none';
    } else {
        headers.style.display = 'block';
    }
}
