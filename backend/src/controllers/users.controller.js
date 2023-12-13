import * as service from '../services/users.service.js';

export const getAll = async (req, res, next) => {
    try {
        const users = await service.getAll();
        res.json(users);
    } catch (error) {
        next(error.message);
    }
}

export const getById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const user = await service.getById(id);
        if(!user) res.status(404).json({ msg: 'Not Found' });
        else res.status(200).json(user);
    } catch (error) {
        next(error.message);
    }
}

export const create = async (req, res, next) => {
    try {
        const newUser = await service.create(req.body);
        if(!newUser) res.status(404).json({ msg: 'error creating new note' });
        else res.status(200).json(newUser);
    } catch (error) {
        next(error.message);
    }
}

export const update = async (req, res, next) => {
    try {
        const { id } = req.params;
        const userUp = await service.update(id, req.body);
        if(!userUp) res.status(404).json({ msg: 'error update note' });
        else res.status(200).json(userUp);
    } catch (error) {
        next(error.message);
    }
}

export const remove = async (req, res, next) => {
    try {
        const { id } = req.params;
        const userDel = await service.remove(id);
        if(!userDel) res.status(404).json({ msg: 'error delete' });
        else res.status(200).json({ msg: `user id: ${id} deleted`});
    } catch (error) {
        next(error.message);
    }
}