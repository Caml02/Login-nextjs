import { Schema, model, models} from "mongoose";

const userSchema = new Schema ({
    email: {
        type: String,
        unique: true,
        required: [true, "Email is requiered"],
        match: [
            /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/,
            "Please enter a valid email"
        ]
    },
    password: {
        type: String,
        required: [true, "Password is requiered"],
        select: false,
    },
    name: {
        type: String,
        required: [true, "Name is requiered"],
    }
})

const User = models.User || model('User', userSchema);
export default User;