import { UserModel } from "./models/user.model.js";

export default class UserDaoMongoDB {
    async getAll(){
        try {
            const response = await UserModel.find({});
            return response;
        } catch (error) {
            console.log(error);
        }
    }

    async getById(id){
        try {
            const response = await UserModel.findById(id);
            return response;
        } catch (error) {
            console.log(error);
        }
    }

    async create(obj){
        try {
            const response = await UserModel.create(obj);
            return response;
        } catch (error) {
            console.log(error);
        }
    }

    async update(id, obj){
        try {
            const response = await UserModel.findByIdAndUpdate({ _id: id }, obj, { new: true });
            return response;
        } catch (error) {
            console.log(error);
        }
    }

    async delete(id){
        try {
            const response = await UserModel.findByIdAndDelete(id);
            return response;
        } catch (error) {
            console.log(error);
        }
    }
}