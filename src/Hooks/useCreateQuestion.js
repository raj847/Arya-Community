import { useMutation } from "@apollo/client";
import { InsertNewQuestion } from "../Graphql/mutation";
import { GetAllQuestion, GetUserQuestions } from "../Graphql/query";

export function useCreateQuestion(uid) {
  const [
    createQuestion,
    { loading: loadingCreateQuestion, error: errorCreateQuestion },
  ] = useMutation(InsertNewQuestion, {
    refetchQueries: [
      { query: GetAllQuestion },
      { query: GetUserQuestions, variables: { user_id: uid } },
    ],
  });
  return { createQuestion, loadingCreateQuestion, errorCreateQuestion };
}
