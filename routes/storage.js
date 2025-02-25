const express = require('express');
const router = express.Router();
const {uploadMiddleware, uploadMiddlewareMemory} = require('../utils/handleStorage.js')
const {uploadImage} = require('../controllers/storage.js')

router.post("/local", uploadMiddleware.single("image"), (err, req, res, next) => { //solo enviamos uno con .single, sino .multi
    if (err) {
        res.status(400).send(`Error al subir archivo: ${err.message}`)
    }
    else  next()
}, (req, res) => {
    console.log(req.file);
    res.json(req.file)
})

router.post("/", uploadMiddlewareMemory.single("image"), uploadImage)
module.exports = router;
