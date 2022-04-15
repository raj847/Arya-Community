import { useMutation } from "@apollo/client";
import { UpdateQuestion } from "../Graphql/mutation";
import { GetAllQuestion, GetUserQuestions } from "../Graphql/query";

export function useUpdateQuestion(uid) {
  const [
    updateQuestion,
    { loading: loadingUpdateQuestion, error: errorUpdateQuestion },
  ] = useMutation(UpdateQuestion, {
    refetchQueries: [
      { query: GetAllQuestion },
      { query: GetUserQuestions, variables: { user_id: uid } },
    ],
  });
  return { updateQuestion, loadingUpdateQuestion, errorUpdateQuestion };
}
