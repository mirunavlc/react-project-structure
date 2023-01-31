import { useCallback } from "react";
import { useMutation, useQueryClient } from "react-query";
import { useRecoilState } from "recoil";
import AddPost from "./AddPost";
import { addPost, queryKeyPosts } from "./api";
import { lastActionAtom } from "./LastActionAtom";
import { Post } from "./model";

const AddPostConnector = () => {
    const [, setLastAction] = useRecoilState(lastActionAtom);
    const queryClient = useQueryClient();
    const addPostMutation = useMutation({
        mutationFn: addPost, onSuccess: (_data, variables) => {
            void queryClient.invalidateQueries({ queryKey: queryKeyPosts });
            setLastAction(`Added item author:${variables.author} title:${variables.title}`);
        }
    });
    const addNewPost = useCallback((newPost: Post) => addPostMutation.mutate(newPost), [addPostMutation]);

    return <>
        <AddPost addNewPost={addNewPost} />
        {addPostMutation.isLoading && <b>Adding the new post...</b>}
    </>;

};
export default AddPostConnector;