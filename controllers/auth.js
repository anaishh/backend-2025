const {matchedData} = require('express-validator')
const { compare } = require('../utils/handlePassword')
const { handleHttpError } = require('../utils/handleError')
const {tokenSign} = require('../utils/handleJwt.js')
const UsersModel = require('../models/users.js')

const loginUser = async (req, res) => {
  const body = matchedData(req)
  
  const userData = await UsersModel.findOne({email:body.email})
  console.log("**********************\n", userData);
  if (compare(body.password, userData.password)) {
    const data = {
      token: await tokenSign(userData, process.env.JWT_SECRET),
      user: userData
    }
    res.send(data)
  } else handleHttpError(res, "AUTHORIZATION_FAIL")
    
}

const registerUser = async (req, res) => {
  req = matchedData(req)
  const password = await encrypt(req.password)
  const body = {
    ...req,
    password
  }
  const userData = await UsersModel.create(body)
  userData.set("password", undefined, {strict: false})
  const data = {
    token: await tokenSign(userData, process.env.JWT_SECRET),
    user: userData
  }
  res.send(data);

}
module.exports = {loginUser, registerUser}