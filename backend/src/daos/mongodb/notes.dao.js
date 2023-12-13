import { NoteModel } from "./models/note.model.js";

export default class NoteDaoMongoDB {
    async getAll(){
        try {
            const response = await NoteModel.find({});
            return response;
        } catch (error) {
            console.log(error);
        }
    }

    async getById(id){
        try {
            const response = await NoteModel.findById(id);
            return response;
        } catch (error) {
            console.log(error);
        }
    }

    async create(obj){
        try {
            const response = await NoteModel.create(obj);
            return response;
        } catch (error) {
            console.log(error);
        }
    }

    async update(id, obj){
        try {
            const response = await NoteModel.findByIdAndUpdate({ _id: id }, obj, { new: true });
            return response;
        } catch (error) {
            console.log(error);
        }
    }

    async delete(id){
        try {
            const response = await NoteModel.findByIdAndDelete(id);
            return response;
        } catch (error) {
            console.log(error);
        }
    }
}