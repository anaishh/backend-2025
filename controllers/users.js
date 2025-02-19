const UserModel = require('../models/users.js')

const getItems = async (req, res) => {
    console.log(req);
    const data = await UserModel.find();
    res.json(data);   
}

const createItem = async (req, res) => {
    const data = await UserModel.create(req.body);
    res.json(data);
}

const updateItem =  async (req, res) => {
    
    const email = req.params.email;
    const data = await UserModel.findOneAndReplace(
        {email}, 
        req.body, {returnDocument: 'after'});
    res.json(data)
}

const deleteItem = async (req, res) => {
    const data = await UserModel.findOneAndDelete({email: req.params.email})
    res.json(data)
}

const getItem = async ({req, res}) => {
    const data = await UserModel.findOne(
        {email});
    res.json(data)
}

module.exports = {getItem, getItems, updateItem, createItem, deleteItem}