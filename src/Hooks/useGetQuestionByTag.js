import { useLazyQuery } from "@apollo/client";
import { GetQuestionsByTag } from "../Graphql/query";

export function useGetQuestionByTag(tag) {
  const [
    getQuestionsByTag,
    {
      data: questionsByTag,
      error: errorQuestionsByTag,
      loading: loadingQuestionsByTag,
    },
  ] = useLazyQuery(GetQuestionsByTag);
  return {
    getQuestionsByTag,
    questionsByTag,
    errorQuestionsByTag,
    loadingQuestionsByTag,
  };
}
