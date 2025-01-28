import mongoose from "mongoose";

const registerUserSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true,
        minlength: [3, "First name should be at least 3 characters long"],
    },
    lastname: {
        type: String,
        minlength: [3, "Last name should be at least 3 characters long"],
    },
    email: {
        type: String,
        required: true,
        unique: true,
        minlength: [6, "Email should be at least 6 characters long"],
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
    },
});


const RegisterUser = mongoose.model("RegisterUser", registerUserSchema);

export default RegisterUser;