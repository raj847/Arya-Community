import { useMutation } from "@apollo/client";
import { CreateBlog } from "../Graphql/mutation";
import { GetBlogs, GetUserBlogs } from "../Graphql/query";

export function useCreateBlog(uid) {
  const [createblog, { error: errorCreateBlog, loading: loadingCreateBlog }] =
    useMutation(CreateBlog, {
      refetchQueries: [
        { query: GetBlogs },
        { query: GetUserBlogs, variables: { user_id: uid } },
      ],
    });
  return { createblog, errorCreateBlog, loadingCreateBlog };
}
