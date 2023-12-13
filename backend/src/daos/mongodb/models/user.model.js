import mongoose from 'mongoose';


export const usersCollectionName = "users";

const userSchema = new mongoose.Schema({
    username: {
        type: String, 
        required: true,
        trim: true, //resetea el string
        unique: true //usuario unico
    }
}, {
    timestamps: true
});


export const UserModel = mongoose.model(
    usersCollectionName,
    userSchema
);