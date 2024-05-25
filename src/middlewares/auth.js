const verificarRol = (requiredRole) => (req, res, next) => {
    if (req.isAuthenticated()) {
        const userRole = req.user.rol; // Obtiene el rol del usuario desde el objeto de usuario autenticado
        console.log(`Rol del usuario: ${userRole}`);
        if (userRole === requiredRole) {
            next(); // Continúa si el usuario tiene el rol requerido
        } else {
            res.status(403).send('Acceso prohibido'); // Devuelve un código de estado 403 si el usuario no tiene el rol requerido
        }
    } else {
        res.redirect('/login'); // Redirige al usuario al inicio de sesión si no está autenticado
    }
};

const verificarAutenticado = (req, res, next) => {
    if (req.isAuthenticated()) {
        next(); // Continúa si el usuario está autenticado
    } else {
        res.redirect('/login'); // Redirige al usuario al inicio de sesión si no está autenticado
    }
};

module.exports = { verificarRol, verificarAutenticado };
