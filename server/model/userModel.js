import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    fullName: {
        type: String,
        reqired: [true, 'Please Enter the name'],
        trim: true
    },
    email: {
        type: String,
        required: [true, 'Please Enter the email'],
        trim: true,
        unique: true
    },

    password: {
        type: String,
        required: [true, 'Please enter the email'],
        trim: true,
        // unique: true,
        select: false
    },
    avatar: {
        public_id: {
            type: String,
            default: '' // Set default empty string for consistency
        },
        secure_url: {
            type: String,
            default: '' // Set default empty string for consistency
        }
    },
    role: {
        type: String,
        enum: ['user', 'job_provider',  'admin'],
        default: 'user'
    },
    forgotPasswordToken: String,
    forgotPasswordExpiry: Date,
    subscription:{
        id: String,
        status: String
    }
},{timestamps: true})


const User = mongoose.model('User', userSchema)
export default User