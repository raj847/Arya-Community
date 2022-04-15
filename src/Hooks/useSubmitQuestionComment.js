import { InsertNewQuestionComment } from "../Graphql/mutation";
import { useMutation } from "@apollo/client";

export function useSubmitQuestionComment() {
  const [
    submitComment,
    { loading: loadingSubmitComment, error: errorSubmitComment },
  ] = useMutation(InsertNewQuestionComment);
  return { submitComment, loadingSubmitComment, errorSubmitComment };
}
