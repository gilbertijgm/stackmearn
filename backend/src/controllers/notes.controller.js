import * as service from '../services/notes.service.js';

export const getAll = async (req, res, next) => {
    try {
        const notes = await service.getAll();
        res.json(notes);
    } catch (error) {
        next(error.message);
    }
}

export const getById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const response = await service.getById(id);
        if(!response) res.status(404).json({ msg: 'Not Found' });
        else res.status(200).json(response);
    } catch (error) {
        next(error.message);
    }
}

export const create = async (req, res, next) => {
    try {
        const newNote = await service.create(req.body);
        if(!newNote) res.status(404).json({ msg: 'error creating new note' });
        else res.status(200).json(newNote);
    } catch (error) {
        next(error.message);
    }
}

export const update = async (req, res, next) => {
    try {
        const { id } = req.params;
        const noteUp = await service.update(id, req.body);
        if(!noteUp) res.status(404).json({ msg: 'error update note' });
        else res.status(200).json(noteUp);
    } catch (error) {
        next(error.message);
    }
}

export const remove = async (req, res, next) => {
    try {
        const { id } = req.params;
        const noteDel = await service.remove(id);
        if(!noteDel) res.status(404).json({ msg: 'error delete' });
        else res.status(200).json({ msg: `note id: ${id} deleted`});
    } catch (error) {
        next(error.message);
    }
}