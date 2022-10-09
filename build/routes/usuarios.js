"use strict";

var _require = require('express'),
    Router = _require.Router;

var _require2 = require('../controllers/usuarios'),
    usuariosGet = _require2.usuariosGet,
    usuariosPut = _require2.usuariosPut,
    usuariosPost = _require2.usuariosPost,
    usuariosDelete = _require2.usuariosDelete,
    usuariosPatch = _require2.usuariosPatch;

var router = Router();
router.get('/', usuariosGet);
router.put('/:id', usuariosPut);
router.post('/', usuariosPost);
router["delete"]('/', usuariosDelete);
router.patch('/', usuariosPatch);
module.exports = router;