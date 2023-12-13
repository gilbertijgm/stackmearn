import NoteDaoMongoDB from "../daos/mongodb/notes.dao.js";
const noteDao = new NoteDaoMongoDB();

export const getAll = async () => {
    try {
        return await noteDao.getAll(); 
    } catch (error) {
        console.log(error);
    }
}


export const getById = async (id) => {
    try {
        const note = await noteDao.getById(id);
        if(!note) return null;
        else return note;
    } catch (error) {
        console.log(error);
    }
}

export const create = async (obj) => {
    try {
        const newNote = await noteDao.create(obj);
        if(!newNote) return null;
        else return newNote;
    } catch (error) {
        console.log(error);
    }
}

export const update = async (id, obj) => {
    try {
        const noteUp = await noteDao.update(id, obj);
        if(!noteUp) return null;
        else return noteUp;
    } catch (error) {
        console.log(error);
    }
}

export const remove = async (id) => {
    try {
        const noteDel = await noteDao.delete(id);
        if(!noteDel) return null;
        else return noteDel;
    } catch (error) {
        console.log(error);
    }
}