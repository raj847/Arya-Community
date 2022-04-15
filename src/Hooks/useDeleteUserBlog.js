import { useMutation } from "@apollo/client";
import { DeleteUserBlog } from "../Graphql/mutation";
import { GetBlogs, GetUserBlogs } from "../Graphql/query";

export function useDeleteUserBlog(uid) {
  const [deleteBlog, { loading: loadingDeleteBlog, error: errorDeleteBlog }] =
    useMutation(DeleteUserBlog, {
      refetchQueries: [
        { query: GetBlogs },
        { query: GetUserBlogs, variables: { user_id: uid } },
      ],
    });
  return { deleteBlog, loadingDeleteBlog, errorDeleteBlog };
}
