import { insertAnswerWithQuestionId } from "../Graphql/mutation";
import { useMutation } from "@apollo/client";

export function useSubmitAnswer(id) {
  const [
    submitAnswer,
    { loading: loadingSubmitAnswer, error: errorSubmitAnswer },
  ] = useMutation(insertAnswerWithQuestionId);
  return { submitAnswer, loadingSubmitAnswer, errorSubmitAnswer };
}
