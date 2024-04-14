import {searchUser, createUser} from '../models/user.model.js';

async function checkUser( userToCheck, res ) {  
    const userFinded = await searchUser(userToCheck.id);
    if(userFinded === undefined){
        res.send('Usuario no encontrado');
        return false;
    }
    if(userFinded.id === userToCheck.id){
        res.send('Usuario logueado');
        return true
    }
    else{
        res.send('Usuario no logueado');
        return false;
    }
}

  function checkUserToCreate(user,res){
    if(createUser(user)){
        return res.json({ message: "Usuario creado exitosamente" });
    }
    else{
        res.json({ message: "Usuario no creado exitosamente" });
    }
}

export {checkUser,checkUserToCreate};