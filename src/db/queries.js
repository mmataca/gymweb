const qAuth = {
    getByUsername: 'CALL sp_getUsuarioPorUsername(?)',
    getById: 'CALL sp_getUsuarioPorID(?);',
  };

module.exports = {qAuth};