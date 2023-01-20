const { response, request } = require('express')

const usuarioGet = (req = request, res = response) => {

    const {q, nombre, apikey, page = 1, limit} = req.query;

    res.json({
        msg: 'get API - Controlador',
        q,
        nombre,
        apikey
    });
}

const usuarioPost = (req, res = response) => {

    const {nombre, edad} = req.body;

    res.json({
        msg: 'post API - Controlador',
        nombre,
        edad
    });
}

const usuarioPut = (req, res = response) => {

    const id = req.params.id;

    res.json({
        msg: 'put API - Controlador',
        id
    });
}

const usuarioPatch = (req, res = response) => {
    res.json({
        msg: 'patch API - Controlador'
    });
}

const usuarioDelete = (req, res = response) => {
    res.json({
        msg: 'delete API - Controlador'
    });
}

module.exports = {
    usuarioGet,
    usuarioPost,
    usuarioPut,
    usuarioPatch,
    usuarioDelete
}