import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import { Post } from "./model";

interface IProps {
    addNewPost: (newPost: Post) => void,
}

const AddPost = ({ addNewPost }: IProps) => {
    const [author, setAuthor] = useState("");
    const [title, setTitle] = useState("");

    return (<div style={{ display: "flex", flexDirection: "row", alignItems: "center", paddingTop: "10px" }}>
        <TextField value={title} label="title" onChange={e => setTitle(e.target.value)} />
        <TextField value={author} label="author" onChange={e => setAuthor(e.target.value)} />
        <Button onClick={() => {
            addNewPost({ title, author, id: uuidv4() });
            setTitle("");
            setAuthor("");
        }
        } variant="contained">Add</Button>
    </div>);
};
export default AddPost;