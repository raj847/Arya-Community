import { useQuery } from "@apollo/client";
import { GetUserQuestions } from "../Graphql/query";

export function useGetUserQuestion(uid) {
  const {
    data: myQuestions,
    loading: loadingMyQuestions,
    error: errorMyQuestions,
    refetch: refetchMyQuestion,
  } = useQuery(GetUserQuestions, {
    variables: {
      user_id: uid,
    },
  });

  return {
    myQuestions,
    loadingMyQuestions,
    errorMyQuestions,
    refetchMyQuestion,
  };
}
