import { useSubscription } from "@apollo/client";
import { SubscribeBlogComments } from "../Graphql/subscription";

export function useSubscribeBlogComments(id) {
  const {
    data: blogComments,
    error: errorBlogComments,
    loading: loadingBlogComments,
  } = useSubscription(SubscribeBlogComments, {
    variables: {
      id: id,
    },
  });
  return { blogComments, errorBlogComments, loadingBlogComments };
}
