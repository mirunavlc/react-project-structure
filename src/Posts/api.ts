import { get, post, remove } from "../core/api";
import { Post } from "./model";

export const queryKeyPosts = "postsQuery";

export const getPosts = async () => {
    // await new Promise(r => setTimeout(r, 5000));
    return await get<Post[]>("posts");
};

export const deletePost = async (postId: string) => {
    //  await new Promise(r => setTimeout(r, 5000));
    return remove("posts", postId);
};

export const addPost = async (newPost: Post) => {
    await new Promise(r => setTimeout(r, 5000));
    return post("posts", newPost);
};