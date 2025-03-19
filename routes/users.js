const express = require('express')
const {getItem, getItems, updateItem, createItem, deleteItem} = require ('../controllers/users.js')
const authMiddleware = require('../middleware/session.js')

const userRouter = express.Router();

userRouter.get('/', authMiddleware, getItems);
userRouter.get('/:email', getItem);
userRouter.post('/', createItem);
userRouter.put('/:email', (req, res) => {
    console.log(req.params);
    updateItem(req, res);
});
userRouter.delete('/:email', deleteItem);

module.exports = userRouter;