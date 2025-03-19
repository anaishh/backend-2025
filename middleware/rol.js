const { handleHttpError } = require("../utils/handleError")
/**
 * Array con los roles permitidos
 * @param {*} roles
 * @returns 
 */
const checkRol = (roles) => (req, res, next) => { //Doble argumento
    try{
        const {user} = req
        console.log(user);
        const userRol = user.role
        console.log(roles);
        //Comprobamos que el rol del usuario esté en roles
        const checkValueRol = roles.some(elemento => userRol.includes(elemento));
        if (!checkValueRol) {
            handleHttpError(res, "NOT_ALLOWED", 403)
            return
        }
        next()
    }catch(err){
        console.log(err);
        handleHttpError(res, "ERROR_PERMISSIONS", 403)
    }
}

module.exports = checkRol