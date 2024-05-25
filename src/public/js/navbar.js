// Para detectar el usuario autenticado y su rol
const usuarioAutenticado = req.isAuthenticated(); // Verifica si hay un usuario autenticado

const rolUsuario = req.user ? req.user.rol : null; // Obtiene el rol del usuario si está autenticado


// Lógica para modificar dinámicamente el contenido de la barra de navegación
window.onload = () => {
    const loginNav = document.getElementById('login-nav');
    if (usuarioAutenticado) {
        let contenido = '<a class="nav-link" href="/logout">CERRAR SESION</a>';
        contenido += '<a class="nav-link" href="/ForAnyUser">ForAnyUser</a>';
        if (rolUsuario === 1) {
            console.log('Opciones de rol 1');
            contenido += '<a class="nav-link" href="/JustRol1">JustRol1</a>';
        } else if (rolUsuario === 2) {
            console.log('Opciones de rol 2');
            contenido += '<a class="nav-link" href="/JustRol2">JustRol2</a>';
        }
        loginNav.innerHTML = contenido;
    }
};

