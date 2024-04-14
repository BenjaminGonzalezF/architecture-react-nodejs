import {checkUser, checkUserToCreate} from '../controllers/users.controllers.js';
async function login(req, res, next) {
    const user = req.body;
    console.log("Usuario", req.body);
    if (await checkUser(user, res)) {
        console.log('Usuario logueado');
    } else {
        console.log('Usuario no logueado');
    }
}

async function addUser(req, res, next) {
    const user = req.body;
    console.log("Usuario", user);
    checkUserToCreate(user, res);
    }
export {login,addUser};