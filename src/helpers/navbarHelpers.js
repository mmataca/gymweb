
const Handlebars = require('handlebars');

// Helper para generar dinámicamente el contenido de la barra de navegación
Handlebars.registerHelper('navbarContent', (rolUsuario) => {
    let contenido = '';
    if (rolUsuario === 1) {
        contenido += '<a class="nav-link" href="/admin">Opciones de administrador</a>';
    } else if (rolUsuario === 2) {
        contenido += '<a class="nav-link" href="/trainer">Opciones de entrenador</a>';
    }
    // Agregar más lógica según sea necesario
    return contenido;
});

module.exports = Handlebars;

