const { Router } = require('express');
const {
    usuarioGet,
    usuarioPost,
    usuarioPut,
    usuarioPatch,
    usuarioDelete
} = require('../controllers/usuarios');

const router = Router();

// Visualizar o traer data.
router.get('/', usuarioGet);

// Para crear nuevos recursos
router.post('/', usuarioPost);

// Actualizar data.
router.put('/:id', usuarioPut);

router.patch('/', usuarioPatch);

// Eliminar data.
router.delete('/', usuarioDelete);

module.exports = router;