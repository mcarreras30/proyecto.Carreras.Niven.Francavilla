let botonLogout = document.querySelector('.link-logout');

botonLogout.addEventListener('click', function (e) {
    localStorage.removeItem('email');
});

