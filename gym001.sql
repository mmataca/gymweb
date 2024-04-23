-- INICIAL ----------------------------------------------------------------------------------------------------------
	USE sys;
	CREATE DATABASE gym001;
	USE gym001;

-- ELMINACIÓN
-- USE sys;
-- DROP DATABASE gym001;

-- Tablas ---------------------------------------------------------------------------------------------------------------------------------------
-- DISCIPLINA
    CREATE TABLE Disciplina (
		id INT AUTO_INCREMENT PRIMARY KEY,
		nom VARCHAR(100) NOT NULL,
		estado BOOLEAN DEFAULT 1
	);
    
	INSERT INTO Disciplina (nom) VALUES ('Baloncesto'), ('Futbol'), ('Voleibol'), ('Beisbol'), ('Balonmano'), ('Natacion'), ('Tenis de mesa'), ('Taekwondo');

    CREATE TABLE Usuario (
		id INT AUTO_INCREMENT PRIMARY KEY,
		username VARCHAR(255) UNIQUE NOT NULL,
		pass VARCHAR(20) NOT NULL,
		rol INT, /*1: admin, 2:jefe de disciplina*/
        disciplina INT DEFAULT 0, /*0: si el rol no es 2, id de disciplina si el rol es 2*/
	    estado BOOLEAN DEFAULT 1
	); 
    
    INSERT INTO Usuario (username, pass, rol) VALUES ('admin', '123A', 1);
    
	INSERT INTO Usuario (username, pass, rol, disciplina)
	VALUES
	('jefe_baloncesto', 'pass', 2, 1),
	('jefe_futbol', 'pass', 2, 2), 
	('jefe_voleibol', 'pass', 2, 3),
	('jefe_beisbol', 'pass', 2, 4), 
	('jefe_balonmano', 'pass', 2, 5),
	('jefe_natacion', 'pass', 2, 6),
	('jefe_tenis_mesa', 'pass', 2, 7),
	('jefe_taekwondo', 'pass', 2, 8);

	DELIMITER $$
	CREATE PROCEDURE sp_getUsuarioPorUsername(IN username_param VARCHAR(255))
	BEGIN
		SELECT * FROM Usuario WHERE username = username_param AND estado=1;
	END $$
	DELIMITER ;
	DELIMITER $$
	CREATE PROCEDURE sp_getUsuarioPorID(IN userID INT)
	BEGIN
		SELECT * FROM Usuario WHERE id = userID;
	END $$
	DELIMITER ;



    SELECT * from usuario;
    SELECT * from disciplina;
    
    
    
    
 
  
