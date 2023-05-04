import mongoose from "mongoose";

const Post = new mongoose.Schema({
    author: {type: String, required: true},
    title: {type: String, required: true},
    description: {type: String, required: true},
    phone: {type: String, required: true},
    gmail: {type: String, required: true},
    online: {type: String, required: true},
    responses: {type: Array, required: true},
})

export default mongoose.model('Post', Post)