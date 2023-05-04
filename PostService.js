import Post from "./Post.js";

class PostService{
    async create(post){
       const createPost = await Post.create(post)
        return createPost
    }

    async getAll(){
            const post = await Post.find()
            return post
    }

    async getOne(id){
            if (!id){
                throw new Error('id не указан')
            }
            const post = await Post.findById(id)
            return post
    }

    async update(post){
            if (!post._id){
                throw new Error('id не указан')
            }
            const updatedPost = await Post.findByIdAndUpdate(post._id, post , {new: true})
            return updatedPost
    }

    async delete(id){
            if (!id){
                throw new Error('id не указан')
            }
            const post = await Post.findByIdAndDelete(id)
            return post
    }
}

export default new PostService()