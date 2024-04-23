const pool = require('../db/dbconnect');
const {qAuth} = require('../db/queries');

class Usuario {
    constructor(id, username, pass, rol, disciplina, estado) {
        this.id=id;
        this.username = username;
        this.pass = pass;
        this.rol=rol;
        this.disciplina=disciplina;
        this.estado=estado;
    }
    /*  CREATE TABLE Usuario (
		id INT AUTO_INCREMENT PRIMARY KEY,
		username VARCHAR(255) UNIQUE NOT NULL,
		pass VARCHAR(20) NOT NULL,
		rol INT, 1: admin, 2:jefe de disciplina
        disciplina INT DEFAULT 0, 0: si el rol no es 2, id de disciplina si el rol es 2
	    estado BOOLEAN DEFAULT 1
	);     
    */
    static async getByUsername(username) {
        try {
            const [result] = await pool.query(qAuth.getByUsername, [username]);
            if (result[0].length > 0) {
                const data = result[0][0];
                const usuario = new Usuario(data.id, data.username, data.pass, data.rol, data.disciplina, data.estado);
                console.log('Usuario en modelo: '+ usuario.username);
                return usuario;
            } else {
                console.log('Usuario nulo.');
                return null;
            }
        } catch (error) {
            throw error;
        }
    }

    static async getById(num) {
        try{
            const [result] = await pool.query(qAuth.getById, [num]);
            if (result[0].length > 0) {
                const data = result[0][0];
                const usuario = new Usuario(data.id, data.username, data.pass, data.rol, data.disciplina, data.estado);
                console.log('Usuario en modelo: '+ usuario.username);
                return usuario;
            } else {
                console.log('Usuario nulo.');
                return null;
            }

        }catch(error){
            throw error;
        }
    }
}
module.exports = Usuario;