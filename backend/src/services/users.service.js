import UserDaoMongoDB from "../daos/mongodb/users.dao.js";
const userDao = new UserDaoMongoDB();

export const getAll = async () => {
    try {
        return await userDao.getAll(); 
    } catch (error) {
        console.log(error);
    }
}


export const getById = async (id) => {
    try {
        const user = await userDao.getById(id);
        if(!user) return null;
        else return user;
    } catch (error) {
        console.log(error);
    }
}

export const create = async (obj) => {
    try {
        const newUser = await userDao.create(obj);
        if(!newUser) return null;
        else return newUser;
    } catch (error) {
        console.log(error);
    }
}

export const update = async (id, obj) => {
    try {
        const userUp = await userDao.update(id, obj);
        if(!userUp) return null;
        else return userUp;
    } catch (error) {
        console.log(error);
    }
}

export const remove = async (id) => {
    try {
        const userDel = await userDao.delete(id);
        if(!userDel) return null;
        else return userDel;
    } catch (error) {
        console.log(error);
    }
}