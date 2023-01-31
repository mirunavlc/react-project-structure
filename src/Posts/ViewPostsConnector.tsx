import { useCallback } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { useRecoilState } from "recoil";
import { deletePost, getPosts, queryKeyPosts } from "./api";
import { lastActionAtom } from "./LastActionAtom";
import { Posts as ViewPosts } from "./ViewPosts";

export const PostsConnector = () => {
    const queryClient = useQueryClient();
    const [, setLastAction] = useRecoilState(lastActionAtom);

    const { data, isLoading, isError } = useQuery(queryKeyPosts, getPosts);
    const deletePostMutation = useMutation({
        mutationFn: deletePost, onSuccess: (_data, variables) => {
            void queryClient.invalidateQueries({ queryKey: queryKeyPosts });
            setLastAction(`Deleted item with id=${variables}`);
        }
    });

    const deletePostFromList = useCallback((postId: string) => deletePostMutation.mutate(postId), [deletePostMutation]);

    if (isLoading) return <b>Loading...</b>;
    if (isError) return <b>Something went wrong</b>;
    return <>
        {deletePostMutation.isLoading && <b>Deleting item...</b>}
        <ViewPosts deletePost={deletePostFromList} posts={data ?? []} />
    </>;
};