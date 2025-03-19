const express = require('express');
const router = express.Router();
const {uploadMiddleware, uploadMiddlewareMemory} = require('../utils/handleStorage.js')
const {uploadImage} = require('../controllers/storage.js')

router.post("/local", uploadMiddleware.single("image"), (req, res) => {
    console.log(req.file);
    res.json(req.file)
})

router.post("/", uploadMiddlewareMemory.single("image"), (err, req,res,next) => {
   
    console.log ("ERROR::::::::", err.code)
    res.status(413).send("Error capturado")
},uploadImage)



module.exports = router;
