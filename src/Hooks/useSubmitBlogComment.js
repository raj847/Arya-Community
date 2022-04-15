import { useMutation } from "@apollo/client";
import { SubmitBlogComment } from "../Graphql/mutation";

export function useSubmitBlogComment() {
  const [
    submitComment,
    { error: errorSubmitComment, loading: loadingSubmitComment },
  ] = useMutation(SubmitBlogComment);
  return { submitComment, errorSubmitComment, loadingSubmitComment };
}
