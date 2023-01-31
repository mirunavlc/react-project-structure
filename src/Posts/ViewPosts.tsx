import { Button } from "@mui/material";
import { Post } from "./model";
interface IProps {
    posts: Post[],
    deletePost: (postId: string) => void,
}
export const Posts = ({ posts, deletePost }: IProps) => {
    return (
        <ul>
            {posts.map(post => (
                <div key={post.id.toString()} style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                    <li>{post.author} {post.title}</li>
                    <Button style={{ marginLeft: "10px" }} variant="outlined" onClick={() => deletePost(post.id)}>Delete</Button>
                </div>
            ))

            }
        </ul>);
};