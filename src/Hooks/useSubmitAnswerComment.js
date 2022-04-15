import { useMutation } from "@apollo/client";
import { InsertNewAnswerComment } from "../Graphql/mutation";

export function useSubmitAnswerComment() {
  const [
    submitComment,
    { error: errorSubmitComment, loading: loadingSubmitComment },
  ] = useMutation(InsertNewAnswerComment);
  return { submitComment, errorSubmitComment, loadingSubmitComment };
}
